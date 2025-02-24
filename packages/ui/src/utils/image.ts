import { Image } from 'tamagui';

export const getImageAspectRatio = async (
    imageUrl: string
): Promise<number> => {
    return new Promise((resolve, reject) => {
        Image.getSize(
            imageUrl,
            (w, h) => resolve(w / h),
            (error) => reject(error)
        );
    });
};
