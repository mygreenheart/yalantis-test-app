import React from 'react'
import "./Employees.css"

export default function Employees(props) {

    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    props.employeesData.sort((a, b) => {
        let comparison = 0;
        if (a.lastName > b.lastName) {
            comparison = 1;
        } else if (a.lastName < b.lastName) {
            comparison = -1;
        }
        return comparison
    })

    function AlphabetEmployer(alphabet, arr) {// Retrun array for each alphabet laters
        return arr.filter(employee => {
            return employee.lastName.slice(0, 1) === alphabet
        })
    }

    function isChecked(employee) {//Check epmloyees in localStrage. If eployee there are, checked if true
        for (const iterator of props.employeesBirthday) {
            if (employee.id === iterator.id) {
                return true
            }
        }
    }

    return (
        <div className="Employees">
            <h1>Employees</h1>
            <div className="Employees-card">
                {arr_EN.map((alphabet) => {
                    return <div key={alphabet} className="alphabet">
                        <h2>{alphabet}</h2>
                        {(AlphabetEmployer(alphabet, props.employeesData).length > 0) ?  //Create divs from arrays "AlphabetEmployer"
                            (AlphabetEmployer(alphabet, props.employeesData).map(employee => {
                                return (
                                    <div key={employee.id}>
                                        {employee.lastName + " " + employee.firstName}

                                        {(isChecked(employee)) ?
                                            <input type="checkbox" checked="true" onChange={(e) => {
                                                props.handleChange(employee, e.target.checked)
                                            }} /> :
                                            <input type="checkbox" onChange={(e) => {
                                                props.handleChange(employee, e.target.checked)
                                            }} />}

                                    </div>)
                            })) :
                            " ----- "}
                    </div>
                })}
            </div>
        </div>
    )
}
