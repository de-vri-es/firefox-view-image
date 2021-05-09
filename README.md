# View image

This Firefox extension restores the `View image` context menu item for Firefox.
It was replaced in Firefox 88.0 with `Open image in new tab`,
but as the name implies that option always opens the image in a new tab.

The `View image` context menu item added by this extension mimicks the old behaviour:

* Clicking with the middle mouse or with `Ctrl` pressed opens the image in a new (inactive) tab.
* Clicking with `Shift` pressed opens the image in a new window.
* Left click (or anything not covered above) opens the image in the current tab.

If you remap mouse buttons (for example for a left-handed mouse), the mappings above automatically follow.

# Why another one?

There are already a number of add-ons to restore the `View image` option.
However, I did not find one that is open source, requires minimal permissions and doesn't break on sites with strict content security policies.
This add-on only requests the `menus` permission, which is needed to add a context menu item.
