



// const converted = JSON.parse(shopStringified);
// console.log(converted.owner);


/* my pracktice */
// javascript object nation
const userjoson = {
    name: 'Md saheb', id: 1, job: 'learn a wevdeveloper',
}
const st = JSON.stringify(userjoson);
console.group(st);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner);