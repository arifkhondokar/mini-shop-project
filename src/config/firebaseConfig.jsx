import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjl43udHV0KYIgkqQq2XKZBu-FFhFD4kg",
  authDomain: "shop-project-99839.firebaseapp.com",
  projectId: "shop-project-99839",
  storageBucket: "shop-project-99839.appspot.com",
  messagingSenderId: "1084856493282",
  appId: "1:1084856493282:web:4a86c5235481512cc96abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig