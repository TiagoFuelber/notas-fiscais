export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}   

export const timeoutPromise = (miliiseconds, promise) => {
    const timeout = new Promise((resolve, reject) => 
        setTimeout(() => reject(`Limite da promise excedido (limite: ${miliiseconds} ms)`), miliiseconds))

    return Promise.race([timeout, promise]);
}