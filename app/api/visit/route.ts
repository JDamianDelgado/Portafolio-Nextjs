export async function POST() {
  try {
    await fetch("https://contador-python-47oo.onrender.com/visita", {
      method: "GET",
      cache: "no-store",
    });
  } catch (error) {
    console.error("No se pudo registrar la visita en el contador externo:", error);
  }

  return new Response(null, { status: 204 });
}
