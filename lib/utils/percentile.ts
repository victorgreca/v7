export function getColorClass(percentile: number | string) {
  const numericPercentile = typeof percentile === 'string' ? parseFloat(percentile) : percentile;
  
  if (numericPercentile <= 5) return 'bg-[#7CD992]';     // Bright green
  if (numericPercentile <= 10) return 'bg-[#98EBA9]';    // Light green
  if (numericPercentile <= 25) return 'bg-[#FFE17F]';    // Yellow
  if (numericPercentile <= 50) return 'bg-[#FFF3B8]';    // Light yellow
  if (numericPercentile <= 75) return 'bg-[#FFB98A]';    // Light orange
  if (numericPercentile <= 90) return 'bg-[#F89B5E]';    // Orange
  return 'bg-[#F48B8B]';                                 // Red
}

export function getPlaceholder(percentile: number, type: 'prevalence' | 'los' | 'readmission') {
  const values = {
    prevalence: [25.1, 27.9, 31.9, 35.6, 39.1, 43.0, 45.8],
    los: [3.2, 3.6, 4.4, 5.2, 6.0, 7.0, 7.7],
    readmission: [17, 19, 22, 25, 29, 33, 36]
  };
  const index = [5, 10, 25, 50, 75, 90, 95].indexOf(percentile);
  return values[type][index].toString();
}