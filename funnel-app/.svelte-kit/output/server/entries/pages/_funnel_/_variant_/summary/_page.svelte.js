import { f as store_get, h as head, a as attr_class, n as attr_style, u as unsubscribe_stores, b as stringify } from "../../../../../chunks/index.js";
import { f as formatCurrency, p as page } from "../../../../../chunks/pricing.js";
import { f as funnelStore } from "../../../../../chunks/funnel.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils2.js";
import { U as escape_html } from "../../../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let funnelId, answers, pricing, selectedPlan, planPricing, isSportFunnel;
    funnelId = store_get($$store_subs ??= {}, "$page", page).params.funnel;
    answers = store_get($$store_subs ??= {}, "$funnelStore", funnelStore).answers;
    pricing = store_get($$store_subs ??= {}, "$funnelStore", funnelStore).pricing;
    selectedPlan = answers.selectedPlan || "base";
    planPricing = selectedPlan === "base" ? pricing?.base : pricing?.alternative;
    isSportFunnel = funnelId === "deporte";
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Resumen - Klare</title>`);
      });
      $$renderer3.push(`<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;display=swap" rel="stylesheet"/>`);
    });
    $$renderer2.push(`<div${attr_class(`mobile-container ${stringify(isSportFunnel ? "sport-theme" : "")}`)}><div class="mobile-view"><header class="mobile-header"><a href="/"><svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg"><path d="M21.442 13.283c-1.787.367-1.79 1.503-1.79 1.924 0 .79.4 2.116 3.071 2.116 1.757 0 3.07-1.197 3.07-2.267v-1.478c.001 0-1.671-.949-4.35-.295zm6.658 6.122h-2.306v-1.342c-1.188 1.635-3.768 1.497-4.078 1.474-2.685-.322-4.368-1.948-4.368-4.326 0-2.704 2.01-4.312 5.375-4.312 1.261 0 2.268.14 3.071.423v-.812c.052-1.57-.565-2.015-.769-2.163-1.29-.931-4.104-.262-4.988.045l-.772-2.14a13.512 13.512 0 0 1 2.482-.565c1.965-.252 3.523.025 4.635.824.822.591 1.786 1.774 1.716 4.056l.002 8.838zm-17.558-.014L5.744 11.2l4.423-3.942-1.545-1.684-6.317 5.629V.154H0V19.41h2.305v-5.147l1.691-1.508 3.885 6.632 2.661.003zm33.23-11.596c1.6 0 2.696.6 3.348 1.835.155.297.278.61.368.934h-7.544c.455-1.428 1.495-2.77 3.797-2.77h.03zm4.052 6.888c-1.048 1.87-2.415 2.794-4.064 2.74h-.123c-1.183 0-2.08-.325-2.742-.99-1.081-1.098-1.251-2.835-1.277-3.439H50l-.014-1.154a7.396 7.396 0 0 0-.779-3.015c-.73-1.436-2.266-3.147-5.439-3.147-1.612 0-2.755.492-3.437.906-2.38 1.448-2.954 4.126-3.017 6.117-.005.131-.086 3.255 1.919 5.297 1.103 1.125 2.586 1.694 4.403 1.694h.254c2.425 0 4.533-1.383 5.953-3.915l-2.019-1.094zM37.692 5.782l-.234-.04c-2.269-.356-4.082-.01-5.242.998-.999.868-1.48 2.154-1.428 3.823v8.84h2.304V10.51c-.031-.968.187-1.663.65-2.065.592-.514 1.71-.685 3.163-.485l.787-2.177zM15.238.154h-2.305v19.25h2.305V.155zm-14.062 0h.046-.046z" fill="#FFF"></path></svg></a></header> <div class="inner-container"><div style="padding: 3rem 1.5rem 1.5rem; text-align: center;"><h1 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem; color: #262626;">¡Gracias, ${escape_html(answers.name || "Usuario")}!</h1> <p style="color: #6a6a6a; font-size: 0.875rem; margin-bottom: 2rem;">Tu cotización está lista</p> <div${attr_style(`background: white; border: 2px solid var(--border-default); border-top: 4px solid ${stringify(isSportFunnel ? "var(--deporte-primary)" : "var(--vida-primary)")}; border-radius: var(--radius-lg); padding: 1.5rem; text-align: left; margin-bottom: 1.5rem;`)}><div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-default);"><h3 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.75rem; letter-spacing: 0.5px;">Tus datos</h3> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;"><div><p style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Nombre</p> <p style="font-weight: 600; color: var(--text-primary);">${escape_html(answers.name || "-")}</p></div> <div><p style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Edad</p> <p style="font-weight: 600; color: var(--text-primary);">${escape_html(answers.age || "-")}</p></div></div> <div style="margin-top: 1rem;"><p style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Email</p> <p style="font-weight: 600; color: var(--text-primary);">${escape_html(answers.email || "-")}</p></div></div> `);
    if (answers.sport) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-default);"><h3 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.75rem; letter-spacing: 0.5px;">Deporte</h3> <p style="font-weight: 600; font-size: 1.125rem; color: var(--text-primary);">${escape_html(answers.sport)}</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (planPricing) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-default);"><h3 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.75rem; letter-spacing: 0.5px;">Plan seleccionado</h3> <p style="font-weight: 600; font-size: 1.125rem; margin-bottom: 1rem; color: var(--text-primary);">${escape_html(selectedPlan === "base" ? "Más ajustado a ti" : "Más conveniente")}</p> <div${attr_style(`background: ${stringify(isSportFunnel ? "var(--deporte-primary-light)" : "var(--vida-primary-light)")}; border-radius: var(--radius-md); padding: 1rem; text-align: center;`)}><p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">${escape_html(planPricing.displayDays)} asegurado por</p> <p${attr_style(`font-size: 2rem; font-weight: 700; color: ${stringify(isSportFunnel ? "var(--deporte-primary)" : "var(--vida-primary)")}; margin: 0.25rem 0;`)}>$${escape_html(formatCurrency(planPricing.totalPrice))}</p> <p style="font-size: 0.875rem; color: var(--text-muted);">$${escape_html(formatCurrency(planPricing.pricePerDay))} por día</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div style="background: #e8f5e9; border: 2px solid #4caf50; border-radius: 0.5rem; padding: 1.5rem; text-align: center;"><div style="margin-bottom: 1rem;"><svg style="width: 3rem; height: 3rem; color: #4caf50; margin: 0 auto;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div> <h3 style="font-size: 1.125rem; font-weight: 700; color: #2e7d32; margin-bottom: 0.5rem;">¡Cotización completada!</h3> <p style="color: #43a047; font-size: 0.875rem;">En un proceso real, aquí continuarías con el pago y activación de tu seguro.</p></div></div> <div style="display: flex; flex-direction: column; gap: 0.75rem;"><button class="btn-mobile" style="width: 100%; background: #e7e7e7; color: #6a6a6a;">← Volver</button> <button${attr_class(`btn-mobile ${stringify(isSportFunnel ? "btn-sport" : "")}`)} style="width: 100%;">Comenzar de nuevo</button></div></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
