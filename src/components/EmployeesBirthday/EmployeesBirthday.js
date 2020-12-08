import React from 'react'
import "./EmployessBirthday.css"

export default function EmployeesBirthday(props) {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const birthDay = {
        "January": [],
        "February": [],
        "March": [],
        "April": [],
        "May": [],
        "June": [],
        "July": [],
        "August": [],
        "September": [],
        "October": [],
        "November": [],
        "December": [],
    }

    function birthDayDivs() {
        for (const employee of props.employeesBirthday) {
            let monthDay = months[new Date(employee.dob).getMonth()]
            for (const key in birthDay) {
                if (key === monthDay) {
                    birthDay[key].push(employee)
                }
            }
        }
        return birthDay
    }

    return (
        <div className="EmployeesBirthday">
            <h1>Employees Birthday</h1>
            {(props.employeesBirthday.length > 0) ? Object.entries(birthDayDivs()).map(e => {
                if (e[1].length > 0) {
                    return (<div>
                        <h2>{e[0]}</h2>
                        {e[1].map(employee => {
                            return <li>{employee.lastName + " " + employee.firstName + " " + "-" + " " + (new Date(employee.dob).getUTCDay()) + " " + e[0] + ", " + (new Date(employee.dob).getFullYear() + " year")}</li>
                        })}
                    </div>)
                }
            }) :
                <h1>
                    No selected employees
                 </h1>}
        </div>
    )
}
