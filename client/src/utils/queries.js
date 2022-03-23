import { gql } from '@apollo/client';

export const QUERY_CAMPAIGNS = gql`
  query campaigns {
    campaigns {
      name
    }
  }
`;
