import "./Viz.css";
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryLabel } from "victory";
import { useEffect, useState } from "react";


export default function Viz({ data }) {
  // TODO : Visualize the data!
  const [vizData, setVizData] = useState([])
 
  console.log("inside VIZ", data);

  useEffect(() => {
    if (data.length) {
      let newVizData = []
      for (let i = 0; i < data.length; i++) {
        let country = data[i].location_name;
        let mean = data[i].mean
        let displayObj = { x: country, y: mean }
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data])

  console.log("after loop", vizData);


  return (
    <>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryAxis
            style={{
              axis: { strokeWidth: 0 },
              tickLabels: { fontSize: 5, padding: 10, stroke: "#", angle: 270 }
            }} />
        <VictoryBar data={vizData} labelComponent={
      <VictoryLabel angle={0} verticalAnchor="middle" textAnchor="end"/>
    } />
      </VictoryChart>
      {/* <VictoryPie
      labelRadius={({ innerRadius }) => innerRadius + 5 }
      radius={({ datum }) => 50 + datum.y * 30}
      innerRadius={30}
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
      /> */}
    </>
  );
}
