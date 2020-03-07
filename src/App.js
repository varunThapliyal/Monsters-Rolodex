import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchInput} from './components/search-box/search-box.component';

class App extends Component{
  // 
constructor(){
  super();

  this.state={
    monsters:[],
    searchField:""
  }
}

handleSearch=(e)=>{
  this.setState({searchField:e.target.value},console.log(e.target.value))
}
componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response =>{
    return response.json();
  }).then(responseData =>{
    this.setState({monsters:responseData});
  })
}
 render(){
   const {monsters,searchField}=this.state;
   const filteredMonsters=monsters.filter((monster)=>{
           return monster.name.toLowerCase().includes(searchField.toLowerCase());
   })
   return(
       <div className='App'>
        <h2>Monster Rolodex</h2>
         <SearchInput 
         placeholder="search monster"
         handleSearch={this.handleSearch}
         
         />
         <CardList monsters={filteredMonsters}/>
       </div>
   ) ;

 }
}

export default App;
