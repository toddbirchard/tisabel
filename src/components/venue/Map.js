import ReactMapboxGl from "react-mapbox-gl"
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"

ReactMapboxGl.workerClass = MapboxWorker.default

const Map = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOX_TOKEN,
  scrollZoom: false,
  interactive: false,
  attributionControl: false,
})

export default Map
