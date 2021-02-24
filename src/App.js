import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name : 'phptoshop', price : '$120'},
    {name : 'Illustator', price : '$80'},
    {name : 'Adobe Indesign', price : '$120'},
    {name : 'Adobe Premear', price : '$220'},
    {name : 'Adobe advanced', price: '$1000'}
  ]
  const nayok = ['Hero','Razzak', 'Alonger','Ferdayas','jafariqbal','howlader']
  // const productsName = products.map(products => products.name );
  // const productsPrice = products.map(products => products.price );
  // const nayokName = nayok.map(nayok => nayok)
  // console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
                {/* This is stste using in react statement */}
       <Counter></Counter>
       <Users></Users>
      <ul>
        {
          products.map(pd => <li>{pd.name} {'The price is '+ pd.price}</li>)
        }
        {
          nayok.map(nayok =><li> {nayok}</li> )
        }
        {/* <li>{productsName[0]} {'price is : '} {productsPrice[0]}</li>
        <li>{productsName[1]} {productsPrice[1]}</li>
        <li>{productsName[2]} {productsPrice[2]} </li>
        <li>{productsName[3]} {productsPrice[3]} </li> */}
      </ul>
      {/* <ul>
        <li>{nayokName[0]} </li>
        <li>{nayokName[1]} </li>
        <li>{nayokName[2]}  </li>
        <li>{nayokName[3]}  </li>
      </ul> */}
      {/* <Products name={products[0].name} price={products[0].price} ></Products>
      <Products name={products[1].name} price={products[1].price} ></Products>
      <Products name={products[2].name} price={products[2].price} ></Products>
      <Products name={products[3].name} price={products[3].price} ></Products> */}
        <Thisjsude name="halal" over="Haram"></Thisjsude>
        <Thisjsude name="kamal" over="jamal"></Thisjsude>

        
   
      </header>
    </div>
  );
}
// how to use props
function Products(props){
const productaStyle = {
  border: '1px solid gray',
  borderRadius: '50px',
  backgroundColor : 'lightgray',
  height: '300px',
  width : '300px',
  float : 'left'
}
  return (
    <div style={productaStyle}>
      <h2>Name : {props.name}</h2>
      <h1>price :{props.price} </h1>
      <button > By Now</button>

    </div>
  );
}
function Thisjsude(props){
  const style ={
    border:'5px solid red'
  }  
  return(
    <div>
      <h1 style={style}> This is the first :{props.name} </h1>
      <h2 style={{border: '5px solid gray', margin:"40px" , padding: '50px'}}>This is the secound : {props.over}</h2>
      <p>Hi! kaluya how are you</p>
      <button type="submit" className="btn btn-primary">Your button</button>

    </div>
  );
}

// How to use state in react js
function Counter(){
  const [count,setCount] = useState(10);
  // This is the main function
  // const handalIncouse = () => setCount(count - 1);

  return(
        <div>
              <h3>Counter :{count} </h3>
    <button onClick={() => setCount(count + 1)}> Incrouse </button>
    <button onClick={() => setCount(count - 1)}> Decrouse </button>
        </div>
  )
}

// use react USEEFFECT AND USE STATE
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Daynamic user : {users.length}</h3>
      {
        users.map(govad => <li> {govad.name} </li>)
        
      }
    </div>
  )
}

export default App;
