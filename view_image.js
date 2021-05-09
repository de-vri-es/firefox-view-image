const view_image_id = browser.menus.create(
	{
		title: browser.i18n.getMessage("view-image"),
		contexts: ["image"],
	},
	() => {
		if (browser.runtime.lastError) {
			console.error("Failed to create \"View image\" context menu item:", browser.runtime.lastError.message);
		}
	}
);

browser.menus.onClicked.addListener(async (info, tab) => {
	if (info.menuItemId == view_image_id) {
		if (info.button == 1 || info.modifiers.includes("Ctrl")) {
			await browser.tabs.create({
				url: info.srcUrl,
				active: false,
				openerTabId: tab.id,
				windowId: tab.windowId,
			});
		} else if (info.modifiers.includes("Shift")) {
			await browser.windows.create({
				url: info.srcUrl,
			});
		} else {
			await browser.tabs.update(tab.id, {url: info.srcUrl});
		}
	}
})
