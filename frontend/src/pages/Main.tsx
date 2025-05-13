import { useEffect, useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
const sampleData = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 30 },
  { x: 4, y: 40 },
  { x: 5, y: 50 },
  { x: 6, y: 60 },
];

interface PaySumData {
  tag: string;
  total_price: number;
}
export default function Main() {
  const [paySum, setPaySum] = useState<PaySumData[]>([]);
  const getUserSum = async () => {
    const response = await fetch(`http://localhost:5000/paylog/all/${1}`);
    const data = await response.json();
    setPaySum(data.values);
  };
  useEffect(() => {
    getUserSum();
  },[]);
  return (
    <>
      <div>this is main page</div>
      <VictoryChart domainPadding={{ x: 20 }} theme={VictoryTheme.clean}>
        <VictoryBar
          data={sampleData}
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
      <VictoryPie
        innerRadius={50}
        padAngle={5}
        data={paySum.map((item: PaySumData) => ({ x: item.tag, y: item.total_price }))}
        categories={{
          x: ["Cats", "Birds", "Dogs", "Rabbits"],
        }}
        theme={VictoryTheme.clean}
      />
    </>
  );
}
