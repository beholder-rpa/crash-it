import React from 'react';

const AppHeaderBar = () => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="relative z-10 flex-shrink-0 flex h-14 shadow bg-base-200">
        <div className="flex-1 px-4 flex justify-between"></div>
      </div>
    </div>
  );
};

export default AppHeaderBar;
