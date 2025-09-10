import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProjects = (API) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProjects(response.data);
    }
    fetchData();
  }, [API]);

  return projects;
};

export default useGetProjects;
