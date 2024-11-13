import React, { useEffect, useState } from 'react';
import '../styles/filters.css';

const Filters = ({ data }) => {
  const [years, setYears] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Extract unique years from the fetched data
    if (data && data.length > 0) {
      const uniqueYears = Array.from(new Set(data.map(item => item.year))).sort(); // Sort the years
      setYears(uniqueYears);

      // Extract unique topics from the fetched data
      const uniqueTopics = Array.from(new Set(data.map(item => item.topic)));
      setTopics(uniqueTopics);
    }
  }, [data]);

  return (
    <div className="filters">
      <h2>Filters</h2>

      {/* Year filter */}
      <div>
        <label>Year:</label>
        <select>
          <option value="">Select Year</option>
          {/* Dynamically generate year options */}
          {years.length > 0 ? (
            years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))
          ) : (
            <option value="">No data available</option>
          )}
        </select>
      </div>

      {/* Topic filter */}
      <div>
        <label>Topic:</label>
        <select style={{ width: '200px' }}>
          <option value="">Select Topic</option>
          {/* Dynamically generate topic options */}
          {topics.length > 0 ? (
            topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))
          ) : (
            <option value="">No topics available</option>
          )}
        </select>
      </div>

      {/* You can add more filters here, e.g., region, sector */}
    </div>
  );
};

export default Filters;
