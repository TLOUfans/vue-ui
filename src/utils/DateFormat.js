// 格式化时间
export default function (oDate, sFomate, bZone) {
  sFomate = sFomate.replace(`YYYY`, oDate.getFullYear())
  sFomate = sFomate.replace(`YY`, String(oDate.getFullYear()).substr(2))
  sFomate = sFomate.replace(`MM`, oDate.getMonth() + 1)
  sFomate = sFomate.replace(`DD`, oDate.getDate())
  sFomate = sFomate.replace(`hh`, oDate.getHours())
  sFomate = sFomate.replace(`mm`, oDate.getMinutes())
  sFomate = sFomate.replace(`ss`, oDate.getSeconds())
  if (bZone) sFomate = sFomate.replace(/\b(\d)\b/g, '0$1')
  return sFomate
}
