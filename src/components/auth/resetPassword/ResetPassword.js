import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showError, setShowError] = useState(false);

  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                if (confirmPassword && confirmPassword !== e.target.value) {
                  setShowError(true);
                } else { 
                  setShowError(false);
                  setPassword(e.target.value);
                }
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (e.target.value !== password) {
                  setShowError(true);
                } else { 
                  setConfirmPassword(e.target.value);
                  setShowError(false);
                }
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={showError || !confirmPassword || !password}
            >
              Sign In
            </Button>
            {showError && (
              <Grid container justify="center">
                <Grid item>
                  <Typography
                    className={classes.messageFailure}
                    variant="subtitle1"
                  >
                    Passwords do no match
                  </Typography>
                </Grid>
              </Grid>
            )}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/confirmEmail" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
