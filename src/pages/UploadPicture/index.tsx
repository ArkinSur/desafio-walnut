import React, { useRef, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiHome, FiEdit2, FiXCircle } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, FormContent } from './styles';
import Input from '../../components/Input';
import Upload from '../../components/Upload';
import { useData } from '../../hooks/data';

interface SubmitData {
    address: string;
    complement: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { storeData, data } = useData();
    const [state, setState] = useState(data);
    const history = useHistory();

    const handleSubmit = useCallback(
        (d: SubmitData) => {
            const { url, photoName } = state;
            storeData({ ...d, url, photoName });
            history.push('/confirm');
        },
        [storeData, history, state],
    );

    const submitFile = useCallback(
        (files: File[]): void => {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const url = reader.result;
                if (typeof url === 'string') {
                    setState({
                        ...state,
                        url,
                        photoName: file.name,
                    });
                }
            };
            reader.readAsDataURL(file);
        },
        [state],
    );

    return (
        <>
            <Container>
                <FormContent>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <strong>
                            Falta pouco, preencha o restante dos dados
                        </strong>
                        <Input
                            value={state.address || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, address: value });
                            }}
                            icon={FiHome}
                            name="address"
                            placeholder="Endereço"
                        />
                        <Input
                            value={state.complement || ''}
                            onChange={e => {
                                const { value } = e.target;
                                setState({ ...state, complement: value });
                            }}
                            icon={FiEdit2}
                            name="complement"
                            placeholder="Complemento"
                        />

                        <div id="container">
                            <strong id="document">Documento com foto</strong>
                            <Upload onUpload={submitFile} />
                            {state.url && (
                                <div id="preview">
                                    <img src={state.url} alt="error" />
                                    <p> - {state.photoName}</p>
                                    <button
                                        onClick={() => {
                                            delete state.url;
                                            delete state.photoName;
                                            setState({ ...state });
                                        }}
                                        type="button"
                                    >
                                        <FiXCircle size={24} />
                                    </button>
                                </div>
                            )}
                        </div>
                        <button id="submit" type="submit">
                            <span>Prosseguir</span>
                        </button>
                    </Form>
                </FormContent>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </Container>
        </>
    );
};

export default SignUp;
