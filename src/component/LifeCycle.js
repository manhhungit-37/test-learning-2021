import React, { useState } from 'react';
import Counter from './Counter';

function LifeCycle() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <button onClick={() => setMount(false)} disabled={!mount}>Mount</button>
      <button onClick={() => setMount(true)} disabled={mount}>UnMount</button>
      {mount ? <Counter /> : null}
    </div>
  );
}

export default LifeCycle;