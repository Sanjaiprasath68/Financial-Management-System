import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get('https://demo-marians-api.vercel.app/details')
      .then(res => setDatas(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://demo-marians-api.vercel.app/deletePerson/${id}`)
      console.log(response.data)
    } catch (error) {
      console.log("Error Deleteing person");
      alert("Error Deleteing person")
    }
  }

  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive); // Toggle the active state
  };


  return (
    <>
    
      <h1 className='h1-home'>Admin</h1>
      <div className="dropdown">
          <button className={isActive ? 'active-dropdown' : 'dropdown-button'} onClick={toggleDropdown}>
            Menu
          </button>
          {isActive && (
            <div className="dropdown-content">
              <p><Link to="/addperson" className='addPerson-link'>AddPerson</Link></p><br></br>
              <p><Link to="/" className='home-link'>HomePage</Link></p>
            </div>
          )}
        </div>

      <div className='admin'>
        {datas.length > 0 ? (
          <table className='table-admin'>
            <thead><tr>
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
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
            </thead>
            <tbody >
              {datas.map((data, index) => (
                <tr key={data.id}>
                  <td className='index'>{index + 1}</td>
                  <td> {data.name}</td>
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
                  <td><Link to={`/editPerson/${data._id}`} className='edit'>EDIT</Link></td>
                  <td><Link to="/admin" className='delete' onClick={() => handleDelete(data._id)}>DELETE</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='empty-data'> No Data </p>
        )
        }
      </div>

    </>
  )
}
export default Admin
