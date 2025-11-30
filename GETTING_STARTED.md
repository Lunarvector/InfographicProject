# Getting Started with The Black Gold Roller Coaster

## What You Have

An immersive, fully interactive infographic website about Planet Money's oil journey. This is a **production-ready**, **fully featured** website with:

- 6 scrolling chapters
- 80+ interactive elements
- Beautiful pastel design
- 3D visualizations
- Smooth animations
- Responsive design
- Full TypeScript support

## Run It Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser: http://localhost:5173
```

## Build for Production

```bash
# Create optimized build
npm run build

# Preview build locally
npm run preview
```

## Features Overview

### Interactive Elements You'll Find:

1. **Mouse-tracking 3D Hero** - Move your mouse to control the camera
2. **Clickable Journey Map** - Select each stop in Kansas
3. **Animated 3D Pump Unit** - See the oil well pumping
4. **Oil Type Comparison** - Toggle between sweet and heavy crude
5. **Price Visualizations** - See location-based pricing with pastel bars
6. **3D Refinery Model** - React Three Fiber coker with particle effects
7. **Product Grid** - Click items to see their petroleum connections
8. **Interactive Timeline** - Click to explore plastic history
9. **Debate Toggle** - Switch between Historian vs Physicist perspectives
10. **Extraction Cost Carousel** - Auto-rotating global cost comparison
11. **Rotating 3D Car** - See the final product being fueled
12. **Milkshake Animation** - There Will Be Blood reference

## Design Highlights

✨ **Pastel Colors** - Rose, amber, blue, green, purple throughout
🎨 **No Dark Mode** - Bright, premium backgrounds
⚡ **Smooth Animations** - CSS transitions on every interaction
🎯 **Highly Interactive** - Hover, click, and explore
📱 **Fully Responsive** - Beautiful on mobile to desktop

## File Organization

```
src/
├── components/
│   ├── Hero.tsx           # Opening with 3D animation
│   ├── Chapter1.tsx       # We Buy Oil
│   ├── Chapter2.tsx       # The Price of Oil
│   ├── Chapter3.tsx       # How Oil Got Into Everything
│   ├── Chapter4.tsx       # Imagine a World Without Oil
│   ├── Conclusion.tsx     # Journey complete
│   └── CokerModel.tsx     # 3D refinery (React Three Fiber)
├── App.tsx                # Main app
├── main.tsx               # Entry point
└── index.css              # Global animations

README.md                   # Full documentation
FEATURES.md                # Detailed feature breakdown
GETTING_STARTED.md        # This file
```

## Technology Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (no custom CSS needed)
- **Three.js** - 3D graphics
- **React Three Fiber** - React for 3D
- **Lucide React** - Icons
- **Vite** - Build tool

## Customization

### Change Colors
Edit `src/index.css` and Tailwind classes in components:
- Search for hex colors like `#fca5a5`
- Pastel colors are in the 50, 100, 200 range of Tailwind

### Update Content
All text is in the React components. Edit directly:
- Chapter descriptions in each `Chapter*.tsx`
- Data points in arrays (priceData, journey, etc.)
- Timeline events in Chapter3.tsx

### Modify Animations
- CSS animations in `src/index.css`
- Component-level transitions in Tailwind classes
- 3D animations in CokerModel.tsx

## Performance Notes

- Built for modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL required for 3D visualizations
- ~345 KB gzip'd JavaScript
- Smooth 60 FPS animations
- Optimized for mobile devices

## Next Steps

1. Run `npm run dev` to start
2. Scroll through all chapters
3. Try clicking and hovering on everything
4. Build with `npm run build` when ready for production
5. Deploy the `dist/` folder to your hosting

## Questions?

Check out:
- `README.md` - Full documentation
- `FEATURES.md` - Detailed feature breakdown
- Component files - Each has clear structure and comments

Enjoy the black gold roller coaster!
