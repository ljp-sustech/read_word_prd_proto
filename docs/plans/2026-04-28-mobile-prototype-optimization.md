# Mobile Prototype Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve the Yuezhengyi mobile wisdom-reading HTML prototype so it is clearer for review walkthroughs while feeling closer to a real mobile product.

**Architecture:** Keep the existing single-file static prototype. Refine CSS and markup inside `mobile_prototype/output/index.html`, preserving the current state-switching JavaScript and no-build workflow.

**Tech Stack:** Plain HTML, CSS, and JavaScript.

---

### Task 1: Clarify Review Walkthrough

**Files:**
- Modify: `mobile_prototype/output/index.html`

**Steps:**
1. Rename the floating state controls to read like a review walkthrough rather than debug tabs.
2. Move the walkthrough controls so they do not overlap the input composer.
3. Add concise state labels that map to the PRD flow: 首页、上传、反问、总结、问答.

### Task 2: Improve Real Mobile Product Feel

**Files:**
- Modify: `mobile_prototype/output/index.html`

**Steps:**
1. Tighten the top navigation, chat spacing, cards, and message bubbles.
2. Reduce oversized text in the phone viewport and make long copy wrap cleanly.
3. Make the file card, AI result cards, quote tags, and ability buttons visually consistent.

### Task 3: Strengthen Wisdom-Reading Flow Cues

**Files:**
- Modify: `mobile_prototype/output/index.html`

**Steps:**
1. Add lightweight process chips in relevant states: 意图识别、文档解析、引用溯源、猜你想问.
2. Make the bottom ability sheet read like the entry for the full capability.
3. Keep the fixed-template追问 mechanism visible in summary and QA states.

### Task 4: Verify

**Files:**
- Verify: `mobile_prototype/output/index.html`

**Steps:**
1. Open the HTML through a local static server or browser path.
2. Capture desktop review and mobile-width screenshots.
3. Confirm no key text overlaps the input area, state controls, or phone frame.
