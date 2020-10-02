export default function filterex(o, regExp) {
    return Object.keys(o)
        .filter((v) => regExp.test(v))
        .reduce((s, n) => ({ ...s, [n]: o[n] }), {})
};

