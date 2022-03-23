import { gql } from '@apollo/client';

export const QUERY_CAMPAIGNS = gql`
  query campaigns {
    campaigns {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email

      characters {
        _id
        name
        race
        class
        level
      }

      campaigns {
        _id
        name
        players {
          username
        }
      }
    }
  }
`;
