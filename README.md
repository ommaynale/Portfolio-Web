# React Portfolio

A modern, fully-featured portfolio website built with React, Vite, and JavaScript. This is a complete conversion from the original Next.js TypeScript project.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional portfolio layout
- 🌗 **Dark Mode** - Seamless light/dark theme switching with animated transitions
- 🎭 **WebGL Animations** - Stunning shader-based background and portrait morphing effects using OGL
- ⚡ **Smooth Scrolling** - Buttery smooth page scrolling with Lenis
- 🎯 **Physics-Based UI** - Interactive stack component powered by Matter.js
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Performance Optimized** - Fast loading times and smooth 60fps animations
- 🎬 **Rich Animations** - Motion (Framer Motion) for fluid UI transitions

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Routing**: React Router 6
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **WebGL**: OGL
- **Physics**: Matter.js
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or the next available port).

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
react-portfolio/
├── public/               # Static assets
│   ├── josh.webp
│   ├── josh_wave.webp
│   ├── linkedin.svg
│   └── x.svg
├── src/
│   ├── components/      # React components
│   │   ├── about/      # About page components
│   │   ├── contact/    # Contact components
│   │   ├── hero/       # Hero section components
│   │   ├── layout/     # Layout components (Nav, etc.)
│   │   ├── projects/   # Projects showcase
│   │   ├── shaders/    # WebGL shader components
│   │   └── ui/         # Reusable UI components
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Key Components

### WebGL Effects
- **ShaderFlow** - Animated gradient background using custom GLSL shaders
- **PortraitMorph** - Interactive portrait that morphs on hover with fluid transitions

### Interactive Elements
- **Stack** - Physics-based draggable technology stack using Matter.js
- **Experience** - Expandable work history with smooth animations
- **PolaroidStrip** - Interactive polaroid-style photo gallery

### Layout
- **Nav** - Animated navigation with theme toggle
- **PageBackdrop** - Animated shader background
- **SmoothScroll** - Lenis-powered smooth scrolling

## 🎯 Features Breakdown

### Dark Mode
- System preference detection
- Manual toggle with smooth transition animation
- CSS custom properties for theming
- View Transition API for theme switching animation

### Animations
- Framer Motion for UI animations
- Custom motion primitives (FadeIn, ScaleUnblur)
- Reduced motion support for accessibility
- Spring physics for natural motion

### WebGL
- Custom GLSL shaders for background
- Portrait morphing with fluid displacement
- Performance optimized (only renders when visible)
- Responsive canvas sizing

### Accessibility
- Keyboard navigation support
- Skip to content link
- ARIA labels and roles
- Focus management
- Reduced motion preferences

## 🔧 Configuration

### Tailwind
Custom configuration in `tailwind.config.js` with extended colors, spacing, and font families.

### Vite
Path aliases configured (`@` points to `src/`) in `vite.config.js`.

## 📝 Customization

1. **Personal Info**: Update content in page components (`src/pages/`)
2. **Projects**: Edit project data in `src/components/projects/projects.jsx`
3. **Experience/Education**: Update data in respective component files
4. **Colors**: Modify CSS variables in `src/index.css`
5. **Images**: Replace images in `public/` folder

## 🌐 Deployment

The build output in `dist/` can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect to repository

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Images in projects section are from Dribbble (replace with your own work)
- Icons from Lucide React
- Fonts: System fonts (can be customized)

---

Built with ❤️ using React + Vite
