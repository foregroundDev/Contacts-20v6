
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnNext = {};	// @button
	var documentEvent = {};	// @document
	var findString = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	btnNext.click = function btnNext_click (event)// @startlock
	{// @endlock
		waf.sources.employee.selectNext();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//alert ("I am loaded.");
	};// @lock

	findString.keyup = function findString_keyup (event)// @startlock
	{// @endlock
		var queryBy = this.getValue() + "*";
		//waf.sources.employee.query("lastName = :1", $$('textField5').getValue() + "*");
		waf.sources.employee.query("lastName == :1 | firstName == :1", queryBy);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnNext", "click", btnNext.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("findString", "keyup", findString.keyup, "WAF");
// @endregion
};// @endlock
