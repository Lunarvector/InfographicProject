# The Black Gold Roller Coaster: Planet Money Buys Oil

An immersive, interactive infographic experience exploring the complete journey of one barrel of oil from extraction to consumption.

## Features

### Visual Design
- **Light Pastel Colors**: Beautiful, clean palette with soft rose, amber, blue, and green tones
- **No Dark Mode**: Bright, refreshing backgrounds that feel premium and modern
- **Smooth Animations**: All transitions powered by native CSS animations
- **3D Models**: Interactive three.js visualizations bringing data to life

### Interactive Elements

#### Hero Section
- Mouse-tracking 3D animated torus and sphere
- Gradient text effects
- Smooth scroll indicator

#### Chapter 1: We Buy Oil
- Interactive journey map with clickable milestones
- 3D animated pumping unit (stripper well)
- Oil type comparison toggle (Sweet vs Heavy)
- Real-time price location comparison with pastel-colored bars
- Profit distribution breakdown

#### Chapter 2: The Price of Oil
- Trading floor slang cards
- Animated speculation flow visualizations
- Auto-rotating extraction cost comparison
- Jason's roller coaster decision-making scenario
- Economic perspective cards

#### Chapter 3: How Oil Got Into Everything
- React Three Fiber 3D Coker model with particle effects
- Animated barrel product breakdown with pastel progress bars
- Interactive "oil products" grid (click to learn more)
- Interactive timeline showing plastic history (1907-2024)
- Cost comparison: natural vs petroleum alternatives

#### Chapter 4: Imagine a World Without Oil
- Interactive perspective toggle: Historian vs Physicist
- Fracking revolution impact cards
- Forest deforestation visualization
- Alternative history scenarios

#### Conclusion
- 3D rotating car getting fueled
- "There Will Be Blood" milkshake metaphor visualization
- Complete journey recap
- Animated straw physics simulation

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling with pastel color system
- **Three.js** - 3D graphics engine
- **React Three Fiber** - React renderer for three.js
- **Lucide React** - Beautiful icons
- **Vite** - Lightning-fast build tool

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to experience the journey.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Opening sequence with 3D visuals
│   ├── Chapter1.tsx          # We Buy Oil
│   ├── Chapter2.tsx          # The Price of Oil
│   ├── Chapter3.tsx          # How Oil Got Into Everything
│   ├── Chapter4.tsx          # Imagine a World Without Oil
│   ├── Conclusion.tsx        # Journey complete with milkshake
│   └── CokerModel.tsx        # React Three Fiber 3D refinery
├── App.tsx                   # Main app with scroll detection
├── main.tsx                  # Entry point
└── index.css                 # Global animations and styles
```

## Key Interactions

- **Hover Effects**: Buttons, cards, and elements scale up on hover
- **Click Interactions**: Journey milestones, oil types, products, timeline events
- **Scroll Animations**: Sections fade in as you scroll into view
- **Mouse Tracking**: Hero section camera follows cursor
- **Auto-rotating Cards**: Extraction cost cards cycle automatically
- **Active States**: Clear visual feedback for selected items

## Design Principles

✨ **Premium Feel**: Pastel colors, clean typography, generous spacing
🎨 **Visual Hierarchy**: Clear distinction between sections with colors
⚡ **Performance**: Optimized animations that run smoothly
🎯 **Accessibility**: Large text, high contrast, clear interactive targets
📱 **Responsive**: Adapts beautifully from mobile to desktop

## Data Visualization

All data comes directly from Planet Money's reporting:
- Oil prices by location in Kansas
- Barrel output percentages from refinery
- Extraction costs worldwide
- Historical timeline of plastic
- Economic perspectives on alternative futures

Enjoy the black gold roller coaster!
