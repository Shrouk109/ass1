/*eslint-disable*/ 
import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const General = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

export default General;