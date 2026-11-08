# 江湖多情债 · 第一章

适合 iPhone 的武侠回合制 RPG。游戏无需 GPT 账号，剧情、背包、等级和选择保存在当前浏览器；支持完整下载后离线游玩。

## 云端试玩

启用本仓库的 GitHub Pages 后，入口为：

https://mata8736-ai.github.io/jianghu-debts/

iPhone 用 Safari 打开，点顶部「单机」，下载至「离线版已备好」，再从 Safari 分享菜单选择「添加到主屏幕」。首次完整下载需要联网，之后可离线启动。

## 本地部署

下载并解压整个仓库，打开 `README-local.md`。Windows 双击 `start-game.bat`，Mac 可运行 `start-game.command`，或在终端执行：

```sh
python3 start_game.py
```

电脑和 iPhone 连接同一 Wi‑Fi，在 iPhone Safari 中打开启动窗口打印的局域网地址。局域网 HTTP 模式可以游玩，但 iPhone 安装离线内容需要 HTTPS；云端 GitHub Pages 支持 HTTPS。

## 延续旧存档

从原试玩地址的「存档」导出 JSON，再在这里的「存档」导入。不同网址和浏览器不会自动共享存档，切换前请先备份。

## 本章内容

七幕 NPC 触发剧情、十六个场景、四向行走、采集和随机怪物、鬼火、地面掉落、真实经验升级和秘籍技能。房屋家具隐藏搜寻，破庙整修按地点操作，独立山洞含普通箱与剧情锁箱。

## GitHub Pages 设置

在仓库 Settings → Pages 中选择 **Deploy from a branch**，分支选择 **main**，目录选择 **/(root)**，保存后等待发布完成。`.nojekyll` 保证静态文件直接发布，无需构建或账号服务。
