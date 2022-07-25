import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  const history = useNavigate();
  const handleClick = (id) => {
    history(`/editbooks/${id}`);
  };
  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:3500/api/book/");
    if (data) setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <h1>List of Books</h1>

      <TableContainer style={{ marginTop: 100 }}>
        <Table size="large" aria-label=" a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontSize: 20 }}>
                Book ID
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Book Name
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Author
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Date of Borrow
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Expected Date of Return
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Borrower ID
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell align="center">{book.id}</TableCell>
                <TableCell align="center">{book.name}</TableCell>
                <TableCell align="center">{book.author}</TableCell>
                <TableCell align="center">{book["date of borrow"]}</TableCell>
                <TableCell align="center">
                  {book["expected date of return"]}
                </TableCell>
                <TableCell align="center">{book["student id"]}</TableCell>
                <TableCell align="center">
                  <EditIcon onClick={() => handleClick(book.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">
        <Button style={{ margin: 20 }} variant="outlined" size="large">
          {" "}
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Books;
