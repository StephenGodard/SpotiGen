import Image from "./Image";
import ExternalUrls from "./ExternalUrls";
import Artist from "./Artist";
import Restrictions from "./Restrictions";

export default class Album {
    constructor(albumType, totalTracks, availableMarkets, externalUrls, href, id, images, name, releaseDate, releaseDatePrecision, restrictions, artists) {
        this.albumType = albumType;
        this.totalTracks = totalTracks;
        this.availableMarkets = availableMarkets; // This is an array
        this.externalUrls = new ExternalUrls(externalUrls.spotify);
        this.href = href;
        this.id = id;
        this.images = images.map(img => new Image(img.url, img.height, img.width)); // This is an array
        this.name = name;
        this.releaseDate = releaseDate;
        this.releaseDatePrecision = releaseDatePrecision;
        this.restrictions = new Restrictions(restrictions.reason);
        this.artists = artists.map(artist => new Artist(artist.externalUrls, artist.href, artist.id, artist.name, artist.type, artist.uri)); // This is an array
    }
}
