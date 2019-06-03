import React from 'react'
import Square from './Square'
import styles from 'styled-components'
import ConcentricSquares from "./ConcentricSquares";

const Container = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default () => {
    return (
        <div>
            <Container>
              <ConcentricSquares/>
              <ConcentricSquares/>
            </Container>
        </div>
    )
}