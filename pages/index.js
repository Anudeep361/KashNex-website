import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Call backend API
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      // Add bot response
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>KashNex AI Chatbot</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          minHeight: 300,
          marginBottom: 10,
          overflowY: "auto",
        }}
      >
        {messages.length === 0 && <p>Say hi to the chatbot!</p>}
        {messages.map((msg, i) => (
          <p
            key={i}
            style={{
              textAlign: msg.role === "bot" ? "left" : "right",
              backgroundColor: msg.role === "bot" ? "#eef" : "#ddf",
              padding: "8px 12px",
              borderRadius: 12,
              maxWidth: "80%",
              marginLeft: msg.role === "bot" ? 0 : "auto",
              marginBottom: 8,
            }}
          >
            {msg.content}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={input}
        placeholder="Type your message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        style={{ width: "80%", padding: 10, fontSize: 16 }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          marginLeft: 10,
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}
