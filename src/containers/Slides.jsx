import styles from '@styles/Projects.module.scss';
import { useEffect } from 'react';
import projectList from '../assets/projectList';
import Slide from '@components/Slide';
const SlidesContainer = () => {
  const projects = Array.from(projectList);
  useEffect(() => {
    const direccion = window.location.href;
    const works_container = document.getElementsByClassName(styles['works_container'])[0];
    const targets = Array.from(document.getElementsByClassName(styles['works_container'])[0].childNodes);
    let maxScrollPos = works_container.scrollWidth - works_container.clientWidth;
    let scrollPos = 0;
    const slide = document.getElementsByClassName(styles['work'])[0];
    const options = {
      root: works_container,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector(`#ref${entry.target.id}`).classList.add(styles['visible']);
        } else if (window.location.href !== direccion) {
          return null;
        } else {
          document.querySelector(`#ref${entry.target.id}`).classList.remove(styles['visible']);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach((target) => {
      observer.observe(target);
    });

    function scrollNext() {
      scroll_right.classList.remove(styles['disabled']);
      if (scrollPos < 0 + works_container.clientWidth) {
        scroll_left.classList.add(styles['disabled']);
        return 0;
      } else {
        return (scrollPos -= slide.offsetWidth);
      }
    }

    function scrollPrevious() {
      scroll_left.classList.remove(styles['disabled']);
      if (scrollPos > maxScrollPos - works_container.clientWidth) {
        scroll_right.classList.add(styles['disabled']);
        return maxScrollPos;
      } else {
        return (scrollPos += slide.offsetWidth);
      }
    }

    scroll_left.onclick = () =>
      works_container.scroll({
        left: scrollNext(),
        behavior: 'smooth',
      });

    scroll_right.onclick = () =>
      works_container.scroll({
        left: scrollPrevious(),
        behavior: 'smooth',
      });
  });

  return (
    <>
      <section className={styles['works']} id="work">
        <button className={`${styles['button_slide']} ${styles['left']}`} id="scroll_left">
          <img src="/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg" alt="previous" />
        </button>
        <button className={`${styles['button_slide']} ${styles['right']}`} id="scroll_right">
          <img src="/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg" alt="next" />
        </button>
        <div className={styles['works_container']}>
          {projects.map((project) => (
            <Slide image={project.image} link={project.link} title={project.title} id={projects.indexOf(project)} key={`slide${projects.indexOf(project)}`} />
          ))}
        </div>
        <div className={styles['descriptions']}>
          {projects.map((project) => (
            <div className={styles['description']} id={`ref${projects.indexOf(project)}`} key={`ref${projects.indexOf(project)}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SlidesContainer;
