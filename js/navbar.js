function Navigation() {
	
	var NAVBAR_ID = 'navbar';
    var NAVBAR_HEIGHT = 60;

	this.navbarElem;

	/**
	 * initializes navigation.
	 */
	this.init = function() {
		this.navbarElem = document.getElementById(NAVBAR_ID);

        if (this.navbarElem !== undefined) {
            this.navbarElem.style.height = NAVBAR_HEIGHT;
        }
	};

	/**
	 * Getter for height.
	 */
	this.getHeight = function() {
		return NAVBAR_HEIGHT;
	};

}