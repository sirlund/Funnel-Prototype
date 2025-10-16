<script>
	import { funnels } from '$lib/config/funnels.js';
	import { funnelStore } from '$lib/stores/funnel.js';
	import { goto } from '$app/navigation';

	function selectFunnel(funnelId, variant) {
		funnelStore.setFunnel(funnelId, variant);
		goto(`/${funnelId}/${variant}/question/0`);
	}
</script>

<svelte:head>
	<title>Klare Prototypes - Selecciona tu seguro</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
	<div class="max-w-4xl w-full">
		<header class="text-center mb-12">
			<div class="mb-6">
				<h1 class="text-5xl font-bold text-primary mb-2">Klare</h1>
			</div>
			<h2 class="text-3xl font-bold text-gray-900 mb-3">Prototipos de Seguros</h2>
			<p class="text-gray-600">Selecciona el tipo de seguro que quieres probar</p>
		</header>

		<div class="grid md:grid-cols-2 gap-6">
			{#each Object.values(funnels) as funnel}
				<div class="card hover:shadow-xl transition-shadow">
					<h2 class="text-2xl font-bold mb-2">{funnel.name}</h2>
					<p class="text-gray-600 mb-6">{funnel.description}</p>

					<div class="space-y-3">
						<h3 class="text-sm font-semibold text-gray-500 uppercase">Selecciona variante:</h3>
						{#each funnel.variants as variant}
							<button
								class="btn btn-primary w-full capitalize"
								on:click={() => selectFunnel(funnel.id, variant)}
							>
								Versión {variant}
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<footer class="text-center mt-12 text-sm text-gray-500">
			<p>Prototipos para pruebas de usuario - Klare v1</p>
		</footer>
	</div>
</div>
