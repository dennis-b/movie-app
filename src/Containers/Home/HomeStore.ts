import { action, computed, observable } from "mobx";
import { AppStore } from "../../App/AppStore";
import { Video } from "./models";

export const homeStoreSelector = ({ appStore }: { appStore: AppStore }) => ({ homeStore: appStore.homeStore });

export interface WithHomeStore {
    homeStore: HomeStore
}

export class HomeStore {

    @observable videos: Video[] = [];
    @observable title: string = '';
    @observable year: string = '';
    @observable error: string | null = null;
    @observable total: number = -1;
    @observable page: number = 1;

    rootStore: AppStore;

    constructor(rootStore: AppStore) {
        this.rootStore = rootStore;
    }

    @action
    setData = (videos: Video[]) => {
        this.videos = videos
        console.log('videos', videos.length)
    };

    @action
    setTitle = (title: string) => {
        this.title = title
    }

    @action
    setYear = (year: string) => {
        this.year = year
    };

    @action
    setError = (error: string | null) => {
        this.error = error
    };

    @action
    setTotal = (total: number) => {
        this.total = total
    };

    @action
    setPage = (page: number) => {
        this.page = page
    };

    @action
    reset = () => {
        this.videos = []
        this.total = -1
        this.page = 1;
    };


    @computed
    get hasMore() {
        return this.videos.length < this.total
    };

}
