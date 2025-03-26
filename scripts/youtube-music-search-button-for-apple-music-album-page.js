function addYouTubeMusicSearchButtonToEachTrack() {
    let songsListRowNodes = getSongsListRowNodes();
    for (let songsListRowNode of songsListRowNodes) {
        tryToAddYouTubeMusicSearchButton(songsListRowNode);
    }
}

function tryToAddYouTubeMusicSearchButton(songsListRowNode) {
    if (shouldAddYouTubeMusicSearchButton(songsListRowNode)) {
        let youTubeMusicSearchButton = createYouTubeMusicSearchButton(songsListRowNode);
        songsListRowNode.appendChild(youTubeMusicSearchButton);
    }
}

function getSongsListRowNodes() {
    return document.querySelectorAll('.songs-list > .songs-list-row') || [];
}

function shouldAddYouTubeMusicSearchButton(songsListRowNode) {
    return !songsListRowNode.querySelector('.youtube-music-search-button');
}

function createYouTubeMusicSearchButton(songsListRowNode) {
    let youTubeMusicSearchButton = document.createElement('button');
    youTubeMusicSearchButton.className = 'youtube-music-search-button';
    youTubeMusicSearchButton.innerText = 'Search for Track on YouTube Music';

    youTubeMusicSearchButton.onclick = function searchForTrackOnYouTubeMusic() {
        let artistNameNode = document.querySelector('.headings__subtitles > a');
        let trackTitleNode = songsListRowNode.querySelector('.songs-list-row__song-name');

        if (trackTitleNode && artistNameNode) {
            let artistName = artistNameNode.innerText;
            let trackTitle = trackTitleNode.innerText;
            window.open('https://music.youtube.com/search?q=' + artistName + ' - ' + trackTitle);
        }
    };

    return youTubeMusicSearchButton;
}

let bodyNode = document.getElementsByTagName('body')[0];
let mutationObserverConfiguration = { attributes: true, subtree: true };
let mutationObserver = new MutationObserver(addYouTubeMusicSearchButtonToEachTrack);
mutationObserver.observe(bodyNode, mutationObserverConfiguration);