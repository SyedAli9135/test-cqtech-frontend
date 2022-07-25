import React, { useEffect, useState } from "react";
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
const Students = () => {
  const [students, setStudents] = useState([]);
  const history = useNavigate();
  const handleClick = (id) => {
    history(`/editstudents/${id}`);
  };
  const getStudents = async () => {
    const { data } = await axios.get("http://localhost:3500/api/user/");
    if (data) setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div>
      <h1>List of Students</h1>

      <TableContainer style={{ marginTop: 100 }}>
        <Table size="large" aria-label=" a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontSize: 20 }}>
                Student ID
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                First Name
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Last Name
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="center">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell align="center">{student.id}</TableCell>
                <TableCell align="center">{student["first name"]}</TableCell>
                <TableCell align="center">{student["last name"]}</TableCell>
                <TableCell align="center">
                  <EditIcon onClick={() => handleClick(student.id)} />
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

export default Students;
