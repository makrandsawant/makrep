sap.ui.jsview("helloworld.Hello", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf helloworld.Hello
	*/ 
	getControllerName : function() {
		return "helloworld.Hello";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf helloworld.Hello
	*/ 
	createContent : function(oController) {
		var aControls = [];
	       var oButton = new sap.ui.commons.Button({
	         id : this.createId("MyButton"),
	         text : "Hello JS View"
	       });
	       aControls.push(oButton.attachPress(oController.doIt));
	       return aControls;
	}

});
