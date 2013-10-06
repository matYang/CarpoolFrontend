(function () {
	'use strict';

	var assert = function(condition, message) {
		if (condition !== true) {
			throw message || "Assertion failed";
		}
	};

	var locRepA = new UserLocation({'hierarchyNameList': ['Canada', 'Ontario', 'Waterloo', 'MC3022'], 'customDepthIndex': 3});
	var locRepB = new UserLocation().castFromString('Canada_Ontario_Waterloo_MC3022_3');

	assert(locRepA.equals(locRepB), 'UserLocation initialization incorrect');
	assert(locRepA.get('country') === locRepB.get('country'));
	assert(locRepA.get('province') === locRepB.get('province'));
	assert(locRepA.get('city') === locRepB.get('city'));
	assert(locRepA.get('point') === locRepB.get('point'));
	assert(locRepA.get('hierarchyNameList') === locRepB.get('hierarchyNameList'));
	assert(locRepA.get('customDepthIndex') === locRepB.get('customDepthIndex'));
	assert(locRepA.get('customNameList') === locRepB.get('customNameList'));

	var locRepC = new UserLocation(locRepA.toJSON());
	var locRepD = new UserLocation().castFromString(locRepB.toString());
	assert(locRepC.equals(locRepD));
	assert(locRepC.isEquivalentTo(locRepD));


}).call(this);