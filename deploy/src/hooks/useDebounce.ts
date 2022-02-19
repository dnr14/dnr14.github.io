import { useRef } from 'react';

const useDebounce = () => {
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  return { debounce };
};

export default useDebounce;
