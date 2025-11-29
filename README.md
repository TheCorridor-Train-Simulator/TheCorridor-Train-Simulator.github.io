# RailNex Website

Professional marketing website for RailNex - built with React, TypeScript, and Webpack.

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
│   │   ├── Hero.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── Footer.tsx
│   ├── styles/           # Global styles and variables
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── assets/          # Images and static assets
│   │   └── images/
│   ├── App.tsx          # Main app component
│   ├── index.tsx        # Entry point
│   ├── index.html       # HTML template
│   └── types.d.ts       # TypeScript declarations
├── dist/                # Build output (gitignored)
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

1. Create `.tsx` file in `src/components/`
2. Create matching `.scss` file
3. Import and use in `App.tsx`

### Modifying Styles

- Global variables: `src/styles/_variables.scss`
- Component styles: Co-located with components
- Import variables in component SCSS: `@import '../styles/variables';`

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
