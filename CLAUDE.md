# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

Development:
```bash
yarn install    # Install dependencies
yarn dev        # Start development server
yarn build      # Build and export static files
yarn start      # Start production server
yarn lint       # Run ESLint
```

## Architecture Overview

This is a Next.js-based portfolio/blog site for Mori Atsushi with static export capability. The project follows atomic design principles with a clear component hierarchy.

### Project Structure

- **src/pages/**: Next.js pages including blog routes with dynamic routing
- **src/components/**: Atomic design component structure (atoms/molecules/organisms/pages)
- **src/api/**: API layer with caching, request handling, and data mapping
- **src/entities/**: TypeScript interfaces for data models (blog, blogList, blogPagingList)
- **src/hooks/**: Custom React hooks for state management and side effects
- **src/helper/**: Utility functions for config, gtag, RSS, service worker, URLs

### Key Technologies

- Next.js 12 with TypeScript and static export
- styled-components for CSS-in-JS styling
- React Markdown for blog content rendering
- FontAwesome for icons
- Axios for API requests with custom caching layer

### Architecture Patterns

- **API Layer**: Centralized request handling with response mappers and caching (BlogCache, BlogListCache, PopularBlogCache)
- **Component Structure**: Atomic design with atoms (basic UI), molecules (composed components), organisms (complex sections)
- **Data Flow**: API calls through src/api/blogs.ts with entity mapping and local caching
- **Styling**: Consistent use of styled-components with theme colors (#333333, #fbb03b)
- **Page Generation**: Static site generation with dynamic blog routes ([id].tsx, list/[id].tsx)

### Blog System

The blog functionality uses a paginated API with caching:
- Blog listing with pagination support
- Popular blog sections
- Individual blog detail pages with markdown rendering
- Read tracking via POST requests