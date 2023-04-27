export const arrayToSegment = (segmentCode: string, values: string[]) =>
  [segmentCode, ...values].join('|');
