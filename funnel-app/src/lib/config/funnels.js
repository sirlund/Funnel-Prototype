// Funnel configurations for different insurance products

export const sportCategories = [
	{
		name: 'Sobre Ruedas',
		sports: ['Motociclismo', 'Ciclismo']
	},
	{
		name: 'Puro cardio',
		sports: ['Running', 'Trekking']
	},
	{
		name: 'De pelota',
		sports: ['Fútbol', 'Tenis']
	},
	{
		name: 'En gimnasio',
		sports: ['Zumba', 'Spinning', 'Pilates', 'Crossfit', 'Entrenamiento con pesos', 'Otros indoor similares']
	},
	{
		name: 'En la nieve',
		sports: ['Snowboard', 'Ski']
	},
	{
		name: 'Acuáticos',
		sports: ['Surf', 'Buceo', 'Bodyboard']
	},
	{
		name: 'Aéreos',
		sports: ['Paracaidísmo', 'Parapente']
	}
];

export const funnels = {
	deporte: {
		id: 'deporte',
		name: 'Seguro Deportivo',
		description: 'Protección para tus actividades deportivas',
		variants: ['slider', 'scroll'],
		questions: [
			{
				id: 'name',
				type: 'text',
				label: '¿Cómo te llamas?',
				placeholder: 'Ingresa tu nombre',
				required: true,
				step: 1,
				totalSteps: 7
			},
			{
				id: 'age',
				type: 'number',
				label: '¿Cuántos años tienes?',
				placeholder: 'Ingresa tu edad',
				min: 18,
				max: 65,
				required: true,
				step: 2,
				totalSteps: 7
			},
			{
				id: 'email',
				type: 'email',
				label: '¿Cuál es tu correo?',
				placeholder: 'Ingresa tu correo electrónico',
				required: true,
				step: 3,
				totalSteps: 7
			},
			{
				id: 'sport',
				type: 'radio',
				label: '¿Para qué deporte quieres este seguro?',
				categories: sportCategories,
				required: true,
				step: 4,
				totalSteps: 7,
				storeInSession: true // Store for price calculation
			},
			{
				id: 'frequency',
				type: 'radio',
				label: '¿Con qué frecuencia practicas este deporte?',
				options: [
					{ value: 'once', label: 'Una vez (solo un día)' },
					{ value: 'weekly', label: 'Varias veces por semana' }
				],
				required: true,
				step: 5,
				totalSteps: 7,
				nextRoute: (value) => (value === 'once' ? 'calendar' : 'weekdays')
			},
			{
				id: 'calendar',
				type: 'calendar',
				label: '¿Qué día quieres estar asegurado?',
				required: true,
				step: 6,
				totalSteps: 7,
				condition: (answers) => answers.frequency === 'once',
				nextRoute: () => 'recommendation'
			},
			{
				id: 'weekdays',
				type: 'checkbox',
				label: '¿Qué días de la semana?',
				options: [
					{ value: 'monday', label: 'Lunes' },
					{ value: 'tuesday', label: 'Martes' },
					{ value: 'wednesday', label: 'Miércoles' },
					{ value: 'thursday', label: 'Jueves' },
					{ value: 'friday', label: 'Viernes' },
					{ value: 'saturday', label: 'Sábado' },
					{ value: 'sunday', label: 'Domingo' }
				],
				required: true,
				step: 6,
				totalSteps: 7,
				condition: (answers) => answers.frequency === 'weekly',
				nextRoute: () => 'recommendation'
			}
		]
	},
	vida: {
		id: 'vida',
		name: 'Seguro de Vida',
		description: 'Protección para ti y tu familia',
		variants: ['slider', 'scroll'],
		questions: [
			{
				id: 'name',
				type: 'text',
				label: '¿Cómo te llamas?',
				placeholder: 'Ingresa tu nombre',
				required: true,
				step: 1,
				totalSteps: 6
			},
			{
				id: 'age',
				type: 'number',
				label: '¿Cuántos años tienes?',
				placeholder: 'Ingresa tu edad',
				min: 18,
				max: 70,
				required: true,
				step: 2,
				totalSteps: 6
			},
			{
				id: 'email',
				type: 'email',
				label: '¿Cuál es tu correo?',
				placeholder: 'Ingresa tu correo electrónico',
				required: true,
				step: 3,
				totalSteps: 6
			},
			{
				id: 'hasKids',
				type: 'radio',
				label: '¿Tienes hijos?',
				options: [
					{ value: 'yes', label: 'Sí' },
					{ value: 'no', label: 'No' }
				],
				required: true,
				step: 4,
				totalSteps: 6
			},
			{
				id: 'coverage',
				type: 'radio',
				label: '¿Qué nivel de cobertura necesitas?',
				options: [
					{ value: 'basic', label: 'Básico - Cobertura esencial' },
					{ value: 'standard', label: 'Estándar - Cobertura completa' },
					{ value: 'premium', label: 'Premium - Máxima protección' }
				],
				required: true,
				step: 5,
				totalSteps: 6
			}
		]
	}
};

/**
 * Get visible questions for a funnel based on current answers
 * @param {string} funnelId - The funnel identifier (deporte, vida)
 * @param {object} answers - Current user answers
 * @returns {array} Filtered list of questions
 */
export function getVisibleQuestions(funnelId, answers = {}) {
	const funnel = funnels[funnelId];
	if (!funnel) return [];

	return funnel.questions.filter((q) => {
		if (!q.condition) return true;
		return q.condition(answers);
	});
}

/**
 * Get next question based on current question and answer
 * @param {string} funnelId - The funnel identifier
 * @param {object} currentQuestion - Current question object
 * @param {any} answer - User's answer
 * @param {object} allAnswers - All accumulated answers
 * @returns {string|null} Next question ID or special route ('recommendation', etc.)
 */
export function getNextQuestion(funnelId, currentQuestion, answer, allAnswers) {
	if (currentQuestion.nextRoute) {
		return currentQuestion.nextRoute(answer, allAnswers);
	}

	const visibleQuestions = getVisibleQuestions(funnelId, { ...allAnswers, [currentQuestion.id]: answer });
	const currentIndex = visibleQuestions.findIndex((q) => q.id === currentQuestion.id);

	if (currentIndex < visibleQuestions.length - 1) {
		return visibleQuestions[currentIndex + 1].id;
	}

	return 'recommendation';
}
