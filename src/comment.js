import React from "react";
import Reply from "./Reply";

function Comment(props) {
  console.log(props.replies);
  return (
    <div className="media mt-3">
      <img className="mr-3" src={props.profilepicture} alt="profile"></img>
      <div className="media-body">
        <h6 className="mt-0">
          <a href="http://google.com/">{props.userName}</a>{" "}
          {props.commentDateTime}
        </h6>
        <div>
          <p className="mb-2">{props.comment}</p>
          {props.replies.length !== 0 ? (
            <button className="btn btn-light btn-sm">
              {props.replies.length + " Replies"}
            </button>
          ) : (
            <button className="btn btn-light btn-sm">Reply</button>
          )}
        </div>
        {props.replies.map((reply) => {
          return (
            <Reply
              profilepicture={reply.profilepicture}
              userName={reply.username}
              comment={reply.comment}
              commentDateTime={reply.datetime}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
