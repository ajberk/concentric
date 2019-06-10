import React, {Component} from 'react'
import Square from './Square'

const makeIntoChildren = (OuterComponent: Component) => (children: Component, color: string, index: number): Component => (
    <OuterComponent color={color} index={index}>{children}</OuterComponent>
);
const nestIntoSquares = (colors: string[]) => colors.reduce(
    makeIntoChildren(Square),
    null
);

const colors = [
    'rgb(186, 182, 176)',
    'rgb(98, 56, 108)',
    'rgb(125, 171, 212)',
    'rgb(23, 67, 141)',
    'rgb(67, 146, 200)',
    'rgb(48, 112, 83)',
    'rgb(50, 122, 192)',
    'rgb(242, 187, 65)',
    'rgb(37, 95, 171)',
    'rgb(219, 84, 46)',
    'rgb(26, 70, 137)',
    'rgb(172, 56, 50)'
];

interface Props {
    reverse?: boolean;
}
export default ({reverse}: Props) => (
    <React.Fragment>
        {nestIntoSquares(reverse ? colors.reverse() : colors)}
    </React.Fragment>
)

