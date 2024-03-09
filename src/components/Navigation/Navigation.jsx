import * as SC from './Navigation.styled';

const Navigation = () => {
  return (
    <SC.Nav>
      <SC.NavLinkStyled to="/">Home</SC.NavLinkStyled>
      <SC.NavLinkStyled to="/catalog">Catalog</SC.NavLinkStyled>
      <SC.NavLinkStyled to="/favorites">Favorites</SC.NavLinkStyled>
    </SC.Nav>
  );
};

export default Navigation;
