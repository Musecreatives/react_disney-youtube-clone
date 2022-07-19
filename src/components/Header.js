import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
         <Logo>
            <img src="/images/logo.svg" alt="Disney" />
         </Logo>
         <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
                </a>
         </NavMenu>
     </Nav>
    );
};
    
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.div`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 80px;
    display: inline-block;
    font-size: 0;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;  
    height: 100%;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto; 
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
    }

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        color: rgb(249, 249,249);
        font-size: 14px;
        letter-spacing: 1.42px;
        line-height: 1.5;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
    }

    @media (max-width: 768px) {
        display: none;
    }

    

`;

export default Header;