import * as React from 'react';
import './App.css';
import Hello from './component/hello';
import List from './pages/List';

class App extends React.Component {
  public onMyClick(data:any){
      console.log(data);
  }
  public render() {
    return (
      <div className="App">
          <Hello title={'faewfio'} content={'fawefjoi'} onMyClick={this.onMyClick}/>
          <List/>
      </div>
    );
  }
}

export default App;
