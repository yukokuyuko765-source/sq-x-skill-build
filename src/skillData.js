/**
 * 世界樹の迷宮X スキルデータ定義ファイル
 *
 * ===== 編集方法 =====
 *
 * 各クラスの skills 配列にスキルを追加してください。
 *
 * スキルのプロパティ:
 *   id            : スキルの一意識別子（英数字・アンダースコア）
 *   name          : スキル名（日本語OK）
 *   maxLevel      : 最大スキルレベル
 *   tier          : "novice" | "veteran" | "master"
 *   type          : "boost" | "break" | "active" | "passive"
 *   prerequisites : 前提スキル配列 [{ skillId: "前提スキルのid", level: 必要レベル }]
 *                   前提なしの場合は空配列 []
 */

export const SP_CONFIG = {
  initialSP: 3,
  spPerLevel: 1,
  maxLevel: 130,
};

export const SKILL_DATA = [
  {
    id: "hero",
    name: "ヒーロー",
    skills: [
      { id: "hero_afterimage", name: "残影", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "hero_mirage_sword", name: "ミラージュソード", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "hero_afterimage", level: 1 }] },
      { id: "hero_brave_wide", name: "ブレイブワイド", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "hero_ice_slash", name: "凍砕斬", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "hero_brave_wide", level: 1 }] },
      { id: "hero_encourage", name: "鼓舞", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "hero_heroic_bond", name: "勇者の絆", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "hero_encourage", level: 1 }] },
      { id: "hero_shield_arts", name: "シールドアーツ", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "hero_clearing_mind", name: "心頭滅却", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "hero_felling", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      { id: "hero_shadow_charge", name: "シャドウチャージ", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "hero_mirage_sword", level: 2 }] },
      { id: "hero_grace_shadow", name: "恵影", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hero_shadow_charge", level: 2 }] },
      { id: "hero_shock_spark", name: "ショックスパーク", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hero_ice_slash", level: 2 }] },
      { id: "hero_burst_blade", name: "バーストブレイド", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hero_shock_spark", level: 2 }] },
      { id: "hero_boost", name: "勇者の証", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "hero_heroic_bond", level: 2 }] },
      { id: "hero_great_courage", name: "大勇", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hero_boost", level: 1 }] },
      { id: "hero_shield_material", name: "シールドマテリア", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "hero_shield_arts", level: 2 }] },
      { id: "hero_heavy_hearted", name: "気負い", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "hero_clearing_mind", level: 1 }] },
      { id: "hero_new_challenge", name: "新たな強敵", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "hero_dense_shadow", name: "濃影", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "hero_grace_shadow", level: 3 }] },
      { id: "hero_act_breaker", name: "アクトブレイカー", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "hero_burst_blade", level: 2 }] },
      { id: "hero_regiment_rave", name: "レジメントレイブ", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "hero_act_breaker", level: 3 }] },
      { id: "hero_force_gifting", name: "フォースギフター", maxLevel: 6, tier: "master", prerequisites: [] },
      { id: "hero_force_saving", name: "フォースセーブ", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "hero_force_gifting", level: 3 }] },
      { id: "hero_guard_rush", name: "ガードラッシュ", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "hero_shield_material", level: 3 }] },
    ]
  },
  {
    id: "paladin",
    name: "パラディン",
    skills: [
      // NOVICE
      { id: "pal_front_guard", name: "フロントガード", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "pal_back_guard", name: "バックガード", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "pal_front_guard", level: 2 }] },
      { id: "pal_cell_divide", name: "セルディバイド", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "pal_konsin_defense", name: "渾身ディフェンス", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "pal_cell_divide", level: 2 }] },
      { id: "pal_shield_smite", name: "シールドスマイト", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "pal_provoke", name: "挑発", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "pal_preempt_provoke", name: "先制挑発", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "pal_provoke", level: 2 }] },
      { id: "pal_heal_wall", name: "ヒールウォール", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "pal_logging", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "pal_recovery_guard", name: "リカバリーガード", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "pal_back_guard", level: 1 }] },
      { id: "pal_resolve", name: "決死の覚悟", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "pal_konsin_defense", level: 1 }] },
      { id: "pal_shield_rush", name: "シールドラッシュ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "pal_shield_smite", level: 3 }] },
      { id: "pal_keep_guard", name: "キープガード", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pal_phys_def_boost", name: "物理防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "pal_elem_def_boost", name: "属性防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "pal_fire_guard", name: "ファイアガード", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pal_freeze_guard", name: "フリーズガード", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pal_shock_guard", name: "ショックガード", maxLevel: 6, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "pal_hp_boost", name: "HPブースト", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "pal_heal_guard", name: "ヒールガード", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "pal_recovery_guard", level: 2 }] },
      { id: "pal_line_divide", name: "ラインディバイド", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "pal_resolve", level: 3 }] },
      { id: "pal_auto_guard", name: "オートガード", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "pal_line_divide", level: 3 }] },
      { id: "pal_shield_flare", name: "シールドフレア", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "pal_shield_rush", level: 3 }] },
      { id: "pal_full_guard", name: "フルガード", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "pal_fire_guard", level: 2 }, { skillId: "pal_freeze_guard", level: 2 }, { skillId: "pal_shock_guard", level: 2 }] },
    ]
  },
  {
    id: "bushido",
    name: "ブシドー",
    skills: [
      // NOVICE
      { id: "bush_jodan", name: "上段の構え", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "bush_gyakukesa", name: "逆袈裟", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "bush_jodan", level: 1 }] },
      { id: "bush_seigan", name: "青眼の構え", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "bush_kantotsu", name: "貫突", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "bush_seigan", level: 1 }] },
      { id: "bush_iai", name: "居合の構え", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "bush_sayageki", name: "鞘撃", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "bush_iai", level: 1 }] },
      { id: "bush_kuujin", name: "空刃", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "bush_koteuchi", name: "小手討ち", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "bush_ibuki", name: "息吹", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "bush_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "bush_kabutowari", name: "兜割り", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "bush_gyakukesa", level: 1 }] },
      { id: "bush_oroshien", name: "卸し焔", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "bush_kabutowari", level: 3 }] },
      { id: "bush_kasumigiri", name: "霞斬り", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "bush_kantotsu", level: 1 }] },
      { id: "bush_raiyakutsuki", name: "雷躍突き", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "bush_kasumigiri", level: 3 }] },
      { id: "bush_yokoichimonji", name: "横一文字", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "bush_sayageki", level: 1 }] },
      { id: "bush_battou", name: "抜刀氷雪", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "bush_yokoichimonji", level: 3 }] },
      { id: "bush_hatashiai", name: "果し合い", maxLevel: 6, tier: "veteran", prerequisites: [{skillId: "bush_kuujin", level: 2}, {skillId: "bush_koteuchi", level: 2}] },
      { id: "bush_phys_boost", name: "物理攻撃ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "bush_tsubame", name: "ツバメがえし", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "bush_oroshien", level: 3 }] },
      { id: "bush_nibudooshi", name: "鈍通し", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "bush_raiyakutsuki", level: 3 }] },
      { id: "bush_sange", name: "散華", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "bush_battou", level: 3 }] },
      { id: "bush_menkyo", name: "免許皆伝", maxLevel: 10, tier: "master", prerequisites: [] },
      { id: "bush_senni", name: "戦意高揚", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "bush_menkyo", level: 2 }] },
      { id: "bush_speed_boost", name: "素早さブースト", maxLevel: 8, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "medic",
    name: "メディック",
    skills: [
      // NOVICE
      { id: "med_healing", name: "ヒーリング", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "med_line_heal", name: "ラインヒール", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "med_healing", level: 3 }] },
      { id: "med_aftercare", name: "戦後手当", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "med_antibody", name: "抗体", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "med_insight", name: "博識", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "med_refresh", name: "リフレッシュ", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "med_resurrection", name: "リザレクション", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "med_head_drop", name: "ヘッドドロップ", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "med_harvest", name: "採取", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "med_delay_heal", name: "ディレイヒール", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "med_line_heal", level: 2 }] },
      { id: "med_bind_recovery", name: "バインドリカバリ", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "med_refresh", level: 2 }] },
      { id: "med_mass_rescue", name: "一斉救護", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "med_bind_recovery", level: 1 }] },
      { id: "med_last_heal", name: "最後の癒し", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "med_resurrection", level: 3 }] },
      { id: "med_auto_resurrect", name: "オートリザレクト", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "med_last_heal", level: 2 }] },
      { id: "med_star_drop", name: "スタードロップ", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "med_head_drop", level: 3 }] },
      { id: "med_medical_rod", name: "メディカルロッド", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "med_star_drop", level: 2 }] },
      { id: "med_patrol", name: "警戒斥候", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "med_elem_def_boost", name: "属性防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "med_area_heal", name: "エリアヒール", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "med_delay_heal", level: 3 }] },
      { id: "med_chase_heal", name: "チェイスヒール", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "med_delay_heal", level: 3 }] },
      { id: "med_over_heal", name: "オーバーヒール", maxLevel: 6, tier: "master", prerequisites: [] },
      { id: "med_heal_dejavu", name: "ヒールデジャヴ", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "med_heavy_strike", name: "ヘヴィストライク", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "med_medical_rod", level: 3 }] },
      { id: "med_staff_mastery", name: "杖マスタリー", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "med_heavy_strike", level: 1 }] },
    ]
  },
  {
    id: "ranger",
    name: "レンジャー",
    skills: [
      // NOVICE
      { id: "rng_power_shot", name: "パワーショット", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "rng_flame_arrow", name: "フレイムアロー", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "rng_power_shot", level: 3 }] },
      { id: "rng_blind_arrow", name: "ブラインドアロー", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "rng_chain_dance", name: "チェインダンス", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "rng_blind_arrow", level: 3 }] },
      { id: "rng_vigilance", name: "警戒斥候", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "rng_danger_sense", name: "危機感知", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "rng_vigilance", level: 2 }] },
      { id: "rng_first_aid", name: "簡易手当", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "rng_resuscitate", name: "整頓術", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "rng_first_aid", level: 3 }] },
      { id: "rng_wild_instinct", name: "野生の勘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "rng_flank_shot", name: "フランクショット", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "rng_flame_arrow", level: 3 }] },
      { id: "rng_finishing_shot", name: "仕留めの一矢", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "rng_flank_shot", level: 3 }] },
      { id: "rng_double_shot", name: "ダブルショット", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "rng_flame_arrow", level: 3 }] },
      { id: "rng_drop_shot", name: "ドロップショット", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "rng_double_shot", level: 3 }] },
      { id: "rng_trick_step", name: "トリックステップ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "rng_chain_dance", level: 2 }] },
      { id: "rng_patrol", name: "警戒歩行", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "rng_danger_sense", level: 1 }] },
      { id: "rng_efficient", name: "エフィシエント", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "rng_speed_boost", name: "素早さブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "rng_others_step", name: "アザーズステップ", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "rng_speed_boost", level: 2 }] },
      // MASTER
      { id: "rng_aiming_foot", name: "エイミングフット", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "rng_finishing_shot", level: 1 }] },
      { id: "rng_sagittarius", name: "サジタリウスの矢", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "rng_drop_shot", level: 3 }] },
      { id: "rng_hail_arrow", name: "朧矢", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "rng_trick_step", level: 3 }] },
      { id: "rng_nature_blessing", name: "自然の恩恵", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "rng_patrol", level: 2 }] },
      { id: "rng_scapegoat", name: "スケープゴート", maxLevel: 6, tier: "master", prerequisites: [] },
      { id: "rng_miracle", name: "奇襲", maxLevel: 6, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "gunner",
    name: "ガンナー",
    skills: [
      // NOVICE
      { id: "gun_rapid_fire", name: "ラピッドファイア", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "gun_spread", name: "拡散弾", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "gun_rapid_fire", level: 3 }] },
      { id: "gun_leg_snipe", name: "レッグスナイプ", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "gun_arm_snipe", name: "アームスナイプ", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "gun_leg_snipe", level: 2 }] },
      { id: "gun_rear_support", name: "後方支援", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "gun_rear_disrupt", name: "後方撹乱", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "gun_rear_support", level: 2 }] },
      { id: "gun_drag_bullet", name: "ドラッグバレット", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "gun_flare", name: "照明弾", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "gun_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "gun_ricochet", name: "陽動射撃", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "gun_spread", level: 2 }] },
      { id: "gun_sweep", name: "掃射", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "gun_ricochet", level: 2 }] },
      { id: "gun_head_snipe", name: "ヘッドスナイプ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "gun_arm_snipe", level: 2 }] },
      { id: "gun_quick_act", name: "クイックアクト", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "gun_charge_shot", name: "チャージショット", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "gun_quick_act", level: 2 }] },
      { id: "gun_preempt_disrupt", name: "先制撹乱", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "gun_rear_disrupt", level: 1 }] },
      { id: "gun_preempt_flare", name: "先制照明弾", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "gun_flare", level: 2 }] },
      { id: "gun_penetrator", name: "ペネトレイター", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "gun_tp_boost", name: "TPブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "gun_ricochet2", name: "跳弾", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "gun_sweep", level: 2 }] },
      { id: "gun_charge_flame", name: "チャージフレイム", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "gun_charge_shot", level: 3 }] },
      { id: "gun_charge_ice", name: "チャージアイス", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "gun_charge_shot", level: 3 }] },
      { id: "gun_charge_thunder", name: "チャージサンダー", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "gun_charge_shot", level: 3 }] },
      { id: "gun_phys_atk_boost", name: "物理攻撃ブースト", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "gun_double_action", name: "ダブルアクション", maxLevel: 8, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "warmagus",
    name: "ドクトルマグス",
    skills: [
      // NOVICE
      { id: "wm_regenerate", name: "巫術：再生", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "wm_regen_sash", name: "巫術：再生帯", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "wm_regenerate", level: 2 }] },
      { id: "wm_disorder", name: "巫術：乱疫", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "wm_atk_decay", name: "巫剣：霊攻衰斬", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "wm_disorder", level: 1 }] },
      { id: "wm_def_decay", name: "巫剣：霊防衰斬", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "wm_disorder", level: 1 }] },
      { id: "wm_transfer", name: "巫術：転移", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "wm_absorb", name: "吸命", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "wm_sword_mastery", name: "巫剣マスタリー", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "wm_harvest", name: "採取", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "wm_soul_return", name: "巫術：反魂", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "wm_regen_sash", level: 3 }] },
      { id: "wm_pulse", name: "巫術：脈動", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "wm_soul_return", level: 2 }] },
      { id: "wm_response", name: "巫術：呼応", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "wm_soul_return", level: 2 }] },
      { id: "wm_head_seal", name: "巫剣：霊封頭斬", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "wm_atk_decay", level: 2 }] },
      { id: "wm_arm_seal", name: "巫剣：霊封腕斬", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "wm_def_decay", level: 2 }] },
      { id: "wm_leg_seal", name: "巫剣：霊封脚斬", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "wm_head_seal", level: 2 }, { skillId: "wm_arm_seal", level: 2 }] },
      { id: "wm_rally", name: "奮起", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "wm_absorb", level: 2 }] },
      { id: "wm_hp_boost", name: "HPブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "wm_ailment_def_boost", name: "抑制防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "wm_regen_field", name: "巫術：再生陣", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "wm_pulse", level: 2 }, { skillId: "wm_response", level: 2 }] },
      { id: "wm_barrier", name: "巫術：結界", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "wm_regen_field", level: 3 }] },
      { id: "wm_spirit_slash", name: "巫剣：霊攻大斬", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "wm_leg_seal", level: 3 }] },
      { id: "wm_spirit", name: "吸気", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "wm_rally", level: 2 }] },
      { id: "wm_epidemic", name: "発疫", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "wm_spirit", level: 3 }] },
      { id: "wm_phys_atk_boost", name: "物理攻撃ブースト", maxLevel: 8, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "highlander",
    name: "ハイランダー",
    skills: [
      // NOVICE
      { id: "hl_long_thrust", name: "ロングスラスト", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "hl_spear_impulse", name: "スピアインボルブ", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "hl_long_thrust", level: 2 }] },
      { id: "hl_harvest", name: "ハーベスト", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "hl_single_thrust", name: "シングルスラスト", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "hl_harvest", level: 2 }] },
      { id: "hl_legion_thrust", name: "レギオンスラスト", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "hl_harvest", level: 2 }] },
      { id: "hl_spirit_shield", name: "不可視の霊盾", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "hl_blood_veil", name: "ブラッドベール", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "hl_hp_boost", name: "HPブースト", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "hl_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "hl_brain_rend", name: "ブレインレンド", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "hl_spear_impulse", level: 3 }] },
      { id: "hl_single_burst", name: "シングルバースト", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hl_single_thrust", level: 2 }] },
      { id: "hl_legion_burst", name: "レギオンバースト", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hl_legion_thrust", level: 2 }] },
      { id: "hl_good_luck", name: "グッドラック", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hl_spirit_shield", level: 1}] },
      { id: "hl_defense_instinct", name: "防衛本能", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "hl_good_luck", level: 2 }] },
      { id: "hl_blood_weapon", name: "ブラッドウェポン", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "hl_blood_veil", level: 2 }] },
      { id: "hl_blood_rush", name: "血の暴走", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "hl_blood_weapon", level: 2 }] },
      { id: "hl_phys_def_boost", name: "物理防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "hl_delay_charge", name: "ディレイチャージ", maxLevel: 10, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "hl_spear_reversal", name: "スピアリバーサル", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "hl_brain_rend", level: 3 }] },
      { id: "hl_cross_charge", name: "クロスチャージ", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "hl_delay_charge", level: 2 }] },
      { id: "hl_legion_charge", name: "レギオンチャージ", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "hl_legion_burst", level: 3 }] },
      { id: "hl_bond_blessing", name: "絆の恩恵", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "hl_legion_charge", level: 2 }] },
      { id: "hl_black_sabbath", name: "ブラックサバス", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "hl_blood_rush", level: 3 }] },
      { id: "hl_phys_atk_boost", name: "物理攻撃ブースト", maxLevel: 8, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "prince",
    name: "プリンス/プリンセス",
    skills: [
      // NOVICE
      { id: "pr_atk_order", name: "攻撃の号令", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "pr_fire_arms", name: "ファイアアームズ", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "pr_atk_order", level: 2 }] },
      { id: "pr_freeze_arms", name: "フリーズアームズ", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "pr_atk_order", level: 2 }] },
      { id: "pr_shock_arms", name: "ショックアームズ", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "pr_atk_order", level: 2 }] },
      { id: "pr_def_order", name: "防御の号令", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "pr_reinforce", name: "リインフォース", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "pr_def_order", level: 2 }] },
      { id: "pr_royal_veil", name: "ロイヤルベール", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "pr_kings_march", name: "キングスマーチ", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "pr_royal_veil", level: 2 }] },
      { id: "pr_exchange", name: "エクスチェンジ", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "pr_harvest", name: "採取", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "pr_kings_awe", name: "王の威厳", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pr_royal_lineage", name: "王家の血統", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pr_element_bomb1", name: "エレメントボムI", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "pr_fire_arms", level: 1 }, { skillId: "pr_freeze_arms", level: 1 }, { skillId: "pr_shock_arms", level: 1 }] },
      { id: "pr_morale_order", name: "覇気の号令", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "pr_reinforce", level: 2 }] },
      { id: "pr_protect_order", name: "庇護の号令", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "pr_reinforce", level: 2 }] },
      { id: "pr_prevent_order", name: "予防の号令", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "pr_morale_order", level: 2 }, { skillId: "pr_protect_order", level: 2 }] },
      { id: "pr_pair_order", name: "ペアオーダー", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "pr_heal_order", name: "ヒールオーダー", maxLevel: 6, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "pr_ailment_def_boost", name: "抑制防御ブースト", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "pr_element_bomb2", name: "エレメントボムII", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "pr_element_bomb1", level: 3 }] },
      { id: "pr_clearance", name: "クリアランス", maxLevel: 4, tier: "master", prerequisites: [] },
      { id: "pr_unyield_order", name: "不屈の号令", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "pr_prevent_order", level: 1 }] },
      { id: "pr_last_order", name: "ラストオーダー", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "pr_pair_order", level: 2 }, { skillId: "pr_heal_order", level: 2 }] },
      { id: "pr_reorder", name: "リオーダー", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "pr_last_order", level: 3 }] },
    ]
  },
  {
    id: "shogun",
    name: "ショーグン",
    skills: [
      // NOVICE
      { id: "sg_haraigatana", name: "払い弐刀", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "sg_kodamanagashi", name: "谺流し", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "sg_haraigatana", level: 2 }] },
      { id: "sg_zangetsu", name: "残月居合陣", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "sg_raikiri", name: "雷切", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "sg_mumyo", name: "無明の極", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "sg_daibushaer", name: "大武辺者", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "sg_shikaku", name: "刺客寄せ", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "sg_daibushaer", level: 2 }] },
      { id: "sg_morale", name: "士気回復", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "sg_harvest", name: "採取", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "sg_souen", name: "双燕", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "sg_kodamanagashi", level: 3 }] },
      { id: "sg_suetora", name: "据え虎の陣", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sg_zangetsu", level: 2 }] },
      { id: "sg_midareryuu", name: "乱れ竜の陣", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "sg_suetora", level: 2 }] },
      { id: "sg_myojo", name: "明星", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sg_raikiri", level: 3 }] },
      { id: "sg_katoki", name: "禍時", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sg_mumyo", level: 2 }] },
      { id: "sg_chizome", name: "血染めの朱槍", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sg_katoki", level: 2 }] },
      { id: "sg_kashisaisei", name: "仮死再生", maxLevel: 10, tier: "veteran", prerequisites: [] },
      { id: "sg_hichouotoshi", name: "飛鳥落とし", maxLevel: 10, tier: "veteran", prerequisites: [] },
      { id: "sg_seppuku", name: "切腹", maxLevel: 6, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "sg_gorin", name: "五輪の剣", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "sg_souen", level: 4 }] },
      { id: "sg_houfukushageki", name: "報復射撃陣", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "sg_midareryuu", level: 3 }] },
      { id: "sg_ikkitousen", name: "一騎当千", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "sg_houfukushageki", level: 2 }] },
      { id: "sg_kuriuchi", name: "崇り打ち", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "sg_chizome", level: 2 }] },
      { id: "sg_kaishaku", name: "介錯", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "sg_kuriuchi", level: 3 }] },
      { id: "sg_senjin_meiyo", name: "先陣の名誉", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "sg_kashisaisei", level: 2 }] },
    ]
  },
  {
    id: "zodiac",
    name: "ゾディアック",
    skills: [
      // NOVICE
      { id: "zod_ether_glow", name: "エーテルの輝き", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "zod_fire_star", name: "炎の星術", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "zod_ether_glow", level: 1 }] },
      { id: "zod_ice_star", name: "氷の星術", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "zod_ether_glow", level: 1 }] },
      { id: "zod_thunder_star", name: "雷の星術", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "zod_ether_glow", level: 1 }] },
      { id: "zod_singularity", name: "特異点定理", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "zod_ether_compress", name: "エーテル圧縮", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "zod_singularity", level: 3 }] },
      { id: "zod_return_ether", name: "リターンエーテル", maxLevel: 4, tier: "novice", prerequisites: [{ skillId: "zod_singularity", level: 3 }] },
      { id: "zod_stargazing", name: "星体観測", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "zod_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "zod_ether_master", name: "エーテルマスター", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "zod_tp_boost", name: "TPブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "zod_fire_chain", name: "炎の連星術", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "zod_fire_star", level: 3 }] },
      { id: "zod_ice_chain", name: "氷の連星術", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "zod_ice_star", level: 3 }] },
      { id: "zod_thunder_chain", name: "雷の連星術", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "zod_thunder_star", level: 3 }] },
      { id: "zod_rest_ether", name: "レストアエーテル", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "zod_ether_compress", level: 2 }] },
      { id: "zod_anti_ether", name: "アンチエーテル", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "zod_rest_ether", level: 2 }] },
      { id: "zod_dark_ether", name: "ダークエーテル", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "zod_return_ether", level: 2 }] },
      { id: "zod_ether_shoot", name: "エーテルシュート", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "zod_dark_ether", level: 2 }] },
      // MASTER
      { id: "zod_fire_prophet", name: "炎の先見術", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "zod_fire_chain", level: 2 }] },
      { id: "zod_ice_prophet", name: "氷の先見術", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "zod_ice_chain", level: 2 }] },
      { id: "zod_thunder_prophet", name: "雷の先見術", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "zod_thunder_chain", level: 2 }] },
      { id: "zod_tp_cut", name: "TPカット", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "zod_fire_prophet", level: 1 }, { skillId: "zod_ice_prophet", level: 1 }, { skillId: "zod_thunder_prophet", level: 1 }] },
      { id: "zod_multi_ether", name: "多段式エーテル", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "zod_anti_ether", level: 2 }] },
      { id: "zod_meteor", name: "メテオ", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "zod_ether_shoot", level: 2 }, { skillId: "zod_stargazing", level: 3 }] },
    ]
  },
  {
    id: "shinobi",
    name: "シノビ",
    skills: [
      // NOVICE
      { id: "snb_fukibari", name: "忍法　含針", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "snb_makibishi", name: "忍法　撒菱", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "snb_fukibari", level: 3 }] },
      { id: "snb_kagenui", name: "影縫", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "snb_honekudaki", name: "骨砕き", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "snb_kagenui", level: 3 }] },
      { id: "snb_keigyo", name: "軽業", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "snb_senpuku", name: "潜伏", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "snb_keigyo", level: 2 }] },
      { id: "snb_yoen", name: "忍法　陽炎", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "snb_shinobi_heart", name: "忍びの心得", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "snb_logging", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "snb_mizukagami", name: "忍法　水鏡", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "snb_makibishi", level: 2 }] },
      { id: "snb_izuna", name: "飯綱", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "snb_honekudaki", level: 2 }] },
      { id: "snb_takanoha", name: "鷹乃羽", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "snb_izuna", level: 3 }] },
      { id: "snb_nikudan", name: "肉弾", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "snb_bunshin", name: "忍法　分身", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "snb_nikudan", level: 2 }] },
      { id: "snb_kubikiri", name: "首切", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "snb_senpuku", level: 3 }] },
      { id: "snb_entobi", name: "忍法　猿飛", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "snb_kubikiri", level: 2 }] },
      { id: "snb_preempt_yoen", name: "先制陽炎", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "snb_yoen", level: 2 }] },
      { id: "snb_ailment_boost", name: "抑制攻撃ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "snb_kyounin", name: "忍法　驚忍", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "snb_mizukagami", level: 2 }] },
      { id: "snb_igaeshi", name: "意趣返し", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "snb_kyounin", level: 2 }] },
      { id: "snb_kosaienka", name: "幸災楽禍", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "snb_takanoha", level: 2 }] },
      { id: "snb_tagen_nuki", name: "多元抜刀", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "snb_kosaienka", level: 2 }, { skillId: "snb_bunshin", level: 2 }] },
      { id: "snb_unkai", name: "忍法　雲隠", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "snb_entobi", level: 2 }] },
      { id: "snb_kemuri", name: "煙りの末", maxLevel: 4, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "farmer",
    name: "ファーマー",
    skills: [
      // NOVICE
      { id: "fm_kega", name: "怪我の功名", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "fm_fushigi", name: "不思議な種", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "fm_kega", level: 1 }] },
      { id: "fm_nakazu", name: "鳴かずば討たれず", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "fm_kega", level: 1 }] },
      { id: "fm_tanchi", name: "探知マスター", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "fm_tansaku", name: "探索術", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "fm_tanchi", level: 2 }] },
      { id: "fm_moushin", name: "猛進逃走", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "fm_oukyu", name: "応急蘇生", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "fm_daishizen", name: "大自然の恵み", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "fm_shukaku", name: "収穫マスター", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "fm_yowari", name: "弱り目に祟り目", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "fm_fushigi", level: 3 }, { skillId: "fm_nakazu", level: 1 }] },
      { id: "fm_gobun", name: "五分の魂", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "fm_yowari", level: 2 }] },
      { id: "fm_mokke", name: "もっけの幸い", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "fm_tansaku", level: 3 }] },
      { id: "fm_kaitai", name: "解体マスター", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "fm_amenimo", name: "アメニモマケズ", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "fm_moushin", level: 1 }] },
      { id: "fm_anzen", name: "安全歩行", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "fm_amenimo", level: 2 }] },
      { id: "fm_onwake", name: "御裾分け", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "fm_kowai", name: "怖いもの知らず", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "fm_seizon", name: "生存の知恵", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "fm_daishizen", level: 3 }] },
      // MASTER
      { id: "fm_komori", name: "子守唄", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "fm_gobun", level: 2 }] },
      { id: "fm_rousaku", name: "労作歌", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "fm_komori", level: 3 }] },
      { id: "fm_kaitai_megumi", name: "解体の恩恵", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "fm_kaitai", level: 2 }] },
      { id: "fm_shukaku_sai", name: "収穫祭", maxLevel: 10, tier: "master", prerequisites: [] },
      { id: "fm_shizen_megumi", name: "自然の恩恵", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "fm_seizon", level: 2 }] },
      { id: "fm_nimousaku", name: "二毛作", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "fm_shizen_megumi", level: 2 }] },
    ]
  },
  {
    id: "swordman",
    name: "ソードマン",
    skills: [
      // NOVICE
      { id: "sw_kenshi", name: "剣士の心得", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "sw_sonic_raid", name: "ソニックレイド", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "sw_link_flame", name: "リンクフレイム", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "sw_link_freeze", name: "リンクフリーズ", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "sw_link_thunder", name: "リンクサンダー", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "sw_vanguard", name: "ヴァンガード", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "sw_power_break", name: "パワーブレイク", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "sw_phys_def_boost", name: "物理防御ブースト", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "sw_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "sw_double_strike", name: "ダブルストライク", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "sw_sonic_raid", level: 2 }] },
      { id: "sw_round_sword", name: "ラウンドソード", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "sw_double_strike", level: 3 }] },
      { id: "sw_penetrate", name: "ペネトレイト", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "sw_double_strike", level: 3 }] },
      { id: "sw_link_plus", name: "リンクプラス", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "sw_link_flame", level: 3 }, { skillId: "sw_link_freeze", level: 3 }, { skillId: "sw_link_thunder", level: 3 }] },
      { id: "sw_link_smash", name: "リンクスマッシュ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "sw_link_plus", level: 1 }] },
      { id: "sw_guard_break", name: "ガードブレイク", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sw_power_break", level: 2 }] },
      { id: "sw_speed_break", name: "スピードブレイク", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "sw_guard_break", level: 2 }] },
      { id: "sw_sakigake", name: "先駆けの功名", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "sw_ailment_def_boost", name: "抑制防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "sw_sword_tempest", name: "ソードテンペスト", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "sw_round_sword", level: 2 }] },
      { id: "sw_hayabusa", name: "ハヤブサ突き", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "sw_penetrate", level: 2 }] },
      { id: "sw_link_mastery", name: "リンクマスタリ", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "sw_link_smash", level: 2 }] },
      { id: "sw_link_end", name: "リンクエンド", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "sw_link_mastery", level: 2 }] },
      { id: "sw_full_break", name: "フルブレイク", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "sw_speed_break", level: 2 }] },
      { id: "sw_single_depot", name: "シングルデボート", maxLevel: 6, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "nightseeker",
    name: "ナイトシーカー",
    skills: [
      // NOVICE
      { id: "ns_blind_throw", name: "盲目の投刃", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "ns_sleep_throw", name: "睡眠の投刃", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "ns_blind_throw", level: 2 }] },
      { id: "ns_hide_cloak", name: "ハイドクローク", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "ns_delay_stab", name: "ディレイスタブ", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "ns_hide_cloak", level: 1 }] },
      { id: "ns_ice_splash", name: "アイスプラッシュ", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "ns_thief_heart", name: "夜賊の心得", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "ns_decoy_sign", name: "デコイサイン", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "ns_shadow_blade", name: "追影の刃", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "ns_logging", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "ns_curse_throw", name: "呪いの投刃", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "ns_sleep_throw", level: 3 }] },
      { id: "ns_para_throw", name: "麻痺の投刃", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "ns_curse_throw", level: 2 }] },
      { id: "ns_shadow_bite", name: "シャドウバイト", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "ns_sleep_throw", level: 3 }] },
      { id: "ns_preempt_cloak", name: "先制クローク", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "ns_delay_stab", level: 2 }] },
      { id: "ns_back_stab", name: "バックスタブ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "ns_preempt_cloak", level: 2 }] },
      { id: "ns_surprise", name: "奇襲", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "ns_thief_heart", level: 2 }] },
      { id: "ns_dark_mastery", name: "闇討マスタリ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "ns_surprise", level: 2 }] },
      { id: "ns_speed_boost", name: "素早さブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "ns_spread_throw", name: "スプレッドスロー", maxLevel: 4, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "ns_deadly_throw", name: "猛毒の投刃", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "ns_para_throw", level: 2 }] },
      { id: "ns_swift_sword", name: "スウィフトソード", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "ns_shadow_bite", level: 3 }] },
      { id: "ns_assassination", name: "アサシネイション", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "ns_back_stab", level: 3 }] },
      { id: "ns_return_cloak", name: "リターンクローク", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "ns_assassination", level: 3 }] },
      { id: "ns_shadow_zan", name: "追影の残滓", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "ns_shadow_blade", level: 4 }] },
      { id: "ns_preempt_spread", name: "先制スプレッド", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "ns_spread_throw", level: 2 }] },
    ]
  },
  {
    id: "mystic",
    name: "ミスティック",
    skills: [
      // NOVICE
      { id: "my_kaifuku", name: "陣回復", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "my_myaku_kassei", name: "破陣：命脈活性", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "my_kaifuku", level: 1 }] },
      { id: "my_wanfuu", name: "腕封の方陣", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "my_ashifuu", name: "脚封の方陣", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "my_wanfuu", level: 2 }] },
      { id: "my_mahi", name: "麻痺の方陣", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "my_noroi", name: "呪いの方陣", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "my_mahi", level: 2 }] },
      { id: "my_kaifuku_hokou", name: "回復歩行", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "my_houjinshi", name: "方陣師の心得", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "my_harvest", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "my_saiki_kassei", name: "破陣：再起活性", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "my_myaku_kassei", level: 2 }] },
      { id: "my_akuukouha", name: "破陣：亜空絞破", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "my_saiki_kassei", level: 3 }] },
      { id: "my_atamafuu", name: "頭封の方陣", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "my_ashifuu", level: 2 }] },
      { id: "my_suimin", name: "催眠の方陣", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "my_noroi", level: 2 }] },
      { id: "my_miryou", name: "魅了の邪眼", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "my_suijaku", name: "衰身の邪眼", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "my_miryou", level: 2 }] },
      { id: "my_ailment_boost", name: "抑制攻撃ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "my_chimyaku", name: "地脈操作", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "my_taima", name: "退魔の霧", maxLevel: 4, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "my_akuu_meido", name: "破陣：亜空鳴動", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "my_akuukouha", level: 2 }] },
      { id: "my_houjin_mastery", name: "方陣マスタリ", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "my_akuu_meido", level: 3 }] },
      { id: "my_doku", name: "毒の方陣", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "my_suimin", level: 2 }] },
      { id: "my_genwaku", name: "幻惑の方陣", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "my_suimin", level: 2 }] },
      { id: "my_daichi", name: "破陣：大地振盪", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "my_doku", level: 3 }, { skillId: "my_genwaku", level: 3 }] },
      { id: "my_tp_return", name: "TPリターン", maxLevel: 4, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "imperial",
    name: "インペリアル",
    skills: [
      // NOVICE
      { id: "imp_sharp_edge", name: "シャープエッジ", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "imp_natural_edge", name: "ナチュラルエッジ", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "imp_blood_edge", name: "ブラッドエッジ", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "imp_sharp_edge", level: 2 }, { skillId: "imp_natural_edge", level: 2 }] },
      { id: "imp_rear_guard", name: "リアガード", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "imp_assault_drive", name: "アサルトドライブ", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "imp_force_exhaust", name: "強制排熱", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "imp_assault_drive", level: 3 }] },
      { id: "imp_overheat_guard", name: "過熱の守り", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "imp_assault_drive", level: 3 }] },
      { id: "imp_avenger", name: "アベンジャー", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "imp_mining", name: "採掘", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "imp_massive_edge", name: "マッシブエッジ", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "imp_blood_edge", level: 3 }] },
      { id: "imp_cool_edge", name: "クールエッジ", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "imp_massive_edge", level: 2 }] },
      { id: "imp_trip_edge", name: "トリップエッジ", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "imp_blood_edge", level: 3 }] },
      { id: "imp_impulse_edge", name: "インパルスエッジ", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "imp_trip_edge", level: 2 }] },
      { id: "imp_intercooler", name: "インタークーラー", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "imp_force_exhaust", level: 1 }, { skillId: "imp_overheat_guard", level: 1 }] },
      { id: "imp_flame_drive", name: "フレイムドライブ", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "imp_intercooler", level: 3 }] },
      { id: "imp_freeze_drive", name: "フリーズドライブ", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "imp_intercooler", level: 3 }] },
      { id: "imp_shock_drive", name: "ショックドライブ", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "imp_intercooler", level: 3 }] },
      { id: "imp_ailment_def_boost", name: "抑制防御ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "imp_charge_edge", name: "チャージエッジ", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "imp_cool_edge", level: 2 }] },
      { id: "imp_force_edge", name: "フォースエッジ", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "imp_impulse_edge", level: 2 }] },
      { id: "imp_hp_boost", name: "HPブースト", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "imp_accel_drive", name: "アクセルドライブ", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "imp_flame_drive", level: 1 }, { skillId: "imp_freeze_drive", level: 1 }, { skillId: "imp_shock_drive", level: 1 }] },
      { id: "imp_converter", name: "コンバーター", maxLevel: 4, tier: "master", prerequisites: [] },
      { id: "imp_elem_atk_boost", name: "属性攻撃ブースト", maxLevel: 8, tier: "master", prerequisites: [] },
    ]
  },
  {
    id: "cestus",
    name: "セスタス",
    skills: [
      // NOVICE
      { id: "cs_flicker", name: "フリッカー", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "cs_arm_break", name: "アームブレイク", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "cs_river_blow", name: "リバーブロー", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "cs_one_two", name: "ワンツー", maxLevel: 10, tier: "novice", prerequisites: [{ skillId: "cs_flicker", level: 2 }, { skillId: "cs_arm_break", level: 2 }, { skillId: "cs_river_blow", level: 2 }] },
      { id: "cs_corkscrew", name: "コークスクリュー", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "cs_adrenaline", name: "アドレナリン", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "cs_double_punch", name: "ダブルパンチ", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "cs_hp_boost", name: "HPブースト", maxLevel: 8, tier: "novice", prerequisites: [] },
      { id: "cs_logging", name: "伐採", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "cs_onijinken", name: "鬼人拳", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "cs_toukon", name: "闘魂", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "cs_onijinken", level: 3 }] },
      { id: "cs_oiuchi", name: "追い撃ち", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "cs_one_two", level: 2 }, { skillId: "cs_corkscrew", level: 2 }] },
      { id: "cs_lead_blow", name: "リードブロー", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "cs_oiuchi", level: 2 }] },
      { id: "cs_interval", name: "インターバル", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "cs_arm_block", name: "アームブロック", maxLevel: 4, tier: "veteran", prerequisites: [] },
      { id: "cs_clinch", name: "クリンチ", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "cs_interval", level: 1 }, { skillId: "cs_arm_block", level: 1 }] },
      { id: "cs_ailment_boost", name: "抑制攻撃ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      { id: "cs_cross_counter", name: "クロスカウンター", maxLevel: 6, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "cs_raijinken", name: "雷神拳", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "cs_toukon", level: 2 }] },
      { id: "cs_rush_out", name: "ラッシュアウト", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "cs_lead_blow", level: 3 }] },
      { id: "cs_meisou", name: "瞑想", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "cs_clinch", level: 3 }] },
      { id: "cs_doha", name: "怒濤", maxLevel: 10, tier: "master", prerequisites: [{ skillId: "cs_meisou", level: 2 }] },
      { id: "cs_million_rush", name: "ミリオンラッシュ", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "cs_resonance", name: "レゾナンスブロー", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "cs_million_rush", level: 3 }] },
    ]
  },
  {
    id: "reaper",
    name: "リーパー",
    skills: [
      // NOVICE
      { id: "rp_sakujaku", name: "削弱の瘴気", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "rp_senjaku", name: "繊弱の瘴気", maxLevel: 10, tier: "novice", prerequisites: [] },
      { id: "rp_donjaku", name: "鈍弱の瘴気", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "rp_sakujaku", level: 2 }, { skillId: "rp_senjaku", level: 2 }] },
      { id: "rp_teishi", name: "痺止の鎌", maxLevel: 6, tier: "novice", prerequisites: [] },
      { id: "rp_sandoku", name: "惨毒の鎌", maxLevel: 6, tier: "novice", prerequisites: [{ skillId: "rp_teishi", level: 3 }] },
      { id: "rp_shouki_heisou", name: "瘴気の兵装", maxLevel: 4, tier: "novice", prerequisites: [] },
      { id: "rp_owarinaki", name: "終わりなき衣", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "rp_shouki_heisou", level: 2 }] },
      { id: "rp_tsugunai", name: "贖いの血", maxLevel: 8, tier: "novice", prerequisites: [{ skillId: "rp_shouki_heisou", level: 2 }] },
      { id: "rp_harvest", name: "採取", maxLevel: 1, tier: "novice", prerequisites: [] },
      // VETERAN
      { id: "rp_kyojaku", name: "虚弱の瘴気", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "rp_donjaku", level: 3 }] },
      { id: "rp_bakujaku", name: "縛弱の瘴気", maxLevel: 10, tier: "veteran", prerequisites: [{ skillId: "rp_kyojaku", level: 3 }] },
      { id: "rp_shinkan", name: "深闇の鎌", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "rp_sandoku", level: 2 }] },
      { id: "rp_fukuran", name: "禍乱の鎌", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "rp_shinkan", level: 3 }] },
      { id: "rp_kuroki", name: "黒き衣", maxLevel: 8, tier: "veteran", prerequisites: [{ skillId: "rp_owarinaki", level: 1 }] },
      { id: "rp_tamashii", name: "魂転移", maxLevel: 6, tier: "veteran", prerequisites: [{ skillId: "rp_tsugunai", level: 3 }] },
      { id: "rp_kuroki_hadou", name: "黒き波動", maxLevel: 4, tier: "veteran", prerequisites: [{ skillId: "rp_tamashii", level: 1 }] },
      { id: "rp_seiki", name: "生気吸収", maxLevel: 6, tier: "veteran", prerequisites: [] },
      { id: "rp_ailment_boost", name: "抑制攻撃ブースト", maxLevel: 8, tier: "veteran", prerequisites: [] },
      // MASTER
      { id: "rp_shi_taisei", name: "死の耐性", maxLevel: 8, tier: "master", prerequisites: [] },
      { id: "rp_houmatsu", name: "泡沫の鎌", maxLevel: 10, tier: "master", prerequisites: [] },
      { id: "rp_shi_no_kama", name: "死の鎌", maxLevel: 8, tier: "master", prerequisites: [{ skillId: "rp_fukuran", level: 2 }] },
      { id: "rp_shouki_bouheki", name: "瘴気の防壁", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "rp_kuroki_hadou", level: 1 }] },
      { id: "rp_reikon_kochaku", name: "霊魂固着", maxLevel: 6, tier: "master", prerequisites: [{ skillId: "rp_kuroki_hadou", level: 1 }] },
      { id: "rp_shouki_zanryuu", name: "瘴気残留", maxLevel: 4, tier: "master", prerequisites: [{ skillId: "rp_shouki_bouheki", level: 2 }, { skillId: "rp_reikon_kochaku", level: 2 }] },
    ]
  },
];
