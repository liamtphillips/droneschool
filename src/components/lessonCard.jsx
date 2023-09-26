import React from 'react';

const LessonCard = ({ title, cost, bio }) => {
  return (
    <div className="w-full max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{title}</h1>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">£</span>
        <span className="text-5xl font-extrabold tracking-tight">{cost}</span>

      </div>
      <p className='mt-10'>{bio}</p>
    </div>
  );
}

export default LessonCard;