import React, { useState } from 'react';
import { Snackbar } from './Snackbar/Snackbar';

import { Button } from 'antd';
import './styles.scss';

export const Toasts = () => {
  const [isSnackbarOpen, showSnackbar] = useState(false);

  const handleToast = () => {
    // setTimeout(() => {}, 1000);
    showSnackbar(!isSnackbarOpen);
  };
  console.log('123', 123);
  return (
    <div className="toasts-page">
      <Snackbar isOpen={isSnackbarOpen} />
      <Button type="primary" onClick={handleToast}>
        TOAST1
      </Button>
    </div>
  );
};
