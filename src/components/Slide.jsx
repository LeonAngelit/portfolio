import styles from '@styles/Projects.module.scss';
const API = process.env.NEXT_PUBLIC_API_PROJECTS;

export default function Slide({ image, link, title, id }) {
  return (
    <div className={styles['work']} id={id}>
      <a href={`https://${link}`} target={'_blank'} rel={'noopener noreferrer'} style={{ width: '80%' }}>
        <img src={`${API}/images/${image}`} alt={title} />
      </a>
    </div>
  );
}
