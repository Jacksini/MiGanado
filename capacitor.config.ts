import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miganado.app',
  appName: 'Mi Ganado',
  webDir: 'dist/mi-ganado',
  server: {
    androidScheme: 'https'
  }
};

export default config;
