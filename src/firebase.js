import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAImJeR5rMuD371YYgwhxqhDYsWHx8cDNI",
  authDomain: "comments-dp-reactjs.firebaseapp.com",
  databaseURL: "https://comments-dp-reactjs.firebaseio.com",
  projectId: "comments-dp-reactjs",
  storageBucket: "comments-dp-reactjs.appspot.com",
  messagingSenderId: "460765297887"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
