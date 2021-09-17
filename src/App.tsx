import React from 'react';
import { useScrollingEffect } from './AppHook';

const App: React.FC = () => {
  useScrollingEffect();

  return (
    <div className="container">
      <h1>Scroll to see the animation</h1>

      {new Array(20).fill(1).map((_) => (
        <div className="box">
          <h2>Content</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
