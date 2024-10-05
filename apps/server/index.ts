Bun.serve({
  port: 8000,
  fetch(request) {
    return new Response("Hello from HIPEC server!");
  },
})