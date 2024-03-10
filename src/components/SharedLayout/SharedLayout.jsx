import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet fallback={null} />
      <Footer />
    </>
  );
};

export default SharedLayout;

