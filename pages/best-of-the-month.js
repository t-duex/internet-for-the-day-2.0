import { getBestOfTheMonthDataFromReddit, extractVideoLinksFromJsonData, constructPlaylistUrl } from '../lib/reddit-data';
import videoPlayer from '../styles/videoPlayer.module.css';

export async function getServerSideProps() {
    const data = await getBestOfTheMonthDataFromReddit();
    const videoLinks = extractVideoLinksFromJsonData(data);
    const videoString = constructPlaylistUrl(videoLinks);
    
    return { props: { playlistUrl: videoString }};
}

export default function BestOfTheMonth({ playlistUrl }) {
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