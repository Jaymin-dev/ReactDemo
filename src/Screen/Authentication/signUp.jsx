
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        width: '100%',
    },
}));


export default function SignUp(props) {
    const classes = useStyles();
    const [fName, SetFName] = useState("");
    const [lName, SetLName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault()
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!fName || !lName) {
            setError("please fill name")
        }
        else if (!email || !re.test(String(email).toLocaleLowerCase())) {
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
        const data = {
            fName,
            lName,
            email,
            password
        }
        const dataClone = JSON.parse(localStorage.getItem("User"));
        const check = dataClone ? dataClone.filter(dataClone => dataClone.email === email) : [];
        if (check.length !== 0) {
            setError("Email already in use")
        }
        else {
            localStorage.setItem("User", JSON.stringify(dataClone ? [...dataClone, data] : [data]));
            setShow(true)
            setError(null)
            setTimeout(() => {
                history.push('/Signin')
            }, 2000)
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
                        <Alert.Heading>Successfully Register </Alert.Heading>
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(text) => { SetFName(text.target.value) }}
                                value={fName}
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                onChange={(text) => { SetLName(text.target.value) }}
                                value={lName}
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(text) => { SetEmail(text.target.value) }}
                                value={email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(text) => { SetPassword(text.target.value) }}
                                value={password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => { onSubmit(e) }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/Signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            <ShowError />
        </Container>
    );
}