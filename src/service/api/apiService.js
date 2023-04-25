const BASE_URL = 'https://api.shrtco.de/v2'

const userService = {
    async post(Shortening, endpoint, data){
        const response = await fetch(`${BASE_URL}/${Shortening}${endpoint}`, {
            method: 'POST',
            body : JSON.stringify(data)
        });
        
        return response.json()
    }
}

export default userService