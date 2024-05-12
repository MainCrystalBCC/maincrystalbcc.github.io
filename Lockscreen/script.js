(function () {
    
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCc8czxvJ3G2Rx2QHlhvk_5Rh9OCx5EtWU",
    authDomain: "unblocked-gamez.firebaseapp.com",
    databaseURL: "https://unblocked-gamez-default-rtdb.firebaseio.com",
    projectId: "unblocked-gamez",
    storageBucket: "unblocked-gamez.appspot.com",
    messagingSenderId: "778528953010",
    appId: "1:778528953010:web:08bb0c32e1c18ce6ba6fab",
    measurementId: "G-JBD6MPEEK8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");

  //Add Login Event
  btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const password = txtPassword.value;

      const auth = firebase.auth();

      //sign in with firebase auth
      auth.signInWithEmailAndPassword(email, password).then(user =>{
          window.location.href = '../windows/index2.html';
      }).catch(err => {
          alert('No Account');
      });
      
  });

  //Add Signup Event
  btnSignup.addEventListener('click', e => {

      //get email and password
      const email = txtEmail.value;
      const password = txtPassword.value;

      const auth = firebase.auth();

      //sign in with firebase auth
      const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
          window.location.href = '../windows/index2.html';
      }).catch(err => {
          alert(err.message);
      });

  });


}());