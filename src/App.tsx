import React, { useCallback, useEffect, useState } from 'react';

const App: React.FC = () => {
  const [boxes, setBoxes] = useState<NodeListOf<Element> | null>(null);

  const showBoxesFunction = useCallback(() => {
    const triggerZone = (window.innerHeight / 5) * 4;

    if (boxes)
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        boxTop < triggerZone
          ? box.classList.add('show')
          : box.classList.remove('show');
      });
  }, [boxes]);

  useEffect(() => {
    setBoxes(document.querySelectorAll('.box'));
    showBoxesFunction();
  }, [boxes, showBoxesFunction]);

  window.addEventListener('scroll', showBoxesFunction);

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
