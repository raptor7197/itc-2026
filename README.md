# ITC India 2026- Conference Website

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Overview

The official website for **IEEE International Test Conference (ITC) India 2025**, scheduled for **July 20-22, 2025**. This modern, responsive web application serves as the central hub for conference information, registration, submissions, and attendee resources.


### Installation

```bash
# Clone the repository
git clone https://github.com/adityakatoch2003/ITC-Web.git
cd ITC-Web/ITCWeb

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The development server will be available at `http://localhost:5173`

## 📁 Project Structure

```
ITCWeb/
├── src/
│   ├── Pages/
│   │   ├── Home.jsx                 # Homepage with conference overview
│   │   ├── Committee.jsx            # Committee members and roles
│   │   ├── ConferenceCFP.jsx        # Call for Papers
│   │   ├── CFT.jsx                  # Call for Tutorials
│   │   ├── CFF.jsx                  # Call for Fellowship
│   │   ├── ART.jsx                  # Academia Research Track
│   │   ├── TRC.jsx                  # Test Reality Check
│   │   ├── HackathonMain.jsx        # Hackathon information
│   │   ├── Agenda.jsx               # Conference agenda
│   │   ├── Registration.jsx         # Registration portal
│   │   ├── AuthorKit.jsx            # Author resources
│   │   ├── Sponsors.jsx             # Sponsor information
│   │   ├── CallForSponsors.jsx      # Sponsorship opportunities
│   │   └── ContactUs.jsx            # Contact information
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── sheet.tsx
│   │   └── magicui/                 # Special effect components
│   │       ├── aurora-text.tsx
│   │       └── magic-card.tsx
│   ├── Pages/Components/
│   │   ├── Header.jsx               # Main navigation
│   │   ├── Footer.jsx               # Footer component
│   │   ├── CommCard.jsx             # Committee member cards
│   │   ├── Timeline.tsx             # Event timeline
│   │   └── StarBorder/              # Animated border effects
│   ├── assets/                      # Images and static assets
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
│   ├── images/                      # Conference images
│   ├── logos/                       # Sponsor and partner logos
│   └── documents/                   # PDFs and resources
├── package.json
├── vite.config.js
├── tailwind.config.js
├── components.json                  # Shadcn/ui configuration
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` (blue-800)
- **Secondary Blue**: `#3b82f6` (blue-500)
- **Accent Blue**: `#60a5fa` (blue-400)
- **Background**: `#0f172a` (slate-900)
- **Text**: `#ffffff` (white)

### Typography
- **Primary Font**: Poppins
- **Fallback**: Arial, sans-serif

### Component Library
- **Shadcn/ui**: Modern, accessible components
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 📅 Conference Information

### Event Details
- **Conference Name**: IEEE International Test Conference (ITC) India 2025
- **Dates**: July 20-22, 2025
- **Location**: India
- **Theme**: Test Week India 2025

### Key Tracks
1. **Conference Papers**: Technical paper presentations
2. **Tutorials**: Educational sessions by industry experts
3. **Academia Research Track**: Academic research presentations
4. **Test Reality Check**: Industry case studies
5. **Hackathon**: Technical competition
6. **Fellowship Program**: Student support initiative

### Important Dates
- **Paper Submission Deadline**: [To be announced]
- **Tutorial Proposal Deadline**: [To be announced]
- **Fellowship Application Deadline**: [To be announced]
- **Early Bird Registration**: [To be announced]
- **Conference Dates**: July 20-22, 2025

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Key Dependencies
- **React**: 18.3.1 - UI framework
- **React Router DOM**: 7.1.5 - Client-side routing
- **Framer Motion**: 12.4.3 - Animation library
- **Tailwind CSS**: 3.4.17 - Utility-first CSS
- **Vite**: 6.0.5 - Build tool and dev server

### Development Guidelines
1. Follow React best practices and hooks patterns
2. Use Tailwind CSS for styling
3. Implement responsive design (mobile-first)
4. Optimize images and assets
5. Maintain accessibility standards
6. Test across different devices and browsers

## 🌐 Deployment

### Production Build
```bash
npm run build
```



**© 2025 IEEE International Test Conference India. All rights reserved.**
