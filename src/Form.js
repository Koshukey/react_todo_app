import React, { Component } from 'react'
import './css/form.css'

class Form extends Component {
  render(){
    return(
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="タイトル *必須" defaultValue="reactの勉強" /> <br/>
          <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作る"></textarea><br/>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default Form

//defaultValue→
//onsubmit→入力フォームのsubmitボタンがクリックされた時に発生するイベント
