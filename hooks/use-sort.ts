import { TourInfo } from "~/types/tour"

export type SortByOption = 'Rating' | 'Relevance' | 'Price' | 'Title'
export type SortByParams = {
  arr: TourInfo[]
  desc: boolean
}


export const useSort = () => {

  const sortByMethods = {
    'Rating': ({ arr, desc }: SortByParams) => {
      return arr.sort((a, b) => {
        if (desc) {
          return b.rate - a.rate;
        } else {
          return a.rate - b.rate;
        }
      });
    },
    'Relevance': ({ arr, desc }: SortByParams) => {
      return arr.sort((a, b) => {
        if (desc) {
          return b.rateAmount - a.rateAmount;
        } else {
          return a.rateAmount - b.rateAmount;
        }
      });

    },
    'Price': ({ arr, desc }: SortByParams) => {
      return arr.sort((a, b) => {
        if (desc) {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });

    },
    'Title': ({ arr, desc }: SortByParams) => {
      return arr.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (desc) {
          return titleB.localeCompare(titleA);  // Sort in descending order
        } else {
          return titleA.localeCompare(titleB);  // Sort in ascending order
        }
      });

    }
  }

  return { sortByMethods }
}