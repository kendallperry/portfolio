import "./Viz.css";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useEffect, useState } from "react";

export default function Viz({ data }) {
  const [vizData, setVizData] = useState([]);
  const [topNumber, setTopNumber] = useState(25);

  // const fakeData = [{x: "US", y: 10}, {x: "Canada", y:7}, {x: "France", y: 3}]

  useEffect(() => {
    if (data.length) {
      let newVizData = [];

      for (let i = topNumber; i >= 0; i--) {
        let country = data[i].location_name;
        let mean = data[i].mean;
        let displayObj = { x: country, y: mean };
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data, topNumber]);

  return (
    <>
      <p>Set Top Countries</p>
      <input
        type="range"
        min={5}
        max={50}
        onChange={(e) => setTopNumber(e.target.value)}
        value={topNumber}
      />{" "}
      <p>{topNumber}</p>
      <VictoryChart horizontal theme={VictoryTheme.material} domainPadding={10}>
        <VictoryAxis
          style={{
            axis: { strokeWidth: 0 },
            grid: { stroke: "none" },
            tickLabels: { fontSize: 5, padding: 10, stroke: "#", angle: 0 },
          }}
        />
        <VictoryAxis dependentAxis orientation="top" />
        <VictoryBar
          theme={VictoryTheme.material}
          data={vizData}
          style={{ data: { fill: "#046b99" } }}
          labelComponent={
            <VictoryLabel angle={0} verticalAnchor="middle" textAnchor="end" />
          }
        />
      </VictoryChart>
    </>
  );
}
