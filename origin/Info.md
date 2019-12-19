  
## 优势
优势都是对比出来，我们看一下Hook解决哪些class组件存在的问题。
### Hook使你在无需修改组件情况下复用状态逻辑
1. 如果组件是class，和状态关联的可复用逻辑无法直接复用，每个组件都是单独管理状态，很难直接复用。
2. React现有的一些解决方案像render props，HOC，这些方式都需要改变原有的组件结构，这两种方式组件嵌套结构特别多层，会让你的页面结构变得非常复杂，容易出错，并且不利于测试和维护的，另外上手成本的也很高。
3. 使用Hook可以把组件的状态逻辑提取出来，做成自定义Hook，让这些逻辑可以单独测试并且复用。  
### Hook让组件变得更加容易理解
1. 组件随着业务发展变得越来越复杂，要管理的状态也会越来越多。一个组件里面状态逻辑无处不在，很难将细化拆分，组件内部会很复杂，代码量也会很大。
2. 在同一个生命周期中处理不相关的逻辑，也会把相互关联的逻辑放到不同的生命周期中去处理，比如你在`componenetDidMount`中订阅了事件，就需要在`componentWillUnmount`中取消订阅。这两个相互关联的逻辑放在不同的地方去处理很容易产生bug，并且导致逻辑不一致。
3. 使用Hook可以尽可能的最小拆分，把相互关联的部分拆成更小的函数，不用强制按照生命周期划分。 
4. Hook可以让你不用关注不相关的逻辑，比如class的组件构造方法，还有生命周期，你可以花更多的时间来关注业务逻辑。  
5. 使用Hook后会有一个特别直观的感受，代码结构变得很清晰，代码量也会少很多。 
### Hook没有class那么沉重，在不使用类的情况下可以使用React特性  
1. class相对函数更加抽象，不太好理解。class自身有些方法你是必须要实现的，render，本身复杂，会增加预编译的时间，另外class不能更好地被压缩，也会出现热更新不稳定的情况。Hook则是利用函数去解决了这些问题，使代码更易于优化。
2. Hook为React特性 props， state， context, refs，生命周期都提供了专门的api，可以让我们在函数组件中使用react特性。稍后我们会具体看一下已有的Hook api。

## 趋势 
1. Hook是React未来力推的一个特性，它可以解决了目前React框架存在一些问题，并且提供了一个新的笔记好思路来使用React。
2. 另外class跟hook是共存的，并且hook是向后兼容的，不影响之前写的代码。官方也特别推荐使用Hook。最最主要的是用Hook真的是省力省心。
3. 目前我们常用的第三方库大多已支持Hook。
大家了解过后可以用起来。  

## api  

## useState
声明状态变量，需要传入一个初始state，可以是任意的js有效类型，返回当前state和修改当前state的函数。 和class组件中`this.setState`是同样的作用。不同的是class组件中的setState是合并，而Hook是替换。   

## useEffect 
在React里面我们一般把请求数据、订阅和更改DOM称之为副作用。  
1. useEffect api可以让你在函数组件中执行副作用。告诉React组件需要在渲染完成之后调用对应操作。
2. useEffect接收两个参数，第一个参数是要执行函数，第二个参数是可选的，关联变量，可以控制effect的执行时机
3. 在useEffect内部可以直接使用props和stateeffect会在第一次渲染和每次更新之后都会调用。这里可以通过设置关联变量来控制effect的执行。
4. effect可选的清除机制是通过返回一个函数来执行，像取消订阅这些，这个待会也会在代码中去演示。

## useContext  
接收一个context对象，并返回一个context对象的值

## useReducer  
useState的替代方案，当state结构复杂的时候，采用Redux方式来处理

## useCallback
返回一个关联函数的memoized函数
## useMemo
返回一个memoized值
这两个都是用来减少不必要的渲染 
## useRef
返回一个可变的ref值，可以保存任何类型的对象


 
 