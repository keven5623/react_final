/*
格式化日期
*/
export function formateDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    + ' ' + date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0') + ':' + date.getSeconds().toString().padStart(2,'0')
    }