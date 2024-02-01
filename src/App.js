import './App.css';
import Header from './Header';
import  {Content}  from './Content';
import { useState } from 'react';
import MovieDesc from './MovieDesc';
function App() {

  const [page,changePage] = useState("Main");
  const [form,formFunc] = useState(0);
  if(page==="Main")
  return (
    <>
      <Header/>
      <Content changePage={changePage}/>
    </>
  );
  else
  {
    return (
      <MovieDesc id={page} changePage={changePage} formFunc={formFunc} form={form}/>
    );
  }
}

export default App;
