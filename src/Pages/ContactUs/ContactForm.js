import classes from "./ContactForm.module.css";
import useInput from "../../utils/Hooks/useInput";
import useLoader from "../../utils/Hooks/useLoader";
import { Grid, TextField, Button } from "@mui/material";

const ContactForm = () => {
  const { loader, handleLoader, LoadingComponent } = useLoader();
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    isError: firstNameIsError,
    inputKeyStrockHandler: firstNameInputKeyStrockHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    isError: lastNameIsError,
    inputKeyStrockHandler: lastNameInputKeyStrockHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: emailValue,
    isValid: EmailIsValid,
    isError: emailIsError,
    inputKeyStrockHandler: emailInputKeyStrockHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput("", (value) => {
    const regix = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regix.test(value);
  });
  const {
    value: phoneValue,
    isValid: PhoneIsValid,
    isError: phoneIsError,
    inputKeyStrockHandler: phoneInputKeyStrockHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneInput,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: messageValue,
    isValid: MessageIsValid,
    isError: messageIsError,
    inputKeyStrockHandler: messageInputKeyStrockHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput("", (value) => value.trim() !== "");

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    EmailIsValid &&
    PhoneIsValid &&
    MessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      // toast.error("Please fill all the fields");
      return;
    }
    const data = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
    };
    try {
      handleLoader(true);
      const response = await fetch("abc.com", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        handleLoader(false);
        //toast.error("Something went wrong!");
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      handleLoader(false);
      //toast.success("Message sent successfully!");
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetPhoneInput();
      resetMessageInput();
    } catch (err) {
      handleLoader(false);
      //toast.error(err.message);
    }
  };

  return (
    <form>
      <div className={classes.formControl}>
        {loader && LoadingComponent}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={firstNameValue}
              onChange={firstNameInputKeyStrockHandler}
              onBlur={firstNameInputBlurHandler}
              error={firstNameIsError}
              id="standard-error-helper-text"
              label="First Name"
              variant="outlined"
              size="small"
              helperText={
                firstNameIsError
                  ? "Incorrect First Name."
                  : "should not be empty"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={lastNameValue}
              onChange={lastNameInputKeyStrockHandler}
              onBlur={lastNameInputBlurHandler}
              error={lastNameIsError}
              id="standard-error-helper-text"
              label="Last Name"
              variant="outlined"
              size="small"
              helperText={
                lastNameIsError
                  ? "Incorrect Last Name."
                  : "atleast 5 characters"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={emailValue}
              onChange={emailInputKeyStrockHandler}
              onBlur={emailInputBlurHandler}
              error={emailIsError}
              id="standard-error-helper-text"
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              helperText={
                emailIsError ? "Incorrect Email" : "atleast 5 characters"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={phoneValue}
              onChange={phoneInputKeyStrockHandler}
              onBlur={phoneInputBlurHandler}
              error={phoneIsError}
              id="standard-error-helper-text"
              label="Phone"
              variant="outlined"
              size="small"
              type="number"
              helperText={
                phoneIsError ? "Incorrect phone" : "atleast 5 characters"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={messageValue}
              onChange={messageInputKeyStrockHandler}
              onBlur={messageInputBlurHandler}
              error={messageIsError}
              id="standard-error-helper-text"
              label="Message"
              variant="outlined"
              size="small"
              helperText={
                messageIsError ? "Incorrect Message." : "atleast 5 characters"
              }
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.btnDiv}>
        <Button
          type="submit"
          variant="contained"
          className={classes.primaryBtn}
          onClick={submitHandler}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
