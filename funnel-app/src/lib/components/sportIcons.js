// Sport icons mapping using Tabler Icons
import {
	IconMotorbike,
	IconParachute,
	IconMountain,
	IconScubaDiving,
	IconBoxMultiple,
	IconBallFootball,
	IconPlayFootball,
	IconHandStop,
	IconBallTennis,
	IconBallBaseball,
	IconBallBasketball,
	IconRun,
	IconBike,
	IconSwimming,
	IconBarbell,
	IconSwimming as IconTriathlon,
	IconYoga,
	IconActivity
} from '@tabler/icons-svelte';

export const sportIconComponents = {
	// Deportes extremos
	'Motociclismo': IconMotorbike,
	'Paracaidismo': IconParachute,
	'Alpinismo': IconMountain,
	'Buceo': IconScubaDiving,

	// Deportes de contacto
	'Boxeo': IconBoxMultiple,
	'Rugby': IconBallFootball,
	'Hockey': IconPlayFootball,
	'Artes Marciales': IconHandStop,

	// Deportes de raqueta
	'Tenis': IconBallTennis,
	'Squash': IconBallBaseball,

	// Deportes de equipo
	'Fútbol': IconBallFootball,
	'Básquetbol': IconBallBasketball,

	// Deportes individuales
	'Running': IconRun,
	'Ciclismo': IconBike,
	'Natación': IconSwimming,
	'Crossfit': IconBarbell,
	'Triatlón': IconTriathlon,
	'Gimnasia': IconYoga,

	// Default icon for unlisted sports
	'default': IconActivity
};

// Get sport icon component by name
export function getSportIconComponent(sportName) {
	return sportIconComponents[sportName] || sportIconComponents.default;
}
