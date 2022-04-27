import Field from "./Field.component";
import { useState } from 'react';

function FieldContainer(props) {
    
    const conatinerProps = () => {
        const {
            type,
            value,
            name,
            onHandelChange
        } = props;
        return {
            type,
            name,
            value,
            onHandelChange
        }
    }

    return( 
        <Field
            {...conatinerProps()}
        />
    );
}

export default FieldContainer