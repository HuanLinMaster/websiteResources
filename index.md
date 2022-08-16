## 星弦弹幕姬 机器人转发使用教程
下载go-cqhttp https://txnmsl.xyz/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_amd64.exe
解压到一个目录，打开cmd，运行go-cqhttp
首次运行会生成配置，之后按下ctrl+c关闭gocqhttp
打开配置文件，按照下方配置文件中的注释自行修改
```
# go-cqhttp 配置文件

account:
  uin: $$ #$$处请替换为你的账号 
  password: '￥￥' #￥￥处请替换为你的密码 
  encrypt: false 
  status: 0      
  relogin:
    delay: 3  
    interval: 3 
    max-times: 0  
  use-sso-address: true
  allow-temp-session: false

heartbeat:
  interval: 5

message:
  post-format: string
  ignore-invalid-cqcode: true
  force-fragment: false
  fix-url: false
  proxy-rewrite: ''
  report-self-message: false
  remove-reply-at: false
  extra-reply-data: false
  skip-mime-scan: false

output:
  log-level: warn
  log-aging: 15
  log-force-new: true
  log-colorful: true
  debug: false

# 默认中间件锚点
default-middlewares: &default
  # 这里填访问密钥 可自己设定 需要与星弦弹幕姬中一致
  access-token: '114514'
  filter: ''
  # https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin
  rate-limit:
    enabled: false
    frequency: 1  
    bucket: 1 

database:
  leveldb
    enable: true
  cache:
    image: data/image.db
    video: data/video.db
servers:
  - ws:
      # 如果运行时报错 请将6700替换成10000-65525之内的数字
      # 在客户端中的机器人url填入ws://这里的内容
      # 比如ws://0.0.0.0:6700
      address: 0.0.0.0:6700
      middlewares:
        <<: *default # 引用默认中间件
```
