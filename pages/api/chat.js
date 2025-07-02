import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are KashNex assistant. Answer politely and informatively.' },
        { role: 'user', content: message },
      ],
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ reply: 'Sorry, there was an error.' });
  }
}
