# Common Styles Guide

This guide explains how to use the shared stylesheet system (`_common.scss`) to maintain consistent styling across the RailNex website.

## Overview

The `_common.scss` file contains reusable styles that are common across multiple components. This approach:
- **Reduces code duplication** - Write styles once, use everywhere
- **Ensures consistency** - All components use the same patterns
- **Simplifies maintenance** - Change once, update everywhere
- **Speeds up development** - Pre-built components ready to use

## How to Use

### 1. Import in Your Component SCSS

```scss
@use '../styles/variables' as *;
@use '../styles/common' as *;

// Your component-specific styles
.my-component {
  // ...
}
```

**Note:** Common styles are automatically available globally through `main.scss`, but you can also import directly for better IDE support.

## Available Components

### Page Layouts

#### Page Wrapper
Use this as the root element for full-page components:

```tsx
<div className="page-wrapper">
  {/* Your content */}
</div>
```

### Hero Sections

#### Full-Height Hero with Background Image

```tsx
<section className="hero-section hero-section--full-height">
  <div className="hero-section__background" style={{ backgroundImage: `url(${heroImage})` }} />
  <div className="hero-section__overlay hero-section__overlay--gradient" />
  <div className="hero-section__content">
    <h1 className="hero-section__title">Your Title</h1>
    <p className="hero-section__subtitle">Your Subtitle</p>
    <p className="hero-section__description">Your description text</p>
    <div className="hero-section__cta">
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</section>
```

**Modifiers:**
- `hero-section--full-height` - Full viewport height
- `hero-section__overlay--gradient` - Linear gradient overlay
- `hero-section__overlay--radial` - Radial glow overlay
- `hero-section__subtitle--muted` - Muted subtitle style

#### Simple Hero with Logo

```tsx
<section className="hero-section">
  <div className="hero-section__overlay hero-section__overlay--radial" />
  <div className="hero-section__content">
    <img src={logo} alt="Logo" className="hero-section__logo" />
    <h1 className="hero-section__title">RailNex Engine</h1>
    <p className="hero-section__subtitle hero-section__subtitle--muted">
      High-performance railroad simulation
    </p>
  </div>
</section>
```

### Content Sections

#### Standard Content Section

```tsx
<section className="content-section">
  <div className="content-section__container">
    <div className="content-section__header">
      <h2 className="content-section__title content-section__title--gradient">
        Section Title
      </h2>
      <p className="content-section__subtitle">Section description</p>
    </div>
    {/* Your content */}
  </div>
</section>
```

**Modifiers:**
- `content-section--dark` - Dark background
- `content-section--gradient` - Gradient background
- `content-section--compact` - Less padding
- `content-section--no-top-padding` - Remove top padding
- `content-section__title--gradient` - Gradient text color

### Cards

#### Basic Card

```tsx
<div className="card">
  <div className="card__header">
    <h3 className="card__title">Card Title</h3>
    <span className="card__subtitle">Card Subtitle</span>
  </div>
  <div className="card__body">
    <p className="card__description">Card content goes here</p>
  </div>
  <div className="card__footer">
    <a href="#" className="link">Learn More →</a>
  </div>
</div>
```

**Modifiers:**
- `card--interactive` - Adds hover effects for clickable cards
- `card--flat` - No shadow, no hover lift

#### Feature Card with Icon

```tsx
<div className="card card--interactive">
  <div className="card__body">
    <div className="icon-container icon-container--md icon-container--hover-scale">
      🚂
    </div>
    <h3 className="card__title">Feature Name</h3>
    <p className="card__description">Feature description</p>
  </div>
</div>
```

### Icons

#### Icon Containers

```tsx
{/* Small icon (48px) */}
<div className="icon-container icon-container--sm">
  🎯
</div>

{/* Medium icon (64px) */}
<div className="icon-container icon-container--md icon-container--hover-scale">
  🚀
</div>

{/* Large icon (80px) */}
<div className="icon-container icon-container--lg">
  ⚙️
</div>
```

**Modifiers:**
- `icon-container--sm` - 48px (small)
- `icon-container--md` - 64px (medium)
- `icon-container--lg` - 80px (large)
- `icon-container--hover-scale` - Scales on hover

### Grid Layouts

#### 3-Column Grid (responsive)

```tsx
<div className="grid-layout grid-layout--3-col">
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
</div>
```

**Available Grids:**
- `grid-layout--1-col` - Single column
- `grid-layout--2-col` - 2 columns on tablet+
- `grid-layout--3-col` - 3 columns on desktop
- `grid-layout--4-col` - 4 columns on desktop
- `grid-layout--sidebar` - Sidebar layout (300px + main)
- `grid-layout--split` - 50/50 split on desktop

### Forms

#### Input Field

```tsx
<div>
  <label className="form-label">Search</label>
  <input 
    type="text" 
    className="form-input" 
    placeholder="Enter search term..." 
  />
</div>
```

#### Select Dropdown

```tsx
<div>
  <label className="form-label">Filter By</label>
  <select className="form-select">
    <option value="all">All Items</option>
    <option value="active">Active</option>
  </select>
</div>
```

#### Input with Icon

```tsx
<div style={{ position: 'relative' }}>
  <input 
    type="text" 
    className="form-input form-input--with-icon" 
    placeholder="Search..." 
  />
  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
    🔍
  </span>
</div>
```

### Links

#### Standard Link

```tsx
<a href="#" className="link">
  Learn More
</a>
```

#### Link with Underline Animation

```tsx
<a href="#" className="link link--underline">
  View Documentation
</a>
```

### Badges & Tags

#### Badges

```tsx
<span className="badge badge--primary">New</span>
<span className="badge badge--secondary">Beta</span>
<span className="badge badge--muted">Deprecated</span>
```

