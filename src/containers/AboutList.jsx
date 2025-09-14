import ContactForm from '@components/ContactForm';
import InfoElement from '@components/InfoElement';
import ModalComponent from '@components/Modal';
import SlidesContainer from '@containers/Slides';
import styles from '@styles/AboutList.module.scss';
import { useState } from 'react';
import { memo } from 'react';

const AboutList = ({ images }) => {
  let renderedimages = [];
  images.forEach((element) => {
    renderedimages.push(
      <div className={styles['techImage']} key={`img${element}`}>
        <img src={element} layout="fill" alt={element} />
      </div>
    );
  });

  const [modal, setModal] = useState({ open: false, success: null, content: null });

  return (
    <>
      <div className={styles['img_container']} id="profile">
        <div className={styles['img_border']} />
        <img src="/aboutimg.png" layout="fill" alt="profile picture" className={styles['avatar']} />
      </div>
      <section>
        <InfoElement
          title={'Pefil personal'}
          content={
            <p>
              La informática y las nuevas tecnologías han sido mi pasión desde niño, a la que le he dedicado mucho tiempo de mi vida como hobby, y ahora he decidido dar el paso para dedicarme a ello
              profesionalmente. En los últimos años he estado trabajando en el sector sanitario y he comprobado que lo que me llena y hace sentir realizado es la programación y el desarrollo de
              software. Soy una persona organizada, con capacidad e interés por el aprendizaje continuo, realizando nuevas formaciones cada año, Me considero responsable y disciplinado, cualidades que
              aplico en mi estilo de vida. Me gusta trabajar dentro de un equipo, colaborando para hacer el trabajo más eficiente y productivo
            </p>
          }
          key={'Info1'}
        />

        <InfoElement title={'Tecnologías'} content={renderedimages} />

        <InfoElement
          title={'Idiomas'}
          content={
            <ul>
              <li key="li1">
                <p>🇬🇧 Inglés: B2 Universidad de Sevilla</p>
              </li>
              <li key="li2">
                <p>🇪🇸 Español: Nativo </p>
              </li>
            </ul>
          }
          key={'Info3'}
        />

        <InfoElement
          title={'Intereses Personales'}
          content={
            <ul>
              <li key="int1">
                <p>
                  Aprendizaje contínuo <span>📚</span>
                </p>
              </li>
              <li key="int2">
                <p>
                  Música <span>🎵</span>
                </p>
              </li>
              <li key="int3">
                <p>
                  Ejercicio físico, nutrición y bienestar <span>🏋️‍♂️</span>
                </p>
              </li>
              <li key="int4">
                <p>
                  Tecnología blockchain <span>🧬</span>
                </p>
              </li>
              <li key="int5">
                <p>
                  Cultura oriental <span>🏯</span>
                </p>
              </li>
            </ul>
          }
          key={'Info4'}
        />
      </section>
      <section className={styles['info_container']} id="projectsSection">
        <InfoElement title={'Proyectos'} content={<SlidesContainer />} collapse={true} key={'Info5'} />
      </section>
      <section className={styles['info_container']} id="contactSection">
        <InfoElement title={'Contacto'} content={<ContactForm handleModal={setModal} />} collapse={true} key={'Info6'} />
      </section>
      {modal.open && <ModalComponent visible={modal.open} success={modal.success} content={modal.content} handleClick={() => setModal(false)} />}
    </>
  );
};

export default memo(AboutList);
