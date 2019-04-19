var MD5 = function(r) {
    function i(r, n) {
        return r << n | r >>> 32 - n
    }
    
    function c(r, n) {
        var t, o, e, u, a;
        return e = 2147483648 & r, u = 2147483648 & n, a = (1073741823 & r) + (1073741823 & n), (t = 1073741824 & r) & (o = 1073741824 & n) ? 2147483648 ^ a ^ e ^ u : t | o ? 1073741824 & a ? 3221225472 ^ a ^ e ^ u : 1073741824 ^ a ^ e ^ u : a ^ e ^ u
    }
    
    function n(r, n, t, o, e, u, a) {
        var f;
        return c(i(r = c(r, c(c((f = n) & t | ~f & o, e), a)), u), n)
    }
    
    function t(r, n, t, o, e, u, a) {
        var f;
        return c(i(r = c(r, c(c(n & (f = o) | t & ~f, e), a)), u), n)
    }
    
    function o(r, n, t, o, e, u, a) {
        return c(i(r = c(r, c(c(n ^ t ^ o, e), a)), u), n)
    }
    
    function e(r, n, t, o, e, u, a) {
        return c(i(r = c(r, c(c(t ^ (n | ~o), e), a)), u), n)
    }
    
    function u(r) {
        var n, t = "",
            o = "";
        for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
        return t
    }
    var a, f, C, g, h, v, d, S, l, m = Array();
    for (m = function(r) {
            for (var n, t = r.length, o = t + 8, e = 16 * ((o - o % 64) / 64 + 1), u = Array(e - 1), a = 0, f = 0; f < t;) a = f % 4 * 8, u[n = (f - f % 4) / 4] = u[n] | r.charCodeAt(f) << a, f++;
            return a = f % 4 * 8, u[n = (f - f % 4) / 4] = u[n] | 128 << a, u[e - 2] = t << 3, u[e - 1] = t >>> 29, u
        }(r = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var n = "", t = 0; t < r.length; t++) {
                var o = r.charCodeAt(t);
                o < 128 ? n += String.fromCharCode(o) : (127 < o && o < 2048 ? n += String.fromCharCode(o >> 6 | 192) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128)), n += String.fromCharCode(63 & o | 128))
            }
            return n
        }(r)), v = 1732584193, d = 4023233417, S = 2562383102, l = 271733878, a = 0; a < m.length; a += 16) d = e(d = e(d = e(d = e(d = o(d = o(d = o(d = o(d = t(d = t(d = t(d = t(d = n(d = n(d = n(d = n(C = d, S = n(g = S, l = n(h = l, v = n(f = v, d, S, l, m[a + 0], 7, 3614090360), d, S, m[a + 1], 12, 3905402710), v, d, m[a + 2], 17, 606105819), l, v, m[a + 3], 22, 3250441966), S = n(S, l = n(l, v = n(v, d, S, l, m[a + 4], 7, 4118548399), d, S, m[a + 5], 12, 1200080426), v, d, m[a + 6], 17, 2821735955), l, v, m[a + 7], 22, 4249261313), S = n(S, l = n(l, v = n(v, d, S, l, m[a + 8], 7, 1770035416), d, S, m[a + 9], 12, 2336552879), v, d, m[a + 10], 17, 4294925233), l, v, m[a + 11], 22, 2304563134), S = n(S, l = n(l, v = n(v, d, S, l, m[a + 12], 7, 1804603682), d, S, m[a + 13], 12, 4254626195), v, d, m[a + 14], 17, 2792965006), l, v, m[a + 15], 22, 1236535329), S = t(S, l = t(l, v = t(v, d, S, l, m[a + 1], 5, 4129170786), d, S, m[a + 6], 9, 3225465664), v, d, m[a + 11], 14, 643717713), l, v, m[a + 0], 20, 3921069994), S = t(S, l = t(l, v = t(v, d, S, l, m[a + 5], 5, 3593408605), d, S, m[a + 10], 9, 38016083), v, d, m[a + 15], 14, 3634488961), l, v, m[a + 4], 20, 3889429448), S = t(S, l = t(l, v = t(v, d, S, l, m[a + 9], 5, 568446438), d, S, m[a + 14], 9, 3275163606), v, d, m[a + 3], 14, 4107603335), l, v, m[a + 8], 20, 1163531501), S = t(S, l = t(l, v = t(v, d, S, l, m[a + 13], 5, 2850285829), d, S, m[a + 2], 9, 4243563512), v, d, m[a + 7], 14, 1735328473), l, v, m[a + 12], 20, 2368359562), S = o(S, l = o(l, v = o(v, d, S, l, m[a + 5], 4, 4294588738), d, S, m[a + 8], 11, 2272392833), v, d, m[a + 11], 16, 1839030562), l, v, m[a + 14], 23, 4259657740), S = o(S, l = o(l, v = o(v, d, S, l, m[a + 1], 4, 2763975236), d, S, m[a + 4], 11, 1272893353), v, d, m[a + 7], 16, 4139469664), l, v, m[a + 10], 23, 3200236656), S = o(S, l = o(l, v = o(v, d, S, l, m[a + 13], 4, 681279174), d, S, m[a + 0], 11, 3936430074), v, d, m[a + 3], 16, 3572445317), l, v, m[a + 6], 23, 76029189), S = o(S, l = o(l, v = o(v, d, S, l, m[a + 9], 4, 3654602809), d, S, m[a + 12], 11, 3873151461), v, d, m[a + 15], 16, 530742520), l, v, m[a + 2], 23, 3299628645), S = e(S, l = e(l, v = e(v, d, S, l, m[a + 0], 6, 4096336452), d, S, m[a + 7], 10, 1126891415), v, d, m[a + 14], 15, 2878612391), l, v, m[a + 5], 21, 4237533241), S = e(S, l = e(l, v = e(v, d, S, l, m[a + 12], 6, 1700485571), d, S, m[a + 3], 10, 2399980690), v, d, m[a + 10], 15, 4293915773), l, v, m[a + 1], 21, 2240044497), S = e(S, l = e(l, v = e(v, d, S, l, m[a + 8], 6, 1873313359), d, S, m[a + 15], 10, 4264355552), v, d, m[a + 6], 15, 2734768916), l, v, m[a + 13], 21, 1309151649), S = e(S, l = e(l, v = e(v, d, S, l, m[a + 4], 6, 4149444226), d, S, m[a + 11], 10, 3174756917), v, d, m[a + 2], 15, 718787259), l, v, m[a + 9], 21, 3951481745), v = c(v, f), d = c(d, C), S = c(S, g), l = c(l, h);
    return (u(v) + u(d) + u(S) + u(l)).toLowerCase()
};


exports.MD5 = MD5;
