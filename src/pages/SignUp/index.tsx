import React, { useRef, useCallback, useState } from 'react';
import { FiMail, FiLock, FiUser, FiPhone, FiEdit2 } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import { useData } from '../../hooks/data';
import { Container, FormContent } from './styles';
import Input from '../../components/Input';

interface SubmitData {
    user: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { storeData, data } = useData();
    const [state, setState] = useState(data);
    const history = useHistory();

    const handleSubmit = useCallback(
        (d: SubmitData) => {
            storeData(d);
            history.push('/upload');
        },
        [storeData, history],
    );

    return (
        <>
            <Container>
                <FormContent>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>
                        <Input
                            value={state.name || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, name: value });
                            }}
                            icon={FiUser}
                            name="name"
                            placeholder="Nome completo"
                        />
                        <Input
                            value={state.email || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, email: value });
                            }}
                            icon={FiMail}
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            value={state.password || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, password: value });
                            }}
                            icon={FiLock}
                            name="password"
                            type="password"
                            placeholder="Senha"
                        />
                        <Input
                            value={state.phone || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, phone: value });
                            }}
                            icon={FiPhone}
                            name="phone"
                            placeholder="Telefone"
                        />
                        <Input
                            value={state.cpf || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, cpf: value });
                            }}
                            icon={FiEdit2}
                            name="cpf"
                            placeholder="CPF"
                        />
                        <button type="submit">
                            <span>Prosseguir</span>
                        </button>
                    </Form>
                </FormContent>
            </Container>
        </>
    );
};

export default SignUp;
