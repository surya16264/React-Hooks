import React,{ useRef, useEffect } from 'react';

function Field(props) {
    const fieldRef = useRef(null);
    const{ type, value, onHandelChange, name } = props;

    useEffect(() => {
        fieldRef.current.focus();
        // console.log(fieldRef.current, 'useref'); 
    }, [])

    return(
        <>
            <input 
                type={type}
                ref={fieldRef}
                value={value}
                onChange={onHandelChange}
                name={name}
            />  
        </>
    );
}

export default React.memo(Field)    