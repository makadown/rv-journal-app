import { Google, MailOutline } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link, Tooltip } from "@mui/material"
// Giving the alias "Link" to RouterLink to avoid problems with the <Link> element of material ui
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";


export const LoginPage = () => {

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'usuario@mail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    <>
      {/* Using material, inside a Grid element, create a form for login centered on the screen  */}

      <AuthLayout title="Login" >
        <form onSubmit={onSubmit}>
          <Grid container>

            <Grid item xs={12} sx={{ mt: 1 }} >
              <TextField type="email" label="Email" fullWidth
                name="email" value={email} onChange={onInputChange} />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField type="password" label="Password" fullWidth
                name="password" value={password} onChange={onInputChange} />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 0.5, mb: 1 }}>
              <Grid item xs={12} sm={6} >
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Tooltip title="Login with Google" arrow>
                  <Button onClick={onGoogleSignIn} variant="contained" fullWidth  >
                    <Google />
                    <Typography sx={{ ml: 1 }}> Google </Typography>
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create an account
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>

    </>
  )
}
