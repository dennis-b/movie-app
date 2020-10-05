import { HomeStore } from "../Containers/Home/HomeStore";

export class AppStore {
    homeStore: HomeStore;

    constructor() {
        this.homeStore = new HomeStore(this);
    }
}
