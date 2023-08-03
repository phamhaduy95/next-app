import { useCheckValueChange } from '@/utils/useCheckValueChange';
import React, { useState } from 'react';
import { isEqual } from 'lodash';

const ParentComponent = () => {
    const value = [1, 3, 4, 5, 5];
    const [state, setState] = useState(0);
    value.copyWithin()

    useCheckValueChange(
        value,
        (oldValue, newValue) => {
            console.log(oldValue, newValue);
        },
        isEqual
    );

    const handleClick = () => {
        setState(state + 1);
    };

    return <div onClick={handleClick}>ParentComponent</div>;
};

export default ParentComponent;
