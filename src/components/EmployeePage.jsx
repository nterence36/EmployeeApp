
import Header from "./Header";
import "./employeePage.css"
export default function EmployeePage() {
    return (
      <div className="EmployeePage card">
        <Header title ="Employee" />
        <div className="employeeOverview">
            <div className="profile-icon"></div>
            <div className='profile-info'>
            <h3>Julie Taylor</h3>
            <p>VP of Marketing</p>
            </div>
        </div>
        <div className="employeeOffice card">
            <h3>Call Office</h3>
            <p>781-000-0002</p>
        </div>
        <div className="employeeMobile card">
            <h3>Call Mobile</h3>
            <p>617-000-0002</p>
        </div>
        <div className="employeeSMS card">
            <h3>SMS</h3>
            <p>617-000-0002</p>
        </div>

        <div className="employeeEmail card">
            <h3>Email</h3>
            <p>jtaylor@fakemail.com</p>
        </div>
      </div>
    );
  }