
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}