import './css/index.css'  //import A from B でBで指定した変数やクラス名をAで使うことができる
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.Render()によりHTMLのidのある場所にコンポーネントを挿入
