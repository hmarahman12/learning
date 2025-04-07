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
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
let allpost = document.querySelector(".items-head");


let herf = localStorage.getItem("herf");

//on page function
function oneValue(){
  db.ref('posts/' + herf).on('value', function(snapshot){
    var posts = snapshot.val();

    allpost.innerHTML = '';
  
    //posts list
    allpost.innerHTML += `<a href="index.html"><img id="back-icone"; src="./back.webp" alt=""></a>
    
    <div class="items"> <div class="items-title">${posts.title}</div><div class="item-main">${posts.fullcode}</div></div> <div class="dis">  <textarea style="width: 100%; height: 92px;" readonly id="text">${posts.fullcode}</textarea> <input type="button" value="Copy"> </div>`;
    // let textarea = document.createElement ("textarea");
    // textarea.style="width: 100%; height: 92px;";
    // textarea.innerText = posts.fullcode;
    // document.querySelector('.dis').appendChild(textarea);

    //copy function
    document.querySelector("input[type='button']").addEventListener('click', function(){
      const text = document.querySelector("#text").value;
      navigator.clipboard.writeText(text).then(function(){
          document.querySelector("input[type='button']").value = "Copid";
      })
    });

    //back buttton function
    document.querySelector("#back-icone").addEventListener('click',function(){
      //data delete
      function deleteData(){
        db.ref('link/').remove();
      }deleteData()
//localstorage change link
      localStorage.clear()
    })
    
    })
}

//home page function
function homePage(){
  db.ref('posts/').on('value', function(snapshot){
    var posts = snapshot.val();
    

    allpost.innerHTML = '';

    //posts list
    for(postse in posts){
      let postsLists = posts[postse];
      allpost.innerHTML += `<div class="items"> <div class="items-title">${postsLists.title}</div><div class="item-main">${postsLists.fullcode}</div><input id="hiddenID" type="text" hidden value="${postsLists.title}"></div>`;

      let items = document.querySelectorAll(".items");
      items.forEach(e =>{
        e.addEventListener("click" , function(){
          // console.log(e.childNodes[3].value);
          localStorage.setItem("herf", e.childNodes[3].value);
          // console.log(location.href + "?" + "/" + e.childNodes[3].value);
          location.href = window.location.href + "?" + "/" + e.childNodes[3].value;

          function setLink() {
            firebase.database().ref('link/').set({
              link: e.childNodes[3].value
            });
          }setLink()
          
        })
          
    })
      
    }
  })
}

//condition
if(herf){
  oneValue()
}else{
  homePage()
}

//local storage value set
function setLink() {
  db.ref('link/').on('value', function(snapshot){
    var link = snapshot.val();
    if(link){
      localStorage.setItem("herf",link.link);
    }
      
  })
}setLink();
