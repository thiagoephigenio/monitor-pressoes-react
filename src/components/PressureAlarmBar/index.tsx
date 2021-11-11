import React from "react";
import { Alarms, Paragraph, Title, ButtonList } from "./style";

const PressureAlarmBar: React.FC = () => {
  return (
    <>
      <Title>Pressões de alarme</Title>
      <Paragraph />
      <Alarms>
        <li>DP 101 - 10 kgf/cm²</li>
        <li>DP 102 - 10 kgf/cm²</li>
        <li>DP 103 - 05 kgf/cm²</li>
        <li>DP 104 - 10 kgf/cm²</li>
        <li>DP 105 - 10 kgf/cm²</li>
        <li>DP 106 - 10 kgf/cm²</li>
        <li>DP 107 - 10 kgf/cm²</li>
        <li>DP 108 - 10 kgf/cm²</li>
      </Alarms>
      <ButtonList>
        <a href=".">Histórico de Pressões</a>
      </ButtonList>
    </>
  );
};

export default PressureAlarmBar;
