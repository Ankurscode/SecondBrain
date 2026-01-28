export function random(len) {
    let options = "qkjebblfszfdfacgugfasdgs1234577439993";
    let length = options.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += options[Math.floor((Math.random() * length))];
    }
    return ans;
}
