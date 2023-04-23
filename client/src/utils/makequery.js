export default function makeQueryString(params) {
  let queryString = "";
  Object.keys(params).forEach((key) => {
    if (
      params[key] !== null &&
      params[key] !== "" &&
      params[key] !== undefined
    ) {
      let value = params[key];
      if (Array.isArray(value)) {
        value.forEach((str) => {
          queryString = `${queryString + key}=${str}&`;
        });
      } else if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        queryString = `${queryString + key}=${value}&`;
      }
    }
  });
  queryString = queryString.slice(0, -1);
  queryString = queryString ? `?${queryString}` : queryString;

  return [queryString];
}
