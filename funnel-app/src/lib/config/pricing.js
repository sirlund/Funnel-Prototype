// Sport pricing per day (base rates in Chilean Pesos)
export const sportRates = {
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
	'Entrenamiento con pesos': 2500,
	'Otros indoor similares': 2500,
	Snowboard: 4900,
	Ski: 4900,
	Buceo: 3700,
	Surf: 3700,
	Bodyboard: 3700,
	Paracaidísmo: 4700,
	Parapente: 4700
};

// Discount tiers based on number of days
export const discountTiers = [
	{ minDays: 10, discount: 0.15 },
	{ minDays: 7, discount: 0.35 },
	{ minDays: 6, discount: 0.38 },
	{ minDays: 5, discount: 0.43 },
	{ minDays: 4, discount: 0.49 },
	{ minDays: 3, discount: 0.58 },
	{ minDays: 2, discount: 0.73 },
	{ minDays: 1, discount: 1 }
];

/**
 * Calculate insurance price based on sport and days
 * @param {string} sport - Selected sport
 * @param {number} totalDays - Total days of coverage
 * @returns {object} Pricing details with base and alternative options
 */
export function calculatePrice(sport, totalDays) {
	const baseRate = sportRates[sport] || 2500;

	// Find applicable discount
	const discountTier = discountTiers.find((tier) => totalDays >= tier.minDays);
	const discount = discountTier ? discountTier.discount : 1;

	// Base plan (discounted per selected days)
	const pricePerDay = Math.round(baseRate * discount);
	const totalPrice = pricePerDay * totalDays;

	// Alternative plan (monthly at 13% of base rate)
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
			displayDays: '30 días'
		},
		showAlternative: totalDays < 28
	};
}

/**
 * Format number with thousands separator
 * @param {number} num - Number to format
 * @returns {string} Formatted number (e.g., "1.234.567")
 */
export function formatCurrency(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Calculate weekly total days
 * @param {array} weekDays - Array of selected weekdays
 * @returns {number} Total days (weekdays * 4 weeks)
 */
export function calculateWeeklyDays(weekDays) {
	return weekDays.length * 4;
}
