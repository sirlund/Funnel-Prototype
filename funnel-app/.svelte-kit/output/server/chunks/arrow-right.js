import { c as sanitize_props, k as rest_props, l as attributes, e as ensure_array_like, m as element, s as slot, j as bind_props, d as spread_props } from "./index.js";
import { f as fallback } from "./utils.js";
const sportCategories = [
  {
    name: "Sobre Ruedas",
    sports: ["Motociclismo", "Ciclismo"]
  },
  {
    name: "Puro cardio",
    sports: ["Running", "Trekking"]
  },
  {
    name: "De pelota",
    sports: ["Fútbol", "Tenis"]
  },
  {
    name: "En gimnasio",
    sports: ["Zumba", "Spinning", "Pilates", "Crossfit", "Entrenamiento con pesos", "Otros indoor similares"]
  },
  {
    name: "En la nieve",
    sports: ["Snowboard", "Ski"]
  },
  {
    name: "Acuáticos",
    sports: ["Surf", "Buceo", "Bodyboard"]
  },
  {
    name: "Aéreos",
    sports: ["Paracaidísmo", "Parapente"]
  }
];
const funnels = {
  deporte: {
    id: "deporte",
    name: "Seguro Deportivo",
    description: "Protección para tus actividades deportivas",
    variants: ["slider", "scroll"],
    questions: [
      {
        id: "name",
        type: "text",
        label: "¿Cómo te llamas?",
        placeholder: "Ingresa tu nombre",
        required: true,
        step: 1,
        totalSteps: 7
      },
      {
        id: "age",
        type: "number",
        label: "¿Cuántos años tienes?",
        placeholder: "Ingresa tu edad",
        min: 18,
        max: 65,
        required: true,
        step: 2,
        totalSteps: 7
      },
      {
        id: "email",
        type: "email",
        label: "¿Cuál es tu correo?",
        placeholder: "Ingresa tu correo electrónico",
        required: true,
        step: 3,
        totalSteps: 7
      },
      {
        id: "sport",
        type: "radio",
        label: "¿Para qué deporte quieres este seguro?",
        categories: sportCategories,
        required: true,
        step: 4,
        totalSteps: 7,
        storeInSession: true
        // Store for price calculation
      },
      {
        id: "frequency",
        type: "radio",
        label: "¿Con qué frecuencia practicas este deporte?",
        options: [
          { value: "once", label: "Una vez (solo un día)" },
          { value: "weekly", label: "Varias veces por semana" }
        ],
        required: true,
        step: 5,
        totalSteps: 7,
        nextRoute: (value) => value === "once" ? "calendar" : "weekdays"
      },
      {
        id: "calendar",
        type: "calendar",
        label: "¿Qué día quieres estar asegurado?",
        required: true,
        step: 6,
        totalSteps: 7,
        condition: (answers) => answers.frequency === "once",
        nextRoute: () => "recommendation"
      },
      {
        id: "weekdays",
        type: "checkbox",
        label: "¿Qué días de la semana?",
        options: [
          { value: "monday", label: "Lunes" },
          { value: "tuesday", label: "Martes" },
          { value: "wednesday", label: "Miércoles" },
          { value: "thursday", label: "Jueves" },
          { value: "friday", label: "Viernes" },
          { value: "saturday", label: "Sábado" },
          { value: "sunday", label: "Domingo" }
        ],
        required: true,
        step: 6,
        totalSteps: 7,
        condition: (answers) => answers.frequency === "weekly",
        nextRoute: () => "recommendation"
      }
    ]
  },
  vida: {
    id: "vida",
    name: "Seguro de Vida",
    description: "Protección para ti y tu familia",
    variants: ["slider", "scroll"],
    questions: [
      {
        id: "name",
        type: "text",
        label: "¿Cómo te llamas?",
        placeholder: "Ingresa tu nombre",
        required: true,
        step: 1,
        totalSteps: 6
      },
      {
        id: "age",
        type: "number",
        label: "¿Cuántos años tienes?",
        placeholder: "Ingresa tu edad",
        min: 18,
        max: 70,
        required: true,
        step: 2,
        totalSteps: 6
      },
      {
        id: "email",
        type: "email",
        label: "¿Cuál es tu correo?",
        placeholder: "Ingresa tu correo electrónico",
        required: true,
        step: 3,
        totalSteps: 6
      },
      {
        id: "hasKids",
        type: "radio",
        label: "¿Tienes hijos?",
        options: [
          { value: "yes", label: "Sí" },
          { value: "no", label: "No" }
        ],
        required: true,
        step: 4,
        totalSteps: 6
      },
      {
        id: "coverage",
        type: "radio",
        label: "¿Qué nivel de cobertura necesitas?",
        options: [
          { value: "basic", label: "Básico - Cobertura esencial" },
          { value: "standard", label: "Estándar - Cobertura completa" },
          { value: "premium", label: "Premium - Máxima protección" }
        ],
        required: true,
        step: 5,
        totalSteps: 6
      }
    ]
  }
};
function getVisibleQuestions(funnelId, answers = {}) {
  const funnel = funnels[funnelId];
  if (!funnel) return [];
  return funnel.questions.filter((q) => {
    if (!q.condition) return true;
    return q.condition(answers);
  });
}
function getNextQuestion(funnelId, currentQuestion, answer, allAnswers) {
  if (currentQuestion.nextRoute) {
    return currentQuestion.nextRoute(answer, allAnswers);
  }
  const visibleQuestions = getVisibleQuestions(funnelId, { ...allAnswers, [currentQuestion.id]: answer });
  const currentIndex = visibleQuestions.findIndex((q) => q.id === currentQuestion.id);
  if (currentIndex < visibleQuestions.length - 1) {
    return visibleQuestions[currentIndex + 1].id;
  }
  return "recommendation";
}
const defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["type", "name", "color", "size", "stroke", "iconNode"]);
  $$renderer.component(($$renderer2) => {
    let type = $$props["type"];
    let name = $$props["name"];
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let stroke = fallback($$props["stroke"], 2);
    let iconNode = $$props["iconNode"];
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes[type],
        ...$$restProps,
        width: size,
        height: size,
        class: `tabler-icon tabler-icon-${name} ${$$sanitized_props.class ?? ""}`,
        ...type === "filled" ? { fill: color } : { "stroke-width": stroke, stroke: color }
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, { type, name, color, size, stroke, iconNode });
  });
}
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12l14 0" }],
    ["path", { "d": "M13 18l6 -6" }],
    ["path", { "d": "M13 6l6 6" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "arrow-right" },
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
export {
  Arrow_right as A,
  Icon as I,
  getNextQuestion as a,
  funnels as f,
  getVisibleQuestions as g
};
