import React from 'react'
import styled from 'styled-components'

const SIZE = 25;

const color = ({color}) => color;
const borderSize = ({index}) => index === 0 ? SIZE/2 : SIZE;
export default styled.div`
   background-color: ${color};
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${borderSize}px solid ${color};
`