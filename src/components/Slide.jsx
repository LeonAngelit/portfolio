import styles from '@styles/Projects.module.scss';
import Link from 'next/link';

export default function Slide({ image, link, title, id }) {
  return (
    <div className={styles['work']} id={id}>
      <Link href={link}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
}
