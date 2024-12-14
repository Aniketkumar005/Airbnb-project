
mapboxgl.accessToken = mapToken;

// Create a Mapbox map
const map = new mapboxgl.Map({
  container: 'map', // Container element for the map
  style: "mapbox://styles/mapbox/streets-v12", // Map style
  center: listing.geometry.coordinates, // Coordinates from the listing
  zoom: 9, // Initial zoom level
  scrollZoom: true, // Enable zoom with mouse wheel
  interactive: true, // Enable map interactions
});

// Create a new marker with custom styling
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // Set marker location
  .setPopup( // Create and set a popup on marker click
    new mapboxgl.Popup({ offset: 25 }) // Popup offset for better placement
      .setHTML(
        `<h4>${listing.title}</h4>
         <p>Exact Location will be provided after booking.</p>`
      )
  )
  .addTo(map); // Add marker to the map

// Optional: Adding zoom control to the map
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Optional: Adding geolocate control for user location
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true, // Track user's location in real-time
  showUserLocation: true // Display user location on the map
}), 'bottom-right');

// Optional: Adding full-screen control
map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
