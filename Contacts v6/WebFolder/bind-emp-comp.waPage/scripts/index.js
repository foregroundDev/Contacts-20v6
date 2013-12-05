
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		alert("Hi");
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//alert("Clicked");
		sources.employee.company.set(sources.company);
		//sources.employee.company = sources.company;
		sources.employee.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
