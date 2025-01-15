import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD7F4eqLYg6E_Xfjaa2UkMCnN4T8bvF5oA",
  authDomain: "netflix-clone-adff9.firebaseapp.com",
  projectId: "netflix-clone-adff9",
  storageBucket: "netflix-clone-adff9.firebasestorage.app",
  messagingSenderId: "804333776920",
  appId: "1:804333776920:web:7b39f51a60f2fb082bd36d"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signup=async(name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.displayName,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}
const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
       console.log(error) ;
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout=()=>{
    signOut(auth);
}
export{signup,logout,login,db,auth};