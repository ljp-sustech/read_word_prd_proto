# PC Prototype Demand Judgement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the PC wisdom-reading prototype with the PRD position that intent recognition is a background judgement mechanism, not a user-facing function.

**Architecture:** Keep the existing single-file static HTML prototype. Update copy and labels in `PC_prototype/index.html`, then regenerate the review screenshot.

**Tech Stack:** Plain HTML, CSS, and JavaScript.

---

### Task 1: Update User-Facing Copy

**Files:**
- Modify: `PC_prototype/index.html`

**Steps:**
1. Replace user-facing “意图识别/低置信度/意图不明确” wording with “自动判断处理需求/处理目标不明确/反问确认”.
2. Keep “中枢意图识别智能体” only where it clearly describes backend collaboration.
3. Update review rail tags, panel status, upload guide, clarify screen, QA note, and flow overview.

### Task 2: Verify Prototype

**Files:**
- Verify: `PC_prototype/index.html`
- Update screenshot: `PC_prototype/prototype-check-clean.png`

**Steps:**
1. Search the HTML for obsolete user-facing terms.
2. Generate a fresh Edge headless screenshot.
3. Inspect the screenshot for layout regressions.
