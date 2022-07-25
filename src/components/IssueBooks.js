import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";
const IssueBooks = () => {
  const [bookid, setBookId] = useState("");
  const [studentid, setStudentId] = useState("");
  const [dateOfReturn, setdateOfReturn] = useState("");
  const issueBook = async () => {
    const bookdata = {
      bookId: bookid,
      studentId: studentid,
      dateOfReturn: dateOfReturn,
    };

    await axios
      .post("http://localhost:3500/api/book/getBook", bookdata)
      .then((res) => {
        console.log(res);
        swal("Success", "Book is Issued", "success");
      });
  };
  return (
    <>
      <h1>Issue Books</h1>
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
          label="Book Id"
          value={bookid}
          onChange={(e) => setBookId(e.target.value)}
        />

        <TextField
          style={{ margin: 30 }}
          required
          fullWidth
          id="studentid"
          label="Student Id"
          name="studentid"
          value={studentid}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="dateofreturn"
          label="Enter valid date of Return"
          name="dateorreturn"
          value={dateOfReturn}
          onChange={(e) => setdateOfReturn(e.target.value)}
        />
      </Box>
      <Button style={{ marginTop: 20 }} variant="outlined" onClick={issueBook}>
        Issue Book
      </Button>
    </>
  );
};

export default IssueBooks;
