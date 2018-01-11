/* eslint-disable */
const formatDate = function(C, O, F) {
  if (!C || !C.getFullYear || isNaN(C))
    return "";
  var G = C.toString()
    , B = mini.dateInfo;
  if (!B)
    B = mini.dateInfo;
  if (typeof (B) !== "undefined") {
    var M = typeof (B.patterns[O]) !== "undefined" ? B.patterns[O] : O
      , J = C.getFullYear()
      , $ = C.getMonth()
      , _ = C.getDate();
    if (O == "yyyy-MM-dd") {
      $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
      _ = _ < 10 ? "0" + _ : _;
      return J + "-" + $ + "-" + _
    }
    if (O == "MM/dd/yyyy") {
      $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
      _ = _ < 10 ? "0" + _ : _;
      return $ + "/" + _ + "/" + J
    }
    G = M.replace(/yyyy/g, J);
    G = G.replace(/yy/g, (J + "").substring(2));
    var L = C.getHalfYear();
    G = G.replace(/hy/g, B.halfYearLong[L]);
    var I = C.getQuarter();
    G = G.replace(/Q/g, B.quarterLong[I]);
    G = G.replace(/q/g, B.quarterShort[I]);
    G = G.replace(/MMMM/g, B.monthsLong[$].escapeDateTimeTokens());
    G = G.replace(/MMM/g, B.monthsShort[$].escapeDateTimeTokens());
    G = G.replace(/MM/g, $ + 1 < 10 ? "0" + ($ + 1) : $ + 1);
    G = G.replace(/(\\)?M/g, function(A, _) {
      return _ ? A : $ + 1
    });
    var N = C.getDay();
    G = G.replace(/dddd/g, B.daysLong[N].escapeDateTimeTokens());
    G = G.replace(/ddd/g, B.daysShort[N].escapeDateTimeTokens());
    G = G.replace(/dd/g, _ < 10 ? "0" + _ : _);
    G = G.replace(/(\\)?d/g, function(A, $) {
      return $ ? A : _
    });
    var H = C.getHours()
      , A = H > 12 ? H - 12 : H;
    if (B.clockType == 12)
      if (H > 12)
        H -= 12;
    G = G.replace(/HH/g, H < 10 ? "0" + H : H);
    G = G.replace(/(\\)?H/g, function(_, $) {
      return $ ? _ : H
    });
    G = G.replace(/hh/g, A < 10 ? "0" + A : A);
    G = G.replace(/(\\)?h/g, function(_, $) {
      return $ ? _ : A
    });
    var D = C.getMinutes();
    G = G.replace(/mm/g, D < 10 ? "0" + D : D);
    G = G.replace(/(\\)?m/g, function(_, $) {
      return $ ? _ : D
    });
    var K = C.getSeconds();
    G = G.replace(/ss/g, K < 10 ? "0" + K : K);
    G = G.replace(/(\\)?s/g, function(_, $) {
      return $ ? _ : K
    });
    G = G.replace(/fff/g, C.getMilliseconds());
    G = G.replace(/tt/g, C.getHours() > 12 || C.getHours() == 0 ? B.tt["PM"] : B.tt["AM"]);
    var C = C.getDate()
      , E = "";
    if (C <= 10)
      E = B.ten["Early"];
    else if (C <= 20)
      E = B.ten["Mid"];
    else
      E = B.ten["Late"];
    G = G.replace(/ten/g, E)
  }
  return G.replace(/\\/g, "")
}

export {
  formatDate
}
