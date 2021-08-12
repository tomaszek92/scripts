(function () {
  const rows = document.querySelectorAll('table > tbody > tr')

  const obj = Array.from(rows)
    .reduce((result, current, index, array) => {
      const year = document.querySelector(`table > tbody > tr:nth-of-type(${index + 1}) > td:nth-of-type(1)`).textContent.trim();
      const pristineValue = document.querySelector(`table > tbody > tr:nth-of-type(${index + 1}) > td:nth-of-type(3)`).textContent;
      const value = parseFloat(pristineValue.substring(1, pristineValue.length - 1));
      if (year <= 2010) {
        return result;
      }
      if (result[year]) {
        result[year] += value;
      } else {
        result[year] = value;
      }
      return result;
    }, {})

  return Object
    .keys(obj)
    .map((year) => obj[year] / 100);
})()
