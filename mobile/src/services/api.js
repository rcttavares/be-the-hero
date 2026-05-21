import axios from 'axios';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const getApiBaseURL = () => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    return `http://${window.location.hostname}:3333`;
  }

  const hostUri =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoClient?.hostUri ||
    Constants.manifest?.debuggerHost;

  const host = hostUri?.split(':')[0];

  return `http://${host || 'localhost'}:3333`;
};

const api = axios.create({
  baseURL: getApiBaseURL(),
});

export default api;
