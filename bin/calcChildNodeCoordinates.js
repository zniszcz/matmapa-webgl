/*
/
/   Create mockup of child node posiible coordinates.
/   Calculate all possibilities for 1 to 12 child nodes.
/
*/

const count = (n) => {

    const result = [];

    for (let i = 1; i <= n; i++) {
        const obj = {
            x: 0,
            y: 0,
        };

        const alpha = (Math.PI * 2) / n;
        const translate = (x) => (Math.round((x) * 10000) / 10000);

        obj.x = translate(Math.sin(i * alpha));
        obj.y = translate(Math.cos(i * alpha));

        result.push(obj);
    }

    return result;
};

const json = {};

for (let i = 1; i <= 12; i++) {
    json[i] = count(i);
}

console.log(JSON.stringify(json, null, 4));
