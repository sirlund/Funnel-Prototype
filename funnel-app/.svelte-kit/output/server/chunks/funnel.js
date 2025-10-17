import { i as derived, w as writable } from "./exports.js";
function createFunnelStore() {
  const initialState = {
    currentFunnel: null,
    currentVariant: null,
    currentStep: 0,
    answers: {},
    pricing: null
  };
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    set,
    update,
    // Set current funnel and variant
    setFunnel: (funnelId, variant) => {
      update((state) => ({
        ...state,
        currentFunnel: funnelId,
        currentVariant: variant,
        currentStep: 0,
        answers: {}
      }));
    },
    // Save answer to a question
    saveAnswer: (questionId, value) => {
      update((state) => ({
        ...state,
        answers: {
          ...state.answers,
          [questionId]: value
        }
      }));
    },
    // Move to next step
    nextStep: () => {
      update((state) => ({
        ...state,
        currentStep: state.currentStep + 1
      }));
    },
    // Move to previous step
    prevStep: () => {
      update((state) => ({
        ...state,
        currentStep: Math.max(0, state.currentStep - 1)
      }));
    },
    // Set pricing information
    setPricing: (pricing) => {
      update((state) => ({
        ...state,
        pricing
      }));
    },
    // Reset the entire funnel
    reset: () => {
      set(initialState);
    },
    // Clear just the answers
    clearAnswers: () => {
      update((state) => ({
        ...state,
        answers: {},
        currentStep: 0,
        pricing: null
      }));
    }
  };
}
const funnelStore = createFunnelStore();
derived(funnelStore, ($store) => $store.answers);
derived(funnelStore, ($store) => $store.currentFunnel);
derived(funnelStore, ($store) => $store.currentVariant);
derived(funnelStore, ($store) => $store.pricing);
export {
  funnelStore as f
};
