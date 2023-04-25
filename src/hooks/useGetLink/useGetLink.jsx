import { useState } from 'react'
import userService from '@/service/api/apiService'

const useGetLink = () => { 
    
    const [error, setError] = useState(null)
    
    async function fetchData(link){
            try{
                const response = await userService.post('shorten?url=', link)
    
                if(!response.ok){
                    setError("Please add a valid link")
                    throw new Error(response.error);
                }
                
                const { original_link, short_link } = await response.result
                const newData = { original_link, short_link }
                setError('')
            
            return(newData)
            
            } catch(err) {
                return null
            }
        }
        
    
        return { fetchData, error } 
    } 
    
export default useGetLink 