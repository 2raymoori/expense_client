import logo from './logo.svg';
import './App.css';
import Signup from './Components/Pages/Signup';
import { connect, Provider } from 'react-redux';
import store from './Redux/store.js';
import Alert from './Components/Alert/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import LogIn from './Components/Pages/LogIn';
import Navigation from './Components/Navigation';
import AddExpense from './Components/Pages/Expense/AddExpense';
import Expense from './Components/Pages/Expense/Expense';
import AddIncome from './Components/Pages/Income/AddIncome';
import Income from './Components/Pages/Income/Income';
import IncomeCategory from './Components/Pages/Income/IncomeCategory';
import ExpenseCategory from './Components/Pages/Expense/ExpenseCategory';


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route element={<LogIn />} exact path="/"/>
          <Route element={<Signup />} exact path="/signup"/>
          <Route element={< Dashboard/>} exact path="/dashboard"/>
          <Route element={<AddExpense />} exact path="/expense/add" />
          <Route element={<Expense />} exact path="/expense" />
          <Route element={<AddIncome />} exact path="/income/add" />
          <Route element={<Income />} exact path="/income" />
          <Route element={<IncomeCategory />} exact path="/incomecat/" />
          <Route element={<ExpenseCategory />} exact path="/expensecat" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default (App);
