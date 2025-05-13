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

export default function Main() {
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
        data={[
          { x: "Cats", y: 30 },
          { x: "Dogs", y: 35 },
          { x: "Birds", y: 25 },
          { x: "Rabbits", y: 10 },
        ]}
        categories={{
          x: ["Cats", "Birds", "Dogs", "Rabbits"],
        }}
        theme={VictoryTheme.clean}
      />
    </>
  );
}
