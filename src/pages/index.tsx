import { ImageList, ImageListProps } from '@/components/ImageList/ImageList';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import car1Img from 'public/assets/car1.jpg';
import car2Img from 'public/assets/car2.jpg';
import car3Img from 'public/assets/car3.jpg';

const inter = Inter({ subsets: ['latin'] });
const size = {
    width: 100,
    height: 100,
};

export default function Home() {
    const imagesList: ImageListProps['nextImages'] = [
        { src: car1Img, alt: 'car1', width: size.width, height: size.height },
        { src: car2Img, alt: 'car2', width: size.width, height: size.height },
        { src: car3Img, alt: 'car3', width: size.width, height: size.height },
        { src: car3Img, alt: 'car3', width: size.width, height: size.height },
        { src: car3Img, alt: 'car3', width: size.width, height: size.height },
        { src: car3Img, alt: 'car3', width: size.width, height: size.height },
    ];

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <ImageList nextImages={imagesList} className={''} maxShow={2} />
            </main>
        </>
    );
}
