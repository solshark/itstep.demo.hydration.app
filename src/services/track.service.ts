import cuid from "cuid";
export interface Track {
  id: string;
  volume: number;
  timestamp: Date;
}
export class TrackService {
  private static instance: TrackService;
  #STORAGE: Track[] = [];
  constructor() {
    if (TrackService.instance) {
      return TrackService.instance;
    }
    TrackService.instance = this;
  }
  all() {
    return this.#STORAGE;
  }
  add(volume: number): string {
    const id = cuid();
    this.#STORAGE.push({ id, volume, timestamp: new Date() });
    return id;
  }

  get currentVolume() {
    return this.#STORAGE.reduce((acc, item) => acc + item.volume, 0);
  }
}
