

function TodoListContainer(props) {
    const { itemList } = props;
    console.log("child component");
    const removeItem = (keyItem) => {
        const { itemList, setItemList } = props;
        const newList = itemList.filter(item => {
            const{ key } = item;
            return key !== keyItem;
        })
        setItemList(newList);
    }

    return (
        <>
            {itemList.map((items) => {
                const { item, key } = items;
                return (
                    <div key={key} className='todoList'>
                        <p> {item} </p>
                        <button onClick={() => removeItem(key)}>x</button>
                    </div>
                );
            })}
        </> 
    );

}

export default TodoListContainer;   