import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  if (event.httpMethod === "OPTIONS") {
    return { headers: corsHeaders, statusCode: 200 };
  }

  console.log("event", event);
  if (!event.queryStringParameters?.target_url) {
    return {
      statusCode: 400,
      body: "target_url query is missing",
      headers: corsHeaders,
    };
  }

  const target_url = new URL(event.queryStringParameters.target_url as string);

  if (!target_url) {
    return {
      statusCode: 400,
      body: "target_url query is missing (2)",
      headers: corsHeaders,
    };
  }

  console.log("req", target_url);
  const url = new URL(target_url);
  console.log("url", url);

  const data = await fetch(target_url, {
    method: event.httpMethod,
    body: event.body,
  });

  const textDecoder = new TextDecoder();

  const body = await data.arrayBuffer();
  let responseBody = textDecoder.decode(body);
  responseBody = responseBody.replace(
    /(href|src)="(\/[^\/][^"]*)"/g,
    `$1="${url.origin}$2"`,
  );

  const headers = {
    ...Object.fromEntries(data.headers),
    ...corsHeaders,
  };

  delete headers["content-security-policy"];

  return {
    statusCode: 200,
    body: responseBody,
    headers: corsHeaders,
  };
};

export { handler };
