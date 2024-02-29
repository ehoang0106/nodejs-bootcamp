setTimeout(() => {
    console.log('Two 2 seconds are up');
}, 2000)


const names = ['Ethan', 'Andy', 'Jane'];
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        };

        callback(data);
    }, 2000)


}

geocode('Orange', (data) => {
    console.log(data);
});
