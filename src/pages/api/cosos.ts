import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  console.log("Esto funciona");
  console.log(request);

  return new Response("hola");
};
