import { action, observable } from 'mobx';

export const dialogStoreSelector = ({ appStore }) => ({ dialogStore: appStore.dialogStore });

export class AppDialogStore {

    @observable show = false;
    rootStore;
    title = '';
    body = '';
    actions: any;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    setTitle(title: string) {
        this.title = title;
        return this;
    }

    setBody(body: any) {
        this.body = body;
        return this;
    }

    setActions(actions: any) {
        this.actions = actions;
        return this;
    }

    @action
    open() {
        this.show = true;
    }

    @action
    close() {
        this.show = false;
        setTimeout(this.clear.bind(this), 0)

    }

    clear() {
        this.title = '';
        this.body = '';
        this.actions = null;
    }
}
