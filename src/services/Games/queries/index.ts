import IGDB from '../../IGDB';
import Logger from '../../../helpers/Logger';

interface ISearchTypes {
  term: string;
}

export default {
  search: async (term: ISearchTypes) => {
    try {

      const result = await IGDB.search(term.term);

      let count = 0;
      for (const e of result) {
        const cover = await IGDB.getCover(e.id);
        const date = await IGDB.getLastestDate(e.release_dates.pop());
        result[count].releaseDate = date[0].date;

        result[count].url = cover && cover.length > 0
          ? `https:${cover.pop().url}`.replace('thumb', 'cover_big')
          : 'https://cdn.iconscout.com/icon/premium/png-256-thumb/question-1525884-1293660.png';
        count += 1;
      }

      return result;
    } catch (e) {
      return Logger.info(e);
    }
  },
};
