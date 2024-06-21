if ("geolocation" in navigator) {
  console.log("geolocation is available");
} else {
  console.log("geolocation IS NOT available");
}

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  console.log(position.coords.latitude, position.coords.longitude);
});
