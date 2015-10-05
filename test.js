var arr = [
  { id: 15, title: "hello" },
  { id: -1, title: "hello" },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;
var validBlogs = [];

function filterByID(obj) {
  if ('title' in obj && typeof(obj.title) === 'string') {
    validBlogs.push(obj);
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);
console.log(validBlogs)