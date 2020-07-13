import React from 'react';
import './App.scss';

import AdminHome from './components/admin/Admin-home/AdminHome.component';

//css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {
  return (
    <main className="App">
      <AdminHome/>
    </main>
  );
}

export default App;
