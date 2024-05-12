import { axiosClient } from "@/types/shared/infrastructures/http/AxiosClient";

jest.mock('@infrastructure/http/AxiosClient');
const { post: axiosClientPost } = axiosClient as jest.Mocked<typeof axiosClient>;

describe('addUser', () => {
    it('should set the body correctly on the axios request', async () => {
        axiosClientPost.mockResolvedValue(new Error());

        await applyPurchasePoints(expectedApplyPurchasePoints);

        expect(axiosClientPost).toHaveBeenCalledWith(LOYALTY_PURCHASE, expectedApplyPurchasePoints);
    });

    it('should throw an unhandled error', async () => {
        axiosClientPost.mockRejectedValue(new Error('An error occurred'));

        await expect(applyPurchasePoints(expectedApplyPurchasePoints)).rejects.toThrow('An error occurred');
    });
});
