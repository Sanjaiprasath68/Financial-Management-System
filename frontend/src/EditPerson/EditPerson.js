import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditPerson.css';

const EditPerson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [person, setPerson] = useState({
    name: '',
    year:'',
    jan: '',
    feb: '',
    mar: '',
    apl: '',
    may: '',
    june: '',
    july: '',
    aug: '',
    sep: '',
    oct: '',
    nov: '',
    dcm: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://finance-api-ochre.vercel.app/editPerson/${id}`);
      setPerson(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://finance-api-ochre.vercel.app/editPerson/${id}`, person);
      navigate('/admin')
    } catch (error) {
      console.error('Error updating data: ', error);
    }
  };
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <div className='editperson'>
      <div className='h1-editperson'> <h1>Edit Person</h1>
      <div className="dropdown">
          <button className={isActive ? 'active-dropdown' : 'dropdown-button'} onClick={toggleDropdown}>
            Menu
          </button>
          {isActive && (
            <div className="dropdown-content">
              <p><Link to="/admin" className='editperson-admin-link'>Admin</Link></p><br></br>
              <p><Link to="/" className='editperson-home-link'>HomePage</Link></p>
            </div>
          )}
        </div>
        
      </div>

      <div className='container'>
        <form className='form-editperson' onSubmit={handleSubmit}>
          <div className='edit-datas'>

            <div className='edit-data'>
              <label htmlFor=''>NAME</label>
              <input type='text' placeholder='Enter Name' name='name' value={person.name} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>YEAR</label>
              <input type='number' placeholder='Enter Year' name='year' value={person.year} onChange={handleChange}  />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>JAN</label>
              <input type='number' placeholder='Enter Amount' name='jan' value={person.jan} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>FEB</label>
              <input type='number' placeholder='Enter Amount' name='feb' value={person.feb} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>MAR</label>
              <input type='number' placeholder='Enter Amount' name='mar' value={person.mar} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>APL</label>
              <input type='number' placeholder='Enter Amount' name='apl' value={person.apl} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>MAY</label>
              <input type='number' placeholder='Enter Amount' name='may' value={person.may} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>JUN</label>
              <input type='number' placeholder='Enter Amount' name='june' value={person.june} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>JULY</label>
              <input type='number' placeholder='Enter Amount' name='july' value={person.july} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>AUG</label>
              <input type='number' placeholder='Enter Amount' name='aug' value={person.aug} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>SEP</label>
              <input type='number' placeholder='Enter Amount' name='sep' value={person.sep} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>OCT</label>
              <input type='number' placeholder='Enter Amount' name='oct' value={person.oct} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>NOV</label>
              <input type='number' placeholder='Enter Amount' name='nov' value={person.nov} onChange={handleChange} />
            </div>
            <div className='edit-data'>
              <label htmlFor=''>DCM</label>
              <input type='number' placeholder='Enter Amount' name='dcm' value={person.dcm} onChange={handleChange} />
            </div>
            <button type="submit" className='editperson-btn'>Update</button>
          </div>
        </form>
        <footer>@Marians</footer>
      </div>
    </div>

  )
}
export default EditPerson
