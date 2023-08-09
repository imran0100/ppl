import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"; // Import the CSS file

function Admin() {
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    navigate("/choose");
  };
  const handleEdit = () => {
    navigate("/aaa");
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  return (
    <div className="admin-container">
      <div className="admin-item item1" onClick={handleAddQuestion}>
        Add Question
      </div>
      <div className="admin-item item2" onClick={handleEdit}>
        Edit Question
      </div>
      <div className="admin-item item3">View Students Progress</div>
      <div className="admin-item item4">Notification</div>

      <div className="admin-item item5" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default Admin;
