import * as SC from './HomePage.styled';
import { IMG } from '../../components/images/';

const HomePage = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.HeroImg})` }}>
        <SC.Title>
          Welcome to <SC.Span>RentalCar</SC.Span> Service!
        </SC.Title>
        <SC.LinkStyled to="/catalog">Car rental CATALOG</SC.LinkStyled>
      </SC.Wrapper>
    </>
  );
};
export default HomePage;
