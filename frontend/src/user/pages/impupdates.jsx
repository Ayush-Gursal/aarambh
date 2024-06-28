import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./ImpUpdates.css";

const ImpUpdates = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      const response = await axios.get("/api/updates/getallupdates");
      setUpdates(response.data.updates);
    } catch (error) {
      console.error("Error fetching updates:", error);
    }
  };

  const handleAddUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/updates/addupdates", { title, content });
      setTitle("");
      setContent("");
      fetchUpdates();
    } catch (error) {
      console.error("Error adding update:", error);
    }
  };

  const handleDeleteUpdate = async (id) => {
    try {
      await axios.delete(`/api/updates/deleteupdate/${id}`);
      fetchUpdates();
    } catch (error) {
      console.error("Error deleting update:", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="updates-container">
        <div className="updates-list">
          <h2>All Updates</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {updates.map((update) => (
                <tr key={update._id}>
                  <td>{update.title}</td>
                  <td>{update.content}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteUpdate(update._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="add-update">
          <h2>Add Update</h2>
          <form onSubmit={handleAddUpdate}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ImpUpdates;
