import styles from '@styles/ContactForm.module.scss';
import { useRef } from 'react';
import sendMail from '../services/mail';

export default function ContactForm({ handleModal }) {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  function validateForm(name, email, phone, subject) {
    /* eslint-disable no-useless-escape */
    let inputNombre = document.getElementById('inputNombre');
    let spanName = document.getElementById('spanName');
    let inputEmail = document.getElementById('inputEmail');
    let spanEmail = document.getElementById('spanEmail');
    let inputPhone = document.getElementById('inputPhone');
    let spanPhone = document.getElementById('spanPhone');
    let inputSubject = document.getElementById('inputSubject');
    let spanSubject = document.getElementById('spanSubject');
    let regexName = /^([a-zA-ZÀ-ÿ\u00f1\u00d1]\s*\.*){2,60}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexPhone = /^[6798]\d{8}$/;
    let regexSubject = /^([a-zA-ZÀ-ÿ\.\d]\s*){1,60}$/;
    let err = 0;
    if (name == '' || !regexName.test(name)) {
      ++err;
      inputNombre.classList.add(styles['error']);
      spanName.classList.add(styles['visible']);
    } else {
      if (inputNombre.classList.contains(styles['error'])) {
        inputNombre.classList.remove(styles['error']);
        spanName.classList.remove(styles['visible']);
      }
    }
    if (email == '' || !regexEmail.test(email)) {
      ++err;
      inputEmail.classList.add(styles['error']);
      spanEmail.classList.add(styles['visible']);
    } else {
      if (inputEmail.classList.contains(styles['error'])) {
        inputEmail.classList.remove(styles['error']);
        spanEmail.classList.remove(styles['visible']);
      }
    }

    if (phone !== undefined) {
      if (!regexPhone.test(phone)) {
        ++err;
        inputPhone.classList.add(styles['error']);
        spanPhone.classList.add(styles['visible']);
      } else {
        if (inputPhone.classList.contains(styles['error'])) {
          inputPhone.classList.remove(styles['error']);
          spanPhone.classList.remove(styles['visible']);
        }
      }
    } else {
      inputPhone.classList.remove(styles['error']);
      spanPhone.classList.remove(styles['visible']);
    }
    if (subject == '' || !regexSubject.test(subject)) {
      ++err;
      inputSubject.classList.add(styles['error']);
      spanSubject.classList.add(styles['visible']);
    } else {
      if (inputSubject.classList.contains(styles['error'])) {
        inputSubject.classList.remove(styles['error']);
        spanSubject.classList.remove(styles['visible']);
      }
    }
    return err;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let values = {};
    if (phoneRef.current.value == '') {
      values = {
        mailSender: emailRef.current.value,
        name: nameRef.current.value,
        subject: subjectRef.current.value,
        htmlBody: messageRef.current.value,
      };
    } else {
      values = {
        mailSender: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        subject: subjectRef.current.value,
        htmlBody: messageRef.current.value,
      };
    }

    if (validateForm(values.name, values.mailSender, values.phone, values.subject) == 0) {
      const res = await sendMail(values);
      if (res.status == 200) {
        handleModal({ open: true, success: 'success', content: '¡Mensaje enviado correctamente!' });
      } else {
        handleModal({ open: true, success: 'fail', content: `Ha habido un error: ${res.data.statusCode}: ${res.data.error}` });
      }
      event.target.reset();
      setTimeout(() => {
        handleModal({ open: false });
      }, 4000);
    } else {
      handleModal({ open: false });
    }
  };

  return (
    <form action="" className={styles['contactForm']} onSubmit={handleSubmit}>
      <div className={styles['formContainer']}>
        <div className={styles['formInputs']}>
          <label htmlFor="name">Nombre:* </label>
          <input type="text" name="name" id="inputNombre" placeholder="Inserta tu nombre" required ref={nameRef} />
          <span className={styles['spanError']} id="spanName">
            <p>Inserta un nombre válido, máximo 60 caracteres</p>
          </span>
          <label htmlFor="email">Email:* </label>
          <input type="email" name="email" id="inputEmail" placeholder="Inserta tu email" required ref={emailRef} />
          <span className={styles['spanError']} id="spanEmail">
            <p>Inserta un correo válido</p>
          </span>
          <label htmlFor="phone">Teléfono: </label>
          <input type="number" name="phone" id="inputPhone" placeholder="Inserta tu número" ref={phoneRef} />
          <span className={styles['spanError']} id="spanPhone">
            <p>Inserta un teléfono válido, 9 digitos</p>
          </span>
          <label htmlFor="subject">Asunto:* </label>
          <input type="text" name="subject" id="inputSubject" placeholder="Inserta el asunto" required ref={subjectRef} />
          <span className={styles['spanError']} id="spanSubject">
            <p>Inserta un asunto válido, máximo 60 caracteres</p>
          </span>
        </div>
        <div className={styles['form_message']}>
          <label htmlFor="message">Mensaje:*</label>
          <textarea name="message" id="areaTexto" cols={30} rows={10} placeholder="Escribe tu mensaje" style={{ resize: 'none' }} required defaultValue={''} ref={messageRef} />
          <span className={styles['spanError']} id="spanText">
            <p>Incluye un mensaje</p>
          </span>
          <input type="submit" name="submit" defaultValue="Enviar" className={styles['send_button']} id="sendForm" />
        </div>
      </div>
    </form>
  );
}
