import React from 'react';

const ResetButton = ({ reset }) => {
  return (
    <button
      className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded"
      onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
