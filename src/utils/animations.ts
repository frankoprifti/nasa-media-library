export const animateImage = (id: string) => {
    const imgItself = document.getElementById(`img-${id}`);
    const cardWidth = imgItself?.offsetWidth;
    const cardHeight = imgItself?.offsetHeight;
    const { left, top } = imgItself?.getBoundingClientRect()!;
    const { clientWidth, clientHeight } = document.documentElement;
    let scaleFactor = '2.6';
    if (clientWidth <= 425) {
        scaleFactor = '1'
    } else if (clientWidth > 425 && clientWidth <= 768) {
        scaleFactor = '1.7'
    }
    const leftOffset = clientWidth / 2 - left - cardWidth! / 2;
    const topOffset = clientHeight / 2 - top - cardHeight! / 2;
    if (imgItself) {
        imgItself.style.translate = `${leftOffset}px ${topOffset}px`;
        imgItself.style.scale = scaleFactor;
        imgItself.style.zIndex = "1";
    }
};
export const reverseAnimateImage = (openId: string) => {
    const imgItself = document.getElementById(`img-${openId}`);
    if (imgItself) {
        imgItself.style.translate = `0px 0px`;
        imgItself.style.scale = `1`;
        imgItself.style.zIndex = "0";
    }
};