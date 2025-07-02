import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([{ sender: 'bot', text: "Hi! I'm KashNex's assistant. How can I help you?" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! Something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>KashNex AI Chatbot</h1>
      <div style={{ border: '1px solid #ccc', padding: 10, minHeight: 300, overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: 20,
              backgroundColor: m.sender === 'user' ? '#0070f3' : '#eee',
              color: m.sender === 'user' ? 'white' : 'black',
            }}>{m.text}</span>
          </div>
        ))}
      </div>
      <input
        style={{ width: '80%', padding: 10, marginTop: 10 }}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message"
      />
      <button style={{ width: '18%', padding: 10, marginLeft: '2%' }} onClick={sendMessage} disabled={loading}>
        {loading ? '...' : 'Send'}
      </button>
    </div>
  );
}
