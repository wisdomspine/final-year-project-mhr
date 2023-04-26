export interface HL7DataField {
  field: string;
  description: string;
  segmentCode: string;
}

export interface HL7DataSegment {
  segment: string;
  title: string;
  description: string;
  fields: HL7DataField[];
}

export interface HL7Database {
  [key: string]: HL7DataSegment;
}
