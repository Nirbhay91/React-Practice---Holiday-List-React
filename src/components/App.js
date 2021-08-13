import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
                      { name: 'Bihar', country: 'India' },
                
    
    
    ]
  }

  render() {
    let filtered = this.cityList.filter((item)=>{
      return item.country==='India'
    })
    console.log(filtered);

    return (
      <div id="main">       
        <ol>
        {filtered.map((item,index)=>{
          return  <li key={`location${index+1}`}>{item.name}</li>   
        })
        }
        </ol>

      </div>
    )
  }
}


export default App;
