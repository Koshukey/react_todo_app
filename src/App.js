import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './css/App.css';



class App extends Component { //Appというコンポーネントクラスを作製

  constructor() { //初期値設定

    super()  //


    const todos = [
        {
          id: 1,
          title: "hekk",
          desc: "hot",
          done: false
        },
        {
          id: 2,
          title: "hello",
          desc: "redrrf",
          done: false
        },
      ]
      this.state = {   //state名: stateの内容
        todos: todos,
        countTodo: todos.length + 1,
      }
  }



  handleSubmit(e){
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice() //sliceによりコピーされた配列を作りstateが直接変更されることを防ぐ
    const countTodo = this.state.contTodo


    todos.push({ //pushメソッドで配列に要素を追加
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos: todos })
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.desc.value = '';
  }



  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todo[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }



  render() {
    return(
      <div className="app">
        <h1>Todo-App</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
        />
      </div>
    );
  }
}
//FormコンポーネントでhandleSubmit()という関数が使えるようにする

export default App

//this.state→このクラスのstateを示す
//<TodoList />により TodoListコンポーネントを呼び出す
//todosという変数名でAppのstateを渡す
// export defaultによりimportされた時にデフォルトで呼び出されるものを定義
//bind(this)とすることでthisをAppコンポーネントに束縛する
