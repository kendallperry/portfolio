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

  // const fakeData = [{x: "US", y: 10}, {x: "Canada", y:7}, {x: "France", y: 3}]

  useEffect(() => {
    if (data.length) {
      let newVizData = [];
      // only showing the top 30 countries affected
      // currently displaying backwards for the chart display
      for (let i = 25; i >= 0; i--) {
        let country = data[i].location_name;
        let mean = data[i].mean;
        let displayObj = { x: country, y: mean };
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data]);

  // console.log("after loop", vizData);

  return (
    <>
      <VictoryChart horizontal
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          style={{
            axis: { strokeWidth: 0 },
            grid: { stroke: "none" },
            tickLabels: { fontSize: 5, padding: 10, stroke: "#", angle: 0 },
          }}
        />
        <VictoryAxis dependentAxis
          orientation="top" />
        <VictoryBar
          theme={VictoryTheme.material}
          data={vizData}
          style={{ data: { fill: "tomato" } }}
          labelComponent={
            <VictoryLabel angle={0} verticalAnchor="middle" textAnchor="end" />
          }
        />
      </VictoryChart>
      {/* <VictoryPie
      data={vizData}
      //labelRadius={({ innerRadius }) => innerRadius + 10 }
      // radius={({ datum }) => 50 + datum.y * 5}
      innerRadius={10}
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
      /> */}
    </>
  );
}
