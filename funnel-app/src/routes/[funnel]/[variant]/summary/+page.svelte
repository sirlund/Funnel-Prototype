<script>
	import { funnelStore } from '$lib/stores/funnel.js';
	import { formatCurrency } from '$lib/config/pricing.js';
	import { goto } from '$app/navigation';

	$: answers = $funnelStore.answers;
	$: pricing = $funnelStore.pricing;
	$: selectedPlan = answers.selectedPlan || 'base';
	$: planPricing = selectedPlan === 'base' ? pricing?.base : pricing?.alternative;

	function startOver() {
		funnelStore.reset();
		goto('/');
	}
</script>

<svelte:head>
	<title>Resumen - Klare</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
	<div class="max-w-3xl mx-auto">
		<header class="text-center mb-8">
			<a href="/">
				<svg
					width="50"
					height="20"
					viewBox="0 0 50 20"
					class="mx-auto mb-4"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<defs>
						<path
							d="M21.442 13.283c-1.787.367-1.79 1.503-1.79 1.924 0 .79.4 2.116 3.071 2.116 1.757 0 3.07-1.197 3.07-2.267v-1.478c.001 0-1.671-.949-4.35-.295zm6.658 6.122h-2.306v-1.342c-1.188 1.635-3.768 1.497-4.078 1.474-2.685-.322-4.368-1.948-4.368-4.326 0-2.704 2.01-4.312 5.375-4.312 1.261 0 2.268.14 3.071.423v-.812c.052-1.57-.565-2.015-.769-2.163-1.29-.931-4.104-.262-4.988.045l-.772-2.14a13.512 13.512 0 0 1 2.482-.565c1.965-.252 3.523.025 4.635.824.822.591 1.786 1.774 1.716 4.056l.002 8.838zm-17.558-.014L5.744 11.2l4.423-3.942-1.545-1.684-6.317 5.629V.154H0V19.41h2.305v-5.147l1.691-1.508 3.885 6.632 2.661.003zm33.23-11.596c1.6 0 2.696.6 3.348 1.835.155.297.278.61.368.934h-7.544c.455-1.428 1.495-2.77 3.797-2.77h.03zm4.052 6.888c-1.048 1.87-2.415 2.794-4.064 2.74h-.123c-1.183 0-2.08-.325-2.742-.99-1.081-1.098-1.251-2.835-1.277-3.439H50l-.014-1.154a7.396 7.396 0 0 0-.779-3.015c-.73-1.436-2.266-3.147-5.439-3.147-1.612 0-2.755.492-3.437.906-2.38 1.448-2.954 4.126-3.017 6.117-.005.131-.086 3.255 1.919 5.297 1.103 1.125 2.586 1.694 4.403 1.694h.254c2.425 0 4.533-1.383 5.953-3.915l-2.019-1.094zM37.692 5.782l-.234-.04c-2.269-.356-4.082-.01-5.242.998-.999.868-1.48 2.154-1.428 3.823v8.84h2.304V10.51c-.031-.968.187-1.663.65-2.065.592-.514 1.71-.685 3.163-.485l.787-2.177zM15.238.154h-2.305v19.25h2.305V.155zm-14.062 0h.046-.046z"
							id="logo-path"
						></path>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<mask id="logo-mask" fill="#fff"><use xlink:href="#logo-path"></use></mask>
						<g mask="url(#logo-mask)" fill="#1E40AF"><path d="M0 0h50v20H0z"></path></g>
					</g>
				</svg>
			</a>
			<h1 class="text-3xl font-bold text-gray-900 mt-6">Resumen de tu seguro</h1>
		</header>

		<div class="card mb-6">
			<h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
				Gracias, {answers.name || 'Usuario'}!
			</h2>

			<div class="space-y-4">
				<div class="border-b pb-4">
					<h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Tus datos</h3>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<p class="text-sm text-gray-600">Nombre</p>
							<p class="font-semibold">{answers.name || '-'}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600">Edad</p>
							<p class="font-semibold">{answers.age || '-'}</p>
						</div>
						<div class="col-span-2">
							<p class="text-sm text-gray-600">Email</p>
							<p class="font-semibold">{answers.email || '-'}</p>
						</div>
					</div>
				</div>

				{#if answers.sport}
					<div class="border-b pb-4">
						<h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Deporte</h3>
						<p class="font-semibold text-lg">{answers.sport}</p>
					</div>
				{/if}

				{#if planPricing}
					<div class="border-b pb-4">
						<h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Plan seleccionado</h3>
						<p class="font-semibold text-lg">
							{selectedPlan === 'base' ? 'Más ajustado a ti' : 'Más conveniente'}
						</p>
						<div class="mt-3 bg-blue-50 rounded-lg p-4">
							<p class="text-gray-600">{planPricing.displayDays} asegurado por</p>
							<p class="text-3xl font-bold text-primary">
								${formatCurrency(planPricing.totalPrice)}
							</p>
							<p class="text-sm text-gray-500">
								${formatCurrency(planPricing.pricePerDay)} por día
							</p>
						</div>
					</div>
				{/if}

				<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
					<svg
						class="w-16 h-16 text-green-500 mx-auto mb-4"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<h3 class="text-xl font-bold text-green-900 mb-2">
						¡Cotización completada!
					</h3>
					<p class="text-green-700">
						En un proceso real, aquí continuarías con el pago y activación de tu seguro.
					</p>
				</div>
			</div>
		</div>

		<div class="flex gap-4 justify-center">
			<button on:click={() => window.history.back()} class="btn btn-secondary">
				← Volver
			</button>
			<button on:click={startOver} class="btn btn-primary">
				Comenzar de nuevo
			</button>
		</div>
	</div>
</div>
