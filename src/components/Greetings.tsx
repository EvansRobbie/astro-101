import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(5px)', y: 50 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      className='bg-slate-100 p-4  rounded'
    >
      <h3>
        {' '}
        <span className='before:content before:absolute before:bg-red-500 relative before:block inline-block before:-inset-0 before:-skew-y-3 after:content-[" "] after:pl-1'>
          <span className='relative text-white'>{greeting}!</span>
        </span>{' '}
        Thank you for visiting!
      </h3>
      <button
        className='mt-4 bg-slate-500 text-white text-small px-6 py-2 rounded-lg text-sm'
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </motion.div>
  );
}
