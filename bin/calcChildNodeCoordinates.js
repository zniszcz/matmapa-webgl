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

        const alpha = Math.PI * 2 / i;
        const translate = (x) => (Math.round((x/2 + 0.5) * 10000) / 10000);

        obj.x = translate(Math.sin(alpha));
        obj.y = translate(Math.cos(alpha));

        result.push(obj);
    }

    return result;
};

const json = {};

for (let i = 1; i <= 12; i++) {
    json[i] = count(i);
}

console.log(JSON.stringify(json, null, 4));
