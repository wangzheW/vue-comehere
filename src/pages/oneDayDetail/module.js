import axios from 'axios'
import { SET_HDATA, SET_SDATA, AJAX_GET_DATA } from './types.js'

export default{
  state: { 
  		headerCon: [],
  		schedulingCon: []
   },
  mutations: { 
  		  [SET_HDATA](state, payload) {
  			state.headerCon = payload;
        console.log(1)
  		},
  		  [SET_SDATA](state, payload) {
  			state.schedulingCon = payload;	
  		}
   },
  actions: { 
		[AJAX_GET_DATA](context) {
				axios.get('/static/oneDayDetail.json')
				  .then((response) => {
				  	   console.log(response)
				  	  context.commit(SET_HDATA, response.data.data.headerCon);
				  	  context.commit(SET_SDATA, response.data.data.schedulingCon)
				  })		  
		    }
    },
  getters: { 

   }
}