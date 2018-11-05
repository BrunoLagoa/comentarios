import React from "react";
import Comment from "./Comment";

// pure-functions => Statelles Componentes
const Comments = ({ comments }) => {
  const keys = Object.keys(comments);
  return (
    <div>
      {/* Comment */}
      {keys.map(key => (
        <Comment key={key} c={comments[key]} />
      ))}
    </div>
  );
};

export default Comments;
