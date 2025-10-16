import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize state from sessionStorage if available
function createFunnelStore() {
	const initialState = {
		currentFunnel: null,
		currentVariant: null,
		currentStep: 0,
		answers: {},
		pricing: null
	};

	// Load from sessionStorage if in browser
	if (browser) {
		try {
			const saved = sessionStorage.getItem('funnelState');
			if (saved) {
				const parsed = JSON.parse(saved);
				Object.assign(initialState, parsed);
			}
		} catch (e) {
			console.warn('Failed to load funnel state from sessionStorage', e);
		}
	}

	const { subscribe, set, update } = writable(initialState);

	// Auto-save to sessionStorage on changes
	if (browser) {
		subscribe((state) => {
			try {
				sessionStorage.setItem('funnelState', JSON.stringify(state));
			} catch (e) {
				console.warn('Failed to save funnel state to sessionStorage', e);
			}
		});
	}

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
			if (browser) {
				sessionStorage.removeItem('funnelState');
			}
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

export const funnelStore = createFunnelStore();

// Derived store for easy access to common values
export const currentAnswers = derived(funnelStore, ($store) => $store.answers);

export const currentFunnel = derived(funnelStore, ($store) => $store.currentFunnel);

export const currentVariant = derived(funnelStore, ($store) => $store.currentVariant);

export const currentPricing = derived(funnelStore, ($store) => $store.pricing);
