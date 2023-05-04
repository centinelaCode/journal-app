import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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



//! Provider para hacer registro y autenticación con email / password
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



//! Provider para hacer autenticación con email / password
export const loginWithEmailPassword = async({email, password}) => {
   try {

      console.log({email, password});

      // funcion que hace el regsiro con email/password en firebase
      const resp = await signInWithEmailAndPassword(FirebaseAuth,email, password);      
      // console.log(resp);

      const user = resp.user;
      console.log(user)
      console.log( user.displayName, user.email, user.photoURL, user.uid)

      return {
         ok: true,
         displayName: user.displayName, 
         email: user.email, 
         photoURL: user.photoURL, 
         uid: user.uid
      }
      
   } catch (error) {
      
      // console.log(error)     
      const errorMessageText = error.message;
      console.log('=======Error Message [I]============')
      console.log(errorMessageText);
      console.log('=======Error Message [F]============')

      let errorMessage;
      switch (errorMessageText) {
         case 'Firebase: Error (auth/user-not-found).':
            errorMessage ='El usuario no se encuentra registrado'
            break;
         case 'Firebase: Error (auth/wrong-password).':
            errorMessage ='Correo o password incorrecto'
            break;   
      }

      return {
         ok: false,
         errorMessage,
      }
   }

}