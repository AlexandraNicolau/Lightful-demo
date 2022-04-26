export const calculateIncomeAndSpending = (finances) => {
  let totalIncome = 0;
  let totalSpending = 0;

  finances.forEach((item) => {
    totalIncome = totalIncome + item.income;
    totalSpending = totalSpending + item.spending;
  });

  return {
    income: totalIncome,
    spending: totalSpending,
  };
};

export const calculateGrantsTotal = (grants) => {
  let grantsTotal = 0;

  grants.forEach((grant) => {
    grantsTotal = grantsTotal + grant.amountAwarded;
  });

  return grantsTotal;
};

export const formatData = (charities) => {
  return charities.map((charity) => {
    return {
      contact: {
        name: charity.names[0].value,
        address: charity.contact.address.join(",") + charity.contact.postcode,
        email: charity.contact.email,
        phone: charity.contact.phone,
      },
      logo:
        charity.image && charity.image.logo.small
          ? charity.image.logo.small
          : "",
      finances: calculateIncomeAndSpending(charity.finances),
      funding: {
        grants: charity.funding.grants,
        grantsTotal: calculateGrantsTotal(charity.funding.grants),
      },
    };
  });
};
