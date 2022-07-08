import Header from '@components/Header';
import Nav from '@common/Nav';
import Footer from '@components/Footer';
export default function MainLayout({ children }) {
  return (
    <>
        <Header />
        <Nav />
        <main>
          <div className="max-w-80vw h-auto mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
    </>
  );
}
