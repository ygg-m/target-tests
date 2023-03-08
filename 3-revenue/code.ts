interface RevenueData {
  day: string;
  revenue: number;
}

const getRevenueStats = (revenueData: RevenueData[]) => {
  // Remove days without revenue
  const validRevenueData = revenueData.filter((data) => data.revenue !== 0);

  // Calculate the minimum revenue
  const minRevenue = Math.min(...validRevenueData.map((data) => data.revenue));

  // Calculate the maximum revenue
  const maxRevenue = Math.max(...validRevenueData.map((data) => data.revenue));

  // Calculate the average revenue
  const totalRevenue = validRevenueData.reduce(
    (sum, data) => sum + data.revenue,
    0
  );
  const avgRevenue = totalRevenue / validRevenueData.length;

  // Calculate the number of days with revenue higher than the average
  const aboveAvgRevenueDays = validRevenueData.filter(
    (data) => data.revenue > avgRevenue
  ).length;

  return {
    minRevenue,
    maxRevenue,
    aboveAvgRevenueDays,
  };
};
