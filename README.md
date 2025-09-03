<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ax-NET-02/History">
    <img src="images/icon/history.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">History 2.0</h3>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

  <p align="center">
    History 项目是一款用于记录和管理历史事件或条目的系统，支持电脑端和移动端浏览。
    <br />
    项目为个人开发者开发，更新可能较慢。
    <br />
    <a href="https://github.com/Ax-NET-02/History/issues/new?labels=bug&template=bug-report---.md">提交 Bug</a>
    ·
    <a href="https://github.com/Ax-NET-02/History/issues/new?labels=enhancement&template=feature-request---.md">提出功能需求</a>
  </p>
</div>

---

## 关于本项目

History 项目是一个轻量级的历史记录管理系统，提供简单的商品/条目选择、购物车、结算和订单管理功能，支持多页面数据同步和移动端浏览。

### 项目特点
- 支持电脑端与移动端浏览
- 实时管理历史条目数量与总价
- 购物车功能，保留用户选择
- 提交订单时填写收货信息
- 数据在会话内共享，页面跳转自动保持状态
- 使用 Vant 组件库，界面简洁易用

---

## 功能模块

### 1. 条目管理
- 查看历史条目（商品、日志等）
- 增加或减少条目数量
- 查看条目详细信息

### 2. 购物车
- 添加条目到购物车
- 修改数量
- 实时显示购物车总数量和总价
- 支持前往结算页面查看已选条目

### 3. 结算与订单
- 填写收货信息（姓名、电话、地址）
- 查看购物车所有条目和总价
- 提交订单并清空购物车
- 页面跳转自动保持条目选择状态
- 刷新结算页面时自动跳转回主界面

### 4. 状态管理
- 使用 Pinia 管理购物车状态
- 商品数量、总价、购物车内容在不同页面共享

### 5. UI 与交互
- 商品数量 +/- 按钮实时更新
- 价格显示红色，重要信息强调
- 简单响应式布局，适配移动端

---

## 联系方式

[Ax-NET](https://mail.google.com/) - xiaodian021@gmail.com

---

## 许可证

本项目根据 **GPL v3.0** 许可证分发。打开 `LICENSE` 查看更多信息。

---

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Ax-NET-02/History.svg?style=for-the-badge
[contributors-url]: https://github.com/Ax-NET-02/History/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Ax-NET-02/History.svg?style=for-the-badge
[forks-url]: https://github.com/Ax-NET-02/History/network/members
[stars-shield]: https://img.shields.io/github/stars/Ax-NET-02/History.svg?style=for-the-badge
[stars-url]: https://github.com/Ax-NET-02/History/stargazers
[issues-shield]: https://img.shields.io/github/issues/Ax-NET-02/History.svg?style=for-the-badge
[issues-url]: https://github.com/Ax-NET-02/History/issues
[license-shield]: https://img.shields.io/github/license/Ax-NET-02/History.svg?style=for-the-badge
