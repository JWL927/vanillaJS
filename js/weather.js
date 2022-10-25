const onGeoOk = (position) => {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    console.log(lat, lng);
};

const onGeoError = () => {

};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);