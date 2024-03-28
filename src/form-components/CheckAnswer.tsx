import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userAnswer} onChange={handleChange} />
            {userAnswer === expectedAnswer ? (
                <span role="img" aria-label="Correct">
                    ✔️
                </span>
            ) : (
                <span role="img" aria-label="Incorrect">
                    ❌
                </span>
            )}
        </div>
    );
}
