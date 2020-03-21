addEventListener('install', (event) => {
  const name = 'shatice';
  console.log(`Hola ${ name }, from the sw`)
});

addEventListener('fetch', (event) => {
  console.log(event);

  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(fetch(event.request))
  }
});