import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./"

//! thunks login email
export const checkingAuthentication = () => {
   return async( dispatch, getState) => {

      // console.log({email, password})
      dispatch( chekingCredentials() )
      
   }
}


//! thunks login Google
export const startGoogleSignIn = () => {
   return async( dispatch ) => {
      
      console.log('onGoogleSignIn')
      dispatch( chekingCredentials() )

      // result tendra la respuesta si se pudo autenticar o no con google
      const result = await signInWithGoogle();     

      // verificamos si tenemos un error en la autenticación
      if( !result.ok ) return dispatch( logout( result.errorMessage ));

      // si se autentico correctamente
      dispatch(login( result )) 
   }
}


//! thunks login email/password
export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
   return async(dispatch) => {

      console.log('onCreateUserEmailPAssword')
      dispatch( chekingCredentials() )

      // result tendra la respuesta si se pudo autenticar con email/passworrd en firebase
      const result = await registerUserWithEmailPassword({ email, password, displayName });
      console.log(result)

      //? Si hay error hacemos logout
      if( !result.ok ) return dispatch( logout( result.errorMessage ));
      // console.log(resp)

      //? si NO hay error logueamos al usaurio le pasamos result que debe traer:{uid, displayName, email, photoURL}
      dispatch(login( result )) 
   }
}