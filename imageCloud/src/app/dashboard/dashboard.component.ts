import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { AssetService } from '../service/asset.service';
import { Tile } from '../tile/tile';
import { Asset } from '../shared/asset';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AssetService]
})
export class DashboardComponent implements OnInit {

    private GRID_COLS: number = 20;
    private GRID_ROWS: number = 10;
    private GRID_CELL_EMPTY: number = 0;
    private GRID_CELL_MARKED: number = 1;

    private TILE_HEIGHT: number = (window.innerHeight - 150) / this.GRID_ROWS;
    private TILE_WIDTH: number = (window.innerWidth - 10) / this.GRID_COLS;

    private tiles: Tile[];
    private grid: number[][];

    /**
     * Constructor.
     * @param {DashboardService} The dashboad service.
     */
    public constructor(
        private _assetService: AssetService) {
    }

    /**
     * Initialize dashboard.
     */
    public ngOnInit() {
        this.initGrid();
        this.getAssets();
    }

    /**
     * Initializes the grid for the assets.
     */
    private initGrid(): void {
        this.grid = new Array(this.GRID_ROWS);

        for (let y = 0; y < this.grid.length; y++) {
            this.grid[y] = new Array(this.GRID_COLS);

            for (let x = 0; x < this.grid[y].length; x++) {
                this.grid[y][x] = this.GRID_CELL_EMPTY;
            }
        }
    }

    /**
     * Get assets which will be displayed in the dashboard.
     */
    protected getAssets(): void {
        this._assetService.getAssets().then(assets => {
            this.tiles = this.getTiles(assets);
        });
    }

    /**
     * Initializes the tiles for the dashboard.
     * @param {Asset[]} assets The assets that will be displayed in the single tiles.
     * @return {Tile[]} the tiles for the dashboard.
     */
    protected getTiles(assets: Asset[]): Tile[] {
        let _tiles: Tile[] = [];

        _tiles.push(this.getPositionedTile(assets[0], 7, 5, 1, 6));
        _tiles.push(this.getPositionedTile(assets[1], 3, 5, 4, 2));
        _tiles.push(this.getPositionedTile(assets[2], 5, 3, 6, 10));
        _tiles.push(this.getPositionedTile(assets[3], 2, 3, 0, 0));

        while (this.isSpaceAvailable(3, 2)) {
            let randomAsset = Math.floor(Math.random() * assets.length);
            _tiles.push(this.getPositionedTile(assets[randomAsset], 3, 2, 0, 0));
        }

        while (this.isSpaceAvailable(1, 1)) {
            let randomAsset = Math.floor(Math.random() * assets.length);
            _tiles.push(this.getPositionedTile(assets[randomAsset], 1, 1, 0, 0));
        }
        return _tiles;
    }

    /**
     * Checks if there is space in the grid for the given tile size.
     * @param  {number}  tileWidth  The tile width.
     * @param  {number}  tileHeight The tile height.
     * @return {boolean} true, if there is space for the given tile size.
     */
    private isSpaceAvailable(tileWidth: number, tileHeight: number): boolean {
        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                if (this.isSpace(x, y, tileWidth, tileHeight)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Returns true if there is space at the given grid position and for the given tile size.
     * @param  {number}  gridCellX  The x position.
     * @param  {number}  gridCellY  The y position.
     * @param  {number}  tileWidth  The tile width.
     * @param  {number}  tileHeight The tile height.
     * @return {boolean}            True, if tere is space for the given tile.
     */
    private isSpace(gridCellX: number, gridCellY: number, tileWidth: number, tileHeight: number): boolean {
        for (let y = gridCellY; y < (gridCellY + tileHeight); y++) {
            for (let x = gridCellX; x < (gridCellX + tileWidth); x++) {
                if (x === this.GRID_COLS || y === this.GRID_ROWS) {
                    return false;
                }

                if (this.grid[y][x] === undefined || this.grid[y][x] === this.GRID_CELL_MARKED) {
                    return false;
                }
            }
        }
        return true;
    }



    /**
     * Returns a positioned tile.
     * @param {Asset}  asset      The current asset which will be displayed in the tile.
     * @param {number} tileWidth  The tile width factor.
     * @param {number} tileHeight The tile height factor.
     * @param {number} gridCellY  The top position of the tile.
     * @param {number} gridCellX  The left position of the tile.
     * @return {Tile} positioned tile.
     */
    protected getPositionedTile(asset: Asset, tileWidth: number, tileHeight: number, gridCellY: number, gridCellX: number): Tile {
        for (var y = gridCellY; y < this.GRID_ROWS; y++) {
            for (var x = gridCellX; x < this.GRID_COLS; x++) {

                if (this.isSpace(x, y, tileWidth, tileHeight)) {
                    this.updateGridCells(tileWidth, tileHeight, y, x);

                    return new Tile(
                        asset,
                        tileWidth * Math.ceil(this.TILE_WIDTH),
                        tileHeight * Math.ceil(this.TILE_HEIGHT),
                        y * Math.ceil(this.TILE_HEIGHT),
                        x * Math.ceil(this.TILE_WIDTH)
                    );
                }
            }
        }
    }

    /**
     * Updates the grid cells.
     * @param {number} tileWidth  The tile width factor.
     * @param {number} tileHeight The tile height factor.
     * @param {number} gridCellY  The top position of the tile.
     * @param {number} gridCellX  The left position of the tile.
     */
    private updateGridCells(tileWidth: number, tileHeight: number, gridCellY: number, gridCellX: number): void {
        for (let y = gridCellY; y < (gridCellY + tileHeight) && y < this.GRID_ROWS; y++) {
            for (let x = gridCellX; x < (gridCellX + tileWidth) && x < this.GRID_COLS; x++) {
                this.grid[y][x] = this.GRID_CELL_MARKED;
            }
        }
    }

}
