# RailNex Website

Professional marketing website for RailNex - built with React, TypeScript, and Webpack.

[![RailNex WebPages Deployment](https://github.com/TheCorridor-Train-Simulator/TheCorridor-Train-Simulator.github.io/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/TheCorridor-Train-Simulator/TheCorridor-Train-Simulator.github.io/actions/workflows/static.yml)

## 🚂 About

RailNex is a professional railroad simulation platform featuring:
- **RailNex Engine**: Custom engine for railroad simulation
- **Global Railroad Database**: Operate anywhere in the world using data from OpenStreetMap, OpenRailwayMap, and other sources
- **Vulkan Graphics Engine**: Modern, high-performance rendering
- **Real-Time Physics**: Advanced train dynamics and realistic behavior
- **Study-Level Accuracy**: Meticulously detailed locomotive models

## 🛠️ Tech Stack

- **React 18**: Modern UI library
- **TypeScript**: Type-safe development
- **Webpack 5**: Module bundling and optimization
- **SCSS**: Advanced styling with variables and mixins
- **GitHub Pages**: Static site hosting

## 📁 Project Structure

```
RailNex-Website/
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx/scss
│   │   ├── FeatureCards.tsx/scss
│   │   ├── FeaturesSection.tsx/scss
│   │   ├── Footer.tsx/scss
│   │   ├── Navigation.tsx/scss
│   │   ├── APIDocumentation.tsx/scss
│   │   ├── RailNexEngine.tsx/scss
│   │   └── RailNexForge.tsx/scss
│   ├── styles/           # Global styles and variables
│   │   ├── _variables.scss         # Design tokens
│   │   ├── _common.scss            # ⭐ Shared components (900+ lines)
│   │   ├── main.scss               # Global styles
│   │   └── COMMON_STYLES_GUIDE.md  # Full documentation
│   ├── assets/          # Images and static assets
│   │   └── images/
│   ├── App.tsx          # Main app with routing
│   ├── index.tsx        # Entry point
│   ├── index.html       # HTML template
│   └── types.d.ts       # TypeScript declarations
├── dist/                # Build output (gitignored)
├── QUICK_REFERENCE.md   # Common styles cheat sheet
├── webpack.config.js    # Webpack configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server at http://localhost:3000
npm start

# Or use the dev command
npm run dev
```

The dev server includes:
- Hot module replacement
- Automatic reloading
- Source maps for debugging

### Building for Production

```bash
# Create optimized production build
npm run build
```

Output will be in the `dist/` directory, ready for deployment.

### Cleaning Build Files

```bash
# Remove dist directory
npm run clean
```

## 🎨 Design System

### Common Styles System

The project uses a **standardized common styles library** (`_common.scss`) to reduce code duplication and ensure consistency across all components.

📖 **[Full Documentation →](src/styles/COMMON_STYLES_GUIDE.md)** | **[Quick Reference →](QUICK_REFERENCE.md)**

**Key Benefits:**
- 80-90% reduction in component SCSS
- Guaranteed visual consistency
- Faster development with pre-built components
- Single source of truth for styling

**Quick Example:**
```tsx
// Use common classes instead of writing custom SCSS
<div className="card card--interactive">
  <div className="icon-container icon-container--md mb-2">🚂</div>
  <h3 className="card__title">Title</h3>
  <p className="card__description">Description</p>
</div>
```

**Available Components:**
- **Layouts**: `hero-section`, `content-section`, `page-wrapper`
- **Cards**: `card` (with `--interactive`, `--flat` modifiers)
- **Grids**: `grid-layout--2-col/3-col/4-col/sidebar/split`
- **Forms**: `form-input`, `form-select`, `form-label`
- **Icons**: `icon-container--sm/md/lg` (with optional `--hover-scale`)
- **UI**: `badge`, `tag`, `link`, `divider`, `code-block`
- **Utilities**: Spacing (`mt-1`, `mb-2`), flex (`d-flex gap-2`), animations (`animate-fadeInUp`)

See [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for copy-paste examples.

### Color Scheme

The website uses a professional, technical color scheme:

- **Background**: Dark navy (`#0a0e1a`, `#050810`)
- **Cards**: Subtle dark (`#141824`)
- **Accent**: Cyan (`#00d9ff`) - primary technical accent
- **Secondary**: Purple (`#7b68ee`) - gradient accent
- **Text**: Light gray (`#e8eaed`) with muted variations

### Typography

- **Font**: Segoe UI system font stack
- **Headings**: Bold, clear hierarchy
- **Body**: 1.6 line-height for readability

### Components

All components use BEM-style SCSS modules:

```scss
.component
  &__element
    &--modifier
```

## 📦 Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when you push to `main`:

1. GitHub Actions builds the React app
2. Webpack creates optimized bundle in `dist/`
3. GitHub Pages serves the static files

**Workflow**: `.github/workflows/static.yml`

### Manual Deployment

```bash
# Build the app
npm run build

# Deploy dist/ folder to your hosting service
```

## 🔧 Configuration

### Webpack

- **Dev**: Hot reload, source maps, unminified
- **Production**: Minified, optimized, hashed filenames
- **Assets**: Automatic handling of images, fonts, styles

### TypeScript

- Strict mode enabled
- Path aliases configured:
  - `@/*` → `src/*`
  - `@components/*` → `src/components/*`
  - `@styles/*` → `src/styles/*`
  - `@assets/*` → `src/assets/*`

## 🎯 Key Features

### Modern Build Pipeline

- Tree shaking for smaller bundles
- Code splitting for faster loads
- Asset optimization (images, fonts)
- CSS extraction and minification

### Professional Design

- Smooth animations and transitions
- Responsive grid layouts
- Modern glassmorphism effects
- Gradient accents for visual interest

### Performance

- Lazy loading where beneficial
- Optimized images
- Minimal dependencies
- Production build < 500KB

## 📝 Development Notes

### Adding New Components

1. **Check common styles first** - Use `.card`, `.grid-layout`, `.icon-container` before writing custom CSS
2. Create `.tsx` file in `src/components/`
3. Create `.scss` file ONLY for truly unique styles (import common: `@use '../styles/common' as *;`)
4. Import and use in `App.tsx`

**Component SCSS Template:**
```scss
@use '../styles/variables' as *;
@use '../styles/common' as *;

// Only add truly unique styles - use common classes in TSX!
.my-component {
  // Unique styles only
}
```

### Modifying Styles

- **Common styles**: `src/styles/_common.scss` (shared components)
- **Design tokens**: `src/styles/_variables.scss` (colors, spacing, shadows)
- **Component styles**: Co-located `.scss` files (use `@use '../styles/common' as *;`)
- **Prefer common classes** over custom SCSS (see [QUICK_REFERENCE.md](QUICK_REFERENCE.md))

### Adding Images

1. Place images in `src/assets/images/`
2. Import in component:
   ```tsx
   import myImage from '@assets/images/my-image.jpg';
   ```
3. Use in JSX:
   ```tsx
   <img src={myImage} alt="Description" />
   ```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

- Check `tsconfig.json` for correct paths
- Ensure all `.d.ts` files are in `src/`

### Webpack Errors

- Verify all loaders are installed
- Check file extensions in imports

## 📄 License

Copyright © 2024-2025 | RailNex

## 🤝 Contributing

This is an open-source project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Made with ⚡ for professional railroad simulation**
