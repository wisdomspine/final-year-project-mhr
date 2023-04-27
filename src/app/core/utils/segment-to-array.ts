export const segmentToArray = function (segment: string) {
  const [code, ...values] = segment.split(/\|/);
  return [code, values];
};
