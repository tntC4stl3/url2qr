$(document).ready(function(){
	chrome.tabs.getSelected(null,function(tab) {
    	$("#qrcode").qrcode(tab.url);
	});	
});