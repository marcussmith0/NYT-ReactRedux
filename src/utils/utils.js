import axios from 'axios';
import { API_KEY } from '../config/api-key';

const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`; 

export function find(topic, start, end) {

    return axios.get(`${ROOT_URL}&q=${topic}&begin_date=${start}0101&end_date=${end}1231`)
                .then((data) => {
        
                if(data.data.response.docs) {
                    var articles = data.data.response.docs.splice(0, 5);
                    return articles;   
                }
        
                return "";
            });

}