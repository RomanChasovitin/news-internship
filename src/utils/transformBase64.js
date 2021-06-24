export const fromToId = str => btoa(unescape(encodeURIComponent(str)))
export const fromToStr = str => decodeURIComponent(escape(window.atob(str)))
