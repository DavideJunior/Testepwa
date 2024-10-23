// Versão do cache - Atualize sempre que fizer mudanças importantes
const VERSION = "v1.3";

// Nome do cache, incluindo a versão para facilitar a invalidação
const CACHE_NAME = `period-tracker-${VERSION}`;

// Recursos estáticos que o aplicativo necessita para funcionar offline
const APP_STATIC_RESOURCES = [
  "/index.html",
  "/main.jsx",
  "/style.css",
  "/icons/wheel.svg",
];

// Durante a instalação do SW, cacheie os recursos estáticos
self.addEventListener("install", (event) => {
  // Forçar o SW a assumir imediatamente o controle, sem esperar pelo fechamento das abas
  self.skipWaiting();
  
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log(`Caching app resources: ${CACHE_NAME}`);
      await cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});

// Quando o SW é ativado, apague os caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      // Mapeia os caches existentes e apaga todos que não correspondem à versão atual
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        }),
      );
      // Força o SW a controlar todas as abas imediatamente
      await clients.claim();
    })(),
  );
});

// Interceptar requisições de rede e tentar servir recursos do cache
self.addEventListener("fetch", (event) => {
  // Para SPA (Single Page Application), retornar o index.html do cache para requisições de navegação
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html"),
    );
    return;
  }

  // Para outras requisições, tentar o cache primeiro e, caso falhe, buscar na rede
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse; // Retorna a resposta do cache se disponível
      }
      
      // Caso não esteja no cache, tenta buscar da rede
      try {
        const networkResponse = await fetch(event.request);
        // Se a resposta for válida, adiciona ao cache
        if (networkResponse && networkResponse.status === 200) {
          await cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        // Se a rede falhar, retorna uma resposta de fallback (offline ou erro)
        return new Response("Recurso não disponível offline.", { status: 404 });
      }
    })(),
  );
});

// Detecta se há um novo SW e avisa ao usuário para atualizar
self.addEventListener('controllerchange', () => {
  window.location.reload();
});