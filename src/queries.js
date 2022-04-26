import { gql } from "apollo-boost";

export const COUNT_QUERY = gql`
  {
    CHC {
      getCharities(filters: {}) {
        list {
          names(all: true) {
            value
          }
          finances(all: true) {
            income
            spending
          }
          contact {
            address
            email
            phone
            postcode
          }
          funding {
            grants {
              title
              amountAwarded
            }
          }
          image {
            logo {
              small
            }
          }
        }
      }
    }
  }
`;
