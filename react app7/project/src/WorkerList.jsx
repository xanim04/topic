import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const WorkerList = ({ workers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    let filtered = workers;
    if (departmentFilter !== 'all') {
      filtered = filtered.filter(worker => worker.department === departmentFilter);
    }
    filtered = filtered.filter(worker =>
      worker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWorkers(filtered);
  }, [searchTerm, departmentFilter, workers]);

  const departments = [...new Set(workers.map(worker => worker.department))];

  return (
    <div>
      <input
        type="text"
        placeholder="İşçi adını daxil edin"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)}>
        <option value="all">Hamısı</option>
        {departments.map(department => (
          <option key={department} value={department}>{department}</option>
        ))}
      </select>
      <ul>
        {filteredWorkers.map(worker => (
          <li key={worker.id}>{worker.name} - {worker.department}</li>
        ))}
      </ul>
    </div>
  );
};

WorkerList.propTypes = {
  workers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Məlumatı serverdən əldə edin və komponentə ötürün
fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
  .then(response => response.json())
  .then(data => {
    ReactDOM.render(
      <WorkerList workers={data} />,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.error('Məlumat əldə edilərkən səhv:', error);
  });


  export default WorkerList;