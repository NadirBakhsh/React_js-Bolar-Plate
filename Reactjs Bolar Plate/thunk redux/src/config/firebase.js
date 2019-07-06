import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ7s6wLxDOSbYLHZ4JYWfm6RlltRoFViY",
    authDomain: "saylani-8099b.firebaseapp.com",
    databaseURL: "https://saylani-8099b.firebaseio.com",
    projectId: "saylani-8099b",
    storageBucket: "saylani-8099b.appspot.com",
    messagingSenderId: "1028251352751",
    appId: "1:1028251352751:web:bd5192a0ff285aed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function getRealtimeTodo() {
    return new Promise((resolve, reject) => {
        // db.collection('todo').get().then(snapshot => {
        db.collection('todo').onSnapshot(snapshot => {
            const temp = [];

            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            resolve(temp);
        })
    })
}

export default firebase;
export {
    getRealtimeTodo
}