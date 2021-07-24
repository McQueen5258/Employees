import React, { lazy, Suspense } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Employees from './component/employees/Employees';
const Employees = lazy(() => import('./component/employees/Employees'));

function App() {
  return (
    <div style={{
      display: "flex",
    flexDirection: "column",
    justifycontent: "center",
    alignItems: "center"
    }}>
      <Suspense fallback={<div>loading...</div>}>

        {/* title */}
        <h1>人员</h1>
        <h2>Employees</h2>
        {/* 员工 */}
        <Employees />
        {/* Footer */}
      </Suspense>
    </div>
  );
}

export default App;
