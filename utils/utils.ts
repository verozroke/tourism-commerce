import { useToast } from "~/hooks/use-toast";
import { TourInfo } from "~/types/tour";

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};


export const copyToureLink = (id: string) => {
  const { toast } = useToast()
  const link = `${window.origin}/toure/${id}`
  navigator.clipboard.writeText(link);
  toast.copied({ message: 'URL Copied successfully' })
}



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

export function formatDate(inputDate: Date) {
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const day = date.getDate();
  let daySuffix;
  if (day >= 11 && day <= 13) {
    daySuffix = 'th';
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = 'st';
        break;
      case 2:
        daySuffix = 'nd';
        break;
      case 3:
        daySuffix = 'rd';
        break;
      default:
        daySuffix = 'th';
    }
  }

  return `${day}${daySuffix}, ${formattedDate}`;
}
