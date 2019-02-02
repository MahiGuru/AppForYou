import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from "reactstrap";


export default class Sidemenu extends Component {

    render() {
        return (
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>
        )
    }
}
