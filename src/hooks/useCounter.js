import { useContext } from 'react';
import { CounterContext } from "@/context/index.js";

export const useCounter = () => {
  return useContext(CounterContext);
};
