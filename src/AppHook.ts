import { useCallback, useEffect, useState } from 'react';

export const useScrollingEffect = () => {
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
}