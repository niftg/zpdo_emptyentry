const propNames = [
  "entry",
  "translations",
  "tags",
  "contents",
  "variations",
  "relations"
]

const entryEntries = propNames.map(propName=>
  [propName, /s$/.test(propName)?[]:{}]
)

const entry = entryEntries.reduce(
  (a,[prop,v])=>({...a,[prop]:v}),
  {}
)

entry.entry.id = 1

const zpoJsonMinObj = {words:[entry]}

console.info(JSON.stringify(zpoJsonMinObj))
