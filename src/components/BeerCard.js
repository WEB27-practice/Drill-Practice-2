import React from "react";
import styled from "styled-components";


const Card = styled.div`
    width: 300px;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    &:hover {
        box-shadow: 5px 5px 15px 10px rgba(0,0,0,0.3);
    }
`

const Name = styled.h1`
    font-size: 1.8rem;
    margin: 20px 0px;

`

const BeerCard =({beer}) => {

    // console.log(props)

    console.log(beer);
    const {name, brewery_type, street, city, state, postal_code} = beer;

    return (
        <Card>
            <Name>{name}</Name>
            <h2>{brewery_type}</h2>
            <h2>{street}</h2>
            <h2>{city}</h2>
            <h2>{state}</h2>
            <h2>{postal_code}</h2>
        </Card>
    )
}

export default BeerCard;