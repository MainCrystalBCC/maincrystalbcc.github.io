// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC-itolTF-ceIQ9Vx5rqNU7zhZwYtBe1bo",
   authDomain: "card-games-cd22a.firebaseapp.com",
   projectId: "card-games-cd22a",
   storageBucket: "card-games-cd22a.appspot.com",
   messagingSenderId: "1073500076157",
   appId: "1:1073500076157:web:15891e004ed49f73dbd914",
   measurementId: "G-M23HFY0L6F"
};

const app = initializeApp(firebaseConfig);

const docRef = doc(db, "User", "up");
const docSnap = await getDoc(docRef);
console.log(docSnap.data());
