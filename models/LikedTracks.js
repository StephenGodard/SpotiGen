import TrackItem from "./TrackItem";
export default class LikedTracks {
    constructor(href, items, limit, next, offset, previous, total) {
        this.href = href;
        this.items = items.map(item => new TrackItem(item.added_at, item.track));
        this.limit = limit;
        this.next = next;
        this.offset = offset;
        this.previous = previous;
        this.total = total;
    }
}
