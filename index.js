  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  
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
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  //get ref to database services
  const db = getDatabase(app);
// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('say_something').value
  var favourite_food = document.getElementById('favourite_food').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('0').value

  var user_ref = database.ref('User/' + 'up')
  user_ref.on('value', function(snapshot) {
    var data = user_ref.val()

    alert(data.a)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}