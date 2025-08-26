import { Button, TextField } from "@mui/material";
import { useState } from "react";

function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!fullName) {
      alert("Please fill the mandatory fields");
      return;
    }

    alert(`Thanks for registering. Your Details:
      Full Name: ${fullName}
      Phone Number: ${phoneNumber}`);
    setFullName("");
    setPhoneNumber("");
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
