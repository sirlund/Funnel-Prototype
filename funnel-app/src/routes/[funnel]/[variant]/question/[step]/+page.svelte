<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Question from '$lib/components/Question.svelte';
	import { funnels, getVisibleQuestions, getNextQuestion } from '$lib/config/funnels.js';
	import { funnelStore } from '$lib/stores/funnel.js';
	import { calculatePrice, calculateWeeklyDays } from '$lib/config/pricing.js';

	$: funnelId = $page.params.funnel;
	$: variant = $page.params.variant;
	$: stepIndex = parseInt($page.params.step);

	$: funnel = funnels[funnelId];
	$: visibleQuestions = funnel ? getVisibleQuestions(funnelId, $funnelStore.answers) : [];
	$: currentQuestion = visibleQuestions[stepIndex];

	// Get current answer for this question
	$: currentAnswer = currentQuestion ? $funnelStore.answers[currentQuestion.id] || '' : '';

	function handleAnswer(answer) {
		if (!currentQuestion) return;

		// Save answer to store
		funnelStore.saveAnswer(currentQuestion.id, answer);

		// Special handling for sport selection (store in sessionStorage for pricing)
		if (currentQuestion.id === 'sport' && currentQuestion.storeInSession) {
			if (typeof sessionStorage !== 'undefined') {
				sessionStorage.setItem('sport', answer);
			}
		}

		// Determine next route
		const allAnswers = { ...$funnelStore.answers, [currentQuestion.id]: answer };
		const nextRoute = getNextQuestion(funnelId, currentQuestion, answer, allAnswers);

		if (nextRoute === 'recommendation') {
			// Calculate pricing before going to recommendation
			calculateAndNavigate(allAnswers);
		} else if (nextRoute === 'calendar' || nextRoute === 'weekdays') {
			// Find the next question by ID
			const nextQuestionIndex = visibleQuestions.findIndex((q) => q.id === nextRoute);
			if (nextQuestionIndex >= 0) {
				goto(`/${funnelId}/${variant}/question/${nextQuestionIndex}`);
			}
		} else {
			// Move to next step
			if (stepIndex < visibleQuestions.length - 1) {
				goto(`/${funnelId}/${variant}/question/${stepIndex + 1}`);
			} else {
				calculateAndNavigate(allAnswers);
			}
		}
	}

	function calculateAndNavigate(answers) {
		// Calculate pricing for deporte funnel
		if (funnelId === 'deporte' && answers.sport) {
			let totalDays = 1;

			if (answers.frequency === 'weekly' && answers.weekdays) {
				totalDays = calculateWeeklyDays(answers.weekdays);
			} else if (answers.calendar) {
				totalDays = 1; // Could calculate from date range
			}

			const pricing = calculatePrice(answers.sport, totalDays);
			funnelStore.setPricing(pricing);
		}

		// Navigate to recommendation
		goto(`/${funnelId}/${variant}/recommendation`);
	}

	function handleBack() {
		if (stepIndex > 0) {
			goto(`/${funnelId}/${variant}/question/${stepIndex - 1}`);
		} else {
			goto('/');
		}
	}

	// Redirect if invalid funnel or step
	$: if (!funnel || !currentQuestion) {
		if (typeof window !== 'undefined') {
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>{currentQuestion ? currentQuestion.label : 'Pregunta'} - Klare</title>
</svelte:head>

{#if currentQuestion}
	<Question
		question={currentQuestion}
		value={currentAnswer}
		onAnswer={handleAnswer}
		canGoBack={stepIndex > 0}
		onBack={handleBack}
	/>
{/if}
