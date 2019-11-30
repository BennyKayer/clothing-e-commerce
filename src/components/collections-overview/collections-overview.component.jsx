import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// Components
import CollectionPreview from "../collection-preview/collection-preview.component.jsx";
// Selectors
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
// Styles
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
