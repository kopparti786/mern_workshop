import React, { useState } from "react";
import {
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import "./index.css";

function StudentRegistration() {
    // State for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState([]);
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("");

    // Handle skill checkboxes
    const handleSkillChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSkills([...skills, value]); // add skill
        } else {
            setSkills(skills.filter((skill) => skill !== value)); // remove skill
        }
    };

    // Register button
    const handleRegister = (event) => {
        event.preventDefault();
        alert(`
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Gender: ${gender}
            Skills: ${skills.join(", ")}
            Date of Birth: ${dob}
            Address: ${address}
            Department: ${department}
        `);
    };

    // Reset button
    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setGender("");
        setSkills([]);
        setDob("");
        setAddress("");
        setDepartment("");
    };

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div className="form-container">
        <h2>Student Registration Form</h2>
        <form onSubmit={handleRegister}>
            <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={name}
                onChange={handleNameChange}
                required
            />

            <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <div style={{ marginTop: "15px" }}>
                <label>Gender:</label>
                <RadioGroup
                    row
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>            
            </div>

            <div style={{ marginTop: "15px" }}>
                <label>Skills:</label>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={skills.includes("HTML")}
                            onChange={handleSkillChange}
                            value="HTML"
                            />
                        }
                        label="HTML"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={skills.includes("CSS")}
                            onChange={handleSkillChange}
                            value="CSS"
                            />
                        }
                        label="CSS"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={skills.includes("JavaScript")}
                            onChange={handleSkillChange}
                            value="JavaScript"
                            />
                        }
                        label="JavaScript"
                    />
              </FormGroup>
            </div>

            <TextField
                fullWidth
                type="date"
                margin="normal"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                InputLabelProps={{ shrink: true }}
                label="Date of Birth"
            />

            <TextField
                fullWidth
                label="Address"
                margin="normal"
                multiline
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel>Department</InputLabel>
                <Select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                >
                    <MenuItem value="CSE">CSE</MenuItem>
                    <MenuItem value="ECE">ECE</MenuItem>
                    <MenuItem value="MECH">MECH</MenuItem>
                    <MenuItem value="CIVIL">CIVIL</MenuItem>
                </Select>
            </FormControl>

            <div style={{ marginTop: "20px" }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: "10px" }}>
                Register
            </Button>
            <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
                Reset
            </Button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
