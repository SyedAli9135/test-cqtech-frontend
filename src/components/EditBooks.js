import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";
const EditBooks = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const updateBook = async () => {
    const bookdata = {
      name: name,
      author: author,
      bookId: id,
    };

    console.log(id);
    await axios
      .post("http://localhost:3500/api/book/update", bookdata)
      .then((res) => {
        console.log(res);
        swal("Success", "Book is Updated", "success");
      });
  };
  return (
    <>
      <h1>Edit Books</h1>
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
          label="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          required
          fullWidth
          id="author"
          label="Author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Box>
      <Button style={{ marginTop: 20 }} variant="outlined" onClick={updateBook}>
        Update Book
      </Button>
    </>
  );
};

export default EditBooks;
