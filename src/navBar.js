import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,NavbarBrand,NavDropdown,NavItem,Nav,MenuItem,Glyphicon} from 'react-bootstrap';

const navbaritems=[`home`,`about`,`app`,`chat`];

const NavOptions = () =>{
    return navbaritems.map((x)=><NavItem>{x}</NavItem>)
};

const GamesDropDown=()=>{
    return(
        <NavDropdown title="Games">
            <MenuItem>Avengers</MenuItem>
            <MenuItem>some another game</MenuItem>
        </NavDropdown>
    )
};
class NavBar extends React.Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:true,
            sideMenu:false
        }
    }
    clickHandler=()=>{
        //this.setState({sideMenu:!this.State.sideMenu});
    };
    render(){
        return(
            <div>

            <Navbar id="Nb">

                <Nav pullLeft>
                    <Navbar.Header>
                        <NavbarBrand>
                            <a href="#" onClick={this.clickHandler}><Glyphicon glyph="list" /></a>
                        </NavbarBrand>
                    </Navbar.Header>
                <NavbarBrand>
                    <a href="#">gg website</a>
                </NavbarBrand>
                </Nav>

                {this.state.isLoggedIn ? <Nav><NavOptions/><GamesDropDown/></Nav> :``}


                <Nav pullRight>
                    <NavItem>Register</NavItem>
                    <NavItem>LogIn</NavItem>
                </Nav>
            </Navbar>
            </div>
        )
    }
}
export default NavBar;