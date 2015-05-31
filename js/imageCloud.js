function ImageCloud() {

    var NAVBAR_ID = 'navbar';
    var NAVBAR_HEIGHT = 60;
    var IMAGE_CLOUD_ID = 'imageCloud';

    var MAX_IMAGE_COUNT_X = 20;
    var MAX_IMAGE_COUNT_Y = 10;

    var images;
    var clientWidth;
    var clientHeight;
    var tileWidth;
    var tileHeight;

    var tileCounter = 0;

    /**
     * Initializes Image Cloud.
     */
    this.init = function() {
        var imageCloud = document.getElementById(IMAGE_CLOUD_ID);
        clientWidth = document.body.clientWidth;
        clientHeight = document.body.clientHeight;
        tileWidth = clientWidth / MAX_IMAGE_COUNT_X;
        tileHeight = (clientHeight - NAVBAR_HEIGHT) / MAX_IMAGE_COUNT_Y;

        imageCloud.style.height = clientHeight - NAVBAR_HEIGHT;

        initNavbar();
        initGrid();
        updateImageTiles();

        setInterval(function() {
            changeImage();
        }, 6000);
    };

    /** 
     * Initializes the top navigation bar.
     */
    function initNavbar() {
        var navbar = document.getElementById(NAVBAR_ID);

        if (navbar !== undefined) {
            navbar.style.height = NAVBAR_HEIGHT;
        }
    }

    /**
     * Initializes the image cloud grid.
     */
    function initGrid() {
        images = new Array(MAX_IMAGE_COUNT_Y);

        for (var y = 0; y < images.length; y++) {
            images[y] = new Array(MAX_IMAGE_COUNT_X);

            for (var x = 0; x < images[y].length; x++) {
                images[y][x] = 0;
            }
        }
    }

    function changeImage() {
        var tile = jQuery('#tile' + Math.floor(Math.random() * 50));
        var imgObj = tile.find('img');
        imgObj.fadeOut(2000, function() {
            imgObj.attr('src', imagePaths.images[Math.floor(Math.random() * imagePaths.images.length)].path);
            imgObj.fadeIn(2000);
        });
    }

    function updateImageTiles() {
        insertImage(6, 1, 7, 5);
        insertImage(2, 4, 3, 5);
        insertImage(10, 6, 5, 3);
        insertImage(0, 0, 3, 2);

        while (isSpaceAvailable(3, 2)) {
            insertImage(0, 0, 3, 2);
        }

        while (isSpaceAvailable(1, 1)) {
            insertImage(0, 0, 1, 1);
        }
    }

    function isSpaceAvailable(tileX, tileY) {
        for (var y = 0; y < images.length; y++) {
            for (var x = 0; x < images[y].length; x++) {
                if (isSpace(x, y, tileX, tileY)) {
                    return true;
                }
            }
        }
        return false;
    }

    function insertImage(posX, posY, tileX, tileY) {
        for (var y = posY; y < MAX_IMAGE_COUNT_Y; y++) {
            for (var x = posX; x < MAX_IMAGE_COUNT_X; x++) {

                if (isSpace(x, y, tileX, tileY)) {
                    markTiles(x, y, tileX, tileY);
                    insertContainer(x, y, tileX, tileY);
                    return;
                }
            }
        }
    }

    function insertContainer(posX, posY, tileX, tileY) {
        tileWidth = Math.ceil(tileWidth);
        tileHeight = Math.ceil(tileHeight);

        var style = 'top:' + (posY * tileHeight) + 'px;';
        style += 'left:' + (posX * tileWidth) + 'px;';
        style += 'width:' + (tileX * tileWidth) + 'px;';
        style += 'height:' + (tileY * tileHeight) + 'px;';

        var imageCloud = document.getElementById('imageCloud');

        var html = '';
        html += '<div id="tile' + tileCounter + '" class="imageTile" style="' + style + '">';
        html += '	<img src="' + getImagePath() + '" alt="title">';
        html += '</div>';
        imageCloud.innerHTML += html;
        tileCounter++;
    }

    function getImagePath() {
        if (imagePaths !== undefined && imagePaths.images !== undefined && imagePaths.images.length > 0) {
            var randomImage = Math.floor(Math.random() * imagePaths.images.length);
            return imagePaths.images[randomImage].path;
        }
    }

    function markTiles(posX, posY, tileX, tileY) {
        for (var y = posY; y < (posY + tileY) && y < MAX_IMAGE_COUNT_Y; y++) {
            for (var x = posX; x < (posX + tileX) && x < MAX_IMAGE_COUNT_X; x++) {
                images[y][x] = 1;
            }
        }
    }

    function isSpace(posX, posY, tileX, tileY) {
        for (var y = posY; y < (posY + tileY); y++) {
            for (var x = posX; x < (posX + tileX); x++) {
                if (x === MAX_IMAGE_COUNT_X || y === MAX_IMAGE_COUNT_Y) {
                    return false;
                }

                if (images[y][x] === undefined || images[y][x] === 1) {
                    return false;
                }
            }
        }
        return true;
    }


}
