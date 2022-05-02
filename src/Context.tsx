import {createContext} from 'react';
import {ValueProps} from './Container';

const Context = createContext({
  value: {},
  setValue: (_: ValueProps) => {},
  visibility: false,
  setVisibility: (_: boolean) => {},
});

export default Context;
