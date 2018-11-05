import React from "react";
import { shallow } from "enzyme";
import NewComment from "./NewComment";

describe("<New Comment />", () => {
  it("should handle changes in textarea", () => {
    const wrapper = shallow(<NewComment />);
    const event = {
      target: { value: "test" }
    };

    wrapper.find("textarea").simulate("change", event);
    expect(wrapper.state().newComment).toBe("test");
  });

  it("should call sendComment on button click", () => {
    const sendCommnet = jest.fn();
    const wrapper = shallow(<NewComment sendCommnet={sendCommnet} />);
    const event = {
      target: { value: "test" }
    };

    wrapper.find("textarea").simulate("change", event);
    wrapper.find("button").simulate("click");

    expect(sendCommnet).toBeCalledWith("test");
    expect(sendCommnet.mock.calls[0][0]).toBe("test");

    expect(wrapper.state().newComment).toBe("");
  });
});
