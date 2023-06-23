import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFound';
import useRefreshToken from 'hooks/useRefreshToken';
import PrivateLayout from 'components/layout/PrivateLayout';
import BookingPage from './Booking/pages/BookingPage';

const RootScreens = () => {
  const { shield } = useRefreshToken();
  return (
    <React.Fragment>
      <Routes>
        <Route path='/private' element={shield(PrivateLayout)}>

        </Route>
        <Route path='/' element={<BookingPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default RootScreens;
