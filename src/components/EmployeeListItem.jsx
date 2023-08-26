import "./employeeListItem.css"
export default function EmployeeListItem({imgSrc, employeeName, employeeTitle}) {
    return (
      <div className="EmployeeListItem">
        <img>{imgSrc}</img>
        <div>
            <h3>{employeeName}</h3>
            <p>{employeeTitle}</p>
        </div>
      </div>
    );
  }