import { default as Config } from "./firebase.json";

interface Config {
  common: ConfigCommon;
  production: ConfigEnvironment;
}

interface ConfigCommon {
  googleAnalytics: ConfigGoogleAnalytics;
}

interface ConfigGoogleAnalytics {
  measurementId: string;
}

interface ConfigEnvironment {
  version: string;
  firebaseApp: FirebaseApp;
  buckets: Buckets;
  apiUrl: string;
}

interface FirebaseApp {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface Buckets {
  users: string;
}

export const config: Config = {
  common: {
    googleAnalytics: {
      measurementId: "G-X4PHSDB8WB",
    },
  },
  production: {
    version: "0.01",
    firebaseApp: {
      apiKey: Config.FIREBASE_API_KEY as string,
      authDomain: Config.FIREBASE_AUTH_DOMAIN as string,
      projectId: Config.FIREBASE_PROJECT_ID as string,
      storageBucket: Config.FIREBASE_STORAGE_BUCKET as string,
      messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID as string,
      appId: Config.FIREBASE_APP_ID as string,
      measurementId: Config.FIREBASE_MEASUREMENT_ID as string,
    },
    buckets: {
      users: "gs://-",
    },
    apiUrl: "",
  },
};
