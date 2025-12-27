export function getCoordinates (city){
    return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
            .then(res => res.json())
            .then(data => {
                if (!data.results || data.results.length === 0){
                    throw new Error("cant find city");
                }
                const { latitude, longitude } = data.results[0];
                return { latitude, longitude };
        })
    
}