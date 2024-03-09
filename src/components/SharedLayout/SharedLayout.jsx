import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet fallback={null} />
    </>
  );
};

export default SharedLayout;

// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

// const SharedLayout = () => {
//   return (
//     <>
//       <Header />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default SharedLayout;
