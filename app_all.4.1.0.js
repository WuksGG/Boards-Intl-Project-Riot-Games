(function($,globals){
	// Define globally scoped object
	globals.GLOB = {};
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
	pullUserGroups();
	
	
	// Pulls the different groups and associated user ID's within groups
	function pullUserGroups(){
		// Ensure API call completion before continuing
		var apiBridgeHandle;
		clearTimeout(apiBridgeHandle);
		if(!xhr){
			apiBridgeHandle = setTimeout(pullUserGroups,0);
			return;
		}
		
		// Region specific API calls for user groups
		if(region === "na"){
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/yrc23zHg`;
			var myObj = CORSrequest(requestURI);
		} else if(region === "oce"){
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Ntey9fRZ`;
			var myObj = CORSrequest(requestURI);
		} else if(region === "euw" || region === "eune"){
			// Filter down languages
		}
			
	}
	
	// Define CORS request template
	function CORSrequest(){
		xhr.request({
			url: apiVolunteers,
			method: 'GET',
		}, ({ status, data }) => {
			// Success!
			var myObj = JSON.parse(data);
			return myObj;
		}, ({ status, data }) => {
			// Error callback //
			console.log(status);
			console.log(data);
		});
	}
	
}(jQuery,this));

