import { get_results } from "../src/main.ts";
Deno.bench("Total", () => {
  get_results(true);
});