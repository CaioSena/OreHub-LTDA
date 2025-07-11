# Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) using TypeScript. The application follows a modern architecture with a clean separation between client and server code, utilizing Drizzle ORM for database operations and shadcn/ui for the frontend component library.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot reloading with tsx

## Project Structure
```
├── client/          # Frontend React application
│   ├── src/         # React source code
│   └── index.html   # HTML entry point
├── server/          # Backend Express application
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Development server setup
├── shared/          # Shared code between client and server
│   └── schema.ts    # Database schema and types
└── migrations/      # Database migration files
```

# Key Components

## Database Layer
- **Schema Definition**: Centralized in `shared/schema.ts` using Drizzle ORM
- **Type Safety**: Automatic TypeScript types generated from schema
- **Validation**: Zod schemas for input validation derived from database schema
- **Storage Interface**: Abstract storage interface in `server/storage.ts` with in-memory implementation for development

## API Layer
- **RESTful Design**: All API routes prefixed with `/api`
- **Request Logging**: Automatic logging of API requests with timing and response data
- **Error Handling**: Centralized error handling middleware
- **Type Safety**: Shared types between client and server

## Frontend Components
- **Component Library**: Complete set of shadcn/ui components
- **Design System**: Consistent theming with CSS variables and Tailwind
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Built on Radix UI primitives for accessibility compliance

## Development Experience
- **Hot Reloading**: Both client and server support hot reloading
- **Type Checking**: Comprehensive TypeScript configuration
- **Path Aliases**: Configured aliases for clean imports (`@/`, `@shared/`)
- **Code Quality**: ESLint and Prettier configurations (implied by structure)

# Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Calls**: HTTP requests to Express.js backend via `/api` routes
3. **Data Access**: Backend uses storage interface to interact with database
4. **Database Operations**: Drizzle ORM handles SQL generation and type safety
5. **Response Flow**: Data flows back through the same chain with proper error handling

# External Dependencies

## Frontend Dependencies
- **UI Framework**: React 18 with modern hooks
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: TanStack Query for server state caching
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Utilities**: date-fns for date manipulation, clsx for conditional classes

## Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Store**: PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution

## Build Tools
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for production bundling
- **Development**: Concurrent development servers for full-stack development

# Deployment Strategy

## Build Process
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema changes

## Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Separate development and production configurations
- **Replit Integration**: Special handling for Replit environment with development banners and cartographer plugin

## Production Deployment
- **Static Assets**: Frontend served as static files from Express
- **API Routes**: Backend handles all `/api` routes
- **Database**: Neon serverless PostgreSQL for scalable data storage
- **Sessions**: PostgreSQL-backed sessions for user state persistence

The application is designed for easy deployment to platforms like Replit, with automatic handling of development vs production environments and proper static asset serving.