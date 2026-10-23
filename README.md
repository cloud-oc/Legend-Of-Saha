# 娑婆物语 · Legend Of Saha

使用 Ruffle 0.7.1 在现代浏览器运行原版 Flash 游戏，适用于 GitHub Pages。
## 游玩

打开站点，点击「开始游戏」，等待加载。方向键 / 按住鼠标左键移动；Z 加速跑，X 跳跃，C 防御，V 技能，Esc 菜单。建议电脑浏览器游玩。

## 部署

GitHub 仓库 Settings → Pages → Deploy from a branch → main / (root)。文件路径均使用相对地址，支持项目子路径。

## 本地运行

使用 HTTP 静态服务器打开本目录，例如 `python -m http.server 8000`，访问 http://localhost:8000。不要直接双击 HTML。

## 兼容性

Flash 通过模拟器运行，兼容性以实际游玩为准。尚未完成全流程通关或存档恢复测试。

已在 Chrome + Ruffle 默认 wgpu-webgl 渲染器下验证进入初始 2.5D 场景。首次初始化可能需要 1–2 分钟。旧 Mochi 广告域名由 Ruffle 默认阻止，不影响初始场景进入。

SWF SHA-256: 833E40B01F605FF6B1B860EC631D258657A42B45F96EEA11CD4AF8D4A95CF824
