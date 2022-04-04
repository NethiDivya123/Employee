import './App.css';
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateComponent from './Components/CreateComponent';
import ViewComponent from './Components/ViewComponent';
import ListComponent from './Components/ListComponent';
import UpdateComponent from './Components/UpdateComponent';

 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <div className='container'>
      <Switch>
      <Route path = "/" exact component = {ListComponent}></Route>
      <Route path = "/employees" component = {ListComponent}></Route>
      <Route path = "/add-employee/:id" component = {CreateComponent}></Route>
      <Route path = "/view-employee/:id" component = {ViewComponent}></Route>
     <Route path = "/update-employee/:id" component = {UpdateComponent}></Route>
       
      </Switch>
      
      </div>
      <FooterComponent/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
