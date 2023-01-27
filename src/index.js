module.exports = function check(str, bracketsConfig) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if ( (res[res.length - 1] ===  bracketsConfig[k][0]) && (str[i] === bracketsConfig[k][1]) ) {
        res.pop(res.length - 1);
      } else if(str[i] === bracketsConfig[k][0]) {
        res.push(str[i]);
      }
    }    
  }
  if (str.length % 2 === 1) {
    return false;
  }
  return res.length === 0? true : false;
}
