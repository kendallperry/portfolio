import { useState, useEffect, useCallback } from "react";

import * as api from "../api";
import ControlPanel from "./ControlPanel";
import Viz from "./Viz";

export default function App() {
  // make an isLoading for future;
  const [data, setData] = useState({});
 // const [isLoading, setIsLoading] = useState(true);

  const updateData = (newData) => {
    console.log("inside updateData", newData)
    setData(newData);
  };

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
      <h1>Populations Most Affected by Opioid Use Disorders</h1>
      <ControlPanel updateData={updateData} />
      <Viz data={data} />
    </div>
  );
}

//updateData={updateData}
