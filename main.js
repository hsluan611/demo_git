// Enhanced object literals
//định nghĩa key value cho oj ngắn gọn, key value dạng biến
//định nghĩa method cho oj
//định nghĩa key oj cho dạng biến

//dạng biến
var name = 'luan';
var price = 100;
var nguon = {
  name: name,
  price: price
};
console.log(nguon);

// định nghĩa method
var name = 'luan';
var price = 100;
var nguon = {
  name: name,
  price: price,
  getName (){
    return this.name;
  }
};
console.log(nguon);

//định nghĩa key oj cho dạng biến
// bình thường k ai làm như này
var fName = 'name';
var fPrice = 'price';
var nguon = {
  [fName]: 'ho sy luan',
  [fPrice]: 10000,
};
console.log(nguon);





























