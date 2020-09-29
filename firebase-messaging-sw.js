importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
firebase.initializeApp  ({
    apiKey: "AIzaSyCNNLqj3YjkNF472eiolziOwr11wTD2stQ",
    authDomain: "reciclaje-7ac60.firebaseapp.com",
    databaseURL: "https://reciclaje-7ac60.firebaseio.com",
    projectId: "reciclaje-7ac60",
    storageBucket: "reciclaje-7ac60.appspot.com",
    messagingSenderId: "748328171631",
    appId: "1:748328171631:web:e030ca1565b77927e2359a",
    measurementId: "G-JYYZYDMNFF"
  });

firebase.messaging();