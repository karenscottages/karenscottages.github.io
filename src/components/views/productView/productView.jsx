import React from 'react';
import { ProductDetails } from './productDetails.jsx';
import { ProductSummary } from './productSummary.jsx';

const ProductView = () => <div className="container is-fluid">
    <div className="section columns is-multiline">

        <div className="column">
            <ProductSummary />
        </div>

        <div className="column">
            <ProductDetails />
        </div>

    </div>
</div>;

ProductView.Path = "/productview";

export { ProductView };
