function ImageCloud() {

	var MAX_IMAGE_COUNT_X = 10;
	var MAX_IMAGE_COUNT_Y = 5;
	var TILE_PADDING = 5;

	this.init = function() {
		var imageCloud = document.getElementById('imageCloud');
		createImageTiles(imageCloud);
		updateImageTiles();
	};

	function updateImageTiles() {
		var clientWidth = document.body.clientWidth;
		var clientHeight = document.body.clientHeight;

		tileWidth = (clientWidth - (MAX_IMAGE_COUNT_X * 2 * TILE_PADDING) + (2 * TILE_PADDING)) / MAX_IMAGE_COUNT_X;
		tileHeight = (clientHeight - (MAX_IMAGE_COUNT_Y * 2 * TILE_PADDING) + (2 * TILE_PADDING)) / MAX_IMAGE_COUNT_Y;

		var tileCounter = 0;
		for (var i = 0; i < MAX_IMAGE_COUNT_Y; i++) {
			for (var j = 0; j < MAX_IMAGE_COUNT_X; j++) {
				var imageTile = document.getElementById('tile' + tileCounter);
				imageTile.style.top = i * (tileHeight + (2 * TILE_PADDING));
				imageTile.style.left = j * (tileWidth + (2 * TILE_PADDING));
				imageTile.style.width = tileWidth;
				imageTile.style.height = tileHeight;
				tileCounter++;
			};
		};
	}

	/**
	 * Creates all the image tiles.
	 *
	 * @param: The image cloud container.
	 */
	function createImageTiles(imageCloud) {
		var tileCounter = 0;

		for (var i = 0; i < MAX_IMAGE_COUNT_Y; i++) {
			for (var j = 0; j < MAX_IMAGE_COUNT_X; j++) {
				imageCloud.innerHTML += '<div id="tile' + tileCounter + '" class="imageTile"></div>';
				tileCounter++;
			};
		};
	}


}