import React, { Component } from 'react'
import { CardView, Title, Figure, MonitorLabel } from './style'

export default class PressureCardView extends Component {
  render() {
    return (
      <CardView>
        <Title>DP 101</Title>
        <Figure></Figure>
        <MonitorLabel>0.93 BAR</MonitorLabel>
      </CardView>
    )
  }
}
