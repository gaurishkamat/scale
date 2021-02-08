/*
function generateTheme () {
  const theme = themeFactory()
  const root = postcss.root()
  const _root = postcss.rule({ selector: ':root' })

  Object.keys(theme).forEach(key => {
    _root.append(postcss.comment({ text: key }))
    if (Array.isArray(theme[key])) {
      theme[key].forEach((value, index) => {
        _root.append(
          postcss.decl({ prop: `--${key}-${index}`, value })
        )
      })
    } else {
      Object.entries(theme[key]).forEach((entry) => {
        const [index, value] = entry
        _root.append(
          postcss.decl({ prop: `--${key}-${index}`, value })
        )
      })
    }
  })

  return root.append([_root]).toString()
}
*/