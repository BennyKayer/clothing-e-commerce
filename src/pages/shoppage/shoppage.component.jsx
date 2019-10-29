import React from 'react';
import SHOP_DATA from './shoppage.data';
import './shoppage.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections : {SHOP_DATA}
        }
    }

    render () {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.SHOP_DATA.map(({id, ...otherProps}) => {
                        return (
                            <CollectionPreview key = {id} {...otherProps}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ShopPage;