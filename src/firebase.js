import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDOmki4JAbLvQYJLuz_V82GXA7V0nMue2s",
  authDomain: "chat-app-c2a55.firebaseapp.com",
  projectId: "chat-app-c2a55",
  storageBucket: "chat-app-c2a55.appspot.com",
  messagingSenderId: "688851897880",
  appId: "1:688851897880:web:c67a83d050554a0c11bd6d",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
