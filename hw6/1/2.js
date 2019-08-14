class StringBuilder {
  constructor(str) {
    let value;
    this._value = value;
    value.push(str);
  }

  get value() {
    console.log(`${this._value}`);
  }

  append(str) {
    this._value.push(str);
  }

  prepend(str) {
    this.value.unshift(str);
  }

  pad(str) {
    this._value.push(str);
    this._value.unshift(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);
