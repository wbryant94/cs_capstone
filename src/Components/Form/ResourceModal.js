import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Box } from "@mui/material";
import ReactDOM from "react-dom";
import FormMultipleSelect from "./FormMultipleSelect";
import { positions } from "@mui/system";

export default function ResourceModal(props) {
/*   React.useEffect(() => {
    console.log("current countries:" + selectedCountry);
  }); */

  const [open, setOpen] = React.useState(false);

  //manage field inputs / track //
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState([]);
  const [summary, setSummary] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with the following values:");

    let formValues = {
      fName: firstName,
      lName: lastName,
      emailAddress: email,
      department_name: department,
      country: selectedCountry,
      description: summary,
    };

    console.log(JSON.stringify(formValues));

    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
    setSummary("");
    setSelectedCountry("");
  };

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleCountryChange = (event) => {
    console.log("in handleChange for country" + event.target.value);
   
    setSelectedCountry( event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 5, width: "25ch" } ,
      }}
      validate
      autoComplete="on"
      onSubmit={handleFormSubmit}
    >
      <Button variant="contained" 
      onClick={handleClickOpen} 
      sx={{
        width: 300, 
        bottom: 75, 
        left: "50%", 
        position: "stickied", 
        zIndex: 9999, 
        color: "success" 
      }}>
        Add/Edit Resources
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Resource Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify (add, or remove) resource to a country, please fill out
            the following form and click submit to approve changes.
          </DialogContentText>

          <div>
            <TextField
              required
              id="first-name"
              label="First Name"
              onChange={onFirstNameChange}
              value={firstName}
            />
            <TextField
              required
              id="last-name"
              label="Last Name"
              onChange={onLastNameChange}
              value={lastName}
            />
          </div>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={onEmailChange}
              value={email}
            />
          </div>
      
          <div>
            <FormMultipleSelect
              countries={props.countries}
              onChange={handleCountryChange}
              countryName={selectedCountry}
            />
                  <TextField
              required
              id="department-selection"
              label="Department"
              onChange={onDepartmentChange}
              value={department}
            />
          </div>
          <div>
            <TextField
              id="professor-description"
              label="Summary"
              placeholder="Professor Description"
              onChange={onSummaryChange}
              value={summary}
              fullWidth
              multiline
              required
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  , document.getElementById('modalPortal'));
}
