//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDQb7_ep0iBtDGWVSKAV9ctMphBp0Phy-g",
      authDomain: "kwitter-dfa4b.firebaseapp.com",
      databaseURL: "https://kwitter-dfa4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-dfa4b",
      storageBucket: "kwitter-dfa4b.appspot.com",
      messagingSenderId: "228931856940",
      appId: "1:228931856940:web:a73edf0c0074508710bf89",
      measurementId: "G-ML2MXN5YYC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
