

//基础component用法
function Component() {
    return <h1>I am Lushan</h1>
  }
  
  class ES6Component extends React.Component{
    render(){
      return <h1>This is ES6Component</h1>
    }
  }
  
  ReactDOM.render(
    <div>
      <Component/>
      <ES6Component/>
    </div>, 
    document.getElementById('root')
    );

    //state && props的用法
    class ES6Component extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          name: 'Lushan'
        }
      }
      render(){
        setTimeout(() => {
          this.setState({
            name: 'fuck'
          })
        }, 2000)
        return <h1>This is {this.state.name}</h1>
      }
    }
    
    //事件处理1
    class Component extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
          name: 'Lushan',
          age: 18
        }
      }
      handleClick(e){
        this.setState({
          age: this.state.age + 1
        })
      }
      
      render() {
        return (
          <div>
            <h1>This is {this.state.name}</h1>
            <p>I am {this.state.age} years old!</p>
            <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
          </div>
        )
      }
    }


    //事件处理方式2
    class Component extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
          name: 'Lushan',
          age: 18
        }
        //将handleClick的this作用域转换到Component到作用域下
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick(){
        this.setState({
          age: this.state.age + 1
        })
      }
      onvalueChange(e) {
        this.setState({
          age: e.target.value
        })
      }
      render() {
        return (
          <div>
            <h1>This is {this.state.name}</h1>
            <p>I am {this.state.age} years old!</p>
            <button onClick={this.handleClick}>加一岁</button>
            <input type="text" onChange={(e) => {this.onvalueChange(e)}}/>
          </div>
        )
      }
    }

    //组件的组合方式
    class Component extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
          name: 'Lushan',
          age: 18
        }
        //将handleClick的this作用域转换到Component到作用域下
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick(){
        this.setState({
          age: this.state.age + 1
        })
      }
      onvalueChange(e) {
        this.setState({
          age: e.target.value
        })
      }
      render() {
        return (
          <div>
            <h1>This is {this.state.name}</h1>
            <p>I am {this.state.age} years old!</p>
            <button onClick={this.handleClick}>加一岁</button>
            <input type="text" onChange={(e) => {this.onvalueChange(e)}}/>
          </div>
        )
      }
    }
    class Title extends React.Component{
      render(props){
        return <div>{this.props.children}</div>
      }
    }
    class App extends React.Component{
      render() {
        return (
          <div>
            {/**容器组件 */}
            <Title>
              <h1>Children</h1>
            </Title>
            <hr/>
            {/**单纯组件 */}
            <Component/>
          </div>
        )
      }
    }

    //父子组件的值传递
    class Child extends React.Component{
      constructor(props) {
        super(props)
        //将handleClick的this作用域转换到Component到作用域下
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick(){
        this.props.changeName('Change Father Name')
      }
      render() {
        return (
          <div>
            <h1>This is {this.props.name}</h1>
            <button onClick={this.handleClick}>change</button>
          </div>
        )
      }
    }
    class Father extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          name: 'FatherName'
        }
      }
      onChangeName(name){
        this.setState({
          name: name
        })
      }
      render(props){
        return <Child name={this.state.name} changeName={(name) => {this.onChangeName(name)}}/>
      }
    }