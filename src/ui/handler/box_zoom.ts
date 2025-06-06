import {DOM} from '../../util/dom';

import {Event} from '../../util/evented';
import {TransformProvider} from './transform-provider';

import type {Map} from '../map';
import type Point from '@mapbox/point-geometry';
import {Handler} from '../handler_manager';

/**
 * The `BoxZoomHandler` allows the user to zoom the map to fit within a bounding box.
 * The bounding box is defined by clicking and holding `shift` while dragging the cursor.
 *
 * @group Handlers
 */
export class BoxZoomHandler implements Handler {
    _map: Map;
    _tr: TransformProvider;
    _el: HTMLElement;
    _container: HTMLElement;
    _enabled: boolean;
    _active: boolean;
    _startPos: Point;
    _lastPos: Point;
    _box: HTMLElement;
    _clickTolerance: number;

    /** @internal */
    constructor(map: Map, options: {
        clickTolerance: number;
    }) {
        this._map = map;
        this._tr = new TransformProvider(map);
        this._el = map.getCanvasContainer();
        this._container = map.getContainer();
        this._clickTolerance = options.clickTolerance || 1;
    }

    /**
     * Returns a Boolean indicating whether the "box zoom" interaction is enabled.
     *
     * @returns `true` if the "box zoom" interaction is enabled.
     */
    isEnabled() {
        return !!this._enabled;
    }

    /**
     * Returns a Boolean indicating whether the "box zoom" interaction is active, i.e. currently being used.
     *
     * @returns `true` if the "box zoom" interaction is active.
     */
    isActive() {
        return !!this._active;
    }

    /**
     * Enables the "box zoom" interaction.
     *
     * @example
     * ```ts
     * map.boxZoom.enable();
     * ```
     */
    enable() {
        if (this.isEnabled()) return;
        this._enabled = true;
    }

    /**
     * Disables the "box zoom" interaction.
     *
     * @example
     * ```ts
     * map.boxZoom.disable();
     * ```
     */
    disable() {
        if (!this.isEnabled()) return;
        this._enabled = false;
    }

    mousedown(e: MouseEvent, point: Point) {
        if (!this.isEnabled()) return;
        if (!(e.shiftKey && e.button === 0)) return;

        DOM.disableDrag();
        this._startPos = this._lastPos = point;
        this._active = true;
    }

    mousemoveWindow(e: MouseEvent, point: Point) {
        if (!this._active) return;

        const pos = point;

        if (this._lastPos.equals(pos) || (!this._box && pos.dist(this._startPos) < this._clickTolerance)) {
            return;
        }

        const p0 = this._startPos;
        this._lastPos = pos;

        if (!this._box) {
            this._box = DOM.create('div', 'vietmapgl-boxzoom', this._container);
            this._container.classList.add('vietmapgl-crosshair');
            this._fireEvent('boxzoomstart', e);
        }

        const minX = Math.min(p0.x, pos.x),
            maxX = Math.max(p0.x, pos.x),
            minY = Math.min(p0.y, pos.y),
            maxY = Math.max(p0.y, pos.y);

        DOM.setTransform(this._box, `translate(${minX}px,${minY}px)`);

        this._box.style.width = `${maxX - minX}px`;
        this._box.style.height = `${maxY - minY}px`;
    }

    mouseupWindow(e: MouseEvent, point: Point) {
        if (!this._active) return;

        if (e.button !== 0) return;

        const p0 = this._startPos,
            p1 = point;

        this.reset();

        DOM.suppressClick();

        if (p0.x === p1.x && p0.y === p1.y) {
            this._fireEvent('boxzoomcancel', e);
        } else {
            this._map.fire(new Event('boxzoomend', {originalEvent: e}));
            return {
                cameraAnimation: map => map.fitScreenCoordinates(p0, p1, this._tr.bearing, {linear: true})
            };
        }
    }

    keydown(e: KeyboardEvent) {
        if (!this._active) return;

        if (e.keyCode === 27) {
            this.reset();
            this._fireEvent('boxzoomcancel', e);
        }
    }

    reset() {
        this._active = false;

        this._container.classList.remove('vietmapgl-crosshair');

        if (this._box) {
            DOM.remove(this._box);
            this._box = null;
        }

        DOM.enableDrag();

        delete this._startPos;
        delete this._lastPos;
    }

    _fireEvent(type: string, e: any) {
        return this._map.fire(new Event(type, {originalEvent: e}));
    }
}
