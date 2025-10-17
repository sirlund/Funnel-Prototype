# Klare Insurance Funnel - AI Coding Instructions

This repository contains a **dual-architecture insurance funnel project**: a legacy jQuery/HTML prototype and a modern SvelteKit reimplementation.

## Project Structure & Architecture

### Two Distinct Systems
- **Legacy Prototype**: `funnel_deporte/`, `funnel_vida/` - 30+ static HTML files with jQuery/Bootstrap
- **Modern App**: `funnel-app/` - Single-page SvelteKit application with configuration-driven architecture

### Modern App Core Pattern (Primary Development Target)
The SvelteKit app uses a **configuration-over-convention** approach:

```
funnel-app/src/lib/config/
├── funnels.js          # Question definitions, conditional logic, routing
├── pricing.js          # Sport rates, discount tiers, calculations
```

**Critical**: All funnel behavior is defined in `funnels.js` - questions, validation, conditional flows, and routing logic. Never hard-code question logic in components.

### Dynamic Routing Architecture
- `[funnel]/[variant]/question/[step]` - Dynamic question renderer  
- Uses single `Question.svelte` component for ALL question types
- Route progression determined by `nextRoute()` functions in config
- Conditional questions use `condition()` functions checking previous answers

### State Management Pattern
- **Svelte Store**: `src/lib/stores/funnel.js` - reactive state with auto-sessionStorage sync
- **Legacy jQuery**: Scattered sessionStorage access with URL parameters
- **Key Insight**: Modern app centralizes state, legacy scatters it across 30+ files

## Development Workflows

### Modern App Commands (Primary)
```bash
cd funnel-app
npm run dev          # Development server (port 5173)
npm run build        # Static site generation
npm run preview      # Preview built site
```

### Adding New Funnel Questions
1. Edit `src/lib/config/funnels.js` - add to questions array
2. Support new question types in `Question.svelte` if needed
3. Update pricing logic in `pricing.js` if applicable
4. **Never** create new route files - routing is dynamic

### Legacy System (Reference Only)
- Each question = separate HTML file with inline jQuery
- Pricing logic scattered in `<script>` tags throughout files
- **Don't modify** - preserved for comparison/reference

## Technology Stack Conventions

### Modern App
- **Svelte 5** (~3KB runtime) with SvelteKit for routing
- **TailwindCSS** - utility classes, custom components in `app.css`
- **No build tooling complexity** - Vite handles everything
- **Static deployment** via `@sveltejs/adapter-static`

### Styling Patterns
```css
/* Custom components in src/app.css */
.btn, .btn-primary, .btn-secondary  
.card, .input-field, .radio-option

/* Sport funnel gets .sport-theme class for visual differentiation */
```

### Key Dependencies
- `@tabler/icons-svelte` - Icon system  
- **No jQuery/Bootstrap** in modern app (legacy only)

## Business Logic Patterns

### Pricing Engine (`pricing.js`)
```javascript
// Sport-specific daily rates
sportRates = { Motociclismo: 4900, Running: 2500, ... }

// Bulk discount tiers (more days = bigger discount)
discountTiers = [{ minDays: 10, discount: 0.15 }, ...]

// Alternative monthly plans at 13% of base rate
```

### Conditional Question Flow
Questions can route conditionally based on answers:
```javascript
nextRoute: (answer) => answer === 'once' ? 'calendar' : 'weekdays'
condition: (answers) => answers.frequency === 'weekly'
```

### State Persistence Strategy
- **Modern**: Reactive store auto-syncs to sessionStorage
- **Legacy**: Manual sessionStorage calls throughout codebase

## Integration & Cross-System Patterns

### Shared Assets
- `img/` directory used by both systems
- `styles/` contains SCSS for legacy system only
- **Important**: Legacy CSS doesn't affect modern app

### Migration Strategy Evidence
The modern app demonstrates these improvements over legacy:
- **30+ HTML files → 1 Question component**
- **Scattered pricing logic → Centralized pricing.js**  
- **Manual form handling → Reactive state management**
- **Hard-coded routes → Configuration-driven flow**

## Common Development Tasks

### Add New Sport/Insurance Product
1. Add sport rate in `pricing.js` 
2. Add to `sportCategories` in `funnels.js`
3. Test pricing calculations

### Modify Question Flow
1. Edit question `nextRoute` functions in `funnels.js`
2. Add conditional logic with `condition` functions
3. **Never** modify route files directly

### Debug State Issues
- Check `$funnelStore` in browser devtools
- Verify sessionStorage persistence  
- Use `funnelStore.reset()` to clear state

### Performance Optimization
- Modern app already optimized (3KB Svelte runtime)
- Legacy system has jQuery/Bootstrap overhead (~150KB)
- Static site generation eliminates server requirements

The modern SvelteKit implementation is the **primary development target** - treat the legacy system as reference material for understanding business requirements, not for active development.
