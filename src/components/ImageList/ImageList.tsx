import React from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

export type ImageListProps = {
    nextImages: Array<ImageProps & { imageId?: string }>;
    maxShow?: number;
    className: string;
};

export const ImageList: React.FC<ImageListProps> = (props) => {
    const { nextImages, maxShow = -1, className } = props;

    const rootClassName = classNames('CP_ImageList', className);

    const remainingNumber = maxShow >= 0 ? nextImages.length - maxShow : -1;

    const limitImagesListShowed = () => {
        if (maxShow === -1) return nextImages;
        return nextImages.slice(0, maxShow);
    };

    const renderImagesList = () => {
        const limitedList = limitImagesListShowed();

        return limitedList.map((imageProp, index) => {
            const id = imageProp.imageId;
            const alt = imageProp.alt;
            const key = id == undefined ? index : id;
            if (isLastElementInArray(limitedList, index)) {
                return (
                    <ImageWrapper isLast remainingNumber={remainingNumber} key={key}>
                        <Image {...imageProp} alt={alt} />
                    </ImageWrapper>
                );
            }
            return (
                <ImageWrapper key={key}>
                    <Image {...imageProp} alt={alt} />
                </ImageWrapper>
            );
        });
    };

    return <div className={rootClassName}>{renderImagesList()}</div>;
};

type ImageWrapperProps = {
    children: JSX.Element;
    remainingNumber?: number;
    isLast?: boolean;
};

export const ImageWrapper: React.FC<ImageWrapperProps> = (props) => {
    const { children, isLast, remainingNumber } = props;

    const wrapperClassName = classNames('CP_ImageList_ImageWrapper', {
        'CP_is-last-image': isLast,
    });

    const displayRemainingNumber = () => {
        if (isLast && remainingNumber && remainingNumber > 0) {
            return <div className='CP_ImageList_RemainingNumber'>+{remainingNumber}</div>;
        }
        return <></>;
    };

    return (
        <div className={wrapperClassName}>
            <>
                {children}
                {displayRemainingNumber()}
            </>
        </div>
    );
};

const isLastElementInArray = <T,>(array: Array<T>, index: number) => {
    return array.length === index + 1;
};
