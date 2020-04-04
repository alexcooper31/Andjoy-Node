import gamesQueries from './Games/queries/types';
import gamesMutations from './Games/mutations/types';
import gamesQueriesResolvers from './Games/queries';
import gamesMutationsResolvers from './Games/mutations';

export const query = `
  ${gamesQueries}
  ${gamesMutations}
`;

export default {
  ...gamesMutationsResolvers,
  ...gamesQueriesResolvers,
};
