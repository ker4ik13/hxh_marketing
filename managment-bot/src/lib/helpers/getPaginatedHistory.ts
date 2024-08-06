// export const getPaginatedHistory = <T>(array: T[], page: number) => {
//   const items: HistoryItemType[] = [];
//   let currentCount = 1;

//   if (array.length === 0) {
//     return {
//       pageItems: [],
//       pages: 0,
//       page,
//       hasNextPage: false,
//       hasPreviousPage: false,
//     };
//   }

//   const getHour = (timestamp: Date) => timestamp.getHours();

//   for (let i = 1; i < array.length; i++) {
//     if (
//       array[i].ip === array[i - 1].ip &&
//       getHour(array[i].timestamp) === getHour(array[i - 1].timestamp)
//     ) {
//       currentCount++;
//     } else {
//       items.push({
//         timestamp: array[i - 1].timestamp,
//         ip: array[i - 1].ip,
//         repeats: currentCount,
//       });
//       currentCount = 1;
//     }
//   }

//   items.push({
//     timestamp: array[array.length - 1].timestamp,
//     ip: array[array.length - 1].ip,
//     repeats: currentCount,
//   });

//   const itemPages: HistoryItemType[][] = splitIntoChunks(items, 20);

//   return {
//     pageItems: itemPages[page] || [],
//     pages: itemPages.length,
//     page,
//     hasNextPage: page !== itemPages.length - 1 && itemPages[page]?.length > 0,
//     hasPreviousPage: page !== 0,
//   };
// };
