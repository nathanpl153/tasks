import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Expected Answer:", expectedAnswer);
        console.log("User Answer:", userAnswer);
        setSubmitted(true);
        console.log("Submit button clicked");
    };

    const isCorrect =
        userAnswer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase();

    let feedbackIcon: JSX.Element | null = null;
    if (submitted) {
        feedbackIcon = isCorrect ? (
            <span role="img" aria-label="Correct">
                ✔️
            </span>
        ) : (
            <span role="img" aria-label="Incorrect">
                ❌
            </span>
        );
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userAnswer} onChange={handleChange} />
            <Button onClick={handleSubmit}>Submit</Button>
            {feedbackIcon}
        </div>
    );
}
