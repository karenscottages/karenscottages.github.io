import React, {useContext} from 'react';
import { TextInput } from '/components/atoms/input/textInput/textInput.jsx';
import { EsSearchQueryExecutorContext } from './contexts/provider/userQueryContextProvider.jsx';
import { useHistory  } from 'react-router-dom';
import { Search } from '/components/views/productSearch/search.jsx';

export const SearchBox = () => {
    const {esQueryExecutor, setQuery} = useContext(EsSearchQueryExecutorContext);
    const [searchPhrase, setSearchPhrase] = React.useState("");
    const history = useHistory();

    const onApply = () => {
        let builtQuery = esQueryExecutor.buildQuery(searchPhrase);
        setQuery(builtQuery);
        history.push(Search.Path);
    };

    return <div className="control is-expanded is-flex">
        <TextInput value={searchPhrase} onChange={setSearchPhrase} placeholder="Enter search phrase" />
        <div className="control">
            <button className="button is-primary" onClick={onApply}>
                Go
            </button>
        </div>
    </div>;
};