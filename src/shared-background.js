/**
 *
 * @param url {string}
 * @param callback {function}
 */
function getImageSize(url, callback) {
    let img = new Image();
    img.onload = function(){
        callback(this.width, this.height);
    };
    img.src = url;
}

/**
 *
 * @param el
 * @returns {{top: number, left: number, bottom: number, right: number}}
 */
function getBounding(el) {
    let elementBoundingRect = el.getBoundingClientRect();
    return {
        top: elementBoundingRect.top,
        left: elementBoundingRect.left,
        bottom: elementBoundingRect.bottom,
        right: elementBoundingRect.right
    };
}

/**
 *
 * @param bounding
 * @returns {{height: number, width: number}}
 */
function getSizeFromBounding(bounding) {
    return {
        height: bounding.bottom - bounding.top,
        width: bounding.right - bounding.left
    }
}

export default class SharedBackground {

    /**
     *
     * @param container
     * @param url {string}
     */
    constructor(container, url) {
        this.container = container;
        getImageSize(url, (width, height) => {
            this.image = {
                url: url,
                width: width,
                height: height
            };
            this.getPanels().forEach((panel) => {
                panel.style.backgroundImage = `url(${this.image.url})`;
            });
            this.render();
            window.addEventListener('resize', () => {
                this.render();
            });
        });
    }

    /**
     *
     * @returns {Array}
     */
    getPanels() {
        //we do not use Array.from because of the size of the polyfill
        return Array.prototype.slice.call( this.container.children );
    }

    /**
     *
     * @returns {{top: number, left: number, bottom: number, right: number}}
     */
    getBoundingRect() {
        return this.getPanels().reduce(function(bounding, el) {
            let elementBounding = getBounding(el);
            if (!bounding) {
                return elementBounding;
            }
            return {
                top: Math.min(bounding.top, elementBounding.top),
                left: Math.min(bounding.left, elementBounding.left),
                bottom: Math.max(bounding.bottom, elementBounding.bottom),
                right: Math.max(bounding.right, elementBounding.right)
            };
        }, null);
    }

    /**
     *
     * @returns {{width: number, height: number}}
     */
    computeImageSize() {
        let availableSpace = getSizeFromBounding(this.getBoundingRect());
        let ratio = this.image.width/this.image.height;
        let res_h = availableSpace.height;
        let res_w = res_h * ratio;

        if (res_w < availableSpace.width) {
            res_h *= availableSpace.width/res_w;
            res_w = res_h * ratio;
        }

        return {
            width: res_w,
            height: res_h
        }
    }

    render() {
        let size = this.computeImageSize();
        let componentBounding = this.getBoundingRect();
        let componentSize = getSizeFromBounding(componentBounding);
        let offsetX = Math.max(0, size.width - componentSize.width) / 2;
        let offsetY = Math.max(0, size.height - componentSize.height) / 2;
        this.getPanels().forEach((panel) => {
            let panelBounding = getBounding(panel);
            panel.style.backgroundSize = `${Math.round(size.width)}px ${Math.round(size.height)}px`;
            panel.style.backgroundPositionX = `${componentBounding.left - panelBounding.left - offsetX}px`;
            panel.style.backgroundPositionY = `${componentBounding.top - panelBounding.top - offsetY}px`;
        });
    }
}