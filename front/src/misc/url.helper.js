export const getQueryParam = (paramName) => {
    //return "vaso";
    // code being executed in server
    if(typeof window === "undefined") return null;

    //code being executed by browser
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);

}