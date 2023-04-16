import { useEffect, useState } from 'react';
import axios from 'axios';

const useUpdateCourses = (API) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await setTimeout(() => axios(API), 2000);
      setCourses(response.data);
    }
    fetchData();
  }, []);
  return courses;
};

export default useUpdateCourses;
