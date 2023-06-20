import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBSelect
} from 'mdb-react-ui-kit';

const data = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
    { text: 'Four', value: 4 },
    { text: 'Other', value: 5 }
];

export default function Sec() {
    const [currentValue, setCurrentValue] =
        useState(data[0]);
    const [inputActive, setInputActive] =
        useState(false);

    const otherInputEl = useRef(null);

    const handleBlur = useCallback(e => {
        if (!e.target.value) {
            setInputActive(false);
            setCurrentValue(
                data[data.length - 1]
            );
        }
    }, []);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (
            currentValue.value ==
            data[lastIndex].value
        ) {
            setInputActive(true);
            setTimeout(() => {
                otherInputEl.current?.focus();
            });
        } else {
            setInputActive(false);
        }
    }, [currentValue]);

    return (
        <MDBContainer
            style={{ width: '300px' }}
            className="mt-5"
        >
            {inputActive ? (
                <MDBInput
                    onBlur={handleBlur}
                    inputRef={otherInputEl}
                    label="Other"
                    id="form1"
                    type="text"
                />
            ) : (
                <MDBSelect
                    onValueChange={e =>
                        setCurrentValue(e)
                    }
                    label="Example label"
                    data={data}
                />
            )}
        </MDBContainer>
    );
}
