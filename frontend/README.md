# Frontend

Be The Hero web dashboard, built with React and Vite.

## Requirements

- Node.js 22 or newer.
- Yarn 1.x.
- Backend running (see the API section below for the URL).

## Commands

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Create a production build:

```bash
yarn build
```

Serve the production build locally:

```bash
yarn preview
```

Check for vulnerabilities:

```bash
yarn audit
```

## Current Stack

- React 18
- Vite 6
- React Router DOM 5
- React Icons 4
- Axios 1

## API

The HTTP client is defined in `src/services/api.js` and points to `http://localhost:3333`.

Keep the backend running before using the login, registration, profile, and case creation screens.
