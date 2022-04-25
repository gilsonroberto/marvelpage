import styled from "styled-components";

export const LogotipoMarvelMenu = styled.div`
  font-family: MarvelRegular;
  font-size: 50px;
  width: 113px;
  background-color: #ff0000;

  @media (max-width: 767px) {
    font-size: 4vh;
    width: 80%;
  }

  span {
    position: relative;
    top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0px;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const MenuNavigation = styled.div`
  a {
    text-decoration: none;
    color: #ffffff;
  }

  p {
    cursor: pointer;
    font-size: 20px;
    
    @media (max-width: 767px) {
      font-size: 14px;
    }
    
  }
`;

export const LogoBox = styled.div`
  background-color: #ff0000;
  width: 25vh;
  height: 10vh;
`;

export const TextMarvel = styled.p`
  font-family: MarvelRegular;
  font-size: 11vh;
  margin: 10px;
`;

export const LeftArrow = styled.div`
  position: fixed;
  top: 50vh;
  left: 20px;
  cursor: pointer;

  img {
    font-size: 50px
  }
`;

export const RightArrow = styled.div`
  position: fixed;
  top: 50vh;
  right: 20px;
  cursor: pointer;

  img {
    font-size: 50px
  }

`;