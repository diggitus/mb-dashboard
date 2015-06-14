function ImageTile(tileId, tilePosX, tilePosY, tileCountX, tileCountY, singleTileWidth, singleTileHeight, imageData) {
	'use strict';

	var SHADOW_CLASS = 'shadow';

	var tileId = 'tile' + tileId;
	var tilePosX = tilePosX;
	var tilePosY = tilePosY;
	var tileCountX = tileCountX;
	var tileCountY = tileCountY;
	var singleTileWidth = Math.ceil(singleTileWidth);
	var singleTileHeight = Math.ceil(singleTileHeight);

	var posX = tilePosX * singleTileWidth;
	var posY = tilePosY * singleTileHeight;
	var tileWidth = tileCountX * singleTileWidth;
	var tileHeight = tileCountY * singleTileHeight;

	var imageData = imageData;
	var metadataDialog = new MetadataDialog(imageData, posX + tileWidth + 5, posY);

	var tileElem;
	var shadowElem;

	/**
	 * Returns the tile ui element.
	 */
	function getUiElement() {
		if (tileElem === undefined) {
			tileElem = jQuery('#' + tileId);
		}
		return tileElem;
	}

	/**
	 * Returns the shadow ui element.
	 */
	function getShadowUiElement() {
		if (shadowElem === undefined) {
			shadowElem = getUiElement().find('.' + SHADOW_CLASS);
		}
		return shadowElem;
	}

	/**
	 * Returns the image html.
	 */
	this.getImage = function() {		
		var tileStyle = getTileStyle();
        var imageStyle = getImageStyle(imageData.width, imageData.height);

		var html = '';
        html += '<div id="' + tileId + '" class="imageTile" style="' + tileStyle + '">';
        html += '	<img style="' + imageStyle + '" src="' + imageData.path + '" alt="' + imageData.path + '">';
        html += '	<div class="' + SHADOW_CLASS + '" style="display:none;"></div>';
        html += '</div>';
        return html;
	}

	/**
	 * Adds a hover event listener to the tile.
	 */
	this.addHoverListener = function() {
		jQuery('#'+tileId).hover(function() {
			getShadowUiElement().fadeIn();
			metadataDialog.show();
		}, function() {
			getShadowUiElement().hide();
			metadataDialog.hide();
		});
	}

	/**
	 * Sets a new image for the tile.
	 *
	 * @param imageDataParam: The new image data.
	 */
	this.setNewImage = function(imageDataParam) {
		imageData = imageDataParam;
		var imageStyle = getImageStyle(imageData.width, imageData.height);

		getUiElement().fadeOut(2000, function() {
			var html = '';
	        html += '<img style="' + imageStyle + '" src="' + imageData.path + '" alt="' + imageData.path + '">';
	        html += '<div class="' + SHADOW_CLASS + '" style="display:none;"></div>';
	        getUiElement().html(html);
	        getUiElement().fadeIn(2000);
		});

		metadataDialog = new MetadataDialog(imageData, posX + tileWidth + 5, posY);
	}

	/**
	 * Returns the style of the image tile.
	 */
	function getTileStyle() {
		var style = 'top:' + posY + 'px;';
        style += 'left:' + posX + 'px;';
        style += 'width:' + tileWidth + 'px;';
        style += 'height:' + tileHeight + 'px;';
        return style;
	}

	/**
	 * Returns the style of the image. Adapts the size and position of the image.
	 */
	function getImageStyle(imageWidth, imageHeight) {
		var newWidth = 0;
		var newHeight = 0;
		var scaleFactor = 0;

		newWidth = tileWidth;
		scaleFactor = newWidth / imageWidth;
		newHeight = imageHeight * scaleFactor;

		if (newHeight < tileHeight) {
			scaleFactor = tileHeight / newHeight;
			newHeight = tileHeight;
			newWidth = newWidth * scaleFactor;
		}

		var marginLeft = Math.ceil((Math.ceil(newWidth) - tileWidth) / 2);
		var marginTop = Math.ceil((Math.ceil(newHeight) - tileHeight) / 2);

		return 'width:' + Math.ceil(newWidth) + 'px; height:' + Math.ceil(newHeight) + 'px; margin-left:-' + marginLeft + 'px; margin-top:-' + marginTop + 'px;';
	}

}