import * as React from 'react';
import MapGL from 'react-map-gl';

import { Firebase } from '../helpers';

interface MapState {
  viewport: any;
}

// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md

const DEFAULTS = {
  latitude: 43.653225,
  longitude: -79.383186,
  zoom: 10.3,
};

class Map extends React.Component<{}, MapState> {
  constructor(props: any) {
    super(props);

    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        ...DEFAULTS,
      },
    };
  }

  public async componentDidMount() {
    console.log(await Firebase.getIncidents());
  }

  public render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
      />
    );
  }
}

export default Map;
