# Copilot Instructions for TheCorridor Train Simulator Website

## Project Overview
Professional marketing website for TheCorridor Train Simulator and RailNex Engine - a railroad simulation platform with Vulkan graphics, real-time physics, and study-level locomotive modeling. Built with React + TypeScript + Webpack, featuring modern design emphasizing simulation/physics over gaming.

## Architecture & Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Webpack 5 with hot module replacement
- **Styling**: SCSS with custom variables system + **common styles library** (no Bootstrap - custom professional dark theme)
- **Deployment**: GitHub Pages via automated build workflow (`.github/workflows/static.yml`)
- **Dev Server**: Webpack Dev Server on port 3000

## File Structure Patterns
```
src/
  components/          # React components with co-located SCSS
    Hero.tsx/scss
    FeatureCards.tsx/scss
    FeaturesSection.tsx/scss
    Footer.tsx/scss
    Navigation.tsx/scss
    APIDocumentation.tsx/scss
    RailNexEngine.tsx/scss
    RailNexForge.tsx/scss
  styles/              # Global styles and variables
    _variables.scss    # Design tokens (colors, spacing, breakpoints)
    _common.scss       # ⭐ Shared component styles (900+ lines)
    main.scss          # Global styles and resets
    COMMON_STYLES_GUIDE.md  # Complete documentation
  assets/
    images/            # Images imported via Webpack
  App.tsx              # Main app component with routing
  index.tsx            # Entry point
  index.html           # HTML template
  types.d.ts           # TypeScript module declarations
dist/                  # Build output (gitignored)
QUICK_REFERENCE.md     # Common styles cheat sheet
webpack.config.js      # Webpack configuration (dev/prod)
tsconfig.json          # TypeScript configuration
```

## Critical Patterns & Conventions

### React Component Architecture
- **BEM-style SCSS**: Components use Block__Element--Modifier naming (e.g., `.hero__content`, `.feature-card__icon`)
- **Co-located styles**: Each component has matching `.scss` file in same directory
- **TypeScript**: All components are functional components with TypeScript (`React.FC`)
- **Asset imports**: Images imported as modules via Webpack: `import heroImage from '@assets/images/...'`

### Design System (Professional Simulation Theme)
**Color Palette** (defined in `src/styles/_variables.scss`):
- Background: Dark navy (`$sim-dark-bg: #0a0e1a`, `$sim-darker-bg: #050810`)
- Cards: `$sim-card-bg: #141824` with subtle borders
- Accent: Cyan (`$sim-accent: #00d9ff`) - emphasizes technical/simulation feel
- Secondary: Purple (`$sim-accent-secondary: #7b68ee`) - used in gradients
- Text: Light gray (`$sim-text: #e8eaed`) with muted variations

**Key Visual Patterns**:
- Gradient backgrounds: `linear-gradient(135deg, $sim-accent, $sim-accent-secondary)`
- Card hover effects: `transform: translateY(-8px)` with glow shadows
- Icon containers: 48px-64px rounded squares with gradient backgrounds
- Animations: `fadeInUp` on hero, smooth transitions on all interactive elements

### TypeScript Path Aliases
Configured in `tsconfig.json` and `webpack.config.js`:
```tsx
import Hero from '@components/Hero';
import heroImage from '@assets/images/hero.jpg';
import '@styles/main.scss';
```

### SCSS Import Pattern
**IMPORTANT - Use Common Styles First!**

Before writing custom CSS, check if common styles can be used:
- Cards: Use `.card` classes instead of custom card styles
- Grids: Use `.grid-layout--3-col` instead of custom grids
- Icons: Use `.icon-container--md` instead of custom icon wrappers
- Forms: Use `.form-input`, `.form-select` instead of custom inputs
- See [COMMON_STYLES_GUIDE.md](../src/styles/COMMON_STYLES_GUIDE.md) and [QUICK_REFERENCE.md](../QUICK_REFERENCE.md)

Import pattern for component SCSS:
```scss
@use '../styles/variables' as *;
@use '../styles/common' as *;  // Import common styles

.component {
  // Only add styles that are TRULY unique to this component
  // Use common classes in TSX instead of writing custom SCSS
}
```

**Migration from @import to @use:**
- ✅ Use `@use '../styles/variables' as *;` (modern)
- ❌ Don't use `@import '../styles/variables';` (deprecated)

