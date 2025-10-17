import { s as slot } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="min-h-screen"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
export {
  _layout as default
};
