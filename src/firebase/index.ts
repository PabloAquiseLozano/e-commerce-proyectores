import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { currentConfig, currentEnvironment } from "@/config";

// Initialize Firebase
const app = initializeApp(currentConfig.firebaseApp);

// Initialize Firebase services
const firestore = getFirestore(app);
const storage = getStorage(app);
const authentication = getAuth(app);

const { version, apiUrl } = currentConfig;

console.log(currentEnvironment, ":", version);

export { firestore, storage, apiUrl, authentication };
