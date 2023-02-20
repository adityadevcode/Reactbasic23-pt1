
// map method
import React from 'react';
import Mapmethod from './Components/Mapmethod';

function App() {

let mapmethod = [
{
  id:9,
  name:'plan',
  age:29,
  place:'oen'
},
{
  id:15,
  name:'man',
  age:74,
  place:'ien'
},
{
  id:29,
  name:'mub',
  age:93,
  place:'pic'
},
{
  id:105,
  name:'tonn',
  age:73,
  place:'jud'
},
{
  id:211,
  name:'kev',
  age:34,
  place:'dyd'
},
{
  id:4,
  name:'kin',
  age:28,
  place:'oxn'
},
{
  id:5,
  name:'jgi',
  age:89,
  place:'pin'
},
{
  id:19,
  name:'dev',
  age:54,
  place:'chen'
},
{
  id:11,
  name:'chirs',
  age:20,
  place:'tel'
},
{
  id:6,
  name:'mary',
  age:98,
  place:'ker'
},
{
  id:2,
  name:'ton',
  age:89,
  place:'zin'
},
{
  id:75,
  name:'nxev',
  age:53,
  place:'vin'
},
{
  id:25,
  name:'cun',
  age:83,
  place:'xyd'
},
{
  id:55,
  name:'bohn',
  age:24,
  place:'Byd'
},
{
  id:26,
  name:'pohn',
  age:23,
  place:'Hyd'
}
]


return (
    <>
{
  mapmethod.map(
    (m)=> {
      return <Mapmethod key={m.id} id={m.id} name={m.name} 
      age={m.age} place={m.place}/>
    }
  )
}
    </>
  )
}

export default App;

/////////////
// we are using class component props

import React from 'react'

class Classprops extends React.Component {
    
  render() {
    return (
    <div>
      <h4>Id:{this.props.id}</h4>
      <p>Series:{this.props.series}</p>
      <h5>Designation: {this.props.designation}</h5>
    </div>
    )
  }
}

export default Classprops;

/////////////////
import React from 'react'

function Mapmethod(props) {
  return (
    <div style={{border:'2px dotted purple', width:90,height:130,
     margin:10, padding:50}}>
        <h4>ID:{props.id}</h4>
        <h5>Name:{props.name}</h5>
        <h5>Age:{props.age}</h5>
        <h6>Place:{props.place}</h6>
    </div>
  )
}

export default Mapmethod;

//////////////////
// functional component
// import React from 'react'

const Props = (props) => {
    return (
      <div>
         <h3>Fullname:{props.name}</h3> 
         <p>Age:{props.age}</p>
         <h4>Place:{props.place}</h4>
         <h4>Country:{props.country}</h4>
      </div>
    )
  }
  
  export default Props;
  
  //////////////////////////////////////

































  