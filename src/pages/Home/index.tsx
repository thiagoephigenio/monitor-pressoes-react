import React, { Component } from "react";
import { Container, Content, Options } from "./style";
import PressureCardView from "../../components/PressureCardView";
import PressureAlarmBar from "../../components/PressureAlarmBar";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <PressureCardView />
        </Content>
        <Options>
          <PressureAlarmBar />
        </Options>
      </Container>
    );
  }
}
