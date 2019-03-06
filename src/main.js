//eventos de DO

var config = {
    apiKey: "AIzaSyAylC42T8eTT0b7dsg082rrZLf1ooaxwj4",
    authDomain: "red-social-dolce..firebaseapp.com",
    databaseURL: "https://red-social-dolce.firebaseio.com",
    storageBucket: "red-social-dolce.appspot.com",
  };
  firebase.initializeApp(config);

const mail = document.getElementById("mail");
const registro = document.getElementById("registro");
const password = document.getElementById("password");
const entrar = document.getElementById("entrar");


entrar.addEventListener("click", () => {
  
  const mailUser = mail.value;
  const passwordUser = password.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(mailUser,passwordUser);
  promise
  .then(document.write("Ya entraste"))
  .catch( e => alert(e.message));

})



registro.addEventListener("click", () => {
  
  const mailUser = mail.value;
  const passwordUser = password.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(mailUser,passwordUser);
  promise
    .catch ( e => console.log(e.message));

});

firebase.auth().onAuthStateChanged ( firebaseUser => {
  if (firebaseUser){
    console.log(firebaseUser);
    // location.replace('views/muro.html')
  }else{
    console.log( "No reegistrado");
    // location.replace('index.html')

    
  }
})