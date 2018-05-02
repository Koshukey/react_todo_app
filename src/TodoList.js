import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component{

  render() {
    const todos = this.props.todos.map( todo =>
       <Todo
         key={todo.id}
         {...todo}
         setTodoStatus={this.props.setTodoStatus}
       />
    )

    return(
      <ul>
        {todos}
      </ul>
    );

  }

}

export default TodoList


//this.popsによって親コンポーネントから渡されたものを受け取る

// {...todo}とはtodoに入っている要素を全て引き継ぐという意味
// { } で式展開
