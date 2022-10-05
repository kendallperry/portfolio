import "./Viz.css";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useEffect, useState } from "react";
import TopCountriesControl from "./TopCountriesControl";

export default function Viz({ data }) {
  const [vizData, setVizData] = useState([]);
  const [topNumber, setTopNumber] = useState(25);

  // const fakeData = [{x: "US", y: 10}, {x: "Canada", y:7}, {x: "France", y: 3}]

  useEffect(() => {
    if (data.length) {
      let newVizData = [];

      for (let i = topNumber - 1; i >= 0; i--) {
        let country = `${data[i].location_name} ${i + 1}`;
        if (country.length > 23) {
          let end = country.slice(-2)
          country = `${country.slice(0, 21)}..${end}`
        }
        let mean = data[i].mean;
        let displayObj = { x: country, y: mean };
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data, topNumber]);

  return (
    <>
     <TopCountriesControl topNumber={topNumber} setTopNumber={setTopNumber} />
     <h4>Mean amount of people per 100,000</h4>
      <VictoryChart horizontal 
        theme={VictoryTheme.material} 
        domainPadding={8.5}
        >
        <VictoryAxis
          style={{
            axis: { strokeWidth: 0 },
            grid: { stroke: "none" },
            tickLabels: { fontSize: 4, padding: 0.5, margin: 10, stroke: "#", angle: 0 },
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
