import { gql } from '@apollo/client';

export const COMEDIAN_QUERY = gql`
query Comedians {
  comedians {
    _id
    first_name
    last_name
    shows {
      city
      venue
      date
      time
    }
  }
}
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
