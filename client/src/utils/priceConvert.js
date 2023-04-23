function currencyFormatter(x) {
  let str = String(x)?.replace(/[^\d.-]/g, "");
  let parts = str.split(".");
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$& ");
  if (typeof parts[1] === "string") {
    parts[1] = parts[1].slice(0, 2);
    return parts.join(".");
  }
  return parts[0];
}

const PriceConvert = () => {
  const hasGenerate = (e) => {
    if (!!e || e === 0) {
      // eslint-disable-next-line eqeqeq
      if (e == 0) return "0";
      return currencyFormatter(e);
    } else return "";
  };

  return [hasGenerate];
};

export default PriceConvert;
