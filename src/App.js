import React, { useState, useEffect } from 'react';
import Employess from "./components/Employees/Employees";
import EmployeesBirthday from "./components/EmployeesBirthday/EmployeesBirthday";
import './App.css';

function App() {
  
  if (localStorage.getItem("employees") === null) {
    localStorage.setItem("employees", JSON.stringify([]))
  }
  const [employeesData, setEmployeesData] = useState([])
  const [employeesBirthday, setEmployeesBirthday] = useState(JSON.parse(localStorage.getItem("employees")))


  useEffect(() => {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then(response => response.json())
      .then(json => { setEmployeesData(json) })
    localStorage.setItem("employees", JSON.stringify(employeesBirthday))
  }, [employeesBirthday])


  function handleChange(employee, check) {//If (check === true) add to new Array, else remove from it
    if (check) {
      setEmployeesBirthday(prevArray => [...prevArray, employee])
    } else {
      setEmployeesBirthday(employeesBirthday.filter(item => item.id !== employee.id))
    }

  }

  return (
    <div className="App">
      <Employess employeesData={employeesData} employeesBirthday={employeesBirthday} handleChange={handleChange} />
      <EmployeesBirthday employeesBirthday={employeesBirthday} />
    </div>
  )
}

export default App;
