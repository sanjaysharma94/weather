export const UPDATE_CITY = "UPDATE_CITY"
export const COORDINATES = "COORDINATES"
export const FORECAST =    "FORECAST"
export const HOURLY =    "HOURLY"

export const updateCity = (payload) =>{
    return {
        type: UPDATE_CITY,
        payload:payload
    }
}

export const coordinates = (payload) =>{
    return {
        type: COORDINATES,
        payload
    }
}


export const forecast = (payload) =>{
    return {
        type: FORECAST,
       payload,
    }
}

export const hourly = (payload) =>{
    return {
        type: HOURLY,
       payload,
    }
}