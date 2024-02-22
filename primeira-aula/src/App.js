import AppBar from "./components/AppBar/AppBar";
import AppContent from "./components/Header/AppContent";

function App() {
return(
  <div>
  <AppBar/>
  <AppContent/>
</div>
);
}

  /*
  let x = 4
  let y = 4
  return (
   
    <div>
      <AppBar/>
  
   <h1>ola,mundil</h1>
    <h1>{x+y}</h1>
    </div>
   
  );
}

const sexo =() => {
  let x = 4
  let y = 4
  return (
   
    <div>
   <h1>ola,mundil</h1>
    <h1>{x+y}</h1>
    </div>
  ); /// tornar a funcao publica sem exportare
}
*/
export default App; // tornar funcao publica
