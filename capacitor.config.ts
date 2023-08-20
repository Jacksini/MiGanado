import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miganado.app',
  appName: 'Mi Ganado',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
