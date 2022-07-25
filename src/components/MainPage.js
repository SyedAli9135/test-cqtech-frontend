import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <h1>Librarian System of Book Records</h1>
      </div>
      <div>
        <Link to="students">
          <Button variant="outlined" size="large">
            View Students
          </Button>
        </Link>
        <Link to="books">
          <Button variant="outlined" size="large" style={{ margin: 20 }}>
            View Books
          </Button>
        </Link>
        <Link to="issuebooks">
          <Button variant="outlined" size="large" style={{ margin: 20 }}>
            Issue Book
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
