import { gql } from '@apollo/client';

export const QUERY_CAMPAIGNS = gql`
  query campaigns {
    campaigns {
      _id
      name
    }
  }
`;

export const QUERY_USERNAMES = gql`
  query users {
    users {
      username
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
        gamemaster {
          username
        }
        players {
          _id
          username
        }
        characters {
          _id
          name
          player {
            username
          }
        }
      }
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query character($_id: ID!) {
    character(_id: $_id) {
      name
      class
    }
  }
`;
