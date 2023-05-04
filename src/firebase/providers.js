import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

//? Se instancia el provider para hacer la autenticación con google
const googleProvider = new GoogleAuthProvider();

//! Provider para hacer autenticación con Google
export const signInWithGoogle = async() => {
   try {

      // ejecutamos la auth wit google
      const result = await signInWithPopup( FirebaseAuth, googleProvider );
      
      // const credentials = GoogleAuthProvider.credentialFromResult( result ); // for credentials info
      // console.log( {credentials} )

      // para obtener la info del usuario(user)
      const user = result.user;
      const { displayName, email, photoURL, uid } = user;

      return {
         ok: true,
         // user info
         displayName, email, photoURL, uid
      }

   } catch (error) {
      console.log(error)

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);

      return {
         ok: false,
         errorMessage
      }
   }
}



//! Provider para hacer autenticación con email / password
export const registerUserWithEmailPassword = async({ email, password, displayName}) => {
   try {
      // console.log({email, password, displayName});

      // funcion que hace el regsiro en firebase
      const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
      const { uid, photoURL } = resp.user;
      // console.log(resp);
      await updateProfile( FirebaseAuth.currentUser, { displayName } );


      // si todo ok
      return {
         ok: true,
         uid, photoURL, email, displayName
      }
      
   } catch (error) {

      // console.log(error)     
      const errorMessage = error.message;

      return {
         ok: false,
         errorMessage,
         // ...error
      }
   }
}