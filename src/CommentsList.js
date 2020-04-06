import React from "react";
import Comment from "./comment";

function CommentsList(props) {
  console.log(props.list);
  return (
    <div className="container">
      {props.list.map((element) => {
        return (
          <div key={element.id}>
            <Comment
              profilepicture={element.profilepicture}
              userName={element.username}
              commentDateTime={element.datetime}
              comment={element.comment}
              replies={element.replies}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CommentsList;
