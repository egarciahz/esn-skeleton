export default function mapKeys(o, predicate){
    return Object.keys(o).reduce((s, n) => {
        let k = predicate(n);
        return ({ ...s, [k]: o[n] });
    },{});
}
