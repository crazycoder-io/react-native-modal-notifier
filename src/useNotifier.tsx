import {useContext} from 'react';
import {ValueProps} from './Container';
import Context from './Context';

const defaultValues: ValueProps = {
  title: null,
  message: null,
  type: 'default',
  headerShown: true,
  primaryButtonText: undefined,
  primaryButtonPosition: 'center',
};

export default () => {
  const {setValue, setVisibility} = useContext(Context);

  const updateVal = (values: ValueProps) => {
    setValue({...defaultValues, ...values});
    setVisibility(true);
  };

  return updateVal;
};
