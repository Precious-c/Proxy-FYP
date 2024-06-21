import "@geocodeearth/autocomplete-element";

function Geolocation() {
  return (
    <div>
      <ge-autocomplete
        api_key="ge-b344084b7689eeb0"
        // boundary.country="NG"
        placeholder="Search for places..."
      />
    </div>
  );
}

export default Geolocation;
{
  /* <ge-autocomplete
  api_key="ge-b344084b7689eeb0",
  boundary.country="NG"
></ge-autocomplete> */
}
