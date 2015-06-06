function ImageTile(tileId, posX, posY, tileX, tileY, image) {
	this.tileId = tileId;
	this.posX = posX;
	this.posY = posY;
	this.tileX = tileX;
	this.tileY = tileY;
	this.image = image;

	var xOffset = 10;
	var yOffset = 30;

	/**
	 * Returns the image html.
	 *
	 * @param tileWidth: The width of the image tile.
	 * @param tileHeight: The height of the image tile.
	 */
	this.getImage = function(tileWidthParam, tileHeightParam) {
		var tileWidth = Math.ceil(tileWidthParam);
        var tileHeight = Math.ceil(tileHeightParam);
		var tileStyle = getTileStyle(tileWidth, tileHeight);

        var imageWidth = this.image.width;
        var imageHeight = this.image.height;
        var imageStyle = getImageSize(tileX*tileWidth, tileY*tileHeight, imageWidth, imageHeight);

		var html = '';
        html += '<div id="' + this.tileId + '" class="imageTile" style="' + tileStyle + '">';
        html += '	<img style="' + imageStyle + '" src="' + this.image.path + '" alt="title">';
        html += '	<div class="shadow" style="display:none;"></div>';
        html += '</div>';
        return html;
	}

	function getImageSize(tileWidth, tileHeight, imageWidth, imageHeight) {
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
//		return 'width:' + Math.ceil(newWidth) + 'px; height:' + Math.ceil(newHeight) + 'px;';
	}

	/**
	 * Returns the style of the image tile.
	 *
	 * @param tileWidth: The width of the image tile.
	 * @param tileHeight: The height of the image tile.
	 */
	function getTileStyle(tileWidth, tileHeight) {
		var style = 'top:' + (posY * tileHeight) + 'px;';
        style += 'left:' + (posX * tileWidth) + 'px;';
        style += 'width:' + (tileX * tileWidth) + 'px;';
        style += 'height:' + (tileY * tileHeight) + 'px;';
        return style;
	}

	this.addHoverListener = function() {
		var tileObj = jQuery('#' + tileId);

		tileObj.hover(function(e) {
			tileObj.find('.shadow').fadeIn();
			showMetaDialog(e);
		}, function() {
			tileObj.find('.shadow').hide();
			hideMetaDialog();
		});
	}

	function hideMetaDialog() {
		var previewElem = jQuery('#preview');

		if (previewElem !== undefined) {
			previewElem.hide();
		}
	}

	function showMetaDialog(e) {
		var previewElem = jQuery('#preview');

		if (previewElem !== undefined) {
			var html = '';
			html += '<div id="arrow"></div>';
    		
    		html += '<div class="previewThumbnail">';
    		html += '	<img src="' + image.path + '" alt="test">';
    		html += '</div>';

    		html += '<div class="filename">mercedes-benz-cla-class-117.jpg</div>';
    		html += '<table>';
    		html += '<tbody>';
	    	html += '<tr>';
			html += '	<td>Rating:</td>';
	    	html += '	<td class="rating"></td>';
	    	html += '</tr>';
	    	html += '<tr>';
	    	html += '	<td>Filetype:</td>';
	    	html += '	<td>image/jpeg</td>';
	    	html += '</tr>';
	    	html += '<tr>';
	    	html += '	<td>Size:</td>';
	    	html += '	<td>800 x 600</td>';
	    	html +=	'</tr>';
	    	html += '<tr>';
	    	html += '	<td>Filesize:</td>';
	    	html += '	<td>600 KB</td>';
	    	html += '</tr>';
	    	html += '<tr>';
	    	html += '	<td>Tags:</td>';
	    	html += '	<td>W168, Flyer, Brochure</td>';
	    	html += '</tr>';
    		html += '</tbody>';
    		html += '</table>';

    		previewElem.html(html).fadeIn();
    		previewElem
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");

			previewElem.find('.rating').raty({
    			score:3
    		});
		}
	}

}