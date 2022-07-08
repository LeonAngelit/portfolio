import styles from '@styles/CourseCard.module.scss';

export default function CourseCard({ course }) {
  return (
    <div className={styles['courseCard']}>
      <a href={`http://www.platzi.com${course.link}`} target="_blank" rel="noopener noreferrer">
        <div className={styles['image_container']}>
          <img src={course.image} alt="Icono del curso" />
        </div>
        <div className={styles['text_container']}>
          <p>{course.title}</p>
        </div>
      </a>
    </div>
  );
}
