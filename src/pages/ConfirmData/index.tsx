import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, DataContainer, Left, Right } from './styles';
import { useData } from '../../hooks/data';

const ConfirmData: React.FC = () => {
    const { data } = useData();
    const keys = Object.keys(data).filter(
        item => item !== 'url' && item !== 'photoName',
    );

    const values = Object.values(data);
    const words = [
        'Nome',
        'Email',
        'Senha',
        'Telefone',
        'CPF',
        'Endereço',
        'Complemento',
    ];
    return (
        <>
            <Container>
                <div id="title">
                    <h1>Confirme se os dados estão corretos</h1>
                </div>
                <DataContainer>
                    <Left>
                        {keys.map((key, index) => {
                            return (
                                <div>
                                    <strong>{words[index]}:</strong>
                                    <p>{values[index]}</p>
                                </div>
                            );
                        })}
                    </Left>
                    <Right>
                        <strong>Documento:</strong>
                        <img src={data.url} alt="hehe" />
                    </Right>
                </DataContainer>
                <Link to="/upload">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </Container>
        </>
    );
};

export default ConfirmData;
