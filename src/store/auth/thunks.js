import { chekingCredentials } from "./"

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

   }
}