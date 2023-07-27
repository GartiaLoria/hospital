import { useEffect } from 'react';

const useCitySelect = (selectRef) => {
  useEffect(() => {
    const handleOptionMouseOver = (event) => {
      if (event.target.tagName === 'OPTION') {
        event.target.style.backgroundColor = 'grey';
      }
    };

    const handleOptionMouseOut = (event) => {
      if (event.target.tagName === 'OPTION') {
        event.target.style.backgroundColor = 'whitesmoke';
      }
    };

    const selectElement = selectRef.current;
    selectElement.addEventListener('mouseover', handleOptionMouseOver);
    selectElement.addEventListener('mouseout', handleOptionMouseOut);

    return () => {
      selectElement.removeEventListener('mouseover', handleOptionMouseOver);
      selectElement.removeEventListener('mouseout', handleOptionMouseOut);
    };
  }, [selectRef]);
};

export default useCitySelect;
