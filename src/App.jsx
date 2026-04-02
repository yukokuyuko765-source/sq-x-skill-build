import React, { useState, useRef, useCallback } from "react";
import { SKILL_DATA, SP_CONFIG } from "./skillData";
import { useSkillBuild } from "./hooks/useSkillBuild";
import { useLayout } from "./hooks/useLayout";
import TierSection from "./components/TierSection";
import SkillLines from "./components/SkillLines";
import AllocationLog from "./components/AllocationLog";
import TableView from "./components/TableView";
import SaveModal from "./components/SaveModal";

const TIERS = [{ key: "novice" }, { key: "veteran" }, { key: "master" }];

export default function App() {
  const [classId, setClassId] = useState(SKILL_DATA[0]?.id || "");
  const [subClassId, setSubClassId] = useState("");
  const [viewMode, setViewMode] = useState("tree"); // "tree" | "table"
  const [modalState, setModalState] = useState({ open: false, mode: "save" });
  const [, setBuildListVersion] = useState(0);

  const classData = SKILL_DATA.find((c) => c.id === classId);
  const subClassData = subClassId ? SKILL_DATA.find((c) => c.id === subClassId) : null;

  const build = useSkillBuild(classData, subClassData);
  const mainLayout = useLayout(classData);
  const subLayout = useLayout(subClassData);
  const mainTreeRef = useRef(null);
  const subTreeRef = useRef(null);

  const handleClassChange = useCallback((id) => {
    setClassId(id);
    setSubClassId((prev) => (prev === id ? "" : prev));
  }, []);

  const handleSubClassChange = useCallback((id) => {
    setSubClassId(id);
  }, []);

  const openSaveModal = () => setModalState({ open: true, mode: "save" });
  const openLoadModal = () => setModalState({ open: true, mode: "load" });
  const closeModal = () => setModalState({ open: false, mode: "save" });

  const handleSaveToSlot = (slot) => {
    build.saveToSlot(slot, classId, subClassId);
    setBuildListVersion((v) => v + 1);
    closeModal();
  };

  const handleLoadFromSlot = (buildData) => {
    setClassId(buildData.classId);
    setSubClassId(buildData.subClassId || "");
    build.loadFromSlot(buildData);
    closeModal();
  };

  const handleDeleteSlot = (slot) => {
    build.deleteSlot(slot);
    setBuildListVersion((v) => v + 1);
  };

  const handleReset = () => {
    if (confirm("現在のビルドをリセットしますか？")) build.resetBuild();
  };

  const savedBuilds = build.getSavedBuilds();
  const mainEmpty = !classData || classData.skills.length === 0;
  const subEmpty = !subClassData || subClassData.skills.length === 0;

  const subClassOptions = SKILL_DATA.filter((c) => c.id !== classId);

  return (
    <div className="app">
      <div className="header">
        <h1>世界樹の迷宮X スキルビルドヒストリー</h1>
      </div>

      <div className="controls">
        <div className="control-group">
          <label>クラス:</label>
          <select value={classId} onChange={(e) => handleClassChange(e.target.value)}>
            {SKILL_DATA.map((cls) => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>サブクラス:</label>
          <select value={subClassId} onChange={(e) => handleSubClassChange(e.target.value)}>
            <option value="">なし</option>
            {subClassOptions.map((cls) => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>キャラ名:</label>
          <input
            type="text"
            placeholder="名前"
            value={build.characterName}
            onChange={(e) => build.setCharacterName(e.target.value)}
          />
        </div>
        <div className="control-group">
          <label>ボーナスSP:</label>
          <input
            type="number"
            min="0"
            value={build.bonusSP}
            onChange={(e) => build.setBonusSP(parseInt(e.target.value) || 0)}
          />
        </div>
        {build.loadedSlot !== null && (
          <span className="loaded-slot-info">スロット {build.loadedSlot + 1}</span>
        )}
      </div>

      <div className="slider-section">
        <div className="control-group">
          <label>Lv</label>
          <button
            className="btn-sm level-btn"
            disabled={build.currentLevel <= 1}
            onClick={() => build.setCurrentLevel(Math.max(1, build.currentLevel - 1))}
          >-</button>
          <span className="level-display">{build.currentLevel}</span>
          <button
            className="btn-sm level-btn"
            disabled={build.currentLevel >= SP_CONFIG.maxLevel}
            onClick={() => build.setCurrentLevel(Math.min(SP_CONFIG.maxLevel, build.currentLevel + 1))}
          >+</button>
        </div>
        <div className="slider-wrapper">
          <input
            type="range"
            min={1}
            max={SP_CONFIG.maxLevel}
            value={build.currentLevel}
            onChange={(e) => build.setCurrentLevel(parseInt(e.target.value))}
          />
        </div>
        <div className="sp-info">
          <span className="sp-total">総SP: {build.spInfo.total}</span>
          <span className="sp-used">使用: {build.spInfo.used}</span>
          <span className={`sp-remain${build.spInfo.remain < 0 ? " over" : ""}`}>
            残り: {build.spInfo.remain}
          </span>
          {build.spInfo.remain < 0 && (
            <span className="sp-over">超過: {Math.abs(build.spInfo.remain)}</span>
          )}
        </div>
      </div>

      {/* ビュー切り替え */}
      <div className="view-toggle">
        <button
          className={`view-toggle-btn ${viewMode === "tree" ? "active" : ""}`}
          onClick={() => setViewMode("tree")}
        >ツリー</button>
        <button
          className={`view-toggle-btn ${viewMode === "table" ? "active" : ""}`}
          onClick={() => setViewMode("table")}
        >テーブル</button>
      </div>

      {viewMode === "tree" ? (
        <>
          {/* メインクラス スキルツリー */}
          <div className="tree-label">メイン: {classData?.name || ""}</div>
          {mainEmpty ? (
            <div className="empty-state">
              このクラスにはまだスキルが登録されていません。<br />
              skillData.js を編集してスキルを追加してください。
            </div>
          ) : (
            <div className="skill-tree" ref={mainTreeRef}>
              {TIERS.map(({ key }) => (
                <TierSection
                  key={key}
                  tierKey={key}
                  skills={classData.skills.filter((s) => s.tier === key)}
                  layout={mainLayout}
                  currentLevel={build.currentLevel}
                  build={build}
                />
              ))}
              <SkillLines
                classData={classData}
                currentLevel={build.currentLevel}
                getSkillLevel={build.getSkillLevel}
                containerRef={mainTreeRef}
              />
            </div>
          )}

          {/* サブクラス スキルツリー */}
          {subClassData && (
            <>
              <div className="tree-label sub">サブ: {subClassData.name}（最大Lv 半分）</div>
              {subEmpty ? (
                <div className="empty-state">
                  このクラスにはまだスキルが登録されていません。<br />
                  skillData.js を編集してスキルを追加してください。
                </div>
              ) : (
                <div className="skill-tree" ref={subTreeRef}>
                  {TIERS.map(({ key }) => (
                    <TierSection
                      key={key}
                      tierKey={key}
                      skills={subClassData.skills.filter((s) => s.tier === key)}
                      layout={subLayout}
                      currentLevel={build.currentLevel}
                      build={build}
                      maxLevelScale={0.5}
                    />
                  ))}
                  <SkillLines
                    classData={subClassData}
                    currentLevel={build.currentLevel}
                    getSkillLevel={build.getSkillLevel}
                    containerRef={subTreeRef}
                  />
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <TableView
          classData={classData}
          subClassData={subClassData}
          build={build}
          maxLevelScale={0.5}
        />
      )}

      {/* 割り振り履歴 */}
      <AllocationLog
        allocations={build.allocations}
        classData={classData}
        subClassData={subClassData}
        currentLevel={build.currentLevel}
        onJumpToLevel={(lv) => build.setCurrentLevel(lv)}
      />

      <div className="actions">
        <button className="btn" onClick={openSaveModal}>保存</button>
        <button className="btn" onClick={openLoadModal}>読み込み</button>
        <button className="btn" onClick={() => build.exportBuild(classId, subClassId)}>エクスポート</button>
        <button className="btn" onClick={() => build.importBuild((id) => {
          handleClassChange(id);
        })}>インポート</button>
        <button className="btn danger" onClick={handleReset}>リセット</button>
      </div>

      <SaveModal
        isOpen={modalState.open}
        mode={modalState.mode}
        savedBuilds={savedBuilds}
        onSave={handleSaveToSlot}
        onLoad={handleLoadFromSlot}
        onDelete={handleDeleteSlot}
        onClose={closeModal}
      />
    </div>
  );
}
