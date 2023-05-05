import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'


export const LoginPage = () => {

  //? obtenemos del store el status y el errorMessage
  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  
  //? se define que info manejara el form
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })


  //? obtenmos un bolelan para saber el status y lo memorizamos
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const isAutenticating = useMemo( () => status === 'checking', [status]);

  //? función auth with email
  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email,password }));
  }

  //? funcion auth wit Google
  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }


  
  

  return (
    
    <AuthLayout title="Login">

      <form
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn '
      > 
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@correo.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password"                 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none'}
            >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>              
              <Button 
                disabled={ isCheckingAuthentication }
                type="submit" 
                variant='contained' 
                fullWidth
              >Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isCheckingAuthentication }
                variant='contained' 
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml:1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direcction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
            
          </Grid>

        </Grid>
      </form>

    </AuthLayout>      
  )
}
