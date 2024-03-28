import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan"
    ];
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color, index) => (
                <Form.Check
                    key={index}
                    inline
                    label={color}
                    type="radio"
                    id={`color-radio-${index}`}
                    checked={selectedColor === color}
                    onChange={() => handleColorChange(color)}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
