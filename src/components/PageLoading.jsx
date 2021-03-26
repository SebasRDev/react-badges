import React from 'react';
import Loader from './Loader';
import './styles/PageLoading.css'

function PageLoading(){
  return (
    <div className="pageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;