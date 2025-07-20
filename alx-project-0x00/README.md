# React Genesis: Mastering Next.js Setup

This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb's UI, including property listings with images, ratings, and interactive components.

## Features

- **Next.js 13+** with TypeScript
- **Tailwind CSS** for styling
- **ESLint** for code quality
- **Component-based architecture**
- **TypeScript interfaces** for type safety
- **Responsive design**

## Project Structure

```
alx-project-0x00/
├── components/           # Reusable React components
│   ├── Card.tsx         # Property card component
│   ├── Pill.tsx         # Pill/badge component  
│   └── Button.tsx       # Button component with variants
├── interfaces/          # TypeScript interfaces
│   └── index.ts         # Centralized type definitions
├── pages/              # Next.js pages (Pages Router)
│   ├── index.tsx       # Home page
│   ├── landing.tsx     # Landing page with components demo
│   └── about.tsx       # About page
├── public/             # Static assets
│   └── assets/
│       └── images/
└── styles/            # Global styles
```

## Components

### Card Component
A property listing card that displays:
- Property image
- Property details (title, location, rating)
- Amenity pills
- Guest capacity and pricing information

### Pill Component  
A reusable badge/tag component that accepts a `title` prop.

### Button Component (Advanced Task)
A versatile button component with multiple variants:
- **Sizes**: `small`, `medium`, `large`
- **Shapes**: `rounded-sm`, `rounded-md`, `rounded-full`
- **Props**: `title`, `size`, `shape`, `className`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev -- -p 3000
   ```

3. **Open your browser:**
   - Home page: http://localhost:3000
   - Landing page: http://localhost:3000/landing
   - About page: http://localhost:3000/about

## Pages

- **/** - Home page with Airbnb clone branding
- **/landing** - Demonstrates Card and Button components with multiple instances
- **/about** - Simple about page

## TypeScript Interfaces

All components are fully typed with TypeScript interfaces defined in `interfaces/index.ts`:

- `PillProps` - Interface for Pill component props
- `ButtonProps` - Interface for Button component props with optional variants
- `CardProps` - Interface for Card component with styles property

## Learning Objectives Covered

✅ Scaffold a Next.js project with TypeScript  
✅ Understand Next.js folder structure and organization  
✅ Implement basic routing (Pages Router)  
✅ Create reusable React components with TypeScript  
✅ Work with TypeScript interfaces for component props  
✅ Manage assets and static files  
✅ Develop component composition patterns  
✅ Implement responsive design with Tailwind CSS  
✅ Set up and configure ESLint  

## Best Practices Implemented

- **Component Organization**: Components in dedicated directory
- **Type Safety**: TypeScript interfaces for all props
- **Modular Design**: Reusable, single-responsibility components  
- **Code Quality**: ESLint configuration
- **Styling**: Utility-first approach with Tailwind CSS
- **Performance**: Next.js Image component for optimized images

## Notes

- Replace placeholder images in `public/assets/images/` with actual images
- Components use arrow function syntax consistently
- All styling follows Tailwind CSS utility patterns
- TypeScript provides full type safety throughout the application

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
