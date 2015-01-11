function open (tab){
	chrome.tabs.create({url:"http://forum.bodybuilding.com/forumdisplay.php?f=19"});
}
chrome.browserAction.onClicked.addListener(open);
