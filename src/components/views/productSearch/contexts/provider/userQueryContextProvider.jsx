import React, {createContext, useEffect, useState} from 'react';
import { EsSearchQueryExecutor } from '/services/searchservice/executor/esSearchQueryExecutor';

export const EsSearchQueryExecutorContext = createContext();
const esSearchExecutor = new EsSearchQueryExecutor();

export const UserQueryContextProvider = ({children}) => {
    const [query, setQuery] = useState();
    const [searchResult, setSearchResult] = useState("{Please enter your search...}");
    useEffect(() => {
        if (query) {
            esSearchExecutor.execute(query).then((data) => {
                setSearchResult(data);
            });
        }
    }, [query]);

    const value = {esQueryExecutor: esSearchExecutor, searchResult, setQuery};
    return <EsSearchQueryExecutorContext.Provider value={value}>
        {children}
    </EsSearchQueryExecutorContext.Provider>;
};