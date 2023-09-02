import Album from "./Album";
export default class TrackItem {
    constructor(added_at, track) {
      this.added_at = added_at;
      this.track = new Album(track.album.albumType, track.album.totalTracks, track.album.availableMarkets, track.album.externalUrls, track.album.href, track.album.id, track.album.images, track.album.name, track.album.releaseDate, track.album.releaseDatePrecision, track.album.restrictions, track.album.artists);
    }
  }
