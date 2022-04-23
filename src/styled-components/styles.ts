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

  p{
    position: relative;
    top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0px;
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