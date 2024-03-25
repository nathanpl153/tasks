import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): JSX.Element {
    //return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    const doubleValue = () => setDhValue(dhValue * 2); // Fix: Correct the calculation for doubling
    return <Button onClick={doubleValue}>Double</Button>;
}

function Halver(): JSX.Element {
    //return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    const halveValue = () => setDhValue(dhValue / 2); // Fix: Correct the calculation for halving
    return <Button onClick={halveValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
