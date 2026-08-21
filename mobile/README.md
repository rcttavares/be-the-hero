# Mobile

Expo/React Native Be The Hero app for browsing published cases and contacting NGOs by email or WhatsApp.

## Requirements

- Node.js 22 or newer.
- Yarn 1.x.
- Expo Go installed on a physical device, or a configured iOS/Android simulator.
- Backend running (see the API section below for host/port details).

## Commands

Install dependencies:

```bash
yarn install
```

Start Expo:

```bash
yarn start
```

Open on iOS:

```bash
yarn ios
```

Open on Android:

```bash
yarn android
```

Open in the browser:

```bash
yarn web
```

If Metro has stale cache, use:

```bash
npx expo start --clear
```

## API

The HTTP client is defined in `src/services/api.js`.

In development, the app automatically calculates the host from the Expo host and uses port `3333`.
For example, if Expo is running at `exp://192.168.18.207:8081`, the API will be called at:

```text
http://192.168.18.207:3333
```

To avoid timeouts:

- keep the backend running;
- keep the device and computer on the same network;
- confirm that port `3333` is reachable;
- on the iOS simulator, `localhost` points to the host machine, but on a physical device the app must use the machine IP.

## Validation

Check Expo compatibility:

```bash
npx expo-doctor
```

Check for vulnerabilities:

```bash
yarn audit
```

Generate a web export to validate the bundle:

```bash
npx expo export --platform web --clear
```

## Current Stack

- Expo SDK 56
- React 19
- React Native 0.85
- React Navigation 7 (Native Stack)
- Axios 1
- Expo Mail Composer
- Expo Splash Screen
- Expo Vector Icons

## Notes

The app uses `@react-navigation/native-stack` to avoid the old JS stack that emitted the `InteractionManager` warning on the current React Native version.
The splash screen is configured through the `expo-splash-screen` plugin in `app.json`.
