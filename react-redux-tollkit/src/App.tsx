import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo } from "./components/AddTodo"
import { Todolist } from "./components/TodoList"
import { store } from './store'


export const App = () => {

  return (
    <ReduxProvider store={store}>
      <Todolist />
      <AddTodo />
    </ReduxProvider>
  )
}


