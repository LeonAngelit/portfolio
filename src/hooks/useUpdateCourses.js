import { useEffect, useState } from 'react';
import axios from 'axios';

const useUpdateCourses = (API) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      await axios.post(API, response);
      setCourses(response.data);
    }
    setTimeout(() => fetchData(), 2000);
  }, []);
  return courses;
};

export default useUpdateCourses;
