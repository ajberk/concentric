import React from 'react'
import styled from 'styled-components'
import Square from './Square'

// const squares =
//     [
//         <Square dimension="50px" color="cornflowerblue"/>,
//         <Square dimension="25px" color="purple"/>
//     ];

const Container = styled.div`
    margin: 10px;    
`

export default () => (
    <Container>
        <Square dimension="75px" color="red">
            <Square dimension="50px" color="cornflowerblue">
                <Square dimension="25px" color="purple"/>
            </Square>
        </Square>
    </Container>
)