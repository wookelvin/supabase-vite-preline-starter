// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { parseURL } from "https://esm.sh/html-recipe-parser";
import { corsHeaders } from "../_shared/cors.ts";

console.log("Hello from Functions!");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const requestUrl = new URL(req.url);
  const url = requestUrl.searchParams.get("url");

  if (!url) {
    throw new Error("URL not available");
  }

  const recipe = await parseURL(url);
  const data = {
    url,
    recipe,
  };

  const headers = Object.assign(
    { "Content-Type": "application/json" },
    corsHeaders,
  );

  return new Response(JSON.stringify(data), {
    headers,
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
