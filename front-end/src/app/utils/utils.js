export function parseUrl() {
    return (window.location.href.split("?")[1] || "").split("&")
      .map((item) =>item.split("="))
      .reduce((acc, [key,val]) =>({
        ...acc,
        [key] : val
       }),{}); 
}