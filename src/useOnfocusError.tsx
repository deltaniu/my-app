import { useRef, useEffect, useState } from 'react';

const useFocusOnError = (error: string | null, ref: React.RefObject<HTMLInputElement>) => {
  const [hasFocused, setHasFocused] = useState(false);

  useEffect(() => {
    if (error && !hasFocused) {
      ref.current?.focus();
      setHasFocused(true);
    }
  }, [error, ref, hasFocused]);
};

export default useFocusOnError;