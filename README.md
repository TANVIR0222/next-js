# Custom Hook Project

A modern Next.js application with App Router, featuring a comprehensive dashboard system with multiple routes and components.

## 🚀 Features

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Modern Dashboard System** with multiple sections
- **Parallel Routes** for complex layouts
- **Route Groups** for organized navigation
- **Responsive Design** with mobile-first approach
- **Dark Mode** support
- **TypeScript** for type safety

## 📁 Project Structure

```
├── app/
│   ├── (auth)/                 # Authentication routes
│   ├── dashboard/              # Dashboard system
│   │   ├── (.)report/         # Modal report routes
│   │   ├── (..)profile/       # Nested profile routes
│   │   ├── dashboad-main/     # Main dashboard
│   │   │   ├── @feed/         # Parallel route for feed
│   │   │   └── @team/         # Parallel route for team
│   │   ├── report/            # Report page
│   │   ├── section/           # Section page
│   │   │   └── (..)(..)setting/ # Nested setting routes
│   │   └── page.tsx           # Main dashboard page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   ├── profile/               # Profile page
│   └── setting/               # Settings page
├── public/                    # Static assets
├── .next/                     # Build output (gitignored)
├── package.json               # Dependencies
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
└── README.md                 # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd custom-hook
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Available Routes

### Public Routes

- `/` - Landing page with Next.js branding
- `/profile` - User profile page

### Dashboard Routes

- `/dashboard` - Main dashboard with navigation links
- `/dashboard/report` - Report page
- `/dashboard/section` - Section management page
- `/dashboard/dashboad-main` - Enhanced dashboard with feed and team components

### Settings Routes

- `/setting` - Application settings
- `/dashboard/section/(..)(..)setting` - Nested settings within section

### Parallel Routes

- `/dashboard/dashboad-main/@feed` - Feed component (parallel)
- `/dashboard/dashboad-main/@team` - Team component (parallel)

## 🎨 Styling

The project uses **Tailwind CSS v4** for styling with:

- Modern utility-first approach
- Dark mode support
- Responsive design patterns
- Custom color schemes
- TypeScript support for better developer experience

### Key Styling Features

- Dark mode with `dark:` prefix classes
- Responsive design with `sm:`, `md:`, `lg:` prefixes
- Custom font loading with Next.js Geist fonts
- Global CSS variables for theming

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Build & Deployment

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

### Deployment

The project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

## 🛡️ TypeScript Configuration

The project includes comprehensive TypeScript configuration:

- Strict mode enabled
- Next.js specific types included
- Path aliases configured
- Modern ES features supported

## 📦 Dependencies

### Core Dependencies

- **next**: Next.js 16.0.10
- **react**: React 19.2.1
- **react-dom**: React DOM 19.2.1

### Development Dependencies

- **typescript**: TypeScript support
- **tailwindcss**: CSS framework
- **eslint**: Code linting
- **@types/react**: React type definitions
- **@types/node**: Node.js type definitions

## 🎯 Key Features Explained

### App Router

Uses Next.js 13+ App Router for:

- Server-side rendering
- Streaming and suspense
- Layout-based routing
- Error handling

### Route Groups

Organized routing with:

- `(auth)` - Authentication pages
- `(.)report` - Modal routes
- `(..)profile` - Nested profile routes

### Parallel Routes

Advanced layouts with:

- `@feed` - Feed component slot
- `@team` - Team component slot

### Modern Styling

- Tailwind CSS v4
- CSS Grid and Flexbox
- Custom CSS variables
- Responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   lsof -ti:3000 | xargs kill
   ```

2. **TypeScript errors**

   ```bash
   npm run type-check
   ```

3. **Build failures**
   - Check Node.js version (16+)
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

### Support

For questions and support, please check:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ using Next.js, React, and Tailwind CSS.
