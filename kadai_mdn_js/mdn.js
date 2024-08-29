const currientDate = new Date();

const year = currientDate.getFullYear();
const month = currientDate.getMonth() + 1;
const date = currientDate.getDate();

const formattedDate = `${year}年${month}月${date}日`;
console.log(formattedDate);
