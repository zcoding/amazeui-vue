# 模态框

## `<modal></modal>`

### 插入点
+ `header`
+ `body`
+ `footer`

### 属性
+ `show` `[Boolean(默认值:false)]`
+ `closeViaDimmer` `[Boolean(默认值:true)]`

## `<alert></alert>`

### 插入点
+ only one

### 属性
+ `show` `[Boolean(默认值:false)]`
+ `title` `[String(默认值:'')]`

### 事件
+ `ok`

## `<confirm></confirm>`

### 插入点
+ only one

### 属性
+ `show` `[Boolean(默认值:false)]`
+ `title` `[String(默认值:'')]`

### 事件
+ `ok`
+ `cancel`

## `<prompt></prompt>`

### 插入点
+ only one

### 属性
+ `show` `[Boolean(默认值:false)]`
+ `title` `[String(默认值:'')]`

### 事件
+ `ok` `数据: message`
+ `cancel`
