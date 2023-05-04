import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';


export const useCheckAuth = () => {
 
   //? obtenemos del store el status
   const { status } = useSelector( state => state.auth );

   //? generamos el dispatch
   const dispatch = useDispatch();

   useEffect(() => {
      
      // esta checa cuando el statdo de auth cambia (es un observer)
      onAuthStateChanged( FirebaseAuth, async(user) => {
         // user contine toda la info del usuario authenticado
         // console.log(user);

         // si no estamos authenticados, es decir no tenemos un user
         if( !user ) return dispatch( logout() );

         // como ya sabemos que existe un usuario obtenermos los datos qu enecesitamos
         const { uid, email, displayName, photoURL } = user;

         // Si estamso autenticados y existe un usurio
         dispatch( login({ uid, email, displayName, photoURL }) )
      })

   }, []);
   
   return {
      status      
   }
}
