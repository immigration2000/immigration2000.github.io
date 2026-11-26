"use strict";
(() => {
  const cols = 8, rows = 6;
  const types = { tool: { w: 2, h: 3, name: "도구", symbol: "▥" }, kit: { w: 2, h: 2, name: "키트", symbol: "+" }, cell: { w: 1, h: 2, name: "모듈", symbol: "Ⅱ" } };
  const grid = document.querySelector("#inventory-grid");
  const select = document.querySelector("#item-type");
  const rotate = document.querySelector("#rotate");
  const status = document.querySelector("#demo-status");
  let rotated = false;
  let items = [];
  function render() {
    grid.replaceChildren();
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.setProperty("--x", x + 1); cell.style.setProperty("--y", y + 1);
      cell.setAttribute("aria-hidden", "true"); grid.append(cell);
    }
    for (const item of items) {
      const el = document.createElement("div"); el.className = `grid-item ${item.type}`;
      for (const [key, value] of Object.entries({ x: item.x + 1, y: item.y + 1, w: item.w, h: item.h })) el.style.setProperty(`--${key}`, value);
      el.setAttribute("role", "img"); el.setAttribute("aria-label", `${types[item.type].name}, ${item.w}열 ${item.h}행, ${item.x + 1}열 ${item.y + 1}행에서 시작`);
      const symbol = document.createElement("span"); symbol.className = "item-symbol"; symbol.textContent = types[item.type].symbol;
      const label = document.createElement("span"); label.className = "item-label"; label.textContent = `${item.w} × ${item.h}`;
      el.append(symbol, label); grid.append(el);
    }
  }
  function fits(x, y, w, h) {
    return x + w <= cols && y + h <= rows && !items.some(i => x < i.x + i.w && x + w > i.x && y < i.y + i.h && y + h > i.y);
  }
  function reset() {
    items = [{ type: "tool", x: 0, y: 0, w: 2, h: 3 }, { type: "kit", x: 3, y: 0, w: 2, h: 2 }, { type: "cell", x: 7, y: 3, w: 1, h: 2 }];
    rotated = false; rotate.setAttribute("aria-pressed", "false"); select.value = "tool";
    render(); status.textContent = "아이템을 선택해 빈 공간에 배치해 보세요.";
  }
  rotate.addEventListener("click", () => {
    rotated = !rotated; rotate.setAttribute("aria-pressed", String(rotated));
    const item = types[select.value]; status.textContent = `${item.name}: ${rotated ? item.h : item.w} × ${rotated ? item.w : item.h} 크기로 배치합니다.`;
  });
  select.addEventListener("change", () => {
    const item = types[select.value]; status.textContent = `${item.name} 선택: ${rotated ? item.h : item.w} × ${rotated ? item.w : item.h}. 빈 공간에 배치 버튼을 눌러 주세요.`;
  });
  document.querySelector("#auto-place").addEventListener("click", () => {
    const item = types[select.value], w = rotated ? item.h : item.w, h = rotated ? item.w : item.h;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      if (!fits(x, y, w, h)) continue;
      items.push({ type: select.value, x, y, w, h }); render();
      const occupied = items.reduce((n, i) => n + i.w * i.h, 0);
      status.textContent = `${item.name} 배치 완료 · ${x + 1}열 ${y + 1}행 · 사용 ${occupied} / ${cols * rows}칸`;
      return;
    }
    status.textContent = "이 크기를 배치할 연속 공간이 없습니다. 회전하거나 다른 아이템을 선택해 보세요.";
  });
  document.querySelector("#reset-grid").addEventListener("click", reset);
  document.querySelector("#copy-email").addEventListener("click", async () => {
    const copyStatus = document.querySelector("#copy-status");
    try { await navigator.clipboard.writeText("immigration200057@gmail.com"); copyStatus.textContent = "이메일을 복사했습니다."; }
    catch { copyStatus.textContent = "이메일 주소를 선택해 복사하거나 이메일 링크를 눌러 주세요."; }
  });
  reset();
})();
