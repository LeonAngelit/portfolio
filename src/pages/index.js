import styles from '@styles/Index.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles['container']}>
        <div className="relative w-10/12 mx-auto">
          <div className="w-10/12 h-1/3">
            <div className="relative z-10 pb-8 bg-noir h-1/2 sm:pb-16 md:pb-20 lg:max-w-full lg:w-8/12 lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="flex-col overflow-visible lg:pl-20">
                <div id="name" className="flex pt-40 w-full">
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">L</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">E</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">O</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">N</p>
                  </div>
                </div>

                <div id="surname" className="flex">
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">A</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">N</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">G</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">E</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">L</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">I</p>
                  </div>
                  <div>
                    <p className="text-9xl hover:scale-150 transition 1s hover:text-bg-green hover:font-bold">T</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/photo_2020-03-01_16-51-23.jpg" alt="" />
          </div>
        </div>
        <div className="block w-full lg:h-1/6 mx-auto mt-40 lg:whitespace-nowrap lg:overflow-hidden lg:animate-type">
          <p className="text-center font-edu text-7xl text-stone-400">Software developer: Doing what I love</p>
        </div>
      </div>
    </>
  );
}
