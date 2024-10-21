import MyButton from './MyButton'
import TaskItem from './TaskItem';

export function ItemList({ items = [], onDelete }) {
    const listItems = items.map((item) =>
        <li key={item._id}>
            <TaskItem {...item} />
            <MyButton caption='delete' onClick={() => onDelete(item._id)} />
        </li>
    )

    return <ul>{listItems}</ul>
}