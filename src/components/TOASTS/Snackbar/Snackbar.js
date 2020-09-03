import React from 'react';
import classNames from 'classnames';
import './styles.scss';

export const Snackbar = ({ isOpen }) => {
  const modify = classNames({
    'snackbar--show': isOpen,
  });

  return <div className={`snackbar ${modify}`}>content</div>;
};
