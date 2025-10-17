import { T as getContext } from "./context.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils2.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const sportRates = {
  Motociclismo: 4900,
  Ciclismo: 3700,
  Running: 2500,
  Trekking: 3900,
  Fútbol: 3700,
  Tenis: 2900,
  Zumba: 2500,
  Spinning: 2500,
  Pilates: 2500,
  Crossfit: 2500,
  "Entrenamiento con pesos": 2500,
  "Otros indoor similares": 2500,
  Snowboard: 4900,
  Ski: 4900,
  Buceo: 3700,
  Surf: 3700,
  Bodyboard: 3700,
  Paracaidísmo: 4700,
  Parapente: 4700
};
const discountTiers = [
  { minDays: 10, discount: 0.15 },
  { minDays: 7, discount: 0.35 },
  { minDays: 6, discount: 0.38 },
  { minDays: 5, discount: 0.43 },
  { minDays: 4, discount: 0.49 },
  { minDays: 3, discount: 0.58 },
  { minDays: 2, discount: 0.73 },
  { minDays: 1, discount: 1 }
];
function calculatePrice(sport, totalDays) {
  const baseRate = sportRates[sport] || 2500;
  const discountTier = discountTiers.find((tier) => totalDays >= tier.minDays);
  const discount = discountTier ? discountTier.discount : 1;
  const pricePerDay = Math.round(baseRate * discount);
  const totalPrice = pricePerDay * totalDays;
  const pricePerDayAlt = Math.round(baseRate * 0.13);
  const totalPriceAlt = pricePerDayAlt * 30;
  return {
    base: {
      pricePerDay,
      totalPrice,
      totalDays,
      displayDays: totalDays > 1 ? `${totalDays} días` : `${totalDays} día`
    },
    alternative: {
      pricePerDay: pricePerDayAlt,
      totalPrice: totalPriceAlt,
      totalDays: 30,
      displayDays: "30 días"
    },
    showAlternative: totalDays < 28
  };
}
function formatCurrency(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function calculateWeeklyDays(weekDays) {
  return weekDays.length * 4;
}
export {
  calculatePrice as a,
  calculateWeeklyDays as c,
  formatCurrency as f,
  page as p
};
