# Type alias: WorkerTileResult

Ƭ **WorkerTileResult**: [`ExpiryData`](ExpiryData.md) & \{ `buckets`: [`Bucket`](../interfaces/Bucket.md)[] ; `collisionBoxArray`: `CollisionBoxArray` ; `featureIndex`: [`FeatureIndex`](../classes/FeatureIndex.md) ; `glyphAtlasImage`: [`AlphaImage`](../classes/AlphaImage.md) ; `glyphMap?`: \{ `[_: string]`: \{ `[_: number]`: [`StyleGlyph`](StyleGlyph.md);  };  } \| ``null`` ; `glyphPositions?`: [`GlyphPositions`](GlyphPositions.md) \| ``null`` ; `iconMap?`: \{ `[_: string]`: [`StyleImage`](StyleImage.md);  } \| ``null`` ; `imageAtlas`: [`ImageAtlas`](../classes/ImageAtlas.md) ; `rawTileData?`: `ArrayBuffer` ; `resourceTiming?`: `PerformanceResourceTiming`[]  }

The worker tile's result type

#### Defined in

src/source/worker_source.ts:57
