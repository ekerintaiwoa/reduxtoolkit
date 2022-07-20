import counterReducer from './features/counter.features'
import Counter from './../components/Counter';
import employeeReducer from  './features/employees.feature'
import EmployeesRedux from '../components/EmployeesRedux';
const rootReducer = {

 Counter : counterReducer ,
 EmployeeRedux : employeeReducer,


}


export default rootReducer ;