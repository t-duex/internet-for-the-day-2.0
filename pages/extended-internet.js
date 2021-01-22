import { getDataFromReddit, getExtendedDataFromReddit, extractVideoLinksFromJsonData, constructPlaylistUrl } from '../lib/reddit-data';
import videoPlayer from '../styles/videoPlayer.module.css';

export async function getServerSideProps() {
    const data = await getDataFromReddit();
    const extendedData = await getExtendedDataFromReddit(data.data.after);
    const videoLinks = extractVideoLinksFromJsonData(data).concat(extractVideoLinksFromJsonData(extendedData));
    const videoString = constructPlaylistUrl(videoLinks);
        
    return { props: { playlistUrl: videoString }};
}

export default function ExtendedInternet({ playlistUrl }) {
    return (
        <>
            <iframe
                className={videoPlayer.fullScreen}
                width='420'
                height='315'
                src={playlistUrl}
            ></iframe>
        </>
    );
}