import React from "react";

function Replies(props) {
  return (
    <div class="media mt-3">
      <img className="mr-3" src={props.profilepicture} alt="profile"></img>
      <div class="media-body">
        <h6 className="mt-0">
          <a href="http://google.com/">{props.userName}</a>{" "}
          {props.commentDateTime}
        </h6>
        <p className="mb-2">{props.comment}</p>
      </div>
    </div>
  );
}

export default Replies;
