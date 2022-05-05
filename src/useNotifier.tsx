import {useContext} from 'react';
import {ValueProps} from './Container';
import Context from './Context';

export default () => {
  const {setValue, setVisibility} = useContext(Context);

  const updateVal = (values: ValueProps) => {
    setValue((prev: ValueProps) => ({...prev, ...values}));
    setVisibility(true);
  };

  return updateVal;
};
