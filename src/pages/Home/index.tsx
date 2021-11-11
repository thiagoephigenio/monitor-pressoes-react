import React, { Component } from "react";
import { Container, Content } from "./style";
import PressureCardView from "../../components/PressureCardView";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <PressureCardView />
        </Content>
      </Container>
    );
  }
}
