import React, { memo, useState, useEffect } from 'react';
import useGetCourses from '@hooks/useGetCourses';
import CourseCard from '@components/CourseCard';
import styles from '@styles/CourseList.module.scss';
import useUpdateCourses from '@hooks/useUpdateCourses';
const API = process.env.NEXT_PUBLIC_API_COURSES;

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  let coursesProv = useGetCourses(API);
  let coursesUpdate = useUpdateCourses(`${API}/update`);

  useEffect(() => {
    setCourses(coursesProv);
  }, [coursesProv]);

  useEffect(() => {
    setCourses(coursesUpdate);
  }, [coursesUpdate]);

  return (
    <>
      {courses?.length != 0 ? (
        <>
          <h1 className={styles['title']}>Actualmente he realizado {courses?.length} cursos</h1>
          <h2 className={styles['subtitle']}>
            Haz clic en las tarjetas para ver el diploma. Estos cursos los he realizado en{' '}
            <a className={styles['subtitle_link']} href="https://platzi.com/" target="_blank" rel="noopener noreferrer">
              Platzi
            </a>{' '}
            🙂
          </h2>
        </>
      ) : (
        <h1 className={styles['title']}>Obteniendo datos...</h1>
      )}
      <section id="cards-container" className={styles['cards-container']}>
        {courses?.map((course) => (
          <CourseCard course={course} key={courses.indexOf(course)} />
        ))}
      </section>
    </>
  );
};

export default memo(CoursesList);
