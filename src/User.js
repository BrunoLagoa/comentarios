import React from "react";

const User = props => {
  return (
    <div>
      <b>Logado como:</b> {props.email}
      <button className="btn btn-info mb-2 ml-2" onClick={props.logout}>
        Sair
      </button>
    </div>
  );
};

export default User;