**Available Common Components:**
- Layouts: `hero-section`, `content-section`, `page-wrapper`, `grid-layout--2-col/3-col/sidebar`
- Cards: `card`, `card--interactive`, `card--flat` (header, body, footer)
- Icons: `icon-container--sm/md/lg`, `icon-container--hover-scale`
- Forms: `form-input`, `form-select`, `form-label`, `form-input--with-icon`
- UI: `badge--primary/secondary/muted`, `tag`, `link`, `link--underline`, `divider`, `code-block`
- Lists: `list--checkmark`, `list--arrow`
- Utilities: `mt-1/2/3/4`, `mb-1/2/3/4`, `d-flex`, `justify-center`, `gap-1/2/3`, `animate-fadeInUp`

## Development Workflow

### Local Development
```powershell
# Install dependencies (first time only)
npm install

# Start dev server at http://localhost:3000
npm start
# or
npm run dev

# Build for production
npm run build

# Clean build artifacts
npm run clean
```

**Dev server features**:
- Hot module replacement (changes appear instantly)
- Source maps for debugging
- Automatic browser opening
- Port 3000 by default

### Making Changes
1. **New component**: Create `.tsx` and `.scss` files in `src/components/`, import in `App.tsx`
2. **Styling updates**: Modify component `.scss` or global `_variables.scss`
3. **Images**: Add to `src/assets/images/`, import as module in component
4. **Testing**: Run `npm start` and check `http://localhost:3000`

### Build Output
Production build creates optimized `dist/` folder:
- HTML with injected asset hashes
- Minified JS bundle (`js/main.[hash].js`)
- Extracted CSS (`css/main.[hash].css`)
- Optimized images with hashed names
- Source maps for debugging production issues

### Deployment
- **GitHub Actions**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/static.yml` 
  1. Checks out code
  2. Installs Node.js 18 and dependencies
  3. Runs `npm run build`
  4. Deploys `dist/` folder to GitHub Pages
- **Live URL**: https://thecorridor-train-simulator.github.io (check repository settings → Pages)

## Project-Specific Notes

### Component Structure
- **Hero**: Full-screen banner with gradient overlay, call-to-action buttons
- **FeatureCards**: 3-column grid (responsive to 1-column mobile) with icons
- **FeaturesSection**: 2-column layout (image + feature list) for detailed features
- **Footer**: Navigation links, social media icons, copyright

### Responsive Breakpoints
```scss
$breakpoint-sm: 576px;   // Small devices
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 992px;   // Desktops
$breakpoint-xl: 1200px;  // Large desktops
```

Use `@include respond-to('md') { ... }` mixin for responsive styles.

### Known Items to Address
- Image optimization: Hero images are 10MB+ (consider WebP conversion, responsive sizes)
- ✅ ~~Sass @import deprecation~~ Fixed: All files use @use syntax
- Links point to hash placeholders - update when real pages exist
- Consider lazy-loading images for better performance

### Pages & Routes
**Current Pages:**
- `/` - Home (Hero, FeatureCards, FeaturesSection, Footer)
- `/railnex-engine` - RailNex Engine details (logo hero, features, tech specs)
- `/railnex-forge` - RailNex Forge editor (features, capabilities, workflow)
- `/api-documentation` - API docs (library-based filtering, 27+ code elements, search)

**Navigation Component:**
- Rendered globally in `App.tsx` (appears on all pages)
- Sticky header with logo and nav links
- Mobile responsive with potential for hamburger menu

### Legacy Files (Keep for Reference)
- `index.html` (old) - Original Bootstrap Studio export
- `assets/` (old) - Bootstrap 5 framework files and old assets
- `boostrap-studio/` - Bootstrap Studio project files (typo in folder name preserved)

## When Adding Features
- Use React functional components with TypeScript
- **Check common styles first** - Use `.card`, `.grid-layout`, `.icon-container`, etc. before writing custom CSS
- Create co-located `.scss` file ONLY for truly unique component styles
- Import and use in `App.tsx` component tree
- Follow BEM naming in SCSS (`.component__element--modifier`)
- Use design system colors from `_variables.scss`
- Use common classes for cards, grids, icons, forms (see COMMON_STYLES_GUIDE.md)
- Test responsive behavior at all breakpoints (mobile, tablet, desktop)
- Consider animations/transitions for better UX (match existing `transition-base` pattern or use `.animate-*` classes)

