export interface UserDetail
{
    id: string;
    fullName: string;
    email: string;
    roles: [];
    phoneNumber: string;
    twoFactorEnable: true;
    phoneNumberConfirmed: true;
    accessFailedCount: 0;
}