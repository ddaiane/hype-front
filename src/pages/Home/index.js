import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import TabelaPredios from '../../components/TabelaPredios';
import Header from '../../components/Header';


function Home() {



    return (
        <><Header />
        <Container fluid="md">
            <TabelaPredios />
        </Container></>

    )
};


export default Home;