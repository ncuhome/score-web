import { useEffect, useRef } from 'react';

export interface Options {
  restoreOnUnmount?: boolean;
}

function useTitle(title: string) {
  const titleRef = useRef<string>(document.title ?? '');

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = titleRef.current;
    };
  }, [title]);
}

export default useTitle;
