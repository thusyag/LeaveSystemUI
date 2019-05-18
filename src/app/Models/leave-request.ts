export class LeaveRequest {
    id: number;
    userId: string;
    leaveTypeId: number;
    startDate: Date;
    endDate: Date;
    reason: string;
    leaveDays: number;
    medicalReports: string;
    statusId: number;

}
