import React from 'react';
import styles from '@styles/InfoElement.module.scss';
import Image from 'next/image';

export default function InfoElement({ title, content, collapse = true }) {
  return (
    <div className={styles['paragraph']}>
      <div className={styles['title']}>
        <h3>{title}</h3>
        {collapse && (
          <div className={styles['arrow']}>
            <div
              id="arrowImg"
              className={styles['arrowimg']}
              onClick={(event) => {
                console.log(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes);
                event.target.classList.toggle(styles['rotated']);
                event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].classList.toggle(styles['contentHided']);
              }}
              onKeyDown={(event) => {
                event.target.classList.toggle(styles['rotated']);
                event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].classList.toggle(styles['contentHided']);
              }}
              tabIndex={'0'}
              role={'button'}
            >
              <Image src={'/expand_more_FILL0_wght400_GRAD0_opsz48.svg'} width={100} height={100} alt="collapse" id="arrowImage" />
            </div>
          </div>
        )}
      </div>
      <div className={styles['p_content']}>
        <div>{content}</div>
      </div>
    </div>
  );
}
