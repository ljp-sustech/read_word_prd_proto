# Mobile 智慧读文 Prototype Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a mobile HTML prototype for the 粤政易 AI 办公助手智慧读文 flow.

**Architecture:** Single static HTML file under `mobile_prototype/output/index.html`. The prototype recreates the Yuezhengyi mobile UI style without embedding watermarked screenshots, and uses tab-like state buttons for review walkthrough.

**Tech Stack:** Plain HTML, CSS, and JavaScript.

---

### Task 1: Create Mobile Prototype

**Files:**
- Create: `mobile_prototype/output/index.html`

**Steps:**
1. Build a phone-frame layout with Yuezhengyi-style blue header, tabs, chat area, and bottom input area.
2. Add a Doubao-style ability button row above the input box, including `智慧读文`.
3. Add state views: 首页入口、能力面板、反问确认、全文总结、文档问答、猜你想问.
4. Add JS state switching for review presentation.
5. Verify with headless browser screenshot.

