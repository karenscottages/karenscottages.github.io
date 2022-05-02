import React, {useContext} from 'react';
import { Card } from '/components/atoms/cards';
import { EsSearchQueryExecutorContext } from './contexts/provider/userQueryContextProvider.jsx';
import { PageController } from '/components/views/productSearch/pageController.jsx';

const ProductSearch = () => {
    const {searchResult} = useContext(EsSearchQueryExecutorContext);

    const noData = () => <tr><td>No Data Found</td></tr>;

    const displayResult = () => {
        if (searchResult && searchResult.esResults) {
            const hitMap = searchResult.esResults.hits.map((hit, i) => <tr key={i}><td>{hit.id}</td><td>{hit.name}</td><td>{hit.namePath}</td></tr>);
            if (!hitMap.length) {
                return noData();
            }
            return hitMap;
        }
        return noData();
    };

    return <div className="section columns">
        <div className="column">
            <Card>
                <Card.Header title="Search Results">    
                    <PageController/>
                </Card.Header>
                <Card.Content>
                    <Card>
                        <Card.Content>
                            <table className="table">
                                <tbody>
                                    {displayResult()}
                                </tbody>
                            </table>
                        </Card.Content>
                    </Card>
                </Card.Content>
            </Card>
        </div>
    </div>;
};

export { ProductSearch };