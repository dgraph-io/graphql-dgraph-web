export const querySample = `query {
    queryUser {
      id
      firstName
      email
      orgs {
        org {
          name
          id
          users {
            role
            user {
              firstName
              email
            }
            
          }
        }
      }
      
    }
  }`