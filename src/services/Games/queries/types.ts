export default `
  type Game {
    id: String!
    name: String!
    releaseDate: Int
    url: String
    platforms: [Int]
  }

  type Query {
    search(term: String!): [Game]
  }
`;
