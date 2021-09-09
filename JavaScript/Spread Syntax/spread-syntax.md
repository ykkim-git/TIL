```javascript
    const item = { type: '👕', size: 'M' };
    const detail = { price: 20, made: 'korea', gender: 'M' }

    // bad case
    item['price'] = detail.price;

    // bad case
    const newObject = new Object();
    new Object['type'] = item.type;
    new Object['size'] = item.size;

    // bad case
    const newObject2 = {
    	type: item.type,
    	size: item.size,
    	price: detail.price,
    }

    // GOOD case
    1. const shirt0 = Object.assign(item, detail);
    2. const shirt = { ...item, ...detail };

    // 배열에서 사용
    let fruits = ['apple', 'banana'];
    fruits = [...fruits, 'orange']; // like a push
    fruits = ['orange', ...friuts]; // like a unshift

    fruits2 = ['watermelon', 'chamwhy'];
    let combined = fruits.concat(fruits2); // 합치기
    combined = [.,..fruits, ...fruits2];
```
