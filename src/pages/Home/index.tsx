import React, { Component } from 'react'
import { Container, Content, Options } from './style'
import PressureCardView from '../../components/PressureCardView';

export default class Home extends Component {
  render() {
    return (
      <Container>
          <Content>
            <PressureCardView/>
          </Content>
          <Options>
          </Options>
      </Container>
    )
  }
}
