import ReactDOM from 'react-dom'
import React from 'react'

import './index.scss'

//基础使用
let style = {
  color: 'r' + 'ed'
}
let obj = <div className="obj" style={style}>jsx……</div>

ReactDOM.render(
  obj, 
  document.getElementById('root')
  );

//逻辑处理
let name = 'lushan'
let flag = false
let names = ['lushan', 'lwj', 'axy']

let obj = (
  <div>
    {/**变量的使用 */}
    {
      <p>I am {name}</p>
    }
    {/**循环的使用 */}
    {
      flag ? <p>I am {name}</p> : <p>I am not {name}</p>
    }
    {/**数组的使用 */}
    {
      names.map((name, index) => <p key={index}>{name}</p>)
    }
  </div>
)

ReactDOM.render(
  obj, 
  document.getElementById('root')
  );