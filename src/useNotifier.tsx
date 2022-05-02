import {useContext} from 'react';
import {ValueProps} from './Container';
import Context from './Context';

export default () => {
  const {setValue, setVisibility} = useContext(Context);

  const updateVal = (val: ValueProps) => {
    setValue(val);
    setVisibility(true);
  };

  return updateVal;
};
