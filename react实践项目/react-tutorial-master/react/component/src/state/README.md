# state

state 可以理解成 props，不一样的在于 props 是只读的，而 state 是可读写。当 state 发生改变的时候会重新执行 render 方法去渲染整颗 DOM 树，在渲染的过程中会有 diff 算法去计算哪些 DOM 有更新，从而提升性能。
在使用 state　前要先初始化 `getInitialState`
更改 state 一定要用 `setState`
`getInitialState` 该方法在每次 render 时都会被调用一次。

## ES5中的state
```javascript
//es5
var StateComponent = React.createClass({
    getInitialState: function(){
        return {
            text: ''
        }
    },
    change: function(event){
        this.setState({text: event.target.value});
    },
    render: function(){
        return (
            <div>
                <p><input type="text" onChange={this.change}/></p>
                <p>{this.state.text}</p>
            </div>
        )
    }
}) 
```

以人为例子，一个组件就是个人，`state`是自己努力得来的，`state`在程序里面一般是通过`ajax`来向后端要的，或者自己写死的，`state`是组件自己独有的数据，它不受外界影响，它的数据一般来说是自己提供，并且自己触发更改，相对`props`是不一样，`props`是祖传下来的，在Vue这类 MVVM 框架中，数据 Model 变视图 View 变，视图变数据变，而react中的S和V (State和View) 是状态变视图变，但是视图变状态不变

一般来说，我们说的数据驱动，大部分是指（Vue的data）或者（React的state），但是它只是数据的代言人，它不能代表全部，真正的数据指的是类组件里面，所有的`props,state和函数`等

## ES6中的state

开发中我们更常用的是 ES6 的编写方式
```js
import React from 'react';
import ReactDOM from 'react-dom';
class Component1 extends React.Component{
    state = {
        text: ''
    }
    change(event){
        this.setState({text: event.target.value});
    },
    render(){
        return (
            <div>
                <p><input type="text" onChange={this.change}/></p>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
```
更推荐下面这种写法
```js
class Xheader extends React.Component {
    constructor(props){
        super(props)
        // 父传子 老爸给我的
        this.props = props;
        // 自己拥有的 就是vue组件里面data
        this.state = {
            "title":"Wscats"
        };
    }
    render() {
        return <header>{this.state.title}</header>;
    }
}
ReactDOM.render(
    <div>Hello World</div>,
    document.querySelector("#demo")
)
```

# setState

React 的语法是`{}`，单向数据绑定，Vue 的语法是`{{}}`，双向数据绑定

Vue 里面

1. data变了，view层通过`v-xxx`或者`{{}}`指令，来渲染数据   M->V

2. view变了，你通过`v-on`或者`v-model`来把数据从视图层带回数据层  V-M

React 里面

1. State变了，是通过函数式编程和`{}`，来渲染数据   S->V

2. view变了，通过事件触发`setState`来更改数据层   V->S

所以我们要更新视图，就必须把关注点放在更改 state 上，而更改 state 就要通过`setState`方法来实现

```html
<button onClick={this.changeValue.bind(this)}>{this.state.title</button>
```
上面的`<button>`值会因为点击而改变，原因就是因为用户触发了点击事件，而事件动用了`setState`方法更改`state`的状态，从而更新按钮的值
```js
changeValue(){
    console.log(this);
    this.setState({
        "title":"支付宝"
    })
}
```

### 效果预览

- [ES5中的state](https://wscats.github.io/react-tutorial/react/component/src/state/es5-state.html)
- [ES6中的state](https://wscats.github.io/react-tutorial/react/component/src/state/es6-state.html)
- [setState的用法](https://wscats.github.io/react-tutorial/react/component/src/state/setState.html)

#  思考

- React 和 Vue 的区别（数据帮绑定单向VS双向，函数式编程和指令）个人开源项目，企业开源项目

- props 和 state 的区别

- 如何定义组件，组件的好处是什么
