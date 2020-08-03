import React, { useState, useContext, useCallback, createContext } from 'react';

interface DataState {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    cpf?: string;
    address?: string;
    complement?: string;
    url?: string;
    photoName?: string;
}

interface Context {
    data: DataState;
    storeData(newData: DataState): void;
}

const DataContext = createContext<Context>({} as Context);

export const DataProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<DataState>({} as DataState);

    const storeData = useCallback(
        (newData: DataState) => {
            setData({ ...data, ...newData });
        },
        [data],
    );

    return (
        <DataContext.Provider value={{ data, storeData }}>
            {children}
        </DataContext.Provider>
    );
};

export function useData(): Context {
    const context = useContext(DataContext);

    return context;
}
