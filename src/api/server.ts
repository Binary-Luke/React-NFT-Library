let token = '2eec669f0a09f12f7c695c37b8e253abac8e8d91cba91d0b';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://nft-shelf.glitch.me//api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    
    create: async(data: any = {}) => {
        const response = await fetch(`https://nft-shelf.glitch.me//api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},
    
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://nft-shelf.glitch.me//api/books/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
        delete: async(id:string) => {
            const response = await fetch(`https://nft-shelf.glitch.me//api/books/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }   
}