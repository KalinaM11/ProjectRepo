import { set } from "mongoose";
import React, { useEffect, useState} from "react";

const DisplayAllMessages = () => {
    const [messages, setMesseges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/messeges')
        .then((response) => response.json())
        .then((data) => setMesseges(data))
        .catch((error) => console.error('Error fetching messege:'));
    });

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.length > 0 ? (
                    messages.map((message, index) => (
                        <li key={index}>{message.content}</li>
                    ))
                ) : (
                    <p>No messages available.</p>
                )}
            </ul>
        </div>
    );
};
export default DisplayAllMessages;