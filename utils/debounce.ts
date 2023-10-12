import { TourInfo } from "~/types/tour";

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};


export function isValidDateFormat(dateString: string) {
  // Regular expression for 'yyyy-mm-dd' format
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateFormatRegex.test(dateString)) {
    return false; // Not in the correct format
  }

  // Parse the date parts
  const [year, month, day] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  // Check if the parsed date is valid
  return (
    date.getFullYear() === parseInt(year) &&

    date.getMonth() + 1 === parseInt(month) &&
    date.getDate() === parseInt(day)
  );
}


export function addToRecentlyViewed(item: TourInfo) {
  const maxItems = 10;
  let recentlyViewedItems: TourInfo[] = JSON.parse(localStorage.getItem('recentlyViewed')!) || [];
  const isIn = recentlyViewedItems.find(tour => tour.id === item.id);

  if (!!isIn) {
    const itemIndex = recentlyViewedItems.indexOf(isIn);
    recentlyViewedItems.splice(itemIndex, 1);
  }

  recentlyViewedItems.unshift(item);
  recentlyViewedItems = recentlyViewedItems.slice(0, maxItems);
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewedItems));
}
