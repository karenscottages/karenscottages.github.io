import React, {useContext} from 'react';
import { EsSearchQueryExecutorContext } from './contexts/provider/userQueryContextProvider.jsx';
import { Icon } from '/components/atoms/icon';

const PaginateIcon = ({direction, disabled, onClick}) => 
    <button className="button is-link is-small is-light" onClick={onClick} disabled={disabled}>
        <Icon className={`fas fa-chevron-${direction} pagination-icon`}  />
    </button>;

const Paginator = ({pageNumber = 0, pageCount = 0, pageLeft, pageRight, zeroBased = true }) => {

    if (zeroBased) {
        pageNumber = pageCount ? pageNumber + 1 : pageNumber;
    }

    return <nav className="pagination" role="navigation" aria-label="pagination">
        <PaginateIcon direction="left" onClick={pageLeft} disabled={pageNumber <= 1} />

        <label className="px-2">{`Page ${pageNumber} of ${pageCount}`}</label>

        <PaginateIcon direction="right" onClick={pageRight} disabled={pageNumber >= pageCount} />
    </nav>;
};

const PageController = () => {

    const { esQueryExecutor, setQuery, searchResult } = useContext(EsSearchQueryExecutorContext);
    const { queryBuilder = {} } = esQueryExecutor;
    const { pageNumber = 0 } = queryBuilder;
    const pageCount = searchResult?.esResults?.pageCount || 0;

    const pageLeft = () => {
        let builtQuery = esQueryExecutor.rebuildWithPageNumber(esQueryExecutor.queryBuilder.pageNumber - 1);
        setQuery(builtQuery);
    };

    const pageRight = () => {
        let builtQuery = esQueryExecutor.rebuildWithPageNumber(esQueryExecutor.queryBuilder.pageNumber + 1);
        setQuery(builtQuery);
    };

    return <Paginator pageNumber={pageNumber} pageCount={pageCount} pageLeft={pageLeft} pageRight={pageRight} />;
};

export { PageController };