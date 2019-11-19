import React from 'react';
import { Route } from 'react-router-dom';
// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// Pages
import Collection from '../collection/collection.component';
// Styles
import './shop.styles.scss';


const Shop = ({ match }) => {
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`}  component={Collection}/>
            </div>
        );
    
}

export default Shop;