import { createContext, useState } from 'react';
import { useQuestions } from "@/hooks/index.js";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const { maxAvailableQuestions } = useQuestions();

  const incrementCounter = () => {
    if (counter + 1 <= maxAvailableQuestions) setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (counter - 1 > 0) setCounter(prevCounter => prevCounter - 1);
  };

  const handleInputCounter = (e) => {
    if (e.target.value.length > 1 && e.target.value.startsWith('0')) {
      e.target.value = e.target.value.replace(/^0+/, '');
    }
    setCounter(+e.target.value);
  };

  const validateInputCounter = (e) => {
    setCounter(prevCounter => Math.trunc(prevCounter));
    setTimeout(() => {
      if (e.target.value < 1) {
        setCounter(1);
        return;
      }
      if (e.target.value > maxAvailableQuestions) {
        setCounter(maxAvailableQuestions);
      }
    }, 100)
  };

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, incrementCounter, decrementCounter, handleInputCounter, validateInputCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
