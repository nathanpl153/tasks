import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Nathanael
                Pierre-Louis Hello World
            </header>
<<<<<<< HEAD
            This is <span style={{ color: "white" }}>colored text</span>
            <h1>OOGA BOOGA</h1>
            <p>By Ski Mask the Slump God</p>
            <ul>
                <li>1 apple</li>
                <li>2 bananas</li>
                <li>3 peaches</li>
                <li>4 mangos</li>
            </ul>
            <img
                src="https://img.buzzfeed.com/buzzfeed-static/static/2022-12/11/11/tmp/c8f10ca2c828/tmp-name-3-455-1670758943-27_dblbig.jpg?resize=1200:*"
                alt="A Picture of Ski Mask the Slump God"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 300,
                                width: 200
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 300,
                                width: 200
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
