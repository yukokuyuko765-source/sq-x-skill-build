import React, { useState, useMemo } from "react";

const MAX_SLOTS = 60;

export default function SaveModal({ isOpen, mode, savedBuilds, onSave, onLoad, onDelete, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // 60スロット分の配列を作成（空きスロットはnull）
  const slots = useMemo(() => {
    const arr = new Array(MAX_SLOTS).fill(null);
    for (const b of savedBuilds) {
      if (typeof b.slot === "number" && b.slot >= 0 && b.slot < MAX_SLOTS) {
        arr[b.slot] = b;
      }
    }
    return arr;
  }, [savedBuilds]);

  if (!isOpen) return null;

  const isSaveMode = mode === "save";
  const selected = selectedSlot !== null ? slots[selectedSlot] : null;

  const handleAction = () => {
    if (selectedSlot === null) return;
    if (isSaveMode) {
      onSave(selectedSlot);
    } else {
      if (selected) onLoad(selected);
    }
    setSelectedSlot(null);
  };

  const handleDelete = () => {
    if (selectedSlot === null || !selected) return;
    if (confirm(`スロット${selectedSlot + 1}「${selected.name}」を削除しますか？`)) {
      onDelete(selectedSlot);
      setSelectedSlot(null);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isSaveMode ? "保存先スロットを選択" : "読み込むスロットを選択"}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="slot-grid">
          {slots.map((slot, i) => (
            <div
              key={i}
              className={`slot-item ${selectedSlot === i ? "selected" : ""} ${slot ? "occupied" : "empty"}`}
              onClick={() => setSelectedSlot(i)}
            >
              <span className="slot-number">{i + 1}</span>
              {slot ? (
                <div className="slot-info">
                  <span className="slot-name">{slot.name}</span>
                  <span className="slot-class">{slot.classId}{slot.subClassId ? ` / ${slot.subClassId}` : ""}</span>
                </div>
              ) : (
                <span className="slot-empty-label">---</span>
              )}
            </div>
          ))}
        </div>
        <div className="modal-actions">
          {isSaveMode ? (
            <button
              className="btn modal-btn"
              disabled={selectedSlot === null}
              onClick={handleAction}
            >
              {selected ? "上書き保存" : "保存"}
            </button>
          ) : (
            <button
              className="btn modal-btn"
              disabled={selectedSlot === null || !selected}
              onClick={handleAction}
            >
              読み込み
            </button>
          )}
          <button
            className="btn danger modal-btn"
            disabled={selectedSlot === null || !selected}
            onClick={handleDelete}
          >
            削除
          </button>
          <button className="btn modal-btn" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  );
}