#### Tags

```tsx
<span className="tag">C++</span>
<span className="tag">Physics</span>
<span className="tag">Simulation</span>
```

### Code Blocks

#### Code Block with Header

```tsx
<div className="code-block">
  <div className="code-block__header">
    <span className="code-block__title">example.cpp</span>
  </div>
  <pre>
    <code>{`void initialize() {
  // Your code here
}`}</code>
  </pre>
</div>
```

#### Inline Code

```tsx
<p>
  Use the <span className="inline-code">initialize()</span> function to start.
</p>
```

### Lists

#### Checkmark List

```tsx
<ul className="list list--checkmark">
  <li className="list__item">Feature one</li>
  <li className="list__item">Feature two</li>
  <li className="list__item">Feature three</li>
</ul>
```

#### Arrow List

```tsx
<ul className="list list--arrow">
  <li className="list__item">Step one</li>
  <li className="list__item">Step two</li>
</ul>
```

### Dividers

```tsx
{/* Standard divider */}
<div className="divider" />

{/* Gradient divider */}
<div className="divider divider--gradient" />

{/* Thick accent divider */}
<div className="divider divider--thick divider--accent" />
```

### Buttons

#### Button Group

```tsx
<div className="btn-group btn-group--center">
  <button className="btn btn-primary">Primary Action</button>
  <button className="btn btn-secondary">Secondary Action</button>
</div>
```

**Modifiers:**
- `btn-group--center` - Center aligned
- `btn-group--end` - Right aligned
- `btn-group--vertical` - Vertical stack

### Animations

#### Animation Classes

```tsx
{/* Fade in from bottom */}
<div className="animate-fadeInUp">Content</div>

{/* Fade in */}
<div className="animate-fadeIn">Content</div>

{/* Slide in from left */}
<div className="animate-slideInRight">Content</div>

{/* Pulsing animation */}
<div className="animate-pulse">Logo</div>

{/* Glowing animation */}
<div className="animate-glow">Special Element</div>
```

## Utility Classes

### Text Alignment
```tsx
<p className="text-center">Centered text</p>
<p className="text-left">Left-aligned text</p>
<p className="text-right">Right-aligned text</p>
```

### Text Colors
```tsx
<p className="text-primary">Primary color text</p>
<p className="text-muted">Muted text</p>
<p className="text-accent">Accent color text</p>
```

### Backgrounds
```tsx
<div className="bg-dark">Dark background</div>
<div className="bg-darker">Darker background</div>
<div className="bg-card">Card background</div>
```

### Spacing
```tsx
{/* Margins */}
<div className="mt-1">Margin top 1x</div>
<div className="mb-2">Margin bottom 2x</div>

{/* Padding */}
<div className="pt-3">Padding top 3x</div>
<div className="pb-4">Padding bottom 4x</div>
```

Available: `mt-1` through `mt-4`, `mb-1` through `mb-4`, `pt-1` through `pt-4`, `pb-1` through `pb-4`

### Display & Flex
```tsx
<div className="d-flex justify-center align-center gap-2">
  <span>Item 1</span>
  <span>Item 2</span>
</div>

<div className="d-flex flex-column gap-3">
  <div>Row 1</div>
  <div>Row 2</div>
</div>
```

## Component Migration Examples

### Before: Custom Hero

```scss
// Old component-specific style
.my-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  // ... 50+ lines of repeated code
}
```

### After: Using Common Styles

```tsx
// Just use the classes!
<section className="hero-section hero-section--full-height">
  <div className="hero-section__content">
    <h1 className="hero-section__title">Title</h1>
  </div>
</section>
```

**Savings:** Removed 50+ lines of SCSS, guaranteed consistency

### Before: Custom Card

```scss
.feature-card {
  background: $sim-card-bg;
  border-radius: 1rem;
  box-shadow: $shadow-md;
  // ... 30+ lines
}
```

### After: Using Common Card

```tsx
<div className="card card--interactive">
  <div className="card__body">
    {/* content */}
  </div>
</div>
```

**Savings:** No custom SCSS needed, automatic hover effects

## Best Practices

### 1. Use Common Styles First
Before writing custom CSS, check if a common style exists:
- ✅ `<div className="card">` (reusable)
- ❌ `<div className="custom-card">` (custom CSS)

### 2. Extend, Don't Override
If you need custom behavior, extend common styles:

```scss
@use '../styles/common' as *;

.my-special-card {
  @extend .card;
  
  // Only add what's different
  border: 2px solid gold;
}
```

### 3. Combine Classes
Mix and match for powerful combinations:

```tsx
<div className="card card--interactive animate-fadeInUp">
  {/* Reusable card + interactive + animation */}
</div>
```

### 4. When to Write Custom Styles
Only write component-specific SCSS when:
- The style is truly unique to that component
- Common styles don't provide the needed functionality
- You need very specific positioning or layout

## Migration Checklist

When updating existing components to use common styles:

- [ ] Import `@use '../styles/common' as *;` in component SCSS
- [ ] Replace custom hero sections with `hero-section` classes
- [ ] Replace custom cards with `card` classes
- [ ] Replace custom grids with `grid-layout` classes
- [ ] Replace custom buttons with `btn` classes
- [ ] Replace custom forms with `form-input/form-select` classes
- [ ] Add utility classes for spacing/alignment
- [ ] Remove duplicate/redundant SCSS code
- [ ] Test responsive behavior
- [ ] Verify animations work correctly

## Support

If you need a common style that doesn't exist yet:
1. Check if it's truly reusable (used in 2+ components)
2. Add it to `_common.scss` following existing patterns
3. Document it in this guide
4. Update existing components to use it

---

**Last Updated:** November 28, 2025
