export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["img/inner-mapfre--full.png","img/inner-mapfre.png","img/inner-zurich--full.png","img/inner-zurich-basico--full.png","img/inner-zurich-basico.png","img/inner-zurich.png","img/inner_deporte_ajustado.png","img/inner_deporte_conveniente.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Ch1neUvW.js",app:"_app/immutable/entry/app.B5EKa6Km.js",imports:["_app/immutable/entry/start.Ch1neUvW.js","_app/immutable/chunks/DpbDev6R.js","_app/immutable/chunks/CD9t8njY.js","_app/immutable/chunks/Dw_zBlVh.js","_app/immutable/entry/app.B5EKa6Km.js","_app/immutable/chunks/Dw_zBlVh.js","_app/immutable/chunks/CD9t8njY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/C8lVy0Lc.js","_app/immutable/chunks/C7CHGlWW.js","_app/immutable/chunks/CLBUJvgv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[funnel]/[variant]/question/[step]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/question\/([^/]+?)\/?$/,
				params: [{"name":"funnel","optional":false,"rest":false,"chained":false},{"name":"variant","optional":false,"rest":false,"chained":false},{"name":"step","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[funnel]/[variant]/recommendation",
				pattern: /^\/([^/]+?)\/([^/]+?)\/recommendation\/?$/,
				params: [{"name":"funnel","optional":false,"rest":false,"chained":false},{"name":"variant","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[funnel]/[variant]/summary",
				pattern: /^\/([^/]+?)\/([^/]+?)\/summary\/?$/,
				params: [{"name":"funnel","optional":false,"rest":false,"chained":false},{"name":"variant","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
