import { HL7DataField } from '@core/store/hl7-data';

export type ProfileRecordStatus = 'signed' | 'pending';
export interface ProfileRecord {
  time: Date;
  status: ProfileRecordStatus;
  txnId: string;
  assetId: string;
  fields: {
    metadata: HL7DataField;
    value: string;
  }[];
}
export interface ProfileState {
  error: string | null;
  adding: boolean;
  records: { [key: string]: ProfileRecord[] };
}
