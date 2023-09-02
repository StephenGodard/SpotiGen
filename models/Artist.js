import ExternalUrls from "./ExternalUrls";
export default class Artist {
    constructor(externalUrls, href, id, name, type, uri) {
        this.externalUrls = new ExternalUrls(externalUrls.spotify);
        this.href = href;
        this.id = id;
        this.name = name;
        this.type = type;
        this.uri = uri;
    }
}
