import React from 'react';
import 'style/test.less'
import {Button} from 'antd'
function App(props){
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}
export default App;
