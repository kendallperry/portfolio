import { useState, useEffect } from "react";

import * as api from "../api";
import Citation from "./Citation";
import ControlPanel from "./ControlPanel";
import Viz from "./Viz";

export default function App() {

  const [data, setData] = useState({});
  // const [citation, setCitation] = useState('')

  const updateData = (newData) => setData(newData);

  // useEffect(() => {
  //   async function fetchCitation() {
  //     const { citation } = await api.fetchCitation();
  //     setCitation(citation);
  //   }
  //   fetchCitation()
  // }, [])
  
  // Example of how you could fetch data
  // useEffect(() => {
  //   async function fetchData() {
  //     const metadata = await api.fetchMetadata();
  //     const citation = await api.fetchCitation();
  //     const data = await api.fetchData({
  //       location_name: ['Belize', 'Venezuela'],
  //       year_name: [1990, 2015],
  //       sex_name: ['Males', 'Females'],
  //     });
  //     //console.log({ metadata, citation, data });
  //   }
  //   fetchData();
  //   setIsLoading(false);
  // }, []);

  return (
    <div className="App">
      <h3>Populations Most Affected by Opioid Use Disorders</h3>
      <h4>Mean amount per 100,000 people</h4>
      <ControlPanel updateData={updateData} className='controls' />
      <Viz data={data} className='viz-data' />
      <Citation />
    </div>
   
  );
}
