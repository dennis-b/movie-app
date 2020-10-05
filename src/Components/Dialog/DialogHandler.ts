let dialogRef;

export function setDialog(dialog) {
    dialogRef = dialog;
}

export function openDialog(content, opt?) {
    dialogRef.open(content, opt)
}

export function closeDialog() {
    dialogRef.close()
}
