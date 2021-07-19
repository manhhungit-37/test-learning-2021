/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function useDebounce(text = '', delay = 3000) {
  const [textDebounce, setTextDebounce] = useState("");

  useEffect(() => {
    const handleSubmitDebounce = setTimeout(() => {
      setTextDebounce(text);
    }, delay)
    return () => {
      clearTimeout(handleSubmitDebounce);
    }
  }, [text])

  return {
    textDebounce
  }
}
export default useDebounce
