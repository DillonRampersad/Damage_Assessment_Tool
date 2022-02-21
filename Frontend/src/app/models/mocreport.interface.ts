export interface MOCReport{
    _id: string;
    facilityName: string;
    MoCDescription: string;
    MoCReportDateTime: Date;
    MoCDisasterLocation: Array<number>;
    mocImage: File;
}