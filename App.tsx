import React from 'react'
import styles from 'styled-components'
import ConcentricSquares from "./ConcentricSquares";

const Container = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Wrapper = styles.div`
  display: flex;
  border: 12px solid rgb(234, 240, 234)  
`;

export default () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <ConcentricSquares/>
                    <ConcentricSquares reverse/>
                </Wrapper>
            </Container>
        </div>
    )
}