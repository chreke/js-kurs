const birthdate = (personalnumber) => {
  const match = personalnumber.match(/(\d{2})(\d{2})(\d{2})(-|\+)\d{4}/);
  const year = parseInt(match[1]);
  const month = parseInt(match[2]);
  const day = parseInt(match[3]);
  const sign = match[4];
  const currentYear = new Date().getFullYear();
  let fullYear;
  if ((currentYear % 100) - year < 0) {
    fullYear = 1900 + year;
  } else {
    fullYear = 2000 + year;
  }
  if (sign === "+") {
    fullYear -= 100;
  }
  return new Date(`${fullYear}-${month}-${day}`);
};

module.exports = { birthdate };
