// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDwCGs6YlVtrg2jaEWBKpkyxqruUb3-h3Y",
  authDomain: "learning-coding-9717e.firebaseapp.com",
  databaseURL: "https://learning-coding-9717e-default-rtdb.firebaseio.com",
  projectId: "learning-coding-9717e",
  storageBucket: "learning-coding-9717e.firebasestorage.app",
  messagingSenderId: "1591642126",
  appId: "1:1591642126:web:94ed3b0611e2db8c64d45f",
  measurementId: "G-H8CL8RQQR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

////////////////////////Submited///////////////////////
document.querySelector("input#submit").addEventListener ('click', function(){
  const title = document.querySelector("input#title").value;
  const Sourcescode = document.querySelector("input#Sourcescode").value;


  if(!title == "" || !fullcode == ""){
    setTimeout(() => {
      document.querySelector(".sc").innerHTML = "Sucssfully";

      set(ref(db, "posts/" + title),{
        title : title,
        fullcode : Sourcescode
      })

    }, 2000);
  }else{
    document.querySelector('.dn').innerHTML = "!Plase All Input flap";
  }
})


