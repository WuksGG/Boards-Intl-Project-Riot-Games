(function($,globals,localStorage){
	// Define globally scoped object
	globals.GLOB = {};
	//var localStorage = window.localStorage;
	var region = window.location.href.split('.')[1];
	
	// Initialize Apollo CORS Bridge
	var apolloBaseUrl = `https://apollo.${region}.leagueoflegends.com/apollo`;
	var xhr;
	$.getScript(`${apolloBaseUrl}/cors/easyXDM.min.js`, ()=> {
        xhr = new easyXDM.Rpc({
            remote: `${apolloBaseUrl}/cors/index.html`,
            swf: `${apolloBaseUrl}/easyXDM.swf`,
            remoteHelper: `${apolloBaseUrl}/name.html`
        }, {
            remote: {
                request: {}
            }
        });
	});
	
	// Singular function calls
	if(region === "na"){
		var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/yrc23zHg`;
	} else if(region === "oce"){
		var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Ntey9fRZ`;
	} else if(region === "euw" || region === "eune"){
		// Filter down languages
	}
	
	// Call Mozilla's Feature-detecting localStorage function
	if (storageAvailable('localStorage')) {
		// Is storage available, but groupData not cached?
		if(!localStorage.getItem('groupData')){
			// Begin Apollo API call
			pullUserGroups();
		} else {
			// Skip API call, and go straight to parsing
			var groupData = localStorage.getItem('groupData');
			applyUserGroups(groupData);
		}
	}
	else {
		// localStorage is unavailable; make the API call each time.
		pullUserGroups();
	}
	
	function pullUserGroups(){
		var apiBridgeHandle;
		clearTimeout(apiBridgeHandle);
		if(!xhr){
			apiBridgeHandle = setTimeout(pullUserGroups,0);
			return;
		}
		CORSrequest(requestURI,applyUserGroups);
	}
	
	// Pulls the different groups and associated user ID's within groups
	function applyUserGroups(groupData){
		if (storageAvailable('localStorage')) {
			localStorage.setItem('groupData',groupData);
		}
		// Region specific API calls for user groups
		var groupData = JSON.parse(localStorage.getItem('groupData'));
		groupMemberList = Object.keys(groupData.application.metadata.groupsUser);
		groupMemberData = groupData.application.metadata.groupsUser;
		console.log(groupMemberList);
		console.log(groupMemberData);
		localStorage.setItem('groupMemberList',groupMemberList);
		localStorage.setItem('groupMemberData',groupMemberData);
	}
	
	// Define CORS request template
	function CORSrequest(requestURI,callback){
		console.log(`CORSrequest is ${requestURI}`);
		xhr.request({
			url: requestURI,
			method: 'GET',
		}, ({ status, data }) => {
			// Success!
			callback(data);
		}, ({ status, data }) => {
			// Error callback //
			console.log(status);
			console.log(data);
		});
	}
	
	// Mozilla's Feature-detecting localStorage function
	// From: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
	function storageAvailable(type) {
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				storage.length !== 0;
		}
	}
	
}(jQuery,this,this.localStorage));

