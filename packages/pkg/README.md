# react-mui-mapbox-geocoder

A Material UI Autosuggest'ing Mapbox Geocoder for locating addresses and points of interest.

## What Is This?

### basically it is a combination of...

[@mapbox/react-geocoder](https://github.com/mapbox/react-geocoder)

and

[material-ui & react-autosuggest](https://material-ui.com/demos/autocomplete/#react-autosuggest)

## How can I add this to my project?

yarn add react-mui-mapbox-geocoder

or

npm install --save react-mui-mapbox-geocoder

## What Does This Component Look Like?

### it looks like this...

![What does this component look like?](https://raw.githubusercontent.com/wheredoesyourmindgo/react-mui-mapbox-geocoder/master/what-this-looks-like.gif)

## How Can I Use It?

### Here are some hints...

```javascript
import MatGeocoder from 'react-mui-mapbox-geocoder'

...

const geocoderApiOptions = {
  country: 'us',
  proximity: {longitude: -121.0681, latitude: 38.9197},
  bbox: [-123.8501, 38.08, -117.5604, 39.8735]
}

const onSelectHandler = (result) => {
  // Go to result handler.
}


return (
  ...
  <MatGeocoder
    inputPlaceholder="Search Address"
    accessToken={MAPBOX_TOKEN}
    onSelect={onSelectHandler}
    showLoader={true}
    {...geocoderApiOptions}
  />
)

...

```

## Are There Any Other Props I Can Pass?

### Yes.

    endpoint: string, default "'https://api.mapbox.com'"
    source: string, default "'mapbox.places'"
    inputPlaceholder: string, default "'Search'"
    accessToken: (required) string
    proximity: (optional) {longitude: number, latitude: number}
    country: (optional) string, eg. 'us'
    bbox: (optional) [number, number, number, number]
    types: (optional) string,
    limit: (optional) number,
    autocomplete: (optional) boolean
    language: (optional) string,
    showLoader: boolean, default "true"
    focusOnMount: boolean, default "false"
    onSelect: (required), (selectedFeature) => {...},
    onSuggest: (optional), (suggestedResults) => {...}

See [Mapbox API Docs](https://www.mapbox.com/api-documentation/#request-format) for more information.
