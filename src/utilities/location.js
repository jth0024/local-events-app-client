import geolib from 'geolib';

export function getLocation() {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      return position;
    },
    () => {},
    {
      enableHighAccuracy: true,
    }
  );
}
