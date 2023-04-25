import { useState } from "react"
import  useGetLink  from "../useGetLink/useGetLink"

const useHandleSubmitLink = () => {
    
    const { fetchData, error } = useGetLink()
    
    const [linksData, setLinksData] = useState(() =>{
        const savedLinks = JSON.parse(localStorage.getItem('links'))
        return savedLinks || []
    })
    
    async function handleSubmit(){
        event.preventDefault()
        const link = event.target.elements.link.value
        const {original_link, short_link} = await fetchData(link)
        setLinksData([...linksData, {original_link: original_link, short_link: short_link}])
        localStorage.setItem('links', JSON.stringify(
            [...linksData, {original_link: original_link, short_link: short_link}]
        ))

    }
    
    return {handleSubmit, linksData, error}
}

export default useHandleSubmitLink 
