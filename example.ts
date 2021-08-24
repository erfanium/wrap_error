import { wrapError } from "./mod.ts";

async function isDenoOk(): Promise<boolean> {
  const [error, response] = await wrapError(fetch("https://deno.land"));
  return !error && response!.status === 200;
}

const status = await isDenoOk();
console.log(status);
