import { gql } from "@apollo/client";
export const GET_DATA = gql`
  query {
  users {
    data {
    	id
      name
      username
      email
      phone
      website
    }
  }
}
`;
