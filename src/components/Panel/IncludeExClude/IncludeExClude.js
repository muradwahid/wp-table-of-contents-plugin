import React from 'react';

const IncludeExClude = ({ attributes, setAttributes }) => {
  const { includeExclude } = attributes;
  return (
    <div className="includeExclude">
      <div
        onClick={() => setAttributes({ includeExclude: 'include' })}
        className={`single-includeExclude ${
          includeExclude === 'include'
            ? 'isActive-include'
            : 'single-includeExclude-hover'
        }`}
      >
        <p>Include</p>
      </div>
      <div
        onClick={() => setAttributes({ includeExclude: 'exclude' })}
        className={`single-includeExclude ${
          includeExclude === 'exclude'
            ? 'isActive-include'
            : 'single-includeExclude-hover'
        }`}
      >
        <p>Exclude</p>
      </div>
    </div>
  );
};

export default IncludeExClude;