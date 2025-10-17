import "@sveltejs/kit/internal";
import { w as writable } from "./exports.js";
import "./utils2.js";
import "@sveltejs/kit/internal/server";
import "clsx";
import "./state.svelte.js";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function goto(url, opts = {}) {
  {
    throw new Error("Cannot call goto(...) on the server");
  }
}
export {
  goto as g,
  stores as s
};
