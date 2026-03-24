function fn1() {
  console.log("fn1");
}

export function deepClone(target) {
  const clone = (value) => {
    if (typeof value === "object" && value === null) return value;
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
        if (Object.prototype.hasOwnProperty(key)) continue;
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
