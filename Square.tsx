import React from 'react'
import styled from 'styled-components'

const dimension = ({dimension}) => dimension;
const color = ({color}) => color;
export default styled.div`
   width: ${dimension};
   height: ${dimension};
   background-color: ${color};
   display: flex;
   align-items: center;
   justify-content: center;
`