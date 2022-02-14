//Bài 1 :Viết hàm sumAvg(arr) tính trung bình cộng một mảng số

function sumAvg(arr) {
  let sumArr = arr.reduce(function (sum, val) {
    sum += val;
    return sum;
  });
  return sumArr / arr.length;
}

let test1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sumAvg(test1));

// Bài 2 :Viết hàm findMax(arr) tìm giá trị lớn nhất trong một mảng

function findMax(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

let test2 = [-10, 2, 3, 4, 5, 44, 7];
console.log(findMax(test2));

//Bài 3 : Viết hàm fibonacci(n) trả về một mảng chứa n số Fibonacci

function fibonacci(n = 0) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  let arr = [0, 1];
  let n1 = 0,
    n2 = 1,
    count = 2;
  while (count < n) {
    let temp = n1 + n2;
    arr[count] = temp;
    n1 = n2;
    n2 = temp;
    count++;
  }
  return arr;
}
console.log(fibonacci(10));

//Bài 4: Viết hàm removeFalsy(arr) trả về một mảng mới chỉ chứa các giá trị đúng trong mảng

function removeFalsy(arr) {
  return arr.filter(function (value) {
    return value === true;
  });
}
let arr4 = [1, true, false, 2, " true ", true];
console.log(removeFalsy(arr4));

//Bài 5 :Viết hàm sortByColumn(arr, col) sắp xếp một mảng 2 chiều theo giá trị cột col tăng dần
function sortByColumn(arr, col = 0) {
  arr.sort(function (a, b) {
    if (a[col] === b[col]) {
      return 0;
    } else {
      return a[col] < b[col] ? -1 : 1;
    }
  });
  return arr;
}
let arr5 = [
  [12, "AAA"],
  [13, "BBB"],
  [11, "CCC"],
  [28, "DDD"],
  [18, "CCC"],
  [12, "DDD"],
];
console.log(sortByColumn(arr5, 1));

//Bài 6: Viết hàm double(arr) trả về một mảng mới với giá trị các phần tử bằng bình phương chính nó

function double(arr) {
  return arr.map(function (value) {
    return value * value;
  });
}
let arr6 = [2, 6, 4, 1, 2, -3];
console.log(double(arr6));

//Bài 7 :Viết hàm capitalize(str) chuyển đổi một chuỗi thành dạng capitalize.

function toUpperFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
  str = str.trim();
  let arr = str.split(" ");
  let result = "";
  for (const x of arr) {
    result = result + " " + toUpperFirstChar(x);
  }
  return result.trim();
}

let str = " hello world dad d fafaf";
console.log(capitalize(str));

//Bài 8 :Viết hàm randItem(arr) trả về một phần tử ngẫu nhiên trong mảng
function randItem(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}
let arr8 = [1, 2, "a", true];
console.log(randItem(arr8));
