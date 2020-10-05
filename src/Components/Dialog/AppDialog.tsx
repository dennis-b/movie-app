import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { dialogStoreSelector } from './AppDialogStore';
import AppDialogView from "./AppDialogView";


const noop = () => null;

@inject(dialogStoreSelector)
@observer
class AppDialog extends Component {

    state = {
        open: false,
        content: null,
        opt: {},
    };

    open = (content, opt) => this.setState({ content, open: true, opt });

    close = () => this.setState({ content: noop, open: false });

    render() {
        const { open, content, opt: { style } = { style: {} } } = this.state as any;

        return (
            <AppDialogView
                content={content}
                open={open}
                close={this.close}
                style={style}
            />
        );
    }
}

export default AppDialog;
