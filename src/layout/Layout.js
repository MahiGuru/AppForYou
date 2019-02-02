import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Toolbar from './Toolbar';
import Sidemenu from "./Sidemenu";
import Content from './Content';

export const Layout = props => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Toolbar></Toolbar>
                </Col>
            </Row>
            <Row>
                <Col xs="6" sm={{ size: 'auto', offset: 0 }} md="2">
                    <Sidemenu></Sidemenu>
                </Col>
                <Col xs="6" sm={{ size: 'auto', offset: 0 }} md="10">
                    <Content></Content>
                </Col>
            </Row>
        </Container>
    );
};