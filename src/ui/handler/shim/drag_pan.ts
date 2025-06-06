import type {MousePanHandler} from '../mouse';
import type {TouchPanHandler} from './../touch_pan';

/**
 * A {@link DragPanHandler} options object
 */
export type DragPanOptions = {
    /**
     * factor used to scale the drag velocity
     * @defaultValue 0
     */
    linearity?: number;
    /**
     * easing function applled to `map.panTo` when applying the drag.
     * @param t - the easing function
     * @defaultValue bezier(0, 0, 0.3, 1)
     */
    easing?: (t: number) => number;
    /**
     * the maximum value of the drag velocity.
     * @defaultValue 1400
     */
    deceleration?: number;
    /**
     * the rate at which the speed reduces after the pan ends.
     * @defaultValue 2500
     */
    maxSpeed?: number;
};

/**
 * The `DragPanHandler` allows the user to pan the map by clicking and dragging
 * the cursor.
 *
 * @group Handlers
 */
export class DragPanHandler {

    _el: HTMLElement;
    _mousePan: MousePanHandler;
    _touchPan: TouchPanHandler;
    _inertiaOptions: DragPanOptions | boolean;

    /** @internal */
    constructor(el: HTMLElement, mousePan: MousePanHandler, touchPan: TouchPanHandler) {
        this._el = el;
        this._mousePan = mousePan;
        this._touchPan = touchPan;
    }

    /**
     * Enables the "drag to pan" interaction.
     *
     * @param options - Options object
     * @example
     * ```ts
     *   map.dragPan.enable();
     *   map.dragPan.enable({
     *      linearity: 0.3,
     *      easing: bezier(0, 0, 0.3, 1),
     *      maxSpeed: 1400,
     *      deceleration: 2500,
     *   });
     * ```
     */
    enable(options?: DragPanOptions | boolean) {
        this._inertiaOptions = options || {};
        this._mousePan.enable();
        this._touchPan.enable();
        this._el.classList.add('vietmapgl-touch-drag-pan');
    }

    /**
     * Disables the "drag to pan" interaction.
     *
     * @example
     * ```ts
     * map.dragPan.disable();
     * ```
     */
    disable() {
        this._mousePan.disable();
        this._touchPan.disable();
        this._el.classList.remove('vietmapgl-touch-drag-pan');
    }

    /**
     * Returns a Boolean indicating whether the "drag to pan" interaction is enabled.
     *
     * @returns `true` if the "drag to pan" interaction is enabled.
     */
    isEnabled() {
        return this._mousePan.isEnabled() && this._touchPan.isEnabled();
    }

    /**
     * Returns a Boolean indicating whether the "drag to pan" interaction is active, i.e. currently being used.
     *
     * @returns `true` if the "drag to pan" interaction is active.
     */
    isActive() {
        return this._mousePan.isActive() || this._touchPan.isActive();
    }
}
