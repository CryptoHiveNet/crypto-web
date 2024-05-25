import {
    RegisterUserRequest
} from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';
import { axiosClient } from '@/types/shared/infrastructures/http/AxiosClient';
import { GenderType } from '@/types/shared/types/user/userProfile';

import { REGISTER } from '../../../constants/apiRoutes';
import { addUser } from './addUser';

jest.mock('@/types/shared/infrastructures/http/AxiosClient');
const { post: axiosClientPost } = axiosClient as jest.Mocked<
    typeof axiosClient
>;

const expectedRegisterUserRequestParams: RegisterUserRequest = {
    // ToDo: file a mock object
    loginUserName: 'sepi',
    email: 'sep@gmail.com',
    firstName: 'sep',
    lastName: 'soh',
    gender: GenderType.Male,
    dateOfBirth: new Date('1997-03-09'),
    phoneNumber: '9369678828',
    password: 'Sep@1234',
    phoneNumberPrefix: '+98',
};

describe('addUser', () => {
    it('should set the body correctly on the axios request', async () => {
        axiosClientPost.mockResolvedValue(new Error());

        await addUser(expectedRegisterUserRequestParams);

        expect(axiosClientPost).toHaveBeenCalledWith(
            REGISTER,
            expectedRegisterUserRequestParams,
        );
    });

    it('should throw an unhandled error', async () => {
        axiosClientPost.mockRejectedValue(new Error('An error occurred'));

        await expect(
            addUser(expectedRegisterUserRequestParams),
        ).rejects.toThrow('An error occurred');
    });
});
