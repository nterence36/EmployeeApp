import EmployeeListItem from "./EmployeeListItem";
import "./employeeList.css"
export default function EmployeeList() {
    return (
      <div className="EmployeeList">
        <EmployeeListItem employeeName = "James King" employeeTitle ="President and CEO" />
        <EmployeeListItem employeeName = "Julie Taylor" employeeTitle ="VP of Marketing" />
        <EmployeeListItem employeeName = "Eugene Lee" employeeTitle ="CFO" />
        <EmployeeListItem employeeName = "John Williams" employeeTitle ="VP of Engineering" />
        <EmployeeListItem employeeName = "Ray Moore" employeeTitle ="VP of Sales" />
        <EmployeeListItem employeeName = "Paul Jones" employeeTitle ="QA Manager" />
      
      </div>
    );
  }