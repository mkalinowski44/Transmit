export const _breakpoints = {
  xs: [0, 379],
  sm: [480, 767],
  md: [768, 1023],
  lg: [1024, 1199],
  xl: [1200, 1499],
  xxl: [1500, -1]
}

export function screen(widthFrom, widthTo = undefined) {
  const wFrom = _breakpoints[widthFrom.toLowerCase()][0]
  const wTo = widthTo ? _breakpoints[widthTo.toLowerCase()][1] : _breakpoints[widthFrom.toLowerCase()][1]
  if(window.innerWidth < wFrom) return false
  if(wTo > 0 && window.innerWidth > wTo) return false
  return true
}

export function throttle(func, wait) {
  let timeout
  let previous = 0

  return function() {
    const now = Date.now()
    const remaining = wait - (now - previous)

    if (remaining <= 0) {
      clearTimeout(timeout)
      previous = now
      func.apply(this, arguments)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = null
        func.apply(this, arguments)
      }, remaining)
    }
  }
}

export function debounce(func, wait, immediate) {
  let timeout

  return function() {
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(this, arguments)
    }, wait)
    if (callNow) func.apply(this, arguments)
  }
}

export function isElement(obj) {
  try {
    return obj instanceof HTMLElement
  }
  catch(e){
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object")
  }
}