"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Something went wrong!</h2>
      <p className="text-slate-600 max-w-md">
        We encountered an unexpected error. Don't worry, it's not your fault.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}