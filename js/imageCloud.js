function ImageCloud() {
	'use strict';

    var IMAGE_CLOUD_ID = 'imageCloud';

    var MAX_IMAGE_COUNT_X = 20;
    var MAX_IMAGE_COUNT_Y = 10;

    var images;
    var clientWidth;
    var clientHeight;
    var tileWidth;
    var tileHeight;

    var tileCounter = 0;
    
    var navbar;
    var imageCloud;
    var imageObj = [];
    
    /**
     * Initializes Image Cloud.
     */
    this.init = function() {
        clientWidth = document.body.clientWidth + 15;
        clientHeight = document.body.clientHeight;
        
        navbar = new Navigation();
        navbar.init();
        imageCloud = document.getElementById(IMAGE_CLOUD_ID);
        imageCloud.style.height = clientHeight - navbar.getHeight();
        
        tileWidth = clientWidth / MAX_IMAGE_COUNT_X;
        tileHeight = (clientHeight - navbar.getHeight()) / MAX_IMAGE_COUNT_Y;

        initGrid();
        updateImageTiles();
        initEventHandler();

        setInterval(function() {
            changeImage();
        }, 6000);
    };

    function initEventHandler() {
    	initUploadAssetBtnHandler();
    	initSearchBtnHandler();
		initLightboxHandler();
		initShadowHover();
    }

    function initShadowHover() {
    	if (imageObj.length > 0) {
    		for (var i = 0; i < imageObj.length; i++) {
    			imageObj[i].addHoverListener();
    		};
    	}
    }

    function initUploadAssetBtnHandler() {
    	var uploadAssetBtn = document.getElementById('uploadAssetBtn');
    	
    	if (uploadAssetBtn !== undefined) {
    		uploadAssetBtn.addEventListener('click', function() {
    			toggleLightbox();
    			openUploadAssetDialog();
    		});
    	}
    }

    function initSearchBtnHandler() {
    	var searchBtn = document.getElementById('searchBtn');
    	
    	if (searchBtn !== undefined) {
    		searchBtn.addEventListener('click', function() {
    			toggleLightbox();
    			openSearchDialog();
    		});
    	}
    }

    function openUploadAssetDialog() {
    	var uploadAssetDialog = jQuery('#uploadDialog');

    	if (uploadAssetDialog !== undefined) {
    		uploadAssetDialog.fadeIn();
    	}
    }

    function openSearchDialog() {
    	var searchDialog = jQuery('#searchDialog');

    	if (searchDialog !== undefined) {
    		searchDialog.fadeIn();
    	}
    }

    function initLightboxHandler() {
    	var lightbox = document.getElementById('lightbox');

    	if (lightbox !== undefined) {
    		lightbox.addEventListener('click', function() {
    			toggleLightbox();
    		});
    	}
    }

    function toggleLightbox() {
    	var lightbox = document.getElementById('lightbox');
    	var displayStatus = lightbox.style.display;

    	if (displayStatus === 'none') {
    		lightbox.style.display = 'block';
    	} else {
    		lightbox.style.display = 'none';
    		closeDialog();
    	}
    }

    function closeDialog() {
    	var dialogs = document.getElementsByClassName('dialog');

    	if (dialogs !== undefined) {
    		for (var i = 0; i < dialogs.length; i++) {
    			dialogs[i].style.display = 'none';
    		}
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
        var imgObj = imageObj[Math.floor(Math.random() * imageObj.length - 1)];
        imgObj.setNewImage(getRandomImage());
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

    function insertImage(tilePosX, tilePosY, tileCountX, tileCountY) {
        for (var y = tilePosY; y < MAX_IMAGE_COUNT_Y; y++) {
            for (var x = tilePosX; x < MAX_IMAGE_COUNT_X; x++) {

                if (isSpace(x, y, tileCountX, tileCountY)) {
                    markTiles(x, y, tileCountX, tileCountY);

                    var imageTile = new ImageTile(tileCounter, x, y, tileCountX, tileCountY, tileWidth, tileHeight, getRandomImage());
                    imageObj.push(imageTile);
                    imageCloud.innerHTML += imageTile.getImage();
                    tileCounter++;
                    return;
                }
            }
        }
    }

    /**
     * Returns a random image path.
     */
    function getRandomImage() {
        if (imagePaths !== undefined && imagePaths.images !== undefined && imagePaths.images.length > 0) {
            var randomImage = Math.floor(Math.random() * imagePaths.images.length);
            return imagePaths.images[randomImage];
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
