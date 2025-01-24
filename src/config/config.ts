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
      apiKey: process.env.FIREBASE_API_KEY as string,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
      projectId: process.env.FIREBASE_PROJECT_ID as string,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
      appId: process.env.FIREBASE_APP_ID as string,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID as string,
    },
    buckets: {
      users: "gs://-",
    },
    apiUrl: "",
  },
};
