function MetadataDialog(imageData, posX, posY) {
    'use strict';
    var metadataElem;
    var html;

    init();

    function init() {
        html = '';
        html += '<div id="arrow"></div>';

        html += '<div class="previewThumbnail">';

        if (imageData.path === 'images/a45-amg.jpg') {
            html += '<video width="185" height="100" autoplay>';
            html += '<source src="images/movie.mp4" type="video/mp4">';
            html += '</video>';
        } else {
            html += '	<img src="' + imageData.path + '" alt="test">';
        }
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
        html += '</tr>';
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
    }

    /**
     * Returns the metadata dialog ui element.
     */
    function getUiElement() {
        if (metadataElem === undefined) {
            metadataElem = jQuery('#preview');
        }
        return metadataElem;
    }

    /**
     * Shows the metadata dialog.
     */
    this.show = function() {
        getUiElement().html(html);
        getUiElement()
            .css("top", posY + "px")
            .css("left", posX + "px");
        getUiElement().find('.rating').raty({
            score: 3
        });
        getUiElement().fadeIn();
    }

    /**
     * Hides the metadata dialog.
     */
    this.hide = function() {
        getUiElement().hide();
    }

}
