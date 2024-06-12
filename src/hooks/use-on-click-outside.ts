import {useEffect} from 'react';

const useOnClickOutside = (formRef: React.MutableRefObject<null>, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!formRef.current || formRef.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);


    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [formRef, handler]);
};

export default useOnClickOutside;
