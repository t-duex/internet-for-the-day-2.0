import { getDataFromReddit, extractVideoLinksFromJsonData, constructPlaylistUrl } from '../lib/reddit-data';

export async function getServerSideProps() {
    return await getDataFromReddit().then((data) => {
        const videoLinks = extractVideoLinksFromJsonData(data);
        const videoString = constructPlaylistUrl(videoLinks);
        
        return { props: { playlistUrl: videoString }};
    });
}

export default function VideoPlayer({ playlistUrl }) {
    return (
        <>
            <iframe
                className='videoPlayer'
                width='420'
                height='315'
                src={playlistUrl}
            ></iframe>
            <style jsx>{`
                .videoPlayer {
                    position: fixed;
                    right: 0;
                    bottom: 0;
                    min-width: 100%;
                    min-height: 100%;
                    width: auto;
                    height: auto;
                    z-index: -100;
                }
            `}</style>
        </>
    );
}