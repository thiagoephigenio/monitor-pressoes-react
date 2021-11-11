import React, { Component } from "react";
import { CardView, Title, Figure, Img, MonitorLabel } from "./style";
import bombImg from "../../assets/img/bomba.png";

export default class PressureCardView extends Component {
  render() {
    return (
      <CardView>
        <Title>DP 101</Title>
        <Figure>
          <Img src={bombImg} />
        </Figure>
        <MonitorLabel>0.93 kgf/cm²</MonitorLabel>
      </CardView>
    );
  }
}
