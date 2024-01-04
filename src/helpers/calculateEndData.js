function calculateEndDate(startDate, planType , period) {
    const start = new Date(startDate);
    
    if (planType === 'Monthly') {
      start.setMonth(start.getMonth() + period);
    } else if (planType === 'Yearly') {
      start.setFullYear(start.getFullYear() + period);
    }
    console.log(start.toLocaleString());
    return start.toLocaleString()
  }
  
  module.exports = calculateEndDate