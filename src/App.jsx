import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import FirstPage from 'pages/FirstPage/FirstPage';
// import SecondPage from 'pages/SecondPage/SecondPage';
// import HalfPage from 'pages/HalfPage/HalfPage';
// import ErrorPage from 'pages/ErrorPage/ErrorPage';
// import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;

// function App() {
//   console.log(test);
//   return (
//     <AppWrapper>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route path="/first" element={<FirstPage />} />
//           <Route path="/second" element={<SecondPage />}>
//             <Route path=":half" element={<HalfPage />} />
//           </Route>
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </AppWrapper>
//   );
// }
// export default App;
