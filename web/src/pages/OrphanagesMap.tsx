import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../images/mapMarker.svg'
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Americana</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        // center={[-22.7373061, -47.3217348]}
        center={[-22.7239639, -47.3257981]}
        zoom={15}
        style={{ width: '100%', height: '100% ' }}
      >

        <TileLayer
          // url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;