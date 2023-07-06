import classes from "./SponsorForm.module.css";
import useInput from "../../utils/Hooks/useInput";
import useLoader from "../../utils/Hooks/useLoader";
import { Grid, TextField, Button, MenuItem } from "@mui/material";
import { toast } from "react-toastify";

const SponsorForm = () => {
  const { loader, handleLoader, LoadingComponent } = useLoader();
  const {
    value: companyNameValue,
    isValid: companyNameIsValid,
    isError: companyNameIsError,
    inputKeyStrockHandler: companyNameInputKeyStrockHandler,
    inputBlurHandler: companyNameInputBlurHandler,
    reset: resetCompanyNameInput,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: contactPersonValue,
    isValid: contactPersonIsValid,
    isError: contactPersonIsError,
    inputKeyStrockHandler: contactPersonInputKeyStrockHandler,
    inputBlurHandler: contactPersonInputBlurHandler,
    reset: resetContactPersonInput,
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
    value: sponsorshipLevelValue,
    isValid: sponsorshipLevelIsValid,
    isError: sponsorshipLevelIsError,
    inputKeyStrockHandler: sponsorshipLevelInputKeyStrockHandler,
    inputBlurHandler: sponsorshipLevelInputBlurHandler,
    reset: resetSponsorshipLevelInput,
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
    companyNameIsValid &&
    contactPersonIsValid &&
    EmailIsValid &&
    sponsorshipLevelIsValid &&
    MessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      toast.error("Please fill all the fields");
      return;
    }
    const data = {
      companyName: companyNameValue,
      contactPerson: contactPersonValue,
      email: emailValue,
      sponsorshipLevel: sponsorshipLevelValue,
      message: messageValue,
    };
    try {
      handleLoader(true);
      const response = await fetch(
        "http://localhost:8080/sponsorForm/add-new",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        handleLoader(false);
        toast.error("Something went wrong!");
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      handleLoader(false);
      toast.success("Message sent successfully!");
      resetCompanyNameInput();
      resetContactPersonInput();
      resetEmailInput();
      resetSponsorshipLevelInput();
      resetMessageInput();
    } catch (err) {
      handleLoader(false);
      toast.error(err.message);
    }
  };

  return (
    <form>
      <h1 className={classes.formHeading}>Become a Sponsor</h1>
      <div className={classes.formControl}>
        {loader && LoadingComponent}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={companyNameValue}
              onChange={companyNameInputKeyStrockHandler}
              onBlur={companyNameInputBlurHandler}
              error={companyNameIsError}
              id="standard-error-helper-text"
              label="Company Name"
              variant="outlined"
              size="small"
              helperText={
                companyNameIsError
                  ? "Incorrect Company Name"
                  : "should not be empty"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={contactPersonValue}
              onChange={contactPersonInputKeyStrockHandler}
              onBlur={contactPersonInputBlurHandler}
              error={contactPersonIsError}
              id="standard-error-helper-text"
              label="Contact Person"
              variant="outlined"
              size="small"
              helperText={
                contactPersonIsError
                  ? "Incorrect Contact Person"
                  : "should not be empty"
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
                emailIsError ? "Incorrect Email" : "Enter a valid email"
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={sponsorshipLevelValue}
              onChange={sponsorshipLevelInputKeyStrockHandler}
              onBlur={sponsorshipLevelInputBlurHandler}
              error={sponsorshipLevelIsError}
              id="standard-error-helper-text"
              label="Sponsorship Level"
              variant="outlined"
              size="small"
              type="number"
              helperText={
                sponsorshipLevelIsError
                  ? "Incorrect Sponsorship Level"
                  : "should not be empty"
              }
              fullWidth
              select
            >
              <MenuItem value="platinum">Platinum Sponsor</MenuItem>
              <MenuItem value="gold">Gold Sponsor</MenuItem>
              <MenuItem value="silver">Silver Sponsor</MenuItem>
              <MenuItem value="bronze">Bronze Sponsor</MenuItem>
              <MenuItem value="supporting">Supporting Sponsor</MenuItem>
              <MenuItem value="inkind">In-Kind Sponsor</MenuItem>
            </TextField>
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
                messageIsError ? "Incorrect Message" : "should not be empty"
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
export default SponsorForm;
