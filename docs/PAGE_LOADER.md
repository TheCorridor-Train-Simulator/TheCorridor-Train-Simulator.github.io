# Page Loader Animation

## Overview
A professional, railroad-themed loading animation that displays during:
- Initial page load (1.5 seconds)
- Page transitions between routes (0.8 seconds)
- Component lazy loading

## Features

### Visual Elements
1. **Animated Railroad Tracks**
   - Glowing parallel tracks with perspective effect
   - Animated railroad ties scrolling down
   - Cyan accent color matching RailNex branding

2. **Animated Train Locomotive**
   - Gradient-colored train body with windows
   - Bouncing animation for movement effect
   - Spinning wheels with glow effects

3. **Loading Text**
   - "Loading" text with animated dots (...)
   - Each dot pulses in sequence

4. **Progress Bar**
   - Gradient progress bar with infinite animation
   - Glowing effect matching brand colors

5. **Background Particles**
   - 20 floating particles with randomized positions
   - Creates depth and atmosphere

### Technical Implementation

**Component Structure:**
```tsx
<PageLoader isLoading={boolean} />
```

**Usage in App.tsx:**
- Initial page load: Shows for 1.5 seconds on first visit
- Page transitions: Shows for 0.8 seconds when navigating between pages
- Lazy loading fallback: Shows while components are being loaded

**Key Behaviors:**
- Fade in animation (0.3s) when appearing
- Fade out animation (0.5s) when disappearing
- Z-index: 9999 (ensures it's above all content)
- Fixed positioning (covers entire viewport)

## Files
- `src/components/PageLoader.tsx` - React component
- `src/components/PageLoader.scss` - Styles and animations

## Animations Used

### Track Animations
- `trackGlow` - Pulsing glow effect on railroad tracks (2s loop)
- `tieScroll` - Railroad ties scrolling perspective (1.5s loop)

### Train Animations
- `trainBounce` - Subtle vertical bounce (1s loop)
- `wheelSpin` - Rotating wheels (1s loop)

### UI Animations
- `dotPulse` - Loading text dots pulsing (1.5s loop)
- `progressMove` - Progress bar sliding animation (2s loop)
- `particleFloat` - Background particles floating upward (4s loop)

### Transition Animations
- `fadeIn` - Component entrance (0.3s)
- `fadeOut` - Component exit (0.5s)

## Customization

### Timing Adjustments
To change loading durations, modify these values in `App.tsx`:

```tsx
// Initial page load (currently 1.5 seconds)
const timer = setTimeout(() => setInitialLoading(false), 1500);

// Page transitions (currently 0.8 seconds)
const timer = setTimeout(() => setIsLoading(false), 800);
```

### Color Customization
All colors use the RailNex design system from `_variables.scss`:
- Primary accent: `$sim-accent` (#00d9ff - cyan)
- Secondary accent: `$sim-accent-secondary` (#7b68ee - purple)
- Background: `$sim-darker-bg`, `$sim-dark-bg`
- Text: `$sim-text`

### Animation Speed
Adjust animation durations in `PageLoader.scss`:
- Train bounce: `animation: trainBounce 1s ease-in-out infinite;`
- Wheel spin: `animation: wheelSpin 1s linear infinite;`
- Progress bar: `animation: progressMove 2s ease-in-out infinite;`

## Performance Considerations

- Component uses `useState` and `useEffect` hooks for loading state
- Exit animation delay prevents abrupt disappearance
- Fixed positioning with high z-index ensures smooth overlay
- Particles use randomized CSS properties (no JS calculations)
- All animations use CSS transforms for GPU acceleration

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS animations and transforms
- React 18+ Suspense API
- React Router v6+ for route detection

## Future Enhancements
- [ ] Add sound effects (optional train whistle)
- [ ] Progressive loading bar tied to actual resource loading
- [ ] Different animations for different routes
- [ ] Reduced motion support for accessibility
- [ ] Custom loading messages per page

---

**Created:** November 28, 2025  
**Version:** 1.0.0
