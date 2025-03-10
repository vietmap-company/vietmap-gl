# Interface: AttributeBinder

`Binder` is the interface definition for the strategies for constructing,
 uploading, and binding paint property data as GLSL attributes. Most style-
 spec properties have a 1:1 relationship to shader attribute/uniforms, but
 some require multiple values per feature to be passed to the GPU, and in
 those cases we bind multiple attributes/uniforms.

 It has three implementations, one for each of the three strategies we use:

 * For _constant_ properties -- those whose value is a constant, or the constant
   result of evaluating a camera expression at a particular camera position -- we
   don't need a vertex attribute buffer, and instead use a uniform.
 * For data expressions, we use a vertex buffer with a single attribute value,
   the evaluated result of the source function for the given feature.
 * For composite expressions, we use a vertex buffer with two attributes: min and
   max values covering the range of zooms at which we expect the tile to be
   displayed. These values are calculated by evaluating the composite expression for
   the given feature at strategically chosen zoom levels. In addition to this
   attribute data, we also use a uniform value which the shader uses to interpolate
   between the min and max value at the final displayed zoom level. The use of a
   uniform allows us to cheaply update the value on every frame.

 Note that the shader source varies depending on whether we're using a uniform or
 attribute. We dynamically compile shaders at runtime to accommodate this.
