# Weather App

A modern, responsive weather application built with Next.js 15, featuring real-time weather data, internationalization support, and a beautiful user interface.

## Features

- 🌤️ Real-time weather data with detailed forecasts
- 🌍 Internationalization support (English & Turkish)
- 📱 Responsive design with mobile-first approach
- 🔍 Location search with autocomplete
- 📈 7-day weather forecast
- ⚡ Fast and optimized with Next.js App Router
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion animations
- 💾 Local storage for search history and preferences
- 🌡️ Temperature unit conversion (Celsius/Fahrenheit)

## Tech Stack

- **Framework:** Next.js 15.3.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Data Fetching:** SWR
- **Icons:** Lucide React
- **Date/Time:** Day.js
- **Notifications:** Sonner

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm
- WeatherAPI.com API key

## API Keys Required

This project requires a WeatherAPI.com API key to function properly.

1. Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your API key from the dashboard

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your API key:

   ```bash
   WEATHERAPI_APIKEY=your_actual_api_key_here
   WEATHERAPI_BASEURL=https://api.weatherapi.com/v1
   WEATHERAPI_DEFAULT_LOCATION=Istanbul
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
├── app/                    # App Router pages and API routes
│   ├── [locale]/          # Internationalized routes
│   │   ├── weather/       # Weather detail pages
│   │   └── [...rest]/     # Catch-all route for 404s
│   └── api/               # API routes
│       └── search/        # Location search endpoint
├── components/            # Reusable UI components
│   ├── button/
│   ├── detail-template/   # Weather detail components
│   ├── header/            # Header with search and controls
│   ├── stat-card/         # Weather statistics cards
│   └── weather-card/      # Weather display cards
├── data/                  # Static data files
├── hooks/                 # Custom React hooks
├── i18n/                  # Internationalization configuration
├── lib/                   # Library configurations
├── locales/               # Translation files
├── providers/             # React context providers
├── stores/                # Zustand stores
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## Environment Variables

| Variable                      | Description                       | Required | Default                         |
| ----------------------------- | --------------------------------- | -------- | ------------------------------- |
| `WEATHERAPI_APIKEY`           | Your WeatherAPI.com API key       | ✅       | -                               |
| `WEATHERAPI_BASEURL`          | WeatherAPI base URL               | ✅       | `https://api.weatherapi.com/v1` |
| `WEATHERAPI_DEFAULT_LOCATION` | Default location for weather data | ❌       | `Istanbul`                      |

## Internationalization

The app supports multiple languages:

- English (en) - Default
- Turkish (tr)

Language switching is automatic based on user preference and can be manually changed using the language switcher in the header.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

## Assumptions & Design Decisions

### Technical Decisions

1. **Next.js App Router**: Chose the new App Router over Pages Router for better performance, streaming, and modern React features like Server Components.

2. **Zustand for State Management**: Selected over Redux/Context API for its simplicity and minimal boilerplate while providing powerful state management capabilities.

3. **SWR for Data Fetching**: Implemented for its excellent caching, revalidation, and error handling features, particularly useful for weather data that needs periodic updates.

4. **TypeScript**: Used throughout the project for better developer experience, type safety, and reduced runtime errors.

5. **Tailwind CSS 4**: Chose for rapid development, utility-first approach, and excellent responsive design capabilities.

6. **next-intl**: Selected for robust internationalization support with server-side rendering compatibility.

### UX/UI Decisions

1. **Mobile-First Design**: Prioritized mobile experience as weather apps are frequently accessed on mobile devices.

2. **Search History**: Implemented persistent search history (limited to 5 items) for better user experience and quick access to frequently checked locations.

3. **Unit Preferences**: Added temperature unit switching with persistence to accommodate global users.

4. **Loading States**: Implemented comprehensive loading states and error handling for better perceived performance.

5. **Animations**: Used Framer Motion sparingly for subtle, meaningful animations that enhance UX without being distracting.

### API Design Decisions

1. **Server-Side API Routes**: Created Next.js API routes to proxy WeatherAPI calls, keeping API keys secure and enabling request modification.

2. **Minimum Query Length**: Implemented 4-character minimum for search queries to reduce API calls and improve search relevance.

3. **Error Handling**: Added comprehensive error handling with user-friendly messages and fallback states.

### Performance Optimizations

1. **Turbopack**: Enabled for faster development builds.
2. **Image Optimization**: Used Next.js Image component for weather icons.
3. **Code Splitting**: Leveraged automatic code splitting from Next.js App Router.
4. **Local Storage**: Used for non-critical data (preferences, history) to reduce API calls.

### Assumptions

1. **Weather API Reliability**: Assumed WeatherAPI.com provides reliable, up-to-date weather data with good global coverage.

2. **Browser Support**: Targeted modern browsers with ES6+ support, assuming users have updated browsers for web app usage.

3. **Data Freshness**: Assumed that weather data doesn't need real-time updates beyond what SWR provides with its revalidation strategies.

4. **User Location**: Assumed users are comfortable with manual location search rather than implementing geolocation (privacy considerations).

5. **Language Support**: Started with English and Turkish, with architecture allowing easy addition of more languages.

## Contributing

The project follow semantic commit conventions to maintain a clean and meaningful commit history. This helps with automated changelog generation and better project maintenance.

### Commit Message Format

Each commit message should follow this structure:

```text
<type>: <description>
```

### Commit Types

- **feat**: A new feature for the user
- **fix**: A bug fix for the user
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Changes to build system or dependencies
- **ci**: Changes to CI/CD configuration
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Example

- feat: profile page
- style: missing semicolons
