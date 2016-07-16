import { Asset } from '../asset/asset';

export class Tile {

    private _asset: Asset;
    private _width: number;
    private _height: number;
    private _top: number;
    private _left: number;

    public constructor(
        asset: Asset,
        width: number,
        height: number,
        top: number,
        left: number
    ) {
        this._asset = asset;
        this._width = width;
        this._height = height;
        this._top = top;
        this._left = left;
    }

    get asset(): Asset {
        return this._asset;
    }

    set asset(asset: Asset) {
        this._asset = asset;
    }

    get width(): number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

    get top(): number {
        return this._top;
    }

    set top(top: number) {
        this._top = top;
    }

    get left(): number {
        return this._left;
    }

    set left(left: number) {
        this._left = left;
    }

}
