import React from "react";

// pure-functions => Statelles Componentes
const Comment = ({ c }) => {
  let comment = "vazio";
  let email = "vazio";
  if (c) {
    if (c.comment) {
      comment = c.comment;
    }
    if (c.email) {
      email = c.email;
    }
  }
  return (
    <div className="card mt-2">
      <div className="card-body">
        <section>
          <blockquote class="blockquote">
            <p class="mb-0">{comment}</p>
            <footer class="blockquote-footer">
              Enviado por: <cite title="Autor da mensagem">{email}</cite>
            </footer>
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default Comment;
