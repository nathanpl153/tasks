import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUseAttempt = () => {
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const handleGainAttempts = () => {
        const newAttempts = parseInt(requestedAttempts);
        if (!isNaN(newAttempts) && newAttempts > 0) {
            setAttempts((prevAttempts) => prevAttempts + newAttempts);
            setRequestedAttempts("");
        }
    };

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts left: {attempts}</span>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
                aria-label="Number of attempts to gain"
                role="spinbutton"
            />
            <Button onClick={handleUseAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={handleGainAttempts}>Gain</Button>
        </div>
    );
}
