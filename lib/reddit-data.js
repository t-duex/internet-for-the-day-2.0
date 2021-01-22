export async function getDataFromReddit() {
    const data = await fetch('https://www.reddit.com/r/youtubehaiku.json');
    return await data.json();
}

export async function getExtendedDataFromReddit(after) {
    const data = await fetch(`https://www.reddit.com/r/youtubehaiku.json?count=25&after=${after}`);
    return await data.json();
}

export async function getBestOfTheMonthDataFromReddit() {
    const data = await fetch('https://www.reddit.com/r/youtubehaiku/top.json?t=month');
    return await data.json();
}

export function extractVideoLinksFromJsonData(data) {
    return data.data.children.map((child) => {
        return extractLinkFromMediaContent(child.data.media_embed.content);
    }).filter((link) => link !== null);
}

export function constructPlaylistUrl(videoLinks) {
    const restOfLinks = videoLinks.slice(1, videoLinks.length - 1);
    const initialPlaylistUrl = 'https://www.youtube.com/embed/' + videoLinks[0] + '?autoplay=1&playlist=';
    return restOfLinks.reduce((playlistUrl, link) => {
        return playlistUrl + link + ',';
    }, initialPlaylistUrl);
}

function extractLinkFromMediaContent(mediaContent) {
    if (mediaContent && mediaContent.includes('youtu')) {
        const firstSplit = mediaContent.split('/embed/');
        if (firstSplit[1]) {
            return firstSplit[1].split('?')[0];
        }
    }
    return null;
}