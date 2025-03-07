'use client';

import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  text: string;
  loadingText?: string;
}

const SubmitButton = ({ text, loadingText = 'Processing...' }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-6 py-2 rounded-md ${
        pending 
          ? 'bg-blue-300 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600'
      } text-white transition-colors`}
    >
      {pending ? loadingText : text}
    </button>
  );
};

export default SubmitButton; 