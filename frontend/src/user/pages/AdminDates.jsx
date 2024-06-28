
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
const AdminDates = () => {
  const [dates, setDates] = useState([]);
  const [formData, setFormData] = useState({
    activity: "",
    startDate: "",
    endDate: "",
  });
  const [editFormData, setEditFormData] = useState({
    activity: "",
    startDate: "",
    endDate: "",
  });
  const [editingDate, setEditingDate] = useState(null);

  useEffect(() => {
    fetchImportantDates();
  }, []);

  const fetchImportantDates = async () => {
    try {
      const response = await axios.get("/api/date");
      setDates(response.data.dates);
    } catch (error) {
      console.error("Error fetching important dates:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/date", formData);
      setFormData({ activity: "", startDate: "", endDate: "" });
      fetchImportantDates();
    } catch (error) {
      console.error("Error creating important date:", error);
    }
  };

  const handleUpdate = async (dateId) => {
    setEditingDate(dateId);
    const dateToUpdate = dates.find((date) => date._id === dateId);
    setEditFormData({
      activity: dateToUpdate.activity,
      startDate: new Date(dateToUpdate.startDate).toISOString().split("T")[0],
      endDate: new Date(dateToUpdate.endDate).toISOString().split("T")[0],
    });
  };

  const handleEditInputChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (dateId) => {
    try {
      await axios.patch(`/api/date/${dateId}`, editFormData);
      setEditingDate(null);
      fetchImportantDates();
    } catch (error) {
      console.error("Error updating important date:", error);
    }
  };

  const handleDelete = async (dateId) => {
    const confirmDelete = window.confirm(
      "Do you really want to delete the date?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/api/date/${dateId}`);
        fetchImportantDates();
      } catch (error) {
        console.error("Error deleting important date:", error);
      }
    }
  };

  const inputStyle = {
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: editingDate ? "#e9ecef" : "#fff",
    color: editingDate ? "#000" : "inherit",
  };

  return (
    <>
      <AdminHeader />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Important Dates</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="activity" style={labelStyle}>
              Activity:
            </label>
            <input
              type="text"
              name="activity"
              placeholder="Activity"
              value={formData.activity}
              onChange={handleInputChange}
              id="activity"
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="startDate" style={labelStyle}>
              Start Date:
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              id="startDate"
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="endDate" style={labelStyle}>
              End Date:
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              id="endDate"
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonPrimaryStyle}>
            Add Date
          </button>
        </form>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Activity</th>
              <th style={tableHeaderStyle}>Start Date</th>
              <th style={{ ...tableHeaderStyle, width: "150px" }}>End Date</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date) => (
              <tr
                key={date._id}
                style={
                  editingDate === date._id
                    ? { ...tableRowStyle, backgroundColor: "#f5f5f5" }
                    : tableRowStyle
                }
              >
                <td style={tableCellStyle}>
                  {editingDate === date._id ? (
                    <input
                      type="text"
                      name="activity"
                      value={editFormData.activity}
                      onChange={handleEditInputChange}
                      style={inputStyle}
                    />
                  ) : (
                    date.activity
                  )}
                </td>
                <td style={tableCellStyle}>
                  {editingDate === date._id ? (
                    <input
                      type="date"
                      name="startDate"
                      value={editFormData.startDate}
                      onChange={handleEditInputChange}
                      style={inputStyle}
                    />
                  ) : (
                    new Date(date.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  )}
                </td>
                <td style={{ ...tableCellStyle, width: "150px" }}>
                  {editingDate === date._id ? (
                    <input
                      type="date"
                      name="endDate"
                      value={editFormData.endDate}
                      onChange={handleEditInputChange}
                      style={inputStyle}
                    />
                  ) : (
                    new Date(date.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  )}
                </td>
                <td style={tableCellStyle}>
                  {editingDate === date._id ? (
                    <button
                      onClick={() => handleSave(date._id)}
                      style={buttonSuccessStyle}
                    >
                      Save
                    </button>
                  ) : (
                    <div style={actionButtonsStyle}>
                      <button
                        onClick={() => handleUpdate(date._id)}
                        style={buttonPrimaryStyle}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(date._id)}
                        style={buttonDangerStyle}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// Inline styles
const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "bold", // Add this line to make the text bold
  fontSize: "28px", // Adjust the font size to make it larger
};

const formStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "20px",
};
const formGroupStyle = {
  margin: "10px",
  display: "flex",
  alignItems: "center",
};

const labelStyle = {
  marginRight: "10px",
  fontWeight: "bold",
};

const buttonPrimaryStyle = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  margin: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
};

const buttonSuccessStyle = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  margin: "10px",
  backgroundColor: "#28a745",
  color: "#fff",
};

const buttonDangerStyle = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  margin: "10px",
  backgroundColor: "#dc3545",
  color: "#fff",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
};

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "center",
  border: "1px solid #ccc",
  backgroundColor: "black",
  color: "white",
};

const tableRowStyle = {
  padding: "10px",
  textAlign: "center",
  border: "1px solid #ccc",
};

const tableCellStyle = {
  verticalAlign: "middle",
};

const actionButtonsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

export default AdminDates;
