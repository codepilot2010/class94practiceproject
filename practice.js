var firebaseConfig = {

    apiKey: "AIzaSyByDVoLpqZ2ubCYXCfo0TSjdI3ZdohuHlk",
  
    authDomain: "kwitter-6fbbf.firebaseapp.com",
  
    databaseURL: "https://kwitter-6fbbf-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-6fbbf",
  
    storageBucket: "kwitter-6fbbf.appspot.com",
  
    messagingSenderId: "881787886982",
  
    appId: "1:881787886982:web:f63b0d6bb0f8dd3ff4a007"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}