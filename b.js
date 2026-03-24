function fn1 () { console.log("fn1");}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
  function deepClone(target) {
    const clone = (value) => {
      if (typeof value === "object" && value === null)
        return value;
      if (value instanceof Map) {
        const _map = new Map();
        for (const item of value) {
          _map.set(item[0], map1.get(item[0]));
        }
        return _map;
      }
      if (typeof value === "object") {
        const _object = {};
        for (const key in value) {
          if (Object.prototype.hasOwnProperty(key))
            continue;
          _object[key] = clone(value[key]);
        }
        return _object;
      }
      if (Array.isArray(value)) {
        const _array = [];
        for (let i = 0; i < value.length; i++) {
          _array.push(clone(value[i]));
        }
        return _array;
      }
      return value;
    };
    return clone(target);
  }
  const map1 = new Map();
  map1.set("a", 1);
  map1.set("b", 2);
  map1.set("c", 3);
  const stu = {
    name: "xiejie",
    age: 18,
    stuInfo: {
      No: 1,
      score: 100,
      saySth: function () {
        console.log("我是一个学生");
      },
    },
    arr: [{ a: 1 }, { b: 2 }, { c: 3 }],
    map: map1
  };
  const stu2 = deepClone(stu);
  stu2.name = "zhangsan";
  stu2.stuInfo.score = 90;
  stu2.map.set('a', 100);
  stu2.arr[2].c = 3000;
  console.log("原对象", stu);
  console.log("克隆的对象", stu2);
})();
