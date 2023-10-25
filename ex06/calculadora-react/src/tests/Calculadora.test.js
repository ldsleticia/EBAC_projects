import React from "react";
import { shallow } from "enzyme";
import Calculadora from "../Calculadora";

describe("Calculadora", () => {
  it("Deve renderizar sem erros", () => {
    const wrapper = shallow(<Calculadora />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Deve inicializar com o estado correto", () => {
    const wrapper = shallow(<Calculadora />);
    expect(wrapper.state("numberDigit")).toBe("");
    expect(wrapper.state("isResult")).toBe(false);
    expect(wrapper.state("lastCharIsOperator")).toBe(false);
  });
  it("Deve adicionar números na tela", () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().handleAddNumber("1");
    expect(wrapper.state("numberDigit")).toBe("1");
    wrapper.instance().handleAddNumber("2");
    expect(wrapper.state("numberDigit")).toBe("12");
  });
  it("Deve adicionar símbolo de + na tela", () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().handleAddNumber("1");
    expect(wrapper.state("numberDigit")).toBe("1");
    wrapper.instance().handleAddSimbol("+");
    expect(wrapper.state("numberDigit")).toBe("1+");
  });
  it("Deve adicionar um sinal de - na tela", () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().handleAddNumber("1");
    expect(wrapper.state("numberDigit")).toBe("1");
    wrapper.instance().handleAddSimbol("-");
    expect(wrapper.state("numberDigit")).toBe("1-");
  });
  it("Deve adicionar um sinal de - na tela", () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().handleAddNumber("1");
    expect(wrapper.state("numberDigit")).toBe("1");
    wrapper.instance().handleAddSimbol("*");
    expect(wrapper.state("numberDigit")).toBe("1*");
  });
  it("Deve adicionar um sinal de - na tela", () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().handleAddNumber("1");
    expect(wrapper.state("numberDigit")).toBe("1");
    wrapper.instance().handleAddSimbol("/");
    expect(wrapper.state("numberDigit")).toBe("1/");
  });
  it('Deve calcular o resultado quando o símbolo é "="', () => {
    const wrapper = shallow(<Calculadora />);
    wrapper.instance().setState({ numberDigit: "2+3" });
    wrapper.instance().handleAddSimbol("=");
    wrapper.instance().evaluateExpression("2+3");
    expect(wrapper.instance().state.numberDigit).toBe("5");
    expect(wrapper.instance().state.isResult).toBe(true);
  });
});
