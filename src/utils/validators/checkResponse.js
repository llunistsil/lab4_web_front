
export const checkResponse = (response,toast) => {
    if (response.ok){
        return true;
    }
    else{
        response.text().then(
            text => {
                toast.error(JSON.parse(text).message,{style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },})
            }
        )
        return false;
    }
}