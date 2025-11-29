# Common Styles Quick Reference

A quick cheat sheet for the most commonly used common styles.

## 📦 Layouts

```tsx
// Page wrapper
<div className="page-wrapper">...</div>

// Hero section
<section className="hero-section hero-section--full-height">
  <div className="hero-section__content">
    <h1 className="hero-section__title">Title</h1>
  </div>
</section>

// Content section
<section className="content-section">
  <div className="content-section__container">...</div>
</section>
```

## 🎴 Cards

```tsx
// Basic card
<div className="card">
  <div className="card__body">Content</div>
</div>

// Interactive card (hover effect)
<div className="card card--interactive">...</div>

// Card with header and footer
<div className="card">
  <div className="card__header">Header</div>
  <div className="card__body">Body</div>
  <div className="card__footer">Footer</div>
</div>
```

## 🎯 Icons

```tsx
// Small (48px)
<div className="icon-container icon-container--sm">🚂</div>

// Medium (64px) - most common
<div className="icon-container icon-container--md icon-container--hover-scale">
  🚀
</div>

// Large (80px)
<div className="icon-container icon-container--lg">⚙️</div>
```

## 📐 Grids

```tsx
// 2 columns (responsive)
<div className="grid-layout grid-layout--2-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// 3 columns (most common)
<div className="grid-layout grid-layout--3-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Sidebar layout
<div className="grid-layout grid-layout--sidebar">
  <aside>Sidebar</aside>
  <main>Main content</main>
</div>
```

## 📝 Forms

```tsx
// Input field
<input type="text" className="form-input" placeholder="Search..." />

// Select dropdown
<select className="form-select">
  <option>Option 1</option>
</select>

// With label
<label className="form-label">Name</label>
<input type="text" className="form-input" />
```

## 🔗 Links & Buttons

```tsx
// Link with arrow animation
<a href="#" className="link">Learn More</a>

// Link with underline
<a href="#" className="link link--underline">View Docs</a>

// Button group
<div className="btn-group btn-group--center">
  <button className="btn btn-primary">Primary</button>
  <button className="btn btn-secondary">Secondary</button>
</div>
```

## 🏷️ Badges & Tags

```tsx
// Badge (colored)
<span className="badge badge--primary">New</span>
<span className="badge badge--secondary">Beta</span>
<span className="badge badge--muted">Old</span>

// Tag (simple)
<span className="tag">C++</span>
<span className="tag">Physics</span>
```

## 📜 Lists

```tsx
// Checkmark list
<ul className="list list--checkmark">
  <li className="list__item">Feature one</li>
  <li className="list__item">Feature two</li>
</ul>

// Arrow list
<ul className="list list--arrow">
  <li className="list__item">Step one</li>
  <li className="list__item">Step two</li>
</ul>
```

## 💻 Code

```tsx
// Code block
<div className="code-block">
  <div className="code-block__header">
    <span className="code-block__title">example.cpp</span>
  </div>
  <pre><code>void init() {}</code></pre>
</div>

// Inline code
<p>Use <span className="inline-code">initialize()</span> function</p>
```

## ➗ Dividers

```tsx
<div className="divider" />                    {/* Standard */}
<div className="divider divider--gradient" />  {/* Gradient */}
<div className="divider divider--accent" />    {/* Accent color */}
```

## 🎬 Animations

```tsx
<div className="animate-fadeInUp">Fades in from bottom</div>
<div className="animate-fadeIn">Fades in</div>
<div className="animate-slideInRight">Slides from left</div>
<div className="animate-pulse">Pulses</div>
<div className="animate-glow">Glows</div>
```

## 🎨 Utilities

### Text

```tsx
<p className="text-center">Centered</p>
<p className="text-left">Left</p>
<p className="text-right">Right</p>

<p className="text-primary">Primary color</p>
<p className="text-muted">Muted color</p>
<p className="text-accent">Accent color</p>
```

### Spacing

```tsx
{/* Margins: mt-1, mt-2, mt-3, mt-4 */}
<div className="mt-2">Margin top 2x</div>
<div className="mb-3">Margin bottom 3x</div>

{/* Padding: pt-1, pt-2, pt-3, pt-4 */}
<div className="pt-2">Padding top 2x</div>
<div className="pb-3">Padding bottom 3x</div>
```

### Flex

```tsx
{/* Horizontal layout */}
<div className="d-flex justify-center align-center gap-2">
  <span>Item 1</span>
  <span>Item 2</span>
</div>

{/* Vertical layout */}
<div className="d-flex flex-column gap-3">
  <div>Row 1</div>
  <div>Row 2</div>
</div>

{/* Space between */}
<div className="d-flex justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

### Backgrounds

```tsx
<div className="bg-dark">Dark background</div>
<div className="bg-darker">Darker background</div>
<div className="bg-card">Card background</div>
```

## 🔥 Common Patterns

### Feature Card with Icon

```tsx
<div className="card card--interactive">
  <div className="card__body">
    <div className="icon-container icon-container--md mb-2">🎯</div>
    <span className="card__subtitle">Category</span>
    <h3 className="card__title">Feature Name</h3>
    <p className="card__description">Description text here</p>
  </div>
  <div className="card__footer">
    <a href="#" className="link">Learn More →</a>
  </div>
</div>
```

### Page Header

```tsx
<section className="content-section content-section--gradient">
  <div className="content-section__header">
    <h1 className="content-section__title content-section__title--gradient">
      Page Title
    </h1>
    <p className="content-section__subtitle">
      Subtitle or description text
    </p>
  </div>
</section>
```

### Search + Filter Sidebar

```tsx
<div className="grid-layout grid-layout--sidebar">
  <aside>
    <input 
      type="text" 
      className="form-input mb-2" 
      placeholder="Search..." 
    />
    <label className="form-label">Filter</label>
    <select className="form-select">
      <option>All</option>
      <option>Active</option>
    </select>
  </aside>
  <main>
    {/* Content */}
  </main>
</div>
```

### Hero with CTA Buttons

```tsx
<section className="hero-section hero-section--full-height">
  <div className="hero-section__overlay hero-section__overlay--gradient" />
  <div className="hero-section__content">
    <h1 className="hero-section__title">RailNex</h1>
    <p className="hero-section__subtitle">Professional Railroad Simulation</p>
    <p className="hero-section__description">
      Advanced physics and study-level accuracy
    </p>
    <div className="hero-section__cta">
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-secondary">Learn More</button>
    </div>
  </div>
</section>
```

---

## 💡 Tips

1. **Combine classes** for powerful effects:
   ```tsx
   <div className="card card--interactive animate-fadeInUp">...</div>
   ```

2. **Use utility classes** for quick spacing:
   ```tsx
   <div className="icon-container icon-container--md mb-2">...</div>
   ```

3. **Modifiers use `--`** notation:
   ```tsx
   card--interactive  ← modifier
   icon-container--sm ← modifier
   ```

4. **Check the full guide** for more details:
   - [Common Styles Guide](src/styles/COMMON_STYLES_GUIDE.md)
   - [Refactoring Examples](REFACTORING_EXAMPLE.md)

---

**Quick tip**: When in doubt, check existing components for real-world usage examples!
