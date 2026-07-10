import "./ConnectLoading.css";
import { useEffect, useState } from "react";
import cesLogo from "../../assets/CircuitES-logo.png";


const messages = [
    "Connecting to CES Cloud...",
    "Synchronizing project information...",
    "Loading engineering documents...",
    "Checking dispatch status...",
    "Preparing your workspace..."
];

export default function ConnectLoading() {



    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) =>
                (prev + 1) % messages.length
            );

        }, 1500);

        return () =>
            clearInterval(interval);

    }, []);

    return (

        <div className="connect-loading">

            <div className="loading-logo">

                <img
                    src={cesLogo}
                    alt="CES Logo"
                    className="ces-loading-logo"
                />

            </div>

            <h1 className="loading-title">
                CES Connect
            </h1>

            <p className="loading-subtitle">
                Customer Portal
            </p>

            <p className="loading-text">

                {messages[index]}

            </p>

            <div className="loading-bar">

                <div className="loading-progress"></div>

            </div>

            <div className="loading-footer">

                Powered by Circuits Energy System

            </div>

        </div>

    );

}