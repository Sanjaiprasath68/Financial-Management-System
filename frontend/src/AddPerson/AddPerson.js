import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddPerson.css'

const AddPerson = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [jan, setJan] = useState('');
  const [feb, setFeb] = useState('');
  const [mar, setMar] = useState('');
  const [apl, setApl] = useState('');
  const [may, setMay] = useState('');
  const [june, setJun] = useState('');
  const [july, setJuly] = useState('');
  const [aug, setAug] = useState('');
  const [sep, setSep] = useState('');
  const [oct, setOct] = useState('');
  const [nov, setNov] = useState('');
  const [dcm, setDcm] = useState('');
  const [addeddata, setAddedData] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://demo-marians-api.vercel.app/addPerson', { name, year, jan, feb, mar, apl, may, june, july, aug, sep, oct, nov, dcm });
      console.log(response.data)
      setName('');
      setYear('')
      setJan('');
      setFeb('');
      setMar('');
      setApl('');
      setMay('');
      setJun('');
      setJuly('');
      setAug('');
      setSep('');
      setOct('');
      setNov('');
      setDcm('');
      setAddedData("Person Added Successfully")
      const timeOutMsg = setTimeout(() => setAddedData(''), 3000);
      return () => clearTimeout(timeOutMsg)

    } catch (error) {
      console.log("error adding name", error);
      alert("error adding name")
    }
  }
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive); // Toggle the active state
  };


  return (
    <div className='addperson'>
      <div className='h1-addPerson'><h1>Add Person</h1>
      
        <div className="dropdown">
          <button className={isActive ? 'active-dropdown' : 'dropdown-button'} onClick={toggleDropdown}>
            Menu
          </button>
          {isActive && (
            <div className="dropdown-content">
              <p><Link to="/admin" className='addPerson-admin-link'>Admin</Link></p><br></br>
              <p><Link to="/" className='addPerson-home-link'>HomePage</Link></p>
            </div>
          )}
        </div>
      </div>

      <div className='container'>

        <form onSubmit={handleSubmit} className='form-addperson'>
          <p className='success-msg'>{addeddata}</p>

          <div className='datas'>
          
            <div className='data'>
              <label htmlFor='name'>NAME</label>
              <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}  />
            </div>

            <div className='data'>
              <label htmlFor='year'>YEAR</label>
              <input type='number' id='year' value={year} onChange={(e) => setYear(e.target.value)}  />
            </div>

            <div className='data'>
              <label htmlFor='jan'>JAN</label>
              <input type='number' placeholder='Enter Amount' value={jan} onChange={(e) => setJan(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>FEB</label>
              <input type='number' placeholder='Enter Amount' value={feb} onChange={(e) => setFeb(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>MAR</label>
              <input type='number' placeholder='Enter Amount' value={mar} onChange={(e) => setMar(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>APL</label>
              <input type='number' placeholder='Enter Amount' value={apl} onChange={(e) => setApl(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>MAY</label>
              <input type='number' placeholder='Enter Amount' value={may} onChange={(e) => setMay(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>JUN</label>
              <input type='number' placeholder='Enter Amount' value={june} onChange={(e) => setJun(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>JULY</label>
              <input type='number' placeholder='Enter Amount' value={july} onChange={(e) => setJuly(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>AUG</label>
              <input type='number' placeholder='Enter Amount' value={aug} onChange={(e) => setAug(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>SEP</label>
              <input type='number' placeholder='Enter Amount' value={sep} onChange={(e) => setSep(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>OCT</label>
              <input type='number' placeholder='Enter Amount' value={oct} onChange={(e) => setOct(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>NOV</label>
              <input type='number' placeholder='Enter Amount' value={nov} onChange={(e) => setNov(e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor=''>DCM</label>
              <input type='number' placeholder='Enter Amount' value={dcm} onChange={(e) => setDcm(e.target.value)} />
            </div>
            <button className='addperson-btn' type="submit">Add</button>
          </div>
        </form>
        <footer>@Marians</footer>
      </div>
    </div>

  )
}
export default AddPerson
