import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Books from "./components/Books";
import IssueBooks from "./components/IssueBooks";
import EditBooks from "./components/EditBooks";
import EditStudents from "./components/EditStudents";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="students" element={<Students />} />
        <Route path="books" element={<Books />} />
        <Route path="issuebooks" element={<IssueBooks />} />
        <Route path="/editbooks/:id" element={<EditBooks />} />
        <Route path="/editstudents/:id" element={<EditStudents />} />
      </Routes>
    </div>
  );
}

export default App;
