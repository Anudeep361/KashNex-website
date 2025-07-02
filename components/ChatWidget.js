import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            borderRadius: "50%",
            width: 60,
            height: 60,
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 24,
          }}
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 320,
            height: 400,
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              padding: 10,
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            KashNex Chat
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
              }}
              aria-label="Close chat"
            >
              ✖️
            </button>
          </header>

          <div
            style={{
              flex: 1,
              padding: 10,
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

          <footer
            style={{
              padding: 10,
              borderTop: "1px solid #ddd",
              display: "flex",
            }}
          >
            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              style={{ flex: 1, padding: 8, fontSize: 14 }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "8px 16px",
                marginLeft: 8,
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </footer>
        </div>
      )}
    </>
  );
}
