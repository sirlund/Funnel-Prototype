# Klare Insurance Funnel Prototype - Modern Version

A modern, lightweight SvelteKit implementation of the Klare insurance product funnels. This app allows you to test different insurance products (Deporte, Vida) with multiple UI variants.

## What Changed from the Old Prototype?

### Before (Old Prototype)
- 30+ separate HTML files for questions
- jQuery + Bootstrap (heavy dependencies)
- Pricing logic scattered in inline `<script>` tags
- Hard to maintain and test
- Difficult to add new funnels or questions

### After (This Version)
- **1 Question component** handles all question types
- **Svelte 5** (~3KB runtime, no virtual DOM)
- **TailwindCSS** for modern, utility-first styling
- **Configuration-driven** - Add funnels by editing config files
- **State management** with Svelte stores + sessionStorage
- **Dynamic routing** with SvelteKit
- **Type-safe pricing engine**

## Features

✅ **Multi-funnel support** - Easily add new insurance products
✅ **A/B testing ready** - Multiple variants (slider/scroll) per funnel
✅ **Configuration-driven** - Questions defined in `src/lib/config/funnels.js`
✅ **Smart routing** - Conditional question flow based on answers
✅ **Real-time pricing** - Dynamic calculations with discount tiers
✅ **State persistence** - Answers saved in sessionStorage
✅ **Mobile-responsive** - TailwindCSS responsive design
✅ **Lightning fast** - Svelte compiles to optimized vanilla JS

## Project Structure

```
funnel-app/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── Question.svelte          # Reusable question component
│   │   ├── config/
│   │   │   ├── funnels.js              # Funnel definitions & questions
│   │   │   └── pricing.js              # Pricing logic & calculations
│   │   ├── stores/
│   │   │   └── funnel.js               # Global state management
│   │   └── utils/                      # Utility functions
│   ├── routes/
│   │   ├── +page.svelte                # Landing (funnel selector)
│   │   ├── [funnel]/[variant]/
│   │   │   ├── question/[step]/
│   │   │   │   └── +page.svelte        # Dynamic question pages
│   │   │   ├── recommendation/
│   │   │   │   └── +page.svelte        # Product recommendations
│   │   │   └── summary/
│   │   │       └── +page.svelte        # Final summary
│   │   └── +layout.svelte              # Global layout
│   ├── app.css                         # TailwindCSS styles
│   └── app.html                        # HTML template
├── static/
│   └── img/                            # Images from old prototype
├── tailwind.config.js                  # TailwindCSS configuration
├── svelte.config.js                    # SvelteKit configuration
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ (or 16+)
- npm or yarn

### Installation

```bash
cd funnel-app
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Adding a New Funnel

Edit `src/lib/config/funnels.js`:

```javascript
export const funnels = {
  // ... existing funnels

  myNewFunnel: {
    id: 'myNewFunnel',
    name: 'My New Insurance',
    description: 'Description here',
    variants: ['slider', 'scroll'],
    questions: [
      {
        id: 'name',
        type: 'text',
        label: '¿Cómo te llamas?',
        placeholder: 'Tu nombre',
        required: true,
        step: 1,
        totalSteps: 5
      },
      // Add more questions...
    ]
  }
};
```

Supported question types:
- `text` - Text input
- `email` - Email input
- `number` - Number input
- `radio` - Single selection (with `options` or `categories`)
- `checkbox` - Multiple selection (with `options`)
- `calendar` - Date picker

## Conditional Routing

Questions can have conditional logic:

```javascript
{
  id: 'frequency',
  type: 'radio',
  options: [...],
  nextRoute: (answer) => answer === 'once' ? 'calendar' : 'weekdays'
}
```

Or conditional visibility:

```javascript
{
  id: 'weekdays',
  type: 'checkbox',
  condition: (answers) => answers.frequency === 'weekly',
  // Only shown if frequency === 'weekly'
}
```

## Pricing Configuration

Edit `src/lib/config/pricing.js` to adjust:

- **Sport rates** - Base price per day for each sport
- **Discount tiers** - Bulk discounts based on total days
- **Alternative pricing** - Monthly plans (13% of base rate)

Example:

```javascript
export const sportRates = {
  Motociclismo: 4900,
  Running: 2500,
  // ... add more
};

export const discountTiers = [
  { minDays: 10, discount: 0.15 },  // 15% off for 10+ days
  { minDays: 7, discount: 0.35 },   // 35% off for 7-9 days
  // ...
];
```

## Styling

The app uses TailwindCSS with custom components defined in `src/app.css`:

- `.btn` - Base button styles
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary button
- `.card` - Card container
- `.input-field` - Form input styles
- `.radio-option` - Radio button wrapper

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',      // Blue
      secondary: '#50C878',    // Green
      danger: '#E74C3C'        // Red
    }
  }
}
```

## State Management

The funnel store (`src/lib/stores/funnel.js`) manages:

- Current funnel and variant
- User answers
- Current step
- Calculated pricing

It automatically syncs with `sessionStorage` for persistence.

### Using the store:

```svelte
<script>
  import { funnelStore } from '$lib/stores/funnel.js';

  // Read state
  $: answers = $funnelStore.answers;

  // Save answer
  funnelStore.saveAnswer('name', 'Juan');

  // Reset everything
  funnelStore.reset();
</script>
```

## Deployment

### Static Site (Recommended)

The app is configured with `@sveltejs/adapter-static` for static deployment:

```bash
npm run build
```

Deploy the `build/` folder to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static host

### Server-Side Rendering (SSR)

To enable SSR, change the adapter in `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-auto';
```

## Tech Stack

- **Svelte 5** - Reactive UI framework (3KB runtime)
- **SvelteKit** - Full-stack framework with routing
- **TailwindCSS 4** - Utility-first CSS
- **Vite 7** - Lightning-fast build tool
- **PostCSS** - CSS processing

## Benefits Over Old Prototype

| Feature | Old | New |
|---------|-----|-----|
| **Bundle Size** | ~150KB (jQuery + Bootstrap) | ~30KB (Svelte + Tailwind) |
| **Files for 7 questions** | 7+ HTML files | 1 component |
| **Add new funnel** | Copy/paste 30+ files | Edit 1 config file |
| **State management** | URL params + sessionStorage | Reactive store |
| **Conditional routing** | Manual JS per page | Declarative config |
| **A/B testing** | Duplicate everything | Change 1 parameter |
| **Maintainability** | ❌ Hard | ✅ Easy |

## Next Steps

1. **Add more question types** - File upload, multi-step date ranges, etc.
2. **Analytics integration** - Track user flow with Google Analytics
3. **Backend integration** - Send data to API on submission
4. **Form validation** - Add zod or yup for schema validation
5. **i18n** - Multi-language support
6. **Animations** - Add Svelte transitions for smoother UX
7. **Testing** - Add Vitest unit tests and Playwright e2e tests

## License

MIT

## Credits

Built with Svelte 5 and SvelteKit by modernizing the original Klare prototype.
