# Be The Hero

Full stack application that connects NGOs with people who want to help published cases.

The repository is split into three apps:

- `backend`: Node.js API with Express, Knex, and SQLite.
- `frontend`: React web dashboard built with Vite.
- `mobile`: Expo/React Native app for browsing cases and contacting NGOs by email or WhatsApp.

## Requirements

- Node.js 22 or newer.
- Yarn 1.x.
- Expo Go to test the mobile app on a physical device, or a configured iOS/Android simulator.

## Backend

```bash
cd backend
yarn install
npx knex migrate:latest
yarn start
```

The API runs at `http://localhost:3333`.

Main scripts:

- `yarn start`: starts the API with `nodemon`.
- `yarn test`: runs the Jest test suite.
- `npx knex migrate:latest`: applies the SQLite development migrations.
- `npx knex migrate:rollback`: rolls back the latest migration.

Current main versions:

- Express 5
- Knex 3
- SQLite3 6
- Jest 30

## Frontend

```bash
cd frontend
yarn install
yarn dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173`.
The frontend consumes the API at `http://localhost:3333`, so keep the backend running.

Main scripts:

- `yarn dev`: starts the Vite development server.
- `yarn build`: creates the production build.
- `yarn preview`: serves the production build locally.

Current main versions:

- React 18
- Vite 6
- React Router DOM 5
- Axios 1

## Mobile

```bash
cd mobile
yarn install
yarn ios
```

You can also use:

- `yarn android`: opens the app on Android.
- `yarn web`: opens the app in the browser.
- `yarn start`: starts Expo without selecting a platform.

The mobile app calculates the API host from the Expo development host and uses port `3333`.
To avoid request timeouts, keep the backend running on the same machine that is serving Expo.

Current main versions:

- Expo SDK 56
- React 19
- React Native 0.85
- React Navigation 7 with Native Stack

## Validation

Commands used to validate the current state:

```bash
cd backend
yarn audit
yarn test

cd ../frontend
yarn audit

cd ../mobile
yarn audit
npx expo-doctor
```

Backend, frontend, and mobile dependencies were updated to clear known audit vulnerabilities.
