import React from "react";
import { shallow } from "enzyme";
import { Login } from "../Components/Login";

it("should render correct information", () => {
  const wrapper = shallow(<Login />);
  const p = wrapper.find("p");
  const result = p.text();

  expect(result).toBe("Login");
});

it("should change value for render corrent component", () => {
  const wrapper = shallow(<Login />);
  const value1 = wrapper.find("h1").text();

  expect(value1).toBe("Login");

  const button = wrapper.find("button");
  button.simulate("click");
  const value2 = wrapper.find("h1").text();

  expect(value2).toBe("Authanticate");
});


