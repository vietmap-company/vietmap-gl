# Vietmap WebGL
[<img src="https://bizweb.dktcdn.net/100/415/690/themes/804206/assets/logo.png?1689561872933" height="40"/> </p>](https://maps.vietmap.vn/)
Import Vietmap WebGL API to your project.

## Installation

### React
#### Import the library in your React project.
```bash
    npm install @vietmap/vietmap-gl-js
```
#### Import the library in your React component.
```ts
    import vietmapgl from "@vietmap/vietmap-gl-js/dist/vietmap-gl";
    import '@vietmap/vietmap-gl-js/dist/vietmap-gl.css';

```

#### Init the map in your component.
```ts
  const [map, setMap] = useState<vietmapgl.Map | null>(null);
    useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Get API key from environment variables
    const apiKey = import.meta.env.VITE_VIETMAP_API_KEY || '';
    
    const mapInstance = new vietmapgl.Map({
      container: mapContainerRef.current,
      style: `https://maps.vietmap.vn/mt/tm/style.json?apikey=${apiKey}`,
      center: [106.6755666, 10.7588867], // Vietnam centered
      zoom: 12,
    });
    
    mapInstance.addControl(new vietmapgl.NavigationControl(), 'top-right');
    
    // Wait for map to load
    mapInstance.on('load', () => {
      setMap(mapInstance);
    });
    
    // Clean up on unmount
    return () => {
      mapInstance.remove();
    };
  }, []);
```
#### Add Marker
```ts
    const marker = new vietmapgl.Marker()
    .setLngLat([106.6755666, 10.7588867])
    .addTo(map);
```
#### Add Popup
```ts
    const popup = new vietmapgl.Popup()
    .setLngLat([106.6755666, 10.7588867])
    .setHTML('<h1>Hello Vietmap</h1>')
    .addTo(map);
```

#### Move the map
```ts
    map.flyTo({
    center: [106.6755666, 10.7588867],
    zoom: 12,
    duration: 1000,
    });
```

### HTML
Add the following code to your HTML file.
```html
    <script src="https://unpkg.com/@vietmap/vietmap-gl-js@5.0.0/dist/vietmap-gl.js"></script>
    <link href="https://unpkg.com/@vietmap/vietmap-gl-js@5.0.0/dist/vietmap-gl.css" rel="stylesheet" />
```

### Documentation
Follow the documentation [here](https://github.com/vietmap-company/vietmap-gl/docs/documentation.md) to get started.
Contact [vietmap.vn](https://bit.ly/vietmap-api) to register a valid key.
