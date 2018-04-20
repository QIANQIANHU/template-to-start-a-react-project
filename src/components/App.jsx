import React from 'react';
import Header from './Header';
import ActivityList from './ActivityList';
import { Button } from 'react-bootstrap';


function App(){
  return (
    <div>
      <Header/>
      <ActivityList/>
      <Button>test</Button>
    </div>
  );
}

export default App;
