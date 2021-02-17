import React, { useState } from 'react';
import './login.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { Alert, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault()
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || !re.test(String(email).toLocaleLowerCase())) {
      setError("Please Check Email");
    }
    else if (password.length < 6) {
      setError("password length must be 6 charcter")
    }
    else {
      process();
    }
  }
  const process = () => {
    const dataClone = JSON.parse(localStorage.getItem("User"));
    const check = dataClone ? dataClone.filter(dataClone => dataClone.email === email) : [];
    if (check.length === 0) {
      setError("User is not found");
    }
    else {
      if (check[0].email === email && check[0].password === password) {
        setShow(true)
        setError(null)
        setTimeout(() => {
          history.push('/Signup')
        }, 2000)
      }
      else {
        setError("please fill right Info")
      }
    }
  }
  const ShowError = () => {
    if (show)
      return (

        <Modal
          size="sm"
          show={show}
        >
          <Alert style={{ height: 80 }} variant="success" onClose={() => { setShow(false) }} dismissible>
            <Alert.Heading>Successfully Login </Alert.Heading>
          </Alert>
        </Modal>

      )
    else
      return (
        <div>
          {error ?
            <Alert style={{ height: 80 }} variant={'danger'} onClose={() => { setError(null) }} dismissible>
              <Alert.Heading>{error} </Alert.Heading>
            </Alert> :
            null
          }
        </div>
      )
  }

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(text) => { SetEmail(text.target.value) }}
              value={email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              margin="normal"
              onChange={(text) => { SetPassword(text.target.value) }}
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => { onSubmit(e) }}
            >
              Sign In
          </Button>
            <Grid container justify='center'>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        <ShowError />
      </Container>

    </div>
  );
}

export default Login;
