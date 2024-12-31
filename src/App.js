import logo from './logo.svg';
import './App.css';
import data from './data'
import React  from 'react';
import { useState } from 'react'; 
import Tours from './Component/Tours';
import Card from './Component/Card';

function App() {
  const [tours,setTours] = useState(data)

   function removetour(id){
   const newTours = tours.filter(tour=>tour.id!==id);
   setTours(newTours);
   }

   if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>
          No Tours Left
        </h2>
        <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
   }

  return (
    <div  className='App'> 
     <Tours  tours = {tours} removetour = {removetour} > </Tours>
    </div>
  );
}

export default App;
 
// import logo from './logo.svg';
// import './App.css';
// import data from './data';
// import React, { useState } from 'react';
// import Tours from './Component/Tours';

// function App() {
//   const [tours, setTours] = useState(data);

//   function removetour(id) {
//     const newTours = tours.filter(tour => tour.id !== id);
//     setTours(newTours);
//   }

//   return (
//     <div className='container'>
//       <Tours tours={tours} removetour={removetour} />
//     </div>
//   );
// }

// export default App;
