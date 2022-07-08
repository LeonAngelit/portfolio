/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from '@headlessui/react';
import socialIcons from 'assets/socialIcons';

export default function Footer() {
  const date = new Date();

  return (
    <>
      <Disclosure as="nav" className="bg-zinc-900 md:relative w-full bottom-0 left-0 m-0 flex flex-col items-center justify-between sm:items-center p-6 sm:flex-row sm:h-16">
        <>
          <div id="reconocimientos" className="w-full sm:w-1/3 flex justify-center sm:justify-start">
            <p className="text-lg">
              Inspirado en{' '}
              <a className="text-lg" href="https://jacekjeznach.com/" target={'_blank'} rel="noopener noreferrer">
                Jacek Jeznach
              </a>
            </p>
          </div>
          <div id="firma" className="w-full sm:w-1/3 flex justify-center">
            <p className="text-lg">Leon Angelit {date.getFullYear()}</p>
          </div>
          <div id="redes" className="w-1/3 flex  justify-center sm:justify-end mt-2">
            <ul className="flex justify-evenly w-3/5">
              <li>
                <a href="https://www.linkedin.com/in/jcnfksnxkckfn/" target={'_blank'} rel="noopener noreferrer">
                  <img className="w-8 h-8" src={socialIcons.Linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li className="bg-white">
                <a href="https://github.com/LeonAngelit" target={'_blank'} rel="noopener noreferrer">
                  <img className="w-8 h-8" src={socialIcons.Github} alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://app.flyncer.com/cv/e423e279-5e5c-4e1d-a9ba-2b96b09b4368" target={'_blank'} rel="noopener noreferrer">
                  <img className="w-8 h-8 bg-white" src={socialIcons.Flyncer} alt="Flyncer" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/leonangelitg/" target={'_blank'} rel="noopener noreferrer">
                  <img className="w-8 h-8" src={socialIcons.Instagram} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </>
      </Disclosure>
    </>
  );
}
