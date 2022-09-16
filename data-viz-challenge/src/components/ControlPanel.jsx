import { useCallback, useState, useEffect } from 'react';

import { SexControl, YearControl }  from './controls';
import * as api from '../api';
import './ControlPanel.css';

export default function ControlPanel({ updateData }) {
  const [sex, setSex] = useState('Females');
  const [year, setYear] = useState(2017);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        const data = await api.fetchData({
          year_id: year,
          sex_name: sex,
        });
        data.sort((a, b) => {
          return b.mean - a.mean;
        })
        // setData(data);
        updateData(data.splice(0,20))
        console.log('inside useeffect')
      }
      fetchData()
      setIsLoading(!isLoading)
    }
  }, [sex, year, isLoading, updateData])

  //updateData(filteredData)

  const handelSexChange = useCallback(
    (nextValue) => {
      setSex(nextValue);
    },
    [setSex],
  );

  const handelYearChange = useCallback(
    (nextValue) => {
      setYear(nextValue);
    },
    [setYear],
  );

  return (
    <div className="control-panel">
      <SexControl value={sex} onChange={handelSexChange} />
      <YearControl max={2017} min={1990} value={year} onChange={handelYearChange} />
    </div>
  );
}
