import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import LandingPage from "../components/LandingPage/LandingPage";


configure({ adapter: new Adapter() });

describe("Landing Page", () => {
describe("Estructura", () => {
let wrapper; 
beforeEach(() => {
wrapper = shallow(<LandingPage />);
});
it("Renderiza un <button>", () => {
expect(wrapper.find("button")).toHaveLength(1);
});

it('Renderiza <button> con el texto "Ingresar"', () => {
expect(wrapper.find("button").at(0).text()).toEqual("Ingresar");
});

it('Renderiza <h2> con el texto "Bienvenidos a la App de Paises!', () => {
      expect(wrapper.find("h2").at(0).text()).toEqual("Bienvenidos a la App de Paises!");
});

  it("Renderiza dos <img>", () => {
    expect(wrapper.find("img")).toHaveLength(2);
});

});
});



