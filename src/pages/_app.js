import '@styles/tailwind.css';
import '@styles/global.scss';
import '@styles/_vars.scss';
import MainLayout from '@layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
