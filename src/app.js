import React, { useState, useEffect } from "react";

import CommentsList from "./CommentsList";
import "./img/profilePic.jpg";
import { getComments, getUSer } from "./utilities/api";

function App() {
  const [willComment, setWillComment] = useState(false);
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState("");
  let currentuser;

  useEffect(() => {
    getComments().then((comments) => {
      setData(comments);
    });

    getUSer().then((user) => {
      currentuser = user;
    });
  });

  function onClick() {
    setWillComment(!willComment);
  }
  function onChange({ target }) {
    setNewComment(target.value);
  }

  function onSubmit() {
    //post the new comment to the database here

    setData([
      ...data,
      {
        id: 1,
        username: currentuser.username,
        profilepicture: currentuser.profilepicture,
        comment: newComment,

        datetime: "1m",
        replies: [],
      },
    ]);
    setNewComment("");
    console.log(data);
  }
  return (
    <div className="container">
      <button onClick={onClick} className="btn btn-primary" type="submit">
        <span>Comment</span>
      </button>
      <div className="form-group shadow-textarea">
        {willComment && (
          <div className="form-group">
            <form onSubmit={onSubmit}>
              <input
                value={newComment}
                onChange={onChange}
                className="form-control z-depth-1"
                rows="3"
                placeholder="Write a comment here..."
              />
              <button type="submit" className="btn btn-secondary">
                Post
              </button>
            </form>
          </div>
        )}
      </div>
      <CommentsList list={data} />
    </div>
  );
}

export default App;
