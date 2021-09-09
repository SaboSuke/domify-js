
/**
 * @desc domify simplify the DOM manipulation.
 * features:
 * * select 1 element or all
 * * get the element's html or override it
 * * events: on(e, cb), click(cb), change(cb), mouseEnter(cb), mouseLeave(cb)
 * * .hide()/.show() a specific element
 * * attribute manipulation using attr(name, value?)
 * * .css() for adding style to a specific element
 * * addClass() & RemoveClass() to a specific element
 * 
 * @param {String} selector - Html selector
 * @returns {domify}
 */
var domify = function (selector) {
    "use strict";
    let prev = null, prevVal = null;

    const self = {
        element: document.querySelector(selector),
        all: () => document.querySelectorAll(selector),
        html: (value = '') => {
            if (!value) return self.element.innerHTML;
            else return self.element.innerHTML = value;
        },

        // event
        on: (event, callback) => {
            self.element.addEventListener(event, callback);
        },
        click: (callback) => {
            self.element.addEventListener('click', callback);
        },
        change: (callback) => {
            self.element.addEventListener('change', callback);
        },
        mouseEnter: (callback) => {
            self.element.addEventListener('mouseenter', callback);
        },
        mouseLeave: (callback) => {
            self.element.addEventListener('mouseleave', callback);
        },

        // show / hide
        hide: () => {
            self.element.style.display = 'none';
            return self;
        },
        show: () => {
            self.element.style.display = 'inherit';
            return self;
        },

        // attributes && css
        attr: (name, value = null) => {
            prev = 'attr';
            prevVal = name;
            if (value == null) return self.element.getAttribute(name);
            else self.element.setAttribute(name, value);

            return self;
        },
        remove: () => {
            if (prev == 'attr') self.element.removeAttribute(prevVal);
            return self;
        },
        css: (css) => {
            self.element.style = css;
            return self;
        },
        addClass: (className) => {
            self.element.classList.add(className);
            return self;
        },
        removeClass: (className) => {
            self.element.classList.remove(className);
            return self;
        },
        replaceClass: (className, replaceWith) => {
            self.element.classList.replace(className, replaceWith);
            return self;
        },
    }

    return self;
}