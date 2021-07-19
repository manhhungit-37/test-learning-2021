import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestFontAwesomeIcon() {
  return (
    <div>
      <FontAwesomeIcon icon={['fas', 'coffee']} className="hung" />
      <FontAwesomeIcon
        icon={['fas', 'spinner']}
        pulse
        fixedWidth
        size="4x"
      />
      <FontAwesomeIcon
        icon={['fab', 'fort-awesome']}
        rotation={90}
        size="4x"
      />
    </div>
    
  );
}

export default TestFontAwesomeIcon;