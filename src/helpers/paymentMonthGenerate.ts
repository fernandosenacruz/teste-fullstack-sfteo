const paymentMonthsGenerate = (numberInstallment: number): string[] => {
  const paymentMonths = [];
  const date = new Date();
  const day = date.getDate();
  let restartYear = 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  for (let i = 0; i < numberInstallment; i+= 1) {
    if (month === 12) {
      month = restartYear;
      year += 1;
      paymentMonths.push(`${day}-${month}-${year}`);
    } else {
      month += 1;
      paymentMonths.push(`${day}-${month}-${year}`);
    }
  }

  return paymentMonths;
};

export default paymentMonthsGenerate;
