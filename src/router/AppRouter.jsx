import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { login, logout } from '../store/auth'


export const AppRouter = () => {

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

   }, [])
   

   // si el ststus es cheking entonces mostramos el loader pq hay que ver si estamos o no authenticados
   if(status === 'checking') {
      return <CheckingAuth />
   }

   return (
      <Routes>

         {
            (status === 'authenticated')
            ? <Route path="/*" element={ <JournalRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
         }

         <Route path="/*" element={ <Navigate to="/auth/login" /> } />

         {/* login | registro */}
         {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

         {/* JournalApp */}
         {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

      </Routes>
   )
}
