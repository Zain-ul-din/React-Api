import React from 'react';
import axios from 'axios';
import RenderContent from './Components/RenderContent'
import Search from './Components/Search.js'
import './index.css'
class Main extends React.Component{
   constructor(){
       super()
        
       this.state= {
           Data: [],
           text: ''
       }
    
    const Func= async ()=>{
      const response= await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=200')
      this.setState({Data:response.data.results})
    }
        Func()
   }
    
    onchange = (e)=>{
       this.setState({text:e.target.value});
    }
    render(){

        const List = this.state.Data.filter((obj)=>{
            return obj.name.toLowerCase().includes(this.state.text.toLowerCase());
        })
        return(
           <div>
                <div className='Uperdiv'>
               <h3>{this.state.text}</h3>
                </div>
               <Search onchange={this.onchange}/>
               <RenderContent Data={List}/>
           </div>
        );
    }
}

export default Main;
/*
   Api :
   url : https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200
*/