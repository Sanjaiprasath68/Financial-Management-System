import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import Madha from './Madha.jpg';

const Display = () => {
  const [datas, setDatas] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [yearSelected, setYearSelected] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [showYearSelection, setShowYearSelection] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setShowYearSelection(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const fetchPersonsByYear = async (year) => {
    try {
      const response = await axios.get(`https://marians-subscription-api.vercel.app/details/${year}`);
      setDatas(response.data);
      setYearSelected(true);
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  const handleYearChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    if (year) {
      await fetchPersonsByYear(year);
    } else {
      setYearSelected(false);
    }
  };

  return (
    <div className='home-container'>
      {showImage && (
        <img className='madha' src={Madha} alt="Madha_Image" />
      )}
      {showYearSelection && (
        <div className='homescreen' >
          <h1>MARIAN SUBSCRIPTION</h1>

          {yearSelected && <Link to="/login" className='home-admin-link'>Admin</Link>}

          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            <option value="all">All Years</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          {showYearSelection && !yearSelected && <h4>Kindly Select The Year</h4>}
        </div>
      )}

      {yearSelected && (
        <div className='homepage'>
          {datas.length > 0 ? (
            <table className='table-home'>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>NAME</th>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APL</th>
                  <th>MAY</th>
                  <th>JUNE</th>
                  <th>JULY</th>
                  <th>AUG</th>
                  <th>SEP</th>
                  <th>OCT</th>
                  <th>NOV</th>
                  <th>DEC</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, index) => (
                  <tr key={data.ID}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.jan}</td>
                    <td>{data.feb}</td>
                    <td>{data.mar}</td>
                    <td>{data.apl}</td>
                    <td>{data.may}</td>
                    <td>{data.june}</td>
                    <td>{data.july}</td>
                    <td>{data.aug}</td>
                    <td>{data.sep}</td>
                    <td>{data.oct}</td>
                    <td>{data.nov}</td>
                    <td>{data.dcm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='home-empty-data'>There is no data available for the selected year</p>
          )}
        </div>
      )}

      <footer>@Marians</footer>
    </div>
  );
};

export default Display;
