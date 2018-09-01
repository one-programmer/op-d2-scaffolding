# D2 脚手架

## 安装

```bash
npm install https://github.com/one-programmer/op-d2-scaffolding.git -g link
```

## JSON数据格式

- key 字段名
- name 中文含义
- type 类型 [number|string|datetime]
- read 是否可读（默认在列表中展示）
- write 是否可写（默认在编辑/新装中展示）

```json
[
    {
        "key": "id",
        "name": "ID",
        "type": "number",
        "read": true,
        "write": false
    },
    {
        "key": "title",
        "name": "标题",
        "type": "string",
        "read": true,
        "write": true
    },
    {
      "key": "price",
      "name": "价格",
      "type": "number",
      "read": true,
      "write": true
    },
    {
        "key": "description",
        "name": "描述",
        "type": "string",
        "read": true,
        "write": true
    },
    {
        "key": "created_at",
        "name": "创建时间",
        "type": "datetime",
        "read": true,
        "write": false
    },
    {
        "key": "updated_at",
        "name": "生效时间",
        "type": "datetime",
        "read": true,
        "write": true
    }
]
```
