import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formDate = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener almenos 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  //? obtenemos el dispatch y creamos un state para saber cuando se hizo submit
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)

  //? obtenemos del store el status y el errorMessage
  const { status, errorMessage } = useSelector( state => state.auth);  
  // console.log(stateAuth)

  //? obtenmos un bolelan para saber el status y lo memorizamos
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


  //? se define que info manejara el form
  const { 
      formState, displayName, email, password, onInputChange, 
      isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formDate, formValidations)

    
  //? se hace submit  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true); // state para asber cuando hacemos submit

    if( !isFormValid ) return; // si no pasa la validación 

    // si pasa la validación entonces creamos el user en firebase
    dispatch( startCreatingUserWithEmailPassword(formState) )
    // console.log(formState)
  }

  return (
    
    <AuthLayout title="Crear Cuenta">

      {/* <h1>FormValid: { isFormValid ? 'Valido' : 'Incorrecto' }</h1> */}

      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder="Tu nombre completo" 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@correo.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Tu Contraseña" 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
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

            <Grid item xs={ 12 } >
              <Button
                disabled={ isCheckingAuthentication }
                type="submit"
                variant='contained' 
                fullWidth>Crear Cuenta
              </Button>
            </Grid>  
          </Grid>

          <Grid container direcction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ingresar
            </Link>
            
          </Grid>

        </Grid>
      </form>

    </AuthLayout>      
  )
}
