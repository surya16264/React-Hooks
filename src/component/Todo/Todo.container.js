import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList';
import Field from '../Field';

function TodoContainer() {

    const initialState = {
        numberState: undefined,
        textState: undefined
    }
    const[item, setItem] = useState('');
    const[itemList, setItemList] = useState([]);
    const[count, setCount] = useState(0);
    const[inputValues, setInputValues] = useState(initialState);

    const{ numberState, textState } = initialState;

    const onChangeSetItem = (e) => {
        setItem(e.target.value);
    }

    const onClickSetItemList = () => {
        setItemList([...itemList, {item: item, key: Date.now()}]);
        setItem('');
    }

    // // Render every time 
    // useEffect(() => {
    //     console.log("This will render every time");
    // })

    // // Render only one time - componentDidMount
    // useEffect(() => {
    //     console.log("This will render only one time like componentDidMount");
    // }, [])

    // // Render when value update - componentDidUpdate
    // useEffect(() => {
    //     console.log("This is componentDidUpdate");
    // }, [count])

    useEffect(() => {
        console.log(inputValues,"inputVlaues")
    }, [inputValues])

    const changeCount = () => {
        setCount(count + 1);
    }

    const handelOnChangeInputFields = (e) => {
        const{ name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    return (
        <>
            {/* <div className='Todo-List'>
                <div className='Todo_input'>
                    <input value={item} onChange={onChangeSetItem}></input>
                    <button onClick={onClickSetItemList}>{('+')}</button>
                </div>
                <TodoList 
                    itemList={ itemList }
                    setItemList={ setItemList }
                />
            </div> */}
            <h2 >{count}</h2>
            <button onClick={changeCount}>Increament</button>
            <div className='Fields'>
                <form>
                <Field 
                    type='number'
                    value={numberState}
                    name="numberState"
                    onHandelChange={handelOnChangeInputFields}
                />
                <Field 
                    type='text'
                    value={textState}
                    name="textState"
                    onHandelChange={handelOnChangeInputFields}
                />
                </form>
            </div>

        </>
    );
}

export default TodoContainer;