export default `
  type Client {
    id: ID!
    name: String
    age: Int
    products: String
  }

  type Mutation {
    addClient(name: String!, age: Int!): String
  }
`;
