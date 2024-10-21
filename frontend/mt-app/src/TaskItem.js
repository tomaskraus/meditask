
export default function TaskItem({ caption, description }) {
    return <>
        <h3>{caption}</h3>
        {description}
    </>
}