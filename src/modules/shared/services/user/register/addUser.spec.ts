import { axiosClient } from "@/types/shared/infrastructures/http/AxiosClient";

jest.mock('@infrastructure/http/AxiosClient');
const { post: axiosClientPost } = axiosClient as jest.Mocked<typeof axiosClient>;

import { addUser } from './addUser';
import { RegisterUserRequest } from "@/types/shared/types/user/register";
import { REGISTER } from "../../../constants/apiRoutes";

const expectedRegisterUserRequestParams: RegisterUserRequest = {
    // ToDo: file a mock object
};

describe('addUser', () => {
    it('should set the body correctly on the axios request', async () => {
        axiosClientPost.mockResolvedValue(new Error());

        await addUser(expectedRegisterUserRequestParams);

        expect(axiosClientPost).toHaveBeenCalledWith(REGISTER, expectedRegisterUserRequestParams);
    });

    it('should throw an unhandled error', async () => {
        axiosClientPost.mockRejectedValue(new Error('An error occurred'));

        await expect(addUser(expectedRegisterUserRequestParams)).rejects.toThrow('An error occurred');
    });
});
