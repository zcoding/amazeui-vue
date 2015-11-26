# Modal

## `<modal></modal>`

### slots
+ `header`
+ `body`
+ `footer`

### props
+ `show` `[Boolean(default:false)]`
+ `closeViaDimmer` `[Boolean(default:true)]`

## `<alert></alert>`

### slots
+ only one

### props
+ `show` `[Boolean(default:false)]`
+ `title` `[String(default:'')]`

### events
+ `ok`

## `<confirm></confirm>`

### slots
+ only one

### props
+ `show` `[Boolean(default:false)]`
+ `title` `[String(default:'')]`

### events
+ `ok`
+ `cancel`

## `<prompt></prompt>`

### slots
+ only one

### props
+ `show` `[Boolean(default:false)]`
+ `title` `[String(default:'')]`

### events
+ `ok` `data: message`
+ `cancel`
