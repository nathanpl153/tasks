import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleIsStudentChange = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent">
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div>
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
            <Form.Switch
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
        </div>
    );
}
