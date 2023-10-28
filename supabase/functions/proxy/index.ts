// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { corsHeaders } from "../_shared/cors.ts";

console.log("Proxy Started!");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  console.log("proxy request", req.url);
  const { search } = new URL(req.url);
  const target_url = new URLSearchParams(search).get("target_url") || "";

  if (!target_url) {
    throw new Error("target new url is missn");
  }

  console.log("req", target_url);

  const url = new URL(target_url);
  console.log("url", url);
  const data = await fetch(target_url, {
    method: req.method,
    //  headers: req.headers,
    body: req.body,
  });

  //console.log("got the data back");

  const textDecoder = new TextDecoder();
  const textEncoder = new TextEncoder();

  const body = await data.arrayBuffer();
  let responseBody = textDecoder.decode(body);
  responseBody = responseBody.replace(
    /(href|src)="(\/[^\/][^"]*)"/g,
    `$1="${url.origin}$2"`,
  );

  const headers = Object.assign(Object.fromEntries(data.headers), corsHeaders);
  delete headers["content-security-policy"];

  //console.log("headers", headers);
  return new Response(textEncoder.encode(responseBody), {
    headers: headers,
    status: data.status,
    statusText: data.statusText,
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
