# Interface: Bucket

The `Bucket` interface is the single point of knowledge about turning vector
tiles into WebGL buffers.

`Bucket` is an abstract interface. An implementation exists for each style layer type.
Create a bucket via the `StyleLayer#createBucket` method.

The concrete bucket types, using layout options from the style layer,
transform feature geometries into vertex and index data for use by the
vertex shader.  They also (via `ProgramConfiguration`) use feature
properties and the zoom level to populate the attributes needed for
data-driven styling.

Buckets are designed to be built on a worker thread and then serialized and
transferred back to the main thread for rendering.  On the worker side, a
bucket's vertex, index, and attribute data is stored in `bucket.arrays: ArrayGroup`.
When a bucket's data is serialized and sent back to the main thread,
is gets deserialized (using `new Bucket(serializedBucketData)`, with
the array data now stored in `bucket.buffers: BufferGroup`. BufferGroups
hold the same data as ArrayGroups, but are tuned for consumption by WebGL.

## Methods

### destroy

▸ **destroy**(): `void`

Release the WebGL resources associated with the buffers. Note that because
buckets are shared between layers having the same layout properties, they
must be destroyed in groups (all buckets for a tile, or all symbol buckets).

#### Returns

`void`

#### Defined in

src/data/bucket.ts:92
