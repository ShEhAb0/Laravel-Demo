import { head } from "lodash";


export default{
    data: () => ({

    }),
    methods:{
      async callApi(method_,url_,data_,headers=""){
            try{
                if(headers==""){
              const res= await axios({
                            method:method_,
                            url:url_,
                            data:data_
                            
                        })
                        .then(response => { 
                        return response
                        })
                        .catch(error => {
                         return error.response
                        });
                        return res;
                     
                }else{
                    const res2=await axios({
                        headers: {
                            'X-Requested-With':'XMLHttpRequest',
                            
                           
                        },
                            method:method_,
                            url:url_,
                            data:data_
                            
                        }) .then(response => { 
                            return response
                            })
                            .catch(error => {
                             return error.response
                            });
                            return res2;
                }
          
                
            }catch(err){
                return (err.response)
            }
        }
    }
}