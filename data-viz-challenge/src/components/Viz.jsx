import "./Viz.css";
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useEffect, useState } from "react";

export default function Viz({ data }) {
  const [vizData, setVizData] = useState([]);

  //console.log("inside VIZ", data);

  useEffect(() => {
    if (data.length) {
      let newVizData = [];
      // only showing the top 30 countries affected
      for (let i = 0; i < 30; i++) {
        let country = data[i].location_name;
        let mean = data[i].mean;
        let displayObj = { x: country, y: mean };
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data]);

  //console.log("after loop", vizData);

  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        horizontal={true}
      >
        <VictoryAxis
          style={{
            axis: { strokeWidth: 0 },
            tickLabels: { fontSize: 5, padding: 10, stroke: "#", angle: 0 },
          }}
        />
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
