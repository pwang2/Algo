//https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/#/description

var longestSubstring = function(s, k) {
    var n = s.length;
    if (n === 0 || n < k) return 0;
    if (k === 1) return n;

    var quota = {};
    for (let i = 0; i < 26; i++) quota[String.fromCharCode(97 + i)] = k;
    for (let i = 0; i < n; i++) quota[s[i]] = quota[s[i]] - 1;

    var lessFq = Object.keys(quota).filter(key => quota[key] > 0 && quota[key] !== k);
    var reg = new RegExp('[' + lessFq.join('') + ']', 'ig');
    var arr = s.split(reg).filter(el => el.length >= k);

    if (arr.length === 0) return 0;
    if (arr[0] === s) return arr[0].length;

    var maxLen = 0;
    for (var sub of arr) maxLen = Math.max(maxLen, longestSubstring(sub, k));
    return maxLen;
};
