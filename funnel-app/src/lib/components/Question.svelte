<script>
	export let question;
	export let value = '';
	export let onAnswer = () => {};
	export let canGoBack = true;
	export let onBack = () => {};

	let isValid = false;

	$: {
		// Validate input
		if (question.required) {
			if (question.type === 'checkbox') {
				isValid = Array.isArray(value) && value.length > 0;
			} else {
				isValid = value !== '' && value !== null && value !== undefined;
			}
		} else {
			isValid = true;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (isValid) {
			onAnswer(value);
		}
	}

	function handleCheckboxChange(optionValue, checked) {
		if (!Array.isArray(value)) value = [];
		if (checked) {
			value = [...value, optionValue];
		} else {
			value = value.filter((v) => v !== optionValue);
		}
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
	<div class="max-w-2xl w-full">
		<header class="text-center mb-8">
			<a href="/">
				<!-- Klare Logo SVG -->
				<svg
					width="50"
					height="20"
					viewBox="0 0 50 20"
					class="mx-auto"
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
						<g mask="url(#logo-mask)" fill="#1E40AF"
							><path d="M0 0h50v20H0z"></path></g
						>
					</g>
				</svg>
			</a>
		</header>

		<div class="card">
			<form on:submit={handleSubmit}>
				<label class="block text-2xl font-bold mb-6 text-center" for={question.id}>
					{question.label}
				</label>

				{#if question.type === 'text' || question.type === 'email' || question.type === 'number'}
					<input
						type={question.type}
						id={question.id}
						bind:value
						placeholder={question.placeholder}
						min={question.min}
						max={question.max}
						required={question.required}
						class="input-field text-center text-lg"
					/>
				{:else if question.type === 'radio'}
					<div class="space-y-3">
						{#if question.categories}
							<!-- Sport categories -->
							{#each question.categories as category}
								<h4 class="text-sm font-semibold text-gray-600 mt-4 mb-2">{category.name}</h4>
								{#each category.sports as sport}
									<label class="radio-option">
										<input
											type="radio"
											name={question.id}
											value={sport}
											bind:group={value}
											class="mr-3"
										/>
										<span>{sport}</span>
									</label>
								{/each}
							{/each}
						{:else if question.options}
							<!-- Regular options -->
							{#each question.options as option}
								<label class="radio-option">
									<input
										type="radio"
										name={question.id}
										value={option.value}
										bind:group={value}
										class="mr-3"
									/>
									<span>{option.label}</span>
								</label>
							{/each}
						{/if}
					</div>
				{:else if question.type === 'checkbox'}
					<div class="space-y-3">
						{#each question.options as option}
							<label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
								<input
									type="checkbox"
									value={option.value}
									checked={Array.isArray(value) && value.includes(option.value)}
									on:change={(e) => handleCheckboxChange(option.value, e.target.checked)}
									class="mr-3"
								/>
								<span>{option.label}</span>
							</label>
						{/each}
					</div>
				{:else if question.type === 'calendar'}
					<div class="text-center">
						<input
							type="date"
							id={question.id}
							bind:value
							required={question.required}
							class="input-field text-center text-lg"
						/>
						<p class="text-sm text-gray-500 mt-2">Selecciona la fecha en el calendario</p>
					</div>
				{/if}
			</form>
		</div>

		<footer class="mt-6 flex items-center justify-between">
			{#if canGoBack}
				<button type="button" on:click={onBack} class="btn btn-secondary">
					← Volver
				</button>
			{:else}
				<div></div>
			{/if}

			<div class="text-gray-600">
				Pregunta {question.step} de {question.totalSteps}
			</div>

			<button
				type="submit"
				disabled={!isValid}
				on:click={handleSubmit}
				class="btn btn-primary"
			>
				Siguiente →
			</button>
		</footer>
	</div>
</div>
