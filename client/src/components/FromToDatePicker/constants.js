// startOfToday
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

const endDate = new Date();
endDate.setHours(23, 59, 59, 59);

const startOfYesterday = () => {
  const result = new Date();
  result.setDate(result.getDate() - 1);
  result.setHours(0, 0, 0, 0);
  return result;
};

const endOfYesterday = () => {
  const result = new Date();
  result.setDate(result.getDate() - 1);
  result.setHours(23, 59, 59, 59);
  return result;
};

const getThisWeek = () => {
  let today = new Date();
  let thisWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  return thisWeek;
};

const getLastWeekStart = () => {
  let today = new Date();
  let lastWeekStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() - 7
  );
  return lastWeekStart;
};

const getThisWeekEnd = () => {
  let today = new Date();
  let thisWeekEnd = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() - 1
  );
  return thisWeekEnd;
};

const getLastMonthStart = () => {
  let today = new Date();
  let lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1);
  return lastMonthStart;
};
const getLastMonthEnd = () => {
  let today = new Date();
  let lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
  return lastMonthEnd;
};
const getThisMonth = () => {
  let today = new Date();
  let lastMonthEnd = new Date(today.getFullYear(), today.getMonth());
  return lastMonthEnd;
};
// const getLastOptionalDays = (number) => {
//   const today = new Date();
//   const lastOptionalDay = new Date(today.setDate(today.getDate() - number + 1));
//   return lastOptionalDay;
// };

const thisWeek = getThisWeek();
const lastWeekStart = getLastWeekStart();
const lastWeekEnd = getThisWeekEnd();
export const today = new Date();
today.setHours(23, 59, 59, 59);
// const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const lastMonthStart = getLastMonthStart();
const lastMonthEnd = getLastMonthEnd();
const thisMonth = getThisMonth();
// const lastSevenDay = getLastOptionalDays(7);
// const lastThirtyDay = getLastOptionalDays(30);

export const DATE_PICKER_ADDITIONS_DATES = [
  {
    startDate: startOfToday,
    endDate: endDate,
    title: "Bugun",
  },
  {
    startDate: startOfYesterday(),
    endDate: endOfYesterday(),
    title: "Kecha",
  },
  {
    startDate: thisWeek,
    endDate: today,
    title: "Bu hafta",
  },
  {
    startDate: lastWeekStart,
    endDate: lastWeekEnd,
    title: "O'tkan hafta",
  },
  {
    startDate: thisMonth,
    endDate: today,
    title: "Bu oy",
  },
  {
    startDate: lastMonthStart,
    endDate: lastMonthEnd,
    title: "O'tkan oy",
  },
];
