import React from "react";
import Comment from "./Comment";
import { render } from "enzyme";

it("shoud render text - Renderizar Component <Comment>", () => {
  const c = {
    comment: "teste"
  };
  const wrapper = render(<Comment c={c} />);
  expect(wrapper.text()).toBe("Comentário: teste");
});

it("shoud render empty - Renderizar Component <Comment>", () => {
  const wrapper = render(<Comment />);
  expect(wrapper.text()).toBe("Comentário: vazio");
});
