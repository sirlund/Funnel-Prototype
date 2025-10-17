import { f as store_get, h as head, a as attr_class, u as unsubscribe_stores, b as stringify } from "../../../../../chunks/index.js";
import { f as formatCurrency, p as page } from "../../../../../chunks/pricing.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils2.js";
import { U as escape_html } from "../../../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { f as funnelStore } from "../../../../../chunks/funnel.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let funnelId, pricing, sport, isSportFunnel;
    funnelId = store_get($$store_subs ??= {}, "$page", page).params.funnel;
    store_get($$store_subs ??= {}, "$page", page).params.variant;
    pricing = store_get($$store_subs ??= {}, "$funnelStore", funnelStore).pricing;
    sport = store_get($$store_subs ??= {}, "$funnelStore", funnelStore).answers.sport;
    isSportFunnel = funnelId === "deporte";
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Recomendación - Klare</title>`);
      });
      $$renderer3.push(`<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;display=swap" rel="stylesheet"/>`);
    });
    $$renderer2.push(`<div${attr_class(`mobile-container ${stringify(isSportFunnel ? "sport-theme" : "")}`)}><div class="mobile-view"><header class="mobile-header"><a href="/"><svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg"><path d="M21.442 13.283c-1.787.367-1.79 1.503-1.79 1.924 0 .79.4 2.116 3.071 2.116 1.757 0 3.07-1.197 3.07-2.267v-1.478c.001 0-1.671-.949-4.35-.295zm6.658 6.122h-2.306v-1.342c-1.188 1.635-3.768 1.497-4.078 1.474-2.685-.322-4.368-1.948-4.368-4.326 0-2.704 2.01-4.312 5.375-4.312 1.261 0 2.268.14 3.071.423v-.812c.052-1.57-.565-2.015-.769-2.163-1.29-.931-4.104-.262-4.988.045l-.772-2.14a13.512 13.512 0 0 1 2.482-.565c1.965-.252 3.523.025 4.635.824.822.591 1.786 1.774 1.716 4.056l.002 8.838zm-17.558-.014L5.744 11.2l4.423-3.942-1.545-1.684-6.317 5.629V.154H0V19.41h2.305v-5.147l1.691-1.508 3.885 6.632 2.661.003zm33.23-11.596c1.6 0 2.696.6 3.348 1.835.155.297.278.61.368.934h-7.544c.455-1.428 1.495-2.77 3.797-2.77h.03zm4.052 6.888c-1.048 1.87-2.415 2.794-4.064 2.74h-.123c-1.183 0-2.08-.325-2.742-.99-1.081-1.098-1.251-2.835-1.277-3.439H50l-.014-1.154a7.396 7.396 0 0 0-.779-3.015c-.73-1.436-2.266-3.147-5.439-3.147-1.612 0-2.755.492-3.437.906-2.38 1.448-2.954 4.126-3.017 6.117-.005.131-.086 3.255 1.919 5.297 1.103 1.125 2.586 1.694 4.403 1.694h.254c2.425 0 4.533-1.383 5.953-3.915l-2.019-1.094zM37.692 5.782l-.234-.04c-2.269-.356-4.082-.01-5.242.998-.999.868-1.48 2.154-1.428 3.823v8.84h2.304V10.51c-.031-.968.187-1.663.65-2.065.592-.514 1.71-.685 3.163-.485l.787-2.177zM15.238.154h-2.305v19.25h2.305V.155zm-14.062 0h.046-.046z" fill="#FFF"></path></svg></a></header> <div class="inner-container"><div class="text-center" style="margin: 1.5rem 0 0;"><h3 class="text-lg font-normal" style="color: #262626;">Seguro para <span class="font-bold">${escape_html(sport || "tu deporte")}</span></h3></div> `);
    if (pricing) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div style="padding: 0 1.5rem 1.5rem;"><div class="product-card"><div class="card-tag">Más ajustado a ti</div> <div class="text-center"><div class="font-semibold" style="line-height: 1; margin-bottom: 0.5rem;">${escape_html(pricing.base.displayDays)} asegurado por</div> <div class="price-amount">${escape_html(formatCurrency(pricing.base.totalPrice))}</div> <div class="price-details">$${escape_html(formatCurrency(pricing.base.pricePerDay))} por día</div></div> <div style="line-height: 1.3333; margin: 1rem 0; text-align: center;"><div style="margin-bottom: 0.75rem;">Reembolso de gastos médicos para 8 lesiones.</div> <h6 class="font-semibold" style="margin-bottom: 0.25rem;">Además incluye:</h6> <div style="display: flex; justify-content: center; margin: 0.25rem 0;"><div style="width: 36px; height: 36px; border-radius: 36px; background-color: #a2a2a2; opacity: 0.5; margin: 0 0.25rem;"></div> <div style="width: 36px; height: 36px; border-radius: 36px; background-color: #a2a2a2; opacity: 0.5; margin: 0 0.25rem;"></div></div> <small style="color: #6b7280; font-size: 0.75rem; margin-top: 1rem; display: block;">Cobertura entregada por Consorcio</small></div> <div style="margin: 1rem 0 0;"><button${attr_class(`btn-mobile ${stringify(isSportFunnel ? "btn-sport" : "")}`)} style="width: 100%;">Configurar este seguro</button></div></div> `);
      if (pricing.showAlternative) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="product-card"><div class="card-tag">Más conveniente</div> <div class="text-center"><div class="font-semibold" style="line-height: 1; margin-bottom: 0.5rem;">${escape_html(pricing.alternative.displayDays)} asegurado por</div> <div class="price-amount">${escape_html(formatCurrency(pricing.alternative.totalPrice))}</div> <div class="price-details">$${escape_html(formatCurrency(pricing.alternative.pricePerDay))} por día</div></div> <div style="line-height: 1.3333; margin: 1rem 0; text-align: center;"><div style="margin-bottom: 0.75rem;">Reembolso de gastos médicos para todas las lesiones.</div> <h6 class="font-semibold" style="margin-bottom: 0.25rem;">Además incluye:</h6> <div style="display: flex; justify-content: center; margin: 0.25rem 0;"><div style="width: 36px; height: 36px; border-radius: 36px; background-color: #a2a2a2; opacity: 0.5; margin: 0 0.25rem;"></div> <div style="width: 36px; height: 36px; border-radius: 36px; background-color: #a2a2a2; opacity: 0.5; margin: 0 0.25rem;"></div></div> <small style="color: #6b7280; font-size: 0.75rem; margin-top: 1rem; display: block;">Cobertura entregada por Consorcio</small></div> <div style="margin: 1rem 0 0;"><button${attr_class(`btn-mobile ${stringify(isSportFunnel ? "btn-sport" : "")}`)} style="width: 100%;">Configurar este seguro</button></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div style="text-align: center; padding: 3rem 1.5rem;"><p style="color: #6b7280;">Calculando tu recomendación...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div style="padding: 1rem; text-align: center; width: 100%; padding-bottom: 2rem;"><button type="button" style="background-color: transparent; color: #a2a2a2; border: none; font-size: 1rem; cursor: pointer;">Volver</button></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
