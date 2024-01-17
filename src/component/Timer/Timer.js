import { useState, useEffect } from "react";

import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    const incrementSecond = () => {
        if (seconds === 59) {
            return;
        }

        setSeconds((prev) => prev + 1);
    };

    const incrementMinute = () => {
        if (seconds === 59) {
            return;
        }

        setMinutes((prev) => prev + 1);
    };

    const incrementHour = () => {
        setHours((prev) => prev + 1);
    };

    const decrementSecond = () => {
        if (seconds === 0) {
            return;
        }

        setSeconds((prev) => prev - 1);
    };

    const decrementMinute = () => {
        if (minutes === 0) {
            return;
        }

        setMinutes((prev) => prev - 1);
    };

    const decrementHour = () => {
        if (hours === 0) {
            return;
        }

        setHours((prev) => prev - 1);
    };

    useEffect(() => {
        const convertedTime = seconds + minutes * 60 + hours * 60 * 60;
        setTimeInSeconds(convertedTime);
    }, [seconds, minutes, hours]);

    // todos
    // look for the fix for negative value in timer package when i stop the timer
    // conditional routing on register

    return (
        <div
            style={{
                width: "63vw",
                height: "30vh",
                background: "#1E2343",
                position: "absolute",
                borderRadius: "12px",
                marginTop: "6px",
                display: "flex",
                boxSizing: "border-box",
                padding: "12px",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            {" "}
            <div>
                {" "}
                <CountdownCircleTimer
                    isPlaying={isTimerStarted}
                    duration={timeInSeconds}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => (
                        <span style={{ fontSize: "50px", color: "white" }}>
                            {remainingTime}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>{" "}
            <div
                style={{
                    width: "35vw",
                    textAlign: "center",
                }}
            >
                {" "}
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        fontSize: "2rem",
                        justifyContent: "space-evenly",
                    }}
                >
                    {" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p>Hours</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={incrementHour}
                            src={up}
                            alt=""
                        />{" "}
                        <p> {hours}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementHour}
                            src={down}
                            alt=""
                        />{" "}
                    </div>{" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p>Minutes</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={incrementMinute}
                            src={up}
                            alt=""
                        />{" "}
                        <p> {minutes}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementMinute}
                            src={down}
                            alt=""
                        />{" "}
                    </div>{" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p>Seconds</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={incrementSecond}
                            src={up}
                            alt=""
                        />{" "}
                        <p> {seconds}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementSecond}
                            src={down}
                            alt=""
                        />{" "}
                    </div>{" "}
                </div>{" "}
                <div
                    onClick={() => setIsTimerStarted(!isTimerStarted)}
                    style={{
                        background: "#FF6A6A",
                        borderRadius: "12px",
                        padding: "6px",
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                >
                    {" "}
                    {isTimerStarted ? (
                        <p
                            onClick={() => {
                                setHours(0);
                                setMinutes(0);
                                setSeconds(0);
                                setTimeInSeconds(0);
                            }}
                        >
                            Stop
                        </p>
                    ) : (
                        <p>Start</p>
                    )}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default Timer;
