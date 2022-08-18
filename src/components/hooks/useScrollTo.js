import React, {useState, useEffect} from 'react';

const useScrollTo = (ref) => {
  const [view, setView] = useState(ref);

  useEffect(() => {
    if(view !== null) {
      view.current.scrollIntoView();
    }
  }, [view])

  return [view, setView]
}

export default useScrollTo;