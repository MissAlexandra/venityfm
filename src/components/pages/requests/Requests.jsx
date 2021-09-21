import React, { useState, useEffect } from 'react';

import Datatable from './datatable';
import './style.css';
import './requests.css'

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function Requests() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/posts/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);



  const columns = data[0] && Object.keys(data[0]);
  return (

    <div className="user">
      <Datatable data={data} />
    </div>
    );
}