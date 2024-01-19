import "./App.css";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:8080");

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [newMessage, setNewmessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));

    socket.on("chat_message", (data) => {
      setMessages((messages) => [...messages, data]);
      console.log(data);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat_message", {
      user: socket.id,
      message: newMessage,
    });
  };

  return (
    <div className="App">
      <h1>Chat</h1>
      <h6>{isConnected ? "Connected" : "Not Connected"}</h6>
      <section>
        <ul>
          {messages.map((message) => (
            <li>
              {message.user}:{message.message}
            </li>
          ))}
        </ul>
        <form>
          <input type="text" onChange={(e) => setNewmessage(e.target.value)} />
          <button onClick={sendMessage}>Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
