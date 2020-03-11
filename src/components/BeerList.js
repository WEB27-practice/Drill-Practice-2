import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import BeerCard from "./BeerCard.js";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: center;
`

const BeerList =() => {

    const [ beer, setBeer ] = useState([]);

    console.log(Array.isArray(beer));

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(res => {
                setBeer(res.data);
                console.log(res.data);
            })
            .catch(err => console.log('Go fix the error', err))
    }, [])

    return (
        <Container>
            {beer.map(item => (
                <BeerCard key={item.id} beer={item}/>
            ))}
        </Container>
    )
}

export default BeerList;