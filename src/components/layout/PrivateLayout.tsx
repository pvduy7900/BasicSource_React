import React from 'react';
import uiActions from 'services/UI/actions';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const PrivateLayout = () => {
  const test = useAppSelector((state) => state.ui);
  console.log('test', test);
  const dispatch = useAppDispatch();

  const handleoNCLICK = () => {
    // dispatch(uiActions.setLoadingPage);
    dispatch({ type: 'test_alll', payload: 'hahhahaah' });
  };

  return (
    <div>
      PrivateLayout
      <button onClick={handleoNCLICK}>test click dispactjh</button>
    </div>
  );
};

export default PrivateLayout;
