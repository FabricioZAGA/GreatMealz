var firebaseConfig = {
  apiKey: "AIzaSyDAggylupkweGsMpSlk5Kaz3EkG2keFJvE",
  authDomain: "greatmealz.firebaseapp.com",
  projectId: "greatmealz",
  storageBucket: "greatmealz.appspot.com",
  messagingSenderId: "969476681075",
  appId: "1:969476681075:web:7545fb2ae3404503122906",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var batch = db.batch();
