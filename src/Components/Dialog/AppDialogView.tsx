import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from '@material-ui/core/styles';

const CustomDialogContent = ({ body: Component }) => (
    <DialogContent>
        <Component />
    </DialogContent>
);

export const defaultStyle = {
    width: '90%',
    margin: 0,
    maxWidth: '50%',
    maxHeight: '50vh',
    minHeight: '40vh',
    top: '-50px',
    backgroundColor: '#0D1739'
};

const useStyles = ({ paper }) => makeStyles({ paper })();


function AppDialogView({ content, open, close, style = {} }) {

    const dialogStyle = { paper: { ...defaultStyle, ...style } };

    const classes = useStyles(dialogStyle);
    return (
        <>
            <Dialog
                open={open}
                onClose={close}
                classes={{ paper: classes.paper }}
            >
                <CustomDialogContent body={content} />
            </Dialog>
        </>
    )

}

export default AppDialogView;
