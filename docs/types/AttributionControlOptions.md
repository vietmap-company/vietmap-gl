# Type alias: AttributionControlOptions

Ƭ **AttributionControlOptions**: `Object`

The [AttributionControl](../classes/AttributionControl.md) options object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `compact?` | `boolean` | If `true`, the attribution control will always collapse when moving the map. If `false`, force the expanded attribution control. The default is a responsive attribution that collapses when the user moves the map on maps less than 640 pixels wide. **Attribution should not be collapsed if it can comfortably fit on the map. `compact` should only be used to modify default attribution when map size makes it impossible to fit default attribution and when the automatic compact resizing for default settings are not sufficient.** |
| `customAttribution?` | `string` \| `string`[] | Attributions to show in addition to any other attributions. |

#### Defined in

src/ui/control/attribution_control.ts:10
