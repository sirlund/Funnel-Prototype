
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/[funnel]" | "/[funnel]/[variant]" | "/[funnel]/[variant]/question" | "/[funnel]/[variant]/question/[step]" | "/[funnel]/[variant]/recommendation" | "/[funnel]/[variant]/summary";
		RouteParams(): {
			"/[funnel]": { funnel: string };
			"/[funnel]/[variant]": { funnel: string; variant: string };
			"/[funnel]/[variant]/question": { funnel: string; variant: string };
			"/[funnel]/[variant]/question/[step]": { funnel: string; variant: string; step: string };
			"/[funnel]/[variant]/recommendation": { funnel: string; variant: string };
			"/[funnel]/[variant]/summary": { funnel: string; variant: string }
		};
		LayoutParams(): {
			"/": { funnel?: string; variant?: string; step?: string };
			"/[funnel]": { funnel: string; variant?: string; step?: string };
			"/[funnel]/[variant]": { funnel: string; variant: string; step?: string };
			"/[funnel]/[variant]/question": { funnel: string; variant: string; step?: string };
			"/[funnel]/[variant]/question/[step]": { funnel: string; variant: string; step: string };
			"/[funnel]/[variant]/recommendation": { funnel: string; variant: string };
			"/[funnel]/[variant]/summary": { funnel: string; variant: string }
		};
		Pathname(): "/" | `/${string}` & {} | `/${string}/` & {} | `/${string}/${string}` & {} | `/${string}/${string}/` & {} | `/${string}/${string}/question` & {} | `/${string}/${string}/question/` & {} | `/${string}/${string}/question/${string}` & {} | `/${string}/${string}/question/${string}/` & {} | `/${string}/${string}/recommendation` & {} | `/${string}/${string}/recommendation/` & {} | `/${string}/${string}/summary` & {} | `/${string}/${string}/summary/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/img/inner-mapfre--full.png" | "/img/inner-mapfre.png" | "/img/inner-zurich--full.png" | "/img/inner-zurich-basico--full.png" | "/img/inner-zurich-basico.png" | "/img/inner-zurich.png" | "/img/inner_deporte_ajustado.png" | "/img/inner_deporte_conveniente.png" | string & {};
	}
}