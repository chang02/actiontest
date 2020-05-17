let cnt = 0;
for (let i = 0; i <= 10000; i++) {
    let str = i.toString()
    let results = str.match(/7/g);
    if (results != null) {
        cnt += results.length;
        console.log(`${i}______${results.length}`)
    }
}
console.log(cnt);