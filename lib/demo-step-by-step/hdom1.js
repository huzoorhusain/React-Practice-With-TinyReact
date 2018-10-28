// 1. createElement Stub

const TinyReact = (function () {
    function createElement(type, attributes = {}, ...children) {

        return {
            type,
            children,
            props: attributes

        }

    }

    return {
        createElement
    }
}());

