const a = (target = "네이버") => {
  return new Promise((resolve, reject) => {
    // 비동기 함수 로직
    setTimeout(() => {
      resolve(`${target} is awesome`);
    }, 1 * 1000);
  });
};

a()
  .then((res) => {
    console.log(res);
    return a(`kakao`);
  })
  .then((res) => {
    console.log(res);
  });
