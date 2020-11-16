
import firebase from 'firebase/app'
import "firebase/firestore"

const fApp ={
    apiKey: "AIzaSyA4NMhRf_wrTQgPkEqtUUTLSG-WADBliTs",
    authDomain: "ig-clone-c850b.firebaseapp.com",
    databaseURL: "https://ig-clone-c850b.firebaseio.com",
    projectId: "ig-clone-c850b",
    storageBucket: "ig-clone-c850b.appspot.com",
    messagingSenderId: "371826315270",
    appId: "1:371826315270:web:661686c4cfe450ef08b387"
    
}

// const db = fApp.fireStore()
// const auth = firebase.auth()
// const storage = firebase.storage()

// export  {db,auth,storage};
firebase.initializeApp(fApp)

export default firebase;