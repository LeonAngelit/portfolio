import styles from '@styles/Projects.module.scss';

export default function Slide({ image, link, title, id }) {
  return (
    <div className={styles['work']} id={id}>
      <a href={`https://${link}`}>
        <img src={image} alt={title} />
      </a>
    </div>
  );
}
