'use client';

import { FiMail } from 'react-icons/fi';

export default function EmailIcon() {
  return (
    <a
      href="mailto:contact@example.com"
      className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition"
    >
      <FiMail
        size={15}
        style={{
          stroke: '#ef8013',
          strokeWidth: 1,
        }}
      />
    </a>
  );
}
