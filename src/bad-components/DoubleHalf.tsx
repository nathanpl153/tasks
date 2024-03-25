import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    // function Doubler(): JSX.Element {
    //     return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    // }

    // function Halver(): JSX.Element {
    //     return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    // }
    const doubler = () => {
        setDhValue(dhValue * 2);
    };

    const halver = () => {
        setDhValue(dhValue / 2);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubler}>Double</Button>
            <Button onClick={halver}>Halve</Button>
        </div>
    );
}
