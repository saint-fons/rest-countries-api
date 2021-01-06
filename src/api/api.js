import axios from 'axios';

export const CountriesAPI = {
    getCountries() {
        return axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                return response.data
            })
    },

    getCountryName(name) {
        return axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(response => {
                return response.data
            })
    }
}



