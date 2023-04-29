import { signInWithGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./"

//! thunks login email
export const checkingAuthentication = ( email, password ) => {
   return async( dispatch, getState) => {

      console.log({email, password})
      dispatch( chekingCredentials() )
      
   }
}


//! thunks login Google
export const startGoogleSignIn = () => {
   return async( dispatch, getState ) => {
      
      console.log('onGoogleSignIn')
      dispatch( chekingCredentials() )

      // result tendra la respuesta si se pudo autenticar o no con google
      const result = await signInWithGoogle();

      // verificamos si tenemos un error en la autenticación
      if( !result.ok ) return dispatch(logout( result.errorMessage ));
      // console.log({result})

      // si se autentico correctamente
      dispatch(login( result )) 
   }
}