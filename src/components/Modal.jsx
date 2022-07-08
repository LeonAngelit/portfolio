import styles from '@styles/Modal.module.scss';

export default function ModalComponent({ success, content, handleClick }) {
  return (
    <div className={styles['modal']} id="modalMessage">
      <button className={styles['close_button']} id="close_button" onClick={handleClick}>
        <img src="/close_FILL0_wght400_GRAD0_opsz48.svg" alt="Close" />
      </button>
      <div className={styles['modal_content']}>
        <p className={styles[`${success}`]}>{content}</p>
      </div>
    </div>
  );
}
