// Object destructuring

const band={
    bandname:"One Direction",
    famousSong:"Steal my girl",
    year:2005,
    anotherfamoussong:"Temporary love"
};

// const bandName=band.bandname;
// const famousSong=band.famousSong;
// console.log(bandName,famousSong);

const{bandname,famousSong}=band;
console.log(bandname);
console.log(famousSong);

const{bandname:name, famousSong:song, ...restprop}=band;
console.log(name);
console.log(song);
console.log(restprop);