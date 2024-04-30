// hook
import { useState } from "react";

// react will not watch this
// let state={
//   count:0
// }

function App() {
  // the function returns 2 values, put the 1st value in count and second in setCount
  const [count, setCount] = useState(0);

  // function onClickHandler(){
  //   setCount(count+1);
  // }

  return (
    <div>
    {/* <button onClick={onCickHandler} > Counter {count}</button> */}

    <CustomButton count={count} setCount={setCount}>
    </CustomButton>
    </div>
  )

  // component

  function CustomButton(props){

    function onClickHandler(){
      props.setCount(props.count+1);
    }

    return <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  }
}

export default App
