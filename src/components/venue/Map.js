import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapboxGl from "react-mapbox-gl"

const Map = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOX_TOKEN,
  scrollZoom: false,
  interactive: false,
  attributionControl: false,
})

export default Map
