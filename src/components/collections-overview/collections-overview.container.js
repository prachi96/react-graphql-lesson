import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ data, error, loading }) => {
      console.log(loading);
      console.log(error);
      if (loading) return <Spinner />;
      return <CollectionOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionOverviewContainer;
