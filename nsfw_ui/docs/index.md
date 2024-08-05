#### 接口说明:
接口地址: `/nsfw` <br>
请求方法: `POST`<br>
Content-Type: `form-data`<br>

#### 参数列表:

| 参数名    | 类型    | 默认值 | 是否必须 | 描述                                  |
| --------- | ------- | ------ | -------- | ------------------------------------- |
| images    | []file  | 无     | 是       | 图片数组                              |
| precent   | boolean | false  | 否       | 是否以百分比形式返回                      |
| precision | int     | 0      | 否       | 精度，0：则原精度返回，2：保留2位小数 |

#### 返回值说明
| 字段名 | 类型 | 描述 |
| ------ | ---- | ---- |
| code | int | 状态码，0表示正常请求 |
| msg | string | 状态信息 |
| data | []object | 数据 |
| data.name|string|文件名|
| data.nsfw|float|nsfw值，precent为false时，越接近1，则越NSFW。precent为true时，越接近100，则越NSFW。|


#### 返回值示例:
```json
{
  "code":0,
  "msg":"请求成功！",
  "data":
    [
      {
        "name":"6a63f6246b600c33fa4a27481a4c510fd9f9a17b.jpg",
        "nsfw":7.69622565712779
      }
    ]
}
```