const Table = ({ items, setItems }) => {
    const handleDelete = (i) => {
        setItems(items.filter((item, index) => index != i))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ITEM</th>
                    <th>QUANTITY</th>
                    <th>COST</th>
                    <th>AMOUNT</th>
                    <th>DATE</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                            <td>{item.cost * item.quantity}</td>
                            <td>{item.date}</td>
                            <td><button onClick={() => handleDelete(i)}><img src="/trash-2.svg" /></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table