import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCourses = (API) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setCourses(response.data);
    }
    fetchData();
  }, []);

  return courses;
};

export default useGetCourses;
