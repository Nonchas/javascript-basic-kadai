const currientDate = new Date();

const year = currientDate.getFullYear();
const month = currientDate.getMonth();
const date = currientDate.getDate();

const zeroPad = (num) => String(num).padStart(2,'0');

const formattedDate = `${year}年${month}月${date}日`;
console.log(formattedDate);
