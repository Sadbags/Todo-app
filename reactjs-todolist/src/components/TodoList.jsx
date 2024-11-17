import TodoCard from "./TodoCard" // Import the TodoCard component para usar otros comps dentro de components

export default function TodoList(props) {
	const {todos, } = props

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index=
				{todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
