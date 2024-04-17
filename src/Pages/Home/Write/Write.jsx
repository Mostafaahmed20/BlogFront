import React, { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Context } from "../../../Context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(Context);
  const navigate = useNavigate(); // useNavigate for navigation
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!title || !desc || !selectedCategory) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const newPost = {
      username: user.username,
      title,
      desc,
      Category:selectedCategory
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading image:", err);
        setLoading(false);
        setError("Error uploading image");
        return;
      }
    }

    try {
      const res = await axios.post("/posts", newPost);
      navigate("/post/" + res.data._id); // Use navigate function to navigate
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="write">
      {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="writeFormGroup">
          <h2>Add Category</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
          <input
            type="text"
            placeholder="Enter category name"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            disabled={loading}
          />
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>
        {error && <div className="error">{error}</div>}
        <button className="writeSubmit" type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish"}
        
        </button>

      </form>

    </div>
  );
};

export default Write;
