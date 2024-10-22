<<<<<<< HEAD
// Versão do cache - Atualize sempre que fizer mudanças importantes
const VERSION = "v1.3";

// Nome do cache, incluindo a versão para facilitar a invalidação
const CACHE_NAME = `period-tracker-${VERSION}`;

// Recursos estáticos que o aplicativo necessita para funcionar offline
const APP_STATIC_RESOURCES = [
  "/index.html",
  "/main.jsx",
=======
// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `period-tracker-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "/index.html",
  "/app.js",
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
  "/style.css",
  "/icons/wheel.svg",
];

<<<<<<< HEAD
// Durante a instalação do SW, cacheie os recursos estáticos
self.addEventListener("install", (event) => {
  // Forçar o SW a assumir imediatamente o controle, sem esperar pelo fechamento das abas
  self.skipWaiting();
  
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log(`Caching app resources: ${CACHE_NAME}`);
      await cache.addAll(APP_STATIC_RESOURCES);
=======
// On install, cache the static resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
    })(),
  );
});

<<<<<<< HEAD
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
=======
// delete old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
      await clients.claim();
    })(),
  );
});

<<<<<<< HEAD
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
=======
// On fetch, intercept server requests
// and respond with cached responses instead of going to network
self.addEventListener("fetch", (event) => {
    // For SPA (Single Page Application), return the cached index.html for navigation requests
    if (event.request.mode === "navigate") {
      event.respondWith(
        caches.match("/index.html")
      );
      return;
  }

  // For all other requests, go to the cache first, and then the network.
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
<<<<<<< HEAD
        return cachedResponse; // Retorna a resposta do cache se disponível
      }
      
      // Caso não esteja no cache, tenta buscar da rede
      try {
        const networkResponse = await fetch(event.request);
        // Se a resposta for válida, adiciona ao cache
=======
        // Return the cached response if it's available
        return cachedResponse;
      }
      // If not in cache, try fetching from network
      try {
        const networkResponse = await fetch(event.request);
        // Optionally, cache the new response
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
        if (networkResponse && networkResponse.status === 200) {
          await cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
<<<<<<< HEAD
        // Se a rede falhar, retorna uma resposta de fallback (offline ou erro)
        return new Response("Recurso não disponível offline.", { status: 404 });
      }
    })(),
  );
});

// Detecta se há um novo SW e avisa ao usuário para atualizar
self.addEventListener('controllerchange', () => {
  window.location.reload();
=======
        // If network request fails, return a fallback or error response
        return new Response("Resource not available offline.", { status: 404 });
      }
    })(),
  );
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
});