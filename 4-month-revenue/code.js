const revenue = require("./revenue");

const totalRevenue = revenue.reduce(
  (sum, stateRevenue) => sum + stateRevenue.revenue,
  0
);

const statePercentages = {};

revenue.forEach((stateRevenue) => {
  const percentage = (stateRevenue.revenue / totalRevenue) * 100;
  statePercentages[stateRevenue.state] = percentage;
});

console.log(statePercentages);
