export const validateTime = (time) =>{
    const newtime = new Date(time*1000);
    return newtime.toLocaleTimeString() +" " + newtime.toLocaleDateString()
}