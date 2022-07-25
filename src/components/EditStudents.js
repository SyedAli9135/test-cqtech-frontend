import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";
const EditStudents = () => {
  const { id } = useParams();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const updateStudent = async () => {
    const studentdata = {
      firstName: firstname,
      lastName: lastname,
      studentId: id,
    };

    console.log(id);
    await axios
      .post("http://localhost:3500/api/user/update", studentdata)
      .then((res) => {
        console.log(res);
        swal("Success", "User is Updated", "success");
      });
  };
  return (
    <>
      <h1>Edit Students</h1>
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <TextField
          style={{ margin: 30 }}
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          id="name"
          label="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <Button
        style={{ marginTop: 20 }}
        variant="outlined"
        onClick={updateStudent}
      >
        Update Student
      </Button>
    </>
  );
};

export default EditStudents;
