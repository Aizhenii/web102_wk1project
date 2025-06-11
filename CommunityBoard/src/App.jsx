import './App.css';
import Grid from './components/Grid';

/* App that is based on location can you can see current 
      events near you based on your interests such as garage sales,
      painting/sketching sessions, group yoga, etc.. */


const App = () => {

  return (
    <div className="App">
      <h1>Current Community Events</h1>
      <Grid/>   
    </div>
  )
}

export default App