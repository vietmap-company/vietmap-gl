import {TerrainControl} from './terrain_control';
import {createMap as globalCreateMap, beforeMapTest} from '../../util/test/util';

function createMap() {

    return globalCreateMap({
        attributionControl: false,
        style: {
            version: 8,
            sources: {
                terrain: {
                    minzoom: 5,
                    maxzoom: 12,
                    attribution: 'MapLibre',
                    tiles: ['http://example.com/{z}/{x}/{y}.pngraw'],
                    bounds: [-47, -7, -45, -5]
                },
            },
            layers: [],
            owner: 'mapblibre',
            id: 'demotiles',
        },
        hash: true
    }, undefined);
}

let map;

beforeEach(() => {
    beforeMapTest();
    map = createMap();
});

afterEach(() => {
    map.remove();
});

describe('TerrainControl', () => {
    test('appears in top-right by default', () => {
        map.addControl(new TerrainControl({source: 'terrain'}));

        expect(
            map.getContainer().querySelectorAll('.vietmapgl-ctrl-top-right .vietmapgl-ctrl-terrain')
        ).toHaveLength(1);
    });

    test('appears in the position specified by the position option', () => {
        map.addControl(new TerrainControl({source: 'terrain'}), 'bottom-right');

        expect(
            map.getContainer().querySelectorAll('.vietmapgl-ctrl-bottom-right .vietmapgl-ctrl-terrain')
        ).toHaveLength(1);

        expect(
            map.getContainer().querySelectorAll('.vietmapgl-ctrl-top-right .vietmapgl-ctrl-terrain')
        ).toHaveLength(0);
    });
});
