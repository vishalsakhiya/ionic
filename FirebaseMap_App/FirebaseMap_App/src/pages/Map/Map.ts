import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
//import { Geolocation, Geoposition } from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';


/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-Map',
    templateUrl: 'Map.html'
})
export class MapPage {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
 // public coordinates1: Array<{ latitude: number, longitude: number }> = [];

  Coordinates: any;
 // watch: any;
  latitude: any;
  longitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public zone: NgZone, public backgroundGeolocation: BackgroundGeolocation, public locationTracker: LocationTrackerProvider) {

    //let config = {
    //  desiredAccuracy: 0,
    //  stationaryRadius: 20,
    //  distanceFilter: 10,
    //  debug: true,
    //  interval: 2000
    //};

    //this.backgroundGeolocation.configure(config).subscribe((location) => {

    //  console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    //  // Run update inside of Angular's zone
    //  this.zone.run(() => {
    //    this.lat = location.latitude;
    //    this.lng = location.longitude;
    //  });

    //}, (err) => {

    //  console.log(err);

    //});

    //// Turn ON the background-geolocation system.
    //this.backgroundGeolocation.start();


    //// Foreground Tracking

    //let options = {
    //  frequency: 3000,
    //  enableHighAccuracy: true
    //};

    //this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

    //  console.log(position);

    //  // Run update inside of Angular's zone
    //  this.zone.run(() => {
    //    this.lat = position.coords.latitude;
    //    this.lng = position.coords.longitude;
    //   // this.executemap();
    //   // this.coordinates1.push[position.coords.latitude, position.coords.longitude];
       
    //  });

    //});


    //Load Map
    let options = {
      frequency: 3000,
      enableHighAccuracy: true,
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.executemap(resp.coords.longitude, resp.coords.latitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      console.log(position.coords);
      this.Coordinates = position.coords;
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
     
    });
   
  }

  start() {
   
    this.locationTracker.startTracking();
    console.log('start lat', this.locationTracker.lat);

    //this.coordinates1.push({ latitude: this.locationTracker.lat, longitude: this.locationTracker.lng });
    this.executemap(this.locationTracker.lng,this.locationTracker.lat);
  }

  stop() {
    this.locationTracker.stopTracking();
  }

  executemap(lon: number, lat: number) {

      console.log('execute map', lon, lat);

    /*Initializing Map*/
    mapboxgl.accessToken = 'pk.eyJ1IjoidmVua2F0aXRvbiIsImEiOiJjaXhsdGZ2amIwMDQwMnFxdDdoMTZ3NHlpIn0.X9Zmsqs7wCS30_RGxa_Kzw';
    //var map = new mapboxgl.Map({
    //  style: 'mapbox://styles/mapbox/light-v9',
    //  center: [this.Coordinates.longitude, this.Coordinates.latitude],
    //  zoom: 16,
    //  pitch: 80,
    //  minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
    //  maxZoom: 17,
    //  container: 'map'
    //});

    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lon, lat],
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

     // Create a GeoJSON source with an empty lineString.
     var geojson = {
       "type": "FeatureCollection",
       "features": [{
         "type": "Feature",
         "geometry": {
           "type": "LineString",
           "coordinates": [
             [0, 0]
           ]
         }
       }]
     };

  //  map.on('load', function () {

  //    console.log('load map', lon, lat);

  //    map.addLayer({
  //      "id": "places",
  //      "type": "symbol",
  //      "source": {
  //        "type": "geojson",
  //        "data": {
  //          "type": "FeatureCollection",
  //          "features": [{
  //            "type": "Feature",
  //            "geometry": {
  //              "type": "Point",
  //              "coordinates": [lon,lat]
  //            },
  //            "properties": {
  //              "title": "My Location",
  //              "description": "This is My Location!",
  //              "icon": "monument"
  //            }
  //          }]
  //        }
  //      },
  //      "layout": {
  //        "icon-image": "{icon}-15",
  //        "text-field": "{title}",
  //        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  //        "text-offset": [0, 0.6],
  //        "text-anchor": "top"
  //      }
  //    });
		//});

  ////  console.log('execute map', lan,lat);

  //   /*Initializing Map*/
  //   mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwLXRlc3QiLCJhIjoiY2pibmZnZXl1NWFpMzMybm93NTB6bDVxeiJ9.GNzTtZAEUp7MobQnAfAvpw';
  //   var map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v10',
  //     zoom: 0
  //   });

  //   // Create a GeoJSON source with an empty lineString.
  //   var geojson = {
  //     "type": "FeatureCollection",
  //     "features": [{
  //       "type": "Feature",
  //       "geometry": {
  //         "type": "LineString",
  //         "coordinates": [
  //           [0, 0]
  //         ]
  //       }
  //     }]
  //   };

     map.on('load', function () {



       // save full coordinate list for later
       var coordinates = [
         [lon, lat],
         //[-122.48348236083984, 37.83317489144141],
         //[-122.48339653015138, 37.83270036637107],
         //[-122.48356819152832, 37.832056363179625],
         //[-122.48404026031496, 37.83114119107971],
         //[-122.48404026031496, 37.83049717427869],
         //[-122.48348236083984, 37.829920943955045],
         //[-122.48356819152832, 37.82954808664175],
         //[-122.48507022857666, 37.82944639795659],
         //[-122.48610019683838, 37.82880236636284],
         //[-122.48695850372314, 37.82931081282506],
         //[-122.48700141906738, 37.83080223556934],
         //[-122.48751640319824, 37.83168351665737],
         //[-122.48803138732912, 37.832158048267786],
         //[-122.48888969421387, 37.83297152392784],
         //[-122.48987674713133, 37.83263257682617],
         //[-122.49043464660643, 37.832937629287755],
         //[-122.49125003814696, 37.832429207817725],
         //[-122.49163627624512, 37.832564787218985],
         //[-122.49223709106445, 37.83337825839438],
         //[-122.49378204345702, 37.83368330777276]
       ]
       console.log('array coordinate', [coordinates[0]]);



       // start by showing just the first coordinate
       geojson.features[0].geometry.coordinates = [coordinates[0]];

       // add it to the map
       map.addSource('trace', { type: 'geojson', data: geojson });
       map.addLayer({
         "id": "trace",
         "type": "line",
         "source": "trace",
         "paint": {
           "line-color": "yellow",
           "line-opacity": 0.75,
           "line-width": 5
         }
       });

       // setup the viewport
       map.jumpTo({ 'center': coordinates[0], 'zoom': 14 });
       map.setPitch(30);

       // on a regular basis, add more coordinates from the saved list and update the map
       var i = 0;
       var timer = window.setInterval(function () {
         if (i < coordinates.length) {

           console.log(coordinates[i]);
           geojson.features[0].geometry.coordinates.push(coordinates[i]);
           map.getSource('trace').setData(geojson);
           map.panTo(coordinates[i]);
           i++;
         } else {
           window.clearInterval(timer);
         }
       }, 10);
     });
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
    }

}
