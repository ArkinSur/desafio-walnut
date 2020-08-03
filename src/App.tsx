import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { DataProvider } from './hooks/data';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <DataProvider>
                    <Routes />
                </DataProvider>
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
};

export default App;
