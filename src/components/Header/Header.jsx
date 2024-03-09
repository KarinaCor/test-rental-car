import * as SC from './Header.styled';
import Navigation from "components/Navigation/Navigation"

const Header = () => {
    return (
      <SC.Wrapper>
        <SC.LinkStyled to="/">RentalCar</SC.LinkStyled>
        <Navigation />
      </SC.Wrapper>
    );
}
export default Header;