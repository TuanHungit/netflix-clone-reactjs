import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
const config = {
  apiKey: 'AIzaSyA7asYL9wd9Wv90Wd0hotz8UEwlAb8mWJY',
  authDomain: 'react-netfilx-clone.firebaseapp.com',
  projectId: 'react-netfilx-clone',
  storageBucket: 'react-netfilx-clone.appspot.com',
  messagingSenderId: '729821422213',
  appId: '1:729821422213:web:71597fb48506ebf69cbfec',
  measurementId: 'G-LSDTY27PFP',
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
