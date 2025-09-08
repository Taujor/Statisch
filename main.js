const topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}

const cards = document.querySelectorAll('.mdc-card__primary-action');
for (const card of cards) {
    mdc.ripple.MDCRipple.attachTo(card);
}

const iconButtons = document.querySelectorAll('.mdc-icon-button');
for (const iconButton of iconButtons) {
    const ripple = new mdc.ripple.MDCRipple(iconButton);
    ripple.unbounded = true;
}

// Dialog logic
const dialogs = document.querySelectorAll('.mdc-dialog');
for (const dialog of dialogs) {
    const mdcDialog = new mdc.dialog.MDCDialog(dialog);
    const buttons = document.querySelectorAll(`[data-dialog-id=${dialog.id}]`);
    for (const button of buttons) {
        button.addEventListener('click', () => {
            mdcDialog.open();
        });
    }
}
