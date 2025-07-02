import { useState } from 'react';

export default function ProjectChatbot() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);

  const handleSubmit = () => {
    // Send data to your backend or email service here
    console.log({ name, email, projectDetails });
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thanks for your interest! We'll get back to you soon.</div>;
  }

  return (
    <div className="chatbot">
      {step === 0 && (
        <>
          <p>Hi! Interested in our AI project solutions. What’s your name?</p>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
          />
          <button onClick={nextStep} disabled={!name}>Next</button>
        </>
      )}
      {step === 1 && (
        <>
          <p>Thanks, {name}! Could you share your email?</p>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <button onClick={nextStep} disabled={!email}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <p>Great! Tell me about your project or what you need help with.</p>
          <textarea
            value={projectDetails}
            onChange={e => setProjectDetails(e.target.value)}
            placeholder="Describe your project"
          />
          <button onClick={handleSubmit} disabled={!projectDetails}>Submit</button>
        </>
      )}
    </div>
  );
}
