// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
 import Axios from 'axios';
function App() {

  const [mname, setmname] = useState("");
  const [review, setreview] = useState("");
  const [reviewlist, setreviewlist] = useState([]);

  useEffect(() =>{
     Axios.get('http://localhost:3001/api/get') 
    .then((response) => {
      setreviewlist(response.data);
    });
  },[]);
  

  // const deleteReview = () => {
  
  //   Axios.delete('http://localhost:3001/api/delete/$moviename)
  // };




const submitReview = () => {
  
   Axios.post('http://localhost:3001/api/insert', {
        moviename:mname,
        moviereview:review
       })
        .then(response => 
/* show new value add to list  */
setreviewlist([...reviewlist,{moviename:mname,moviereview:review},
])
        )
            // console.log("Dsfsfsdf"))
        .catch(error => {

           console.error(error);
        });
  //  })
  // console.log(review);
};

  return (
    <div className="App">
     <h1>Crud application</h1>

     <div className="form">
       <label>Movie Name:</label>
       <input type="text" name="mname" onChange={(e) => {
         setmname(e.target.value);
       }} /> 
       <label>Review:</label>
       <input type="text" name="review" onChange={(e) => {
         setreview(e.target.value);
       }} /> 
       <button onClick={submitReview}>submit</button>
{/* {reviewlist.map((val) => {
return <h1>Moviename:{val.mname}</h1>
<button onClick={() =>{deleteReview}}>Delete</button>

})} */}


</div>
    </div>
  );
}

export default App;
