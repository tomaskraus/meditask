import MyButton from './MyButton'
import TaskItem from './TaskItem';

export function ItemList({ items = [], dispatch }) {
    const listItems = items.map((item) =>
        <li key={item._id}>
            <TaskItem {...item} />
            <MyButton caption='delete' onClick={() => dispatch({
                type: 'deleted_task',
                id: item._id
            })} />
        </li>
    )

    return <ul>{listItems}</ul>
}