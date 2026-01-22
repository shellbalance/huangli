# 🎉 黄历网站 - 手机访问指南

## 🚀 最简单的方法：Netlify Drop（推荐）

**无需注册、无需安装任何软件，3 分钟完成部署！**

### 步骤：

1. **打开 Netlify Drop 网站**
   - 在浏览器中访问：https://app.netlify.com/drop
   
2. **拖拽文件夹**
   - 将整个 `Huangli` 文件夹拖拽到网页的虚线框中
   - 或者选择 `index.html`、`index.css`、`script.js` 三个文件一起拖拽
   
3. **等待上传**
   - 等待几秒钟，文件会自动上传
   
4. **获取链接**
   - 上传完成后，Netlify 会自动生成一个链接
   - 例如：`https://random-name-123456.netlify.app`
   - 复制这个链接
   
5. **在手机上访问**
   - 在手机浏览器中打开这个链接
   - 完成！🎊

---

## 📱 方法二：本地网络访问（同一 WiFi）

如果你想在本地网络测试，请按照以下步骤：

### 使用 Python（如果已安装）：

1. 打开 PowerShell 或命令提示符
2. 进入项目目录：
   ```
   cd c:\good\Huangli
   ```
3. 启动服务器：
   ```
   python -m http.server 3000
   ```
4. 查看你的电脑 IP 地址：
   ```
   ipconfig
   ```
   找到 "IPv4 地址"，例如：192.168.1.86
   
5. 在手机浏览器中访问：
   ```
   http://192.168.1.86:3000
   ```

### 使用 Node.js（如果已安装）：

1. 打开 PowerShell 或命令提示符
2. 进入项目目录：
   ```
   cd c:\good\Huangli
   ```
3. 启动服务器：
   ```
   npx serve -l 3000
   ```
4. 终端会显示网络地址，在手机上访问该地址

---

## 🌐 方法三：GitHub Pages（长期使用）

### 步骤：

1. **注册 GitHub 账号**
   - 访问 https://github.com
   - 点击 "Sign up" 注册

2. **创建新仓库**
   - 登录后，点击右上角 "+" → "New repository"
   - Repository name: `huangli`
   - 选择 "Public"
   - 点击 "Create repository"

3. **上传文件**
   - 在新创建的仓库页面，点击 "uploading an existing file"
   - 将 `index.html`、`index.css`、`script.js` 拖拽上传
   - 点击 "Commit changes"

4. **启用 GitHub Pages**
   - 点击仓库的 "Settings"
   - 左侧菜单找到 "Pages"
   - Source 选择 "main" 分支
   - 点击 "Save"

5. **访问网站**
   - 等待 1-2 分钟
   - 访问：`https://你的用户名.github.io/huangli/`

---

## 🎯 快速对比

| 方法 | 难度 | 时间 | 访问范围 | 推荐度 |
|------|------|------|----------|--------|
| Netlify Drop | ⭐ | 3分钟 | 全球 | ⭐⭐⭐⭐⭐ |
| 本地网络 | ⭐⭐ | 5分钟 | 同一WiFi | ⭐⭐⭐ |
| GitHub Pages | ⭐⭐⭐ | 10分钟 | 全球 | ⭐⭐⭐⭐ |

---

## 💡 我的建议

**立即测试** → 使用 **Netlify Drop**  
**长期使用** → 使用 **GitHub Pages**  
**临时查看** → 使用 **本地网络**

---

## 📞 当前网络信息

你的电脑 IP 地址：**192.168.1.86**

如果使用本地网络部署，手机访问地址为：
- `http://192.168.1.86:3000` （端口号取决于你使用的服务器）

---

## ⚠️ 注意事项

1. **确保手机和电脑在同一 WiFi**（本地网络方式）
2. **关闭防火墙或允许端口访问**（本地网络方式）
3. **使用 HTTPS**（Netlify 和 GitHub Pages 自动提供）

---

## 🆘 需要帮助？

如果遇到问题，请检查：
- [ ] 手机和电脑是否在同一 WiFi
- [ ] 防火墙是否阻止了访问
- [ ] IP 地址是否正确
- [ ] 端口号是否正确

祝你部署顺利！🎉
