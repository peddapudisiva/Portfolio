# 3D Portfolio

Modern 3D interactive developer portfolio built with React, Three.js (via React Three Fiber), and Vite.

## Setup

Since PowerShell script execution is blocked, you need to install dependencies manually using Command Prompt or enable PowerShell scripts.

### Option 1: Use Command Prompt
```cmd
npm install
npm run dev
```

### Option 2: Enable PowerShell Scripts (Run PowerShell as Administrator)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then in the portfolio directory:
```powershell
npm install
npm run dev
```

## Tech Stack
- **React** - UI Framework
- **Vite** - Build tool
- **React Three Fiber** - 3D graphics (Three.js wrapper for React)
- **@react-three/drei** - Useful helpers for R3F
- **GSAP** - Animation library
- **Vanilla CSS** - Styling

## Features
- ✨ Interactive 3D background with floating spheres
- 🌌 Starfield background
- 🎨 Dark theme with blue/purple gradients
- 💎 Glassmorphism UI elements
- 📱 Fully responsive design
- ⚡ Smooth scroll animations
- 🎯 Clean, professional layout

## Build for Production
```bash
npm run build
npm run preview
```
