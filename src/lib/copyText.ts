function legacyCopy(value: string): boolean {
  const area = document.createElement('textarea')
  area.value = value
  area.setAttribute('aria-hidden', 'true')
  area.tabIndex = -1
  area.style.cssText =
    'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:0;outline:none;box-shadow:none;background:transparent;font-size:16px;'
  document.body.appendChild(area)
  area.focus()
  area.select()
  area.setSelectionRange(0, area.value.length)
  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }
  area.remove()
  return copied
}

export function copyText(value: string): Promise<boolean> {
  const write = navigator.clipboard?.writeText?.bind(navigator.clipboard)
  if (write && window.isSecureContext) {
    return write(value).then(
      () => true,
      () => legacyCopy(value),
    )
  }
  return Promise.resolve(legacyCopy(value))
}
