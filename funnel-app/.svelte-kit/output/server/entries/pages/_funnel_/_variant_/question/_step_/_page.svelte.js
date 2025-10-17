import { c as sanitize_props, d as spread_props, s as slot, f as store_get, h as head, a as attr_class, g as attr, e as ensure_array_like, b as stringify, u as unsubscribe_stores, j as bind_props } from "../../../../../../chunks/index.js";
import { p as page, c as calculateWeeklyDays, a as calculatePrice } from "../../../../../../chunks/pricing.js";
import { g as goto } from "../../../../../../chunks/client.js";
import { I as Icon, A as Arrow_right, g as getVisibleQuestions, f as funnels, a as getNextQuestion } from "../../../../../../chunks/arrow-right.js";
import { f as fallback } from "../../../../../../chunks/utils.js";
import { U as escape_html } from "../../../../../../chunks/context.js";
import { f as funnelStore } from "../../../../../../chunks/funnel.js";
function Activity($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M3 12h4l3 8l4 -16l3 8h4" }]];
  Icon($$renderer, spread_props([
    { type: "outline", name: "activity" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12l14 0" }],
    ["path", { "d": "M5 12l6 6" }],
    ["path", { "d": "M5 12l6 -6" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "arrow-left" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ball_baseball($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z"
      }
    ],
    ["path", { "d": "M12.495 3.02a9 9 0 0 1 -9.475 9.475" }],
    ["path", { "d": "M20.98 11.505a9 9 0 0 0 -9.475 9.475" }],
    ["path", { "d": "M9 9l2 2" }],
    ["path", { "d": "M13 13l2 2" }],
    ["path", { "d": "M11 7l2 1" }],
    ["path", { "d": "M7 11l1 2" }],
    ["path", { "d": "M16 11l1 2" }],
    ["path", { "d": "M11 16l2 1" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "ball-baseball" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ball_basketball($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }
    ],
    ["path", { "d": "M5.65 5.65l12.7 12.7" }],
    ["path", { "d": "M5.65 18.35l12.7 -12.7" }],
    ["path", { "d": "M12 3a9 9 0 0 0 9 9" }],
    ["path", { "d": "M3 12a9 9 0 0 1 9 9" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "ball-basketball" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ball_football($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }
    ],
    [
      "path",
      { "d": "M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" }
    ],
    [
      "path",
      {
        "d": "M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "ball-football" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ball_tennis($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }
    ],
    ["path", { "d": "M6 5.3a9 9 0 0 1 0 13.4" }],
    ["path", { "d": "M18 5.3a9 9 0 0 0 0 13.4" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "ball-tennis" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Barbell($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M2 12h1" }],
    ["path", { "d": "M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" }],
    [
      "path",
      {
        "d": "M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"
      }
    ],
    ["path", { "d": "M9 12h6" }],
    [
      "path",
      {
        "d": "M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"
      }
    ],
    ["path", { "d": "M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" }],
    ["path", { "d": "M22 12h-1" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "barbell" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Bike($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }],
    ["path", { "d": "M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }],
    ["path", { "d": "M12 19l0 -4l-3 -3l5 -4l2 3l3 0" }],
    ["path", { "d": "M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "bike" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Box_multiple($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
      }
    ],
    [
      "path",
      {
        "d": "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "box-multiple" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Hand_stop($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" }],
    ["path", { "d": "M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" }],
    ["path", { "d": "M14 5.5a1.5 1.5 0 0 1 3 0v6.5" }],
    [
      "path",
      {
        "d": "M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "hand-stop" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Motorbike($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }],
    ["path", { "d": "M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }],
    ["path", { "d": "M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" }],
    ["path", { "d": "M13 6h2l1.5 3l2 4" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "motorbike" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Mountain($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"
      }
    ],
    ["path", { "d": "M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "mountain" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Parachute($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M22 12a10 10 0 1 0 -20 0" }],
    [
      "path",
      {
        "d": "M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3"
      }
    ],
    ["path", { "d": "M2 12l10 10l-3.5 -10" }],
    ["path", { "d": "M15.5 12l-3.5 10l10 -10" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "parachute" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Play_football($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { "d": "M3 17l5 1l.75 -1.5" }],
    ["path", { "d": "M14 21v-4l-4 -3l1 -6" }],
    ["path", { "d": "M6 12v-3l5 -1l3 3l3 1" }],
    [
      "path",
      {
        "d": "M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z",
        "fill": "currentColor"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "play-football" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Run($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }],
    ["path", { "d": "M4 17l5 1l.75 -1.5" }],
    ["path", { "d": "M15 21l0 -4l-4 -3l1 -6" }],
    ["path", { "d": "M7 12l0 -3l5 -1l3 3l3 1" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "run" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Scuba_diving($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { "d": "M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" }],
    ["path", { "d": "M11 8l4.5 1.5" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "scuba-diving" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Swimming($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }],
    ["path", { "d": "M6 11l4 -2l3.5 3l-1.5 2" }],
    [
      "path",
      {
        "d": "M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "swimming" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Yoga($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }],
    ["path", { "d": "M4 20h4l1.5 -3" }],
    ["path", { "d": "M17 20l-1 -5h-5l1 -7" }],
    ["path", { "d": "M4 10l4 -1l4 -1l4 1.5l4 1.5" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "yoga" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const sportIconComponents = {
  // Deportes extremos
  "Motociclismo": Motorbike,
  "Paracaidismo": Parachute,
  "Alpinismo": Mountain,
  "Buceo": Scuba_diving,
  // Deportes de contacto
  "Boxeo": Box_multiple,
  "Rugby": Ball_football,
  "Hockey": Play_football,
  "Artes Marciales": Hand_stop,
  // Deportes de raqueta
  "Tenis": Ball_tennis,
  "Squash": Ball_baseball,
  // Deportes de equipo
  "Fútbol": Ball_football,
  "Básquetbol": Ball_basketball,
  // Deportes individuales
  "Running": Run,
  "Ciclismo": Bike,
  "Natación": Swimming,
  "Crossfit": Barbell,
  "Triatlón": Swimming,
  "Gimnasia": Yoga,
  // Default icon for unlisted sports
  "default": Activity
};
function getSportIconComponent(sportName) {
  return sportIconComponents[sportName] || sportIconComponents.default;
}
function Question($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isSportFunnel;
    let question = $$props["question"];
    let value = fallback($$props["value"], "");
    let onAnswer = fallback($$props["onAnswer"], () => {
    });
    let canGoBack = fallback($$props["canGoBack"], true);
    let onBack = fallback($$props["onBack"], () => {
    });
    let isValid = false;
    isSportFunnel = store_get($$store_subs ??= {}, "$page", page).params.funnel === "deporte";
    {
      if (question.required) {
        if (question.type === "checkbox") {
          isValid = Array.isArray(value) && value.length > 0;
        } else {
          isValid = value !== "" && value !== null && value !== void 0;
        }
      } else {
        isValid = true;
      }
    }
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(question.label)} - Klare</title>`);
      });
      $$renderer3.push(`<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;display=swap" rel="stylesheet"/>`);
    });
    $$renderer2.push(`<div${attr_class(`mobile-container ${stringify(isSportFunnel ? "sport-theme" : "")}`)}><div class="mobile-view"><header class="mobile-header"><a href="/"><svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg"><path d="M21.442 13.283c-1.787.367-1.79 1.503-1.79 1.924 0 .79.4 2.116 3.071 2.116 1.757 0 3.07-1.197 3.07-2.267v-1.478c.001 0-1.671-.949-4.35-.295zm6.658 6.122h-2.306v-1.342c-1.188 1.635-3.768 1.497-4.078 1.474-2.685-.322-4.368-1.948-4.368-4.326 0-2.704 2.01-4.312 5.375-4.312 1.261 0 2.268.14 3.071.423v-.812c.052-1.57-.565-2.015-.769-2.163-1.29-.931-4.104-.262-4.988.045l-.772-2.14a13.512 13.512 0 0 1 2.482-.565c1.965-.252 3.523.025 4.635.824.822.591 1.786 1.774 1.716 4.056l.002 8.838zm-17.558-.014L5.744 11.2l4.423-3.942-1.545-1.684-6.317 5.629V.154H0V19.41h2.305v-5.147l1.691-1.508 3.885 6.632 2.661.003zm33.23-11.596c1.6 0 2.696.6 3.348 1.835.155.297.278.61.368.934h-7.544c.455-1.428 1.495-2.77 3.797-2.77h.03zm4.052 6.888c-1.048 1.87-2.415 2.794-4.064 2.74h-.123c-1.183 0-2.08-.325-2.742-.99-1.081-1.098-1.251-2.835-1.277-3.439H50l-.014-1.154a7.396 7.396 0 0 0-.779-3.015c-.73-1.436-2.266-3.147-5.439-3.147-1.612 0-2.755.492-3.437.906-2.38 1.448-2.954 4.126-3.017 6.117-.005.131-.086 3.255 1.919 5.297 1.103 1.125 2.586 1.694 4.403 1.694h.254c2.425 0 4.533-1.383 5.953-3.915l-2.019-1.094zM37.692 5.782l-.234-.04c-2.269-.356-4.082-.01-5.242.998-.999.868-1.48 2.154-1.428 3.823v8.84h2.304V10.51c-.031-.968.187-1.663.65-2.065.592-.514 1.71-.685 3.163-.485l.787-2.177zM15.238.154h-2.305v19.25h2.305V.155zm-14.062 0h.046-.046z" fill="#FFF"></path></svg></a></header> <div class="inner-container"><div class="question-wrapper"><form class="question-form"><span class="question-number">${escape_html(question.step)}→</span> <label class="question-label"${attr("for", question.id)}>${escape_html(question.label)}</label> `);
    if (question.type === "text" || question.type === "email" || question.type === "number") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attr("type", question.type)}${attr("id", question.id)}${attr("value", value)}${attr("placeholder", question.placeholder)}${attr("min", question.min)}${attr("max", question.max)}${attr("required", question.required, true)} class="question-input"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (question.type === "radio") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<ul class="radio-list">`);
        if (question.categories) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!--[-->`);
          const each_array = ensure_array_like(question.categories);
          for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
            let category = each_array[$$index_1];
            $$renderer2.push(`<h4>${escape_html(category.name)}</h4> <!--[-->`);
            const each_array_1 = ensure_array_like(category.sports);
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let sport = each_array_1[$$index];
              const IconComponent = getSportIconComponent(sport);
              $$renderer2.push(`<li><input type="radio"${attr("name", question.id)}${attr("id", `${stringify(question.id)}-${stringify(sport)}`)}${attr("value", sport)}${attr("checked", value === sport, true)}/> <label${attr("for", `${stringify(question.id)}-${stringify(sport)}`)}><span class="option-icon">`);
              IconComponent($$renderer2, { size: 24, stroke: 2 });
              $$renderer2.push(`<!----></span> <span>${escape_html(sport)}</span></label></li>`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (question.options) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<!--[-->`);
            const each_array_2 = ensure_array_like(question.options);
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let option = each_array_2[$$index_2];
              $$renderer2.push(`<li><input type="radio"${attr("name", question.id)}${attr("id", `${stringify(question.id)}-${stringify(option.value)}`)}${attr("value", option.value)}${attr("checked", value === option.value, true)}/> <label${attr("for", `${stringify(question.id)}-${stringify(option.value)}`)}>${escape_html(option.label)}</label></li>`);
            }
            $$renderer2.push(`<!--]-->`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (question.type === "checkbox") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<ul class="radio-list"><!--[-->`);
          const each_array_3 = ensure_array_like(question.options);
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let option = each_array_3[$$index_3];
            $$renderer2.push(`<li><input type="checkbox"${attr("id", `${stringify(question.id)}-${stringify(option.value)}`)}${attr("value", option.value)}${attr("checked", Array.isArray(value) && value.includes(option.value), true)}/> <label${attr("for", `${stringify(question.id)}-${stringify(option.value)}`)}>${escape_html(option.label)}</label></li>`);
          }
          $$renderer2.push(`<!--]--></ul>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (question.type === "calendar") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<input type="date"${attr("id", question.id)}${attr("value", value)}${attr("required", question.required, true)} class="question-input"/>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></form></div></div> <footer class="mobile-footer">`);
    if (canGoBack) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button type="button"${attr_class(`btn-mobile ${stringify(isSportFunnel ? "btn-sport" : "")}`)}>`);
      Arrow_left($$renderer2, { size: 24, stroke: 2.5 });
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div style="width: 40px;"></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="progress-text">Pregunta ${escape_html(question.step)} de ${escape_html(question.totalSteps)}</div> <button type="submit"${attr("disabled", !isValid, true)}${attr_class(`btn-mobile ${stringify(isSportFunnel ? "btn-sport" : "")}`)}>`);
    Arrow_right($$renderer2, { size: 24, stroke: 2.5 });
    $$renderer2.push(`<!----></button></footer></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { question, value, onAnswer, canGoBack, onBack });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let funnelId, stepIndex, funnel, visibleQuestions, currentQuestion, currentAnswer;
    function handleAnswer(answer) {
      if (!currentQuestion) return;
      funnelStore.saveAnswer(currentQuestion.id, answer);
      if (currentQuestion.id === "sport" && currentQuestion.storeInSession) {
        if (typeof sessionStorage !== "undefined") {
          sessionStorage.setItem("sport", answer);
        }
      }
      const allAnswers = {
        ...store_get($$store_subs ??= {}, "$funnelStore", funnelStore).answers,
        [currentQuestion.id]: answer
      };
      const nextRoute = getNextQuestion(funnelId, currentQuestion, answer, allAnswers);
      if (nextRoute === "recommendation") {
        calculateAndNavigate(allAnswers);
      } else if (nextRoute === "calendar" || nextRoute === "weekdays") {
        const nextQuestionIndex = visibleQuestions.findIndex((q) => q.id === nextRoute);
        if (nextQuestionIndex >= 0) {
          goto();
        }
      } else {
        if (stepIndex < visibleQuestions.length - 1) {
          goto();
        } else {
          calculateAndNavigate(allAnswers);
        }
      }
    }
    function calculateAndNavigate(answers) {
      if (funnelId === "deporte" && answers.sport) {
        let totalDays = 1;
        if (answers.frequency === "weekly" && answers.weekdays) {
          totalDays = calculateWeeklyDays(answers.weekdays);
        } else if (answers.calendar) {
          totalDays = 1;
        }
        const pricing = calculatePrice(answers.sport, totalDays);
        funnelStore.setPricing(pricing);
      }
      goto();
    }
    function handleBack() {
      if (stepIndex > 0) {
        goto();
      } else {
        goto();
      }
    }
    funnelId = store_get($$store_subs ??= {}, "$page", page).params.funnel;
    store_get($$store_subs ??= {}, "$page", page).params.variant;
    stepIndex = parseInt(store_get($$store_subs ??= {}, "$page", page).params.step);
    funnel = funnels[funnelId];
    visibleQuestions = funnel ? getVisibleQuestions(funnelId, store_get($$store_subs ??= {}, "$funnelStore", funnelStore).answers) : [];
    currentQuestion = visibleQuestions[stepIndex];
    currentAnswer = currentQuestion ? store_get($$store_subs ??= {}, "$funnelStore", funnelStore).answers[currentQuestion.id] || "" : "";
    if (!funnel || !currentQuestion) {
      if (typeof window !== "undefined") {
        goto();
      }
    }
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(currentQuestion ? currentQuestion.label : "Pregunta")} - Klare</title>`);
      });
    });
    if (currentQuestion) {
      $$renderer2.push("<!--[-->");
      Question($$renderer2, {
        question: currentQuestion,
        value: currentAnswer,
        onAnswer: handleAnswer,
        canGoBack: stepIndex > 0,
        onBack: handleBack
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
