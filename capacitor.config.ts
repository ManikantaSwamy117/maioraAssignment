import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Amaze.Maiora',
  appName: 'Maiora',
  webDir: 'dist/maiora-mob',
 
  server: {
    androidScheme: 'https'
  },
 
};

export default config;
