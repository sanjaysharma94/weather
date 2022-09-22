import { UPDATE_CITY , COORDINATES, FORECAST, HOURLY } from "./action";

const initState = {
    city:'',
    cor:{
        latitude:"",
        longitude:""
    },

    forecast:[],
    hourly:[],
    
}

export const Reducer = (state = initState ,action) =>{

    switch (action.type) {
        case UPDATE_CITY: 
        return {
            ...state,
            city : action.payload};

        case COORDINATES: 
        return {
                ...state,
                cor:{
                    latitude : action.payload.lat,
                    longitude: action.payload.lng
                }
            };
            case FORECAST: 
        return {
            ...state,
                forecast : action.payload,
                  
            };

            case HOURLY: 
            return {
                ...state,
                    hourly : action.payload,
                      
                };


         default:
            return state 
        
    }

}