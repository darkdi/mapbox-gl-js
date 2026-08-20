// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {describe, test, expect} from '../../util/vitest';
import drawFill from '../../../src/render/draw_fill';
import FillStyleLayer from '../../../src/style/style_layer/fill_style_layer';

describe('drawFill', () => {
    test('does not require an evaluated layout', () => {
        const layer = new FillStyleLayer({
            id: 'fill',
            type: 'fill',
            source: 'source'
        }, '', null);

        expect(layer.layout).toBeUndefined();

        const painter = {
            renderPass: 'shadow',
            terrain: null,
            shadowRenderer: null,
            colorModeForDrapableLayerRenderPass: () => null,
            opaquePassEnabledForLayer: () => false
        };

        expect(() => drawFill(painter, {}, layer, [])).not.toThrow();
    });
});
