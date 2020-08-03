import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useField } from '@unform/core';

import { IconType } from 'react-icons/lib';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: IconType;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const [isFocused, setFocus] = useState(false);
    const [isFilled, setFilled] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = useCallback(() => {
        setFocus(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setFocus(false);

        setFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container
            isErrored={!!error}
            isFilled={isFilled}
            isFocused={isFocused}
        >
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
        </Container>
    );
};

export default Input;
