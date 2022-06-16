export function getHeight(elementForHeight, elementForSetHeight){
    const height = document.querySelector("." + elementForHeight).offsetHeight;
    const element = document.querySelector("." + elementForSetHeight);
    element.style.setProperty("--" + elementForHeight +"Height", height - 3 + "px");
};
