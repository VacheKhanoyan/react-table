import React, { Component } from 'react';
import CoinTable from './components/coin-table';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        data:data,
        direction:{
          age: 'up'
        }
      }
    this.sortBy= this.sortBy.bind(this);
    this._onClick= this._onClick.bind(this)
  }
  sortBy(key){
    let curData=this.state.data
    this.setState({
      data: curData.sort((a,b)=>(
        this.state.direction[key]==='up'
        ? a[key]-b[key]
        : b[key]-a[key]
      )),
      direction: {
        [key]: this.state.direction[key] === 'up'
        ? 'down'
        : 'up'
      }
        
    })
  }
  _onClick=(e)=>{
    let curentData=[...this.state.data]
    let index=curentData.findIndex(elem=>elem.name === e.target.name)
    let newData=[...curentData.slice(0,index), ...curentData.slice(index+1)]
    this.setState({data:newData})
  }
  render() {
    
    return (
      <div className="page-container" >
        <CoinTable 
        data={this.state.data}
        sortBy={this.sortBy}
        _onClick={this._onClick}
        />
      </div>
    );
  }
}

export default App;
