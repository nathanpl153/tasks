import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Years Eve"
    | "Halloween"
    | "Christmas"
    | "Thanksgiving"
    | "Easter";

export function CycleHoliday(): JSX.Element {
    //trying to push new stuff up
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("New Years Eve");

    const nextHolidayAlphabetically = () => {
        if (currentHoliday === "Christmas") {
            setCurrentHoliday("Easter");
        } else if (currentHoliday === "Easter") {
            setCurrentHoliday("Halloween");
        } else if (currentHoliday === "Halloween") {
            setCurrentHoliday("New Years Eve");
        } else if (currentHoliday === "New Years Eve") {
            setCurrentHoliday("Thanksgiving");
        } else if (currentHoliday === "Thanksgiving") {
            setCurrentHoliday("Christmas");
        }
    };

    const nextHolidayInTheYear = () => {
        if (currentHoliday === "New Years Eve") {
            setCurrentHoliday("Easter");
        } else if (currentHoliday === "Easter") {
            setCurrentHoliday("Halloween");
        } else if (currentHoliday === "Halloween") {
            setCurrentHoliday("Thanksgiving");
        } else if (currentHoliday === "Thanksgiving") {
            setCurrentHoliday("Christmas");
        } else if (currentHoliday === "Christmas") {
            setCurrentHoliday("New Years Eve");
        }
    };

    const holidayEmoji = (): string => {
        if (currentHoliday === "New Years Eve") {
            return "🥳";
        } else if (currentHoliday === "Easter") {
            return "🐣";
        } else if (currentHoliday === "Halloween") {
            return "🎃";
        } else if (currentHoliday === "Thanksgiving") {
            return "🦃";
        } else {
            return "🎄";
        }
    };
    return (
        <div>
            <p>Holiday: {holidayEmoji}</p>
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextHolidayInTheYear}>Advance by Year</Button>
        </div>
    );
}
