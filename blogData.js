var arr = [
    {
        "_id": "560dc2b8d52807f433017ac1",
        "__v": 0
    },
    {
        "_id": "560dc2c7d52807f433017ac2",
        "__v": 0
    },
    {
        "_id": "560dc2c8d52807f433017ac3",
        "__v": 0
    },
    {
        "_id": "560dc311075f3c91356c6f88",
        "__v": 0
    },
    {
        "_id": "560dc43dfd82e5de5863a804",
        "title": "hello world",
        "body": "this is the first blog"
    },
    {
        "_id": "560dc45bfd82e5de5863a805",
        "title": "Another one baby",
        "body": "this is the first blog"
    },
    {
        "_id": "560dc46dfd82e5de5863a806",
        "title": "And here is the third!",
        "body": "this is the third blog"
    },
    {
        "_id": "560dc47afd82e5de5863a807",
        "title": "And here is the fourth!",
        "body": "this is the fourth blog"
    },
    {
        "_id": "560dc614eb62198444f8104d",
        "__v": 0
    }
]

var validBlogs = [];

function filterByTitle(obj) {
  if ('title' in obj && typeof(obj.title) === 'string') {
    validBlogs.push(obj);
    return true;
  } else {
    return false;
  }
}

var arrByID = arr.filter(filterByTitle);
console.log(arrByID);
