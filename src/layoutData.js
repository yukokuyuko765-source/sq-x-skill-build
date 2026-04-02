/**
 * スキルの表示位置定義ファイル
 *
 * スキルデータ(skillData.js)とは独立して、各スキルの表示位置を管理します。
 *
 * 構造:
 *   LAYOUT_DATA[クラスID][スキルID] = { col, row }
 *
 *   col : 同一ティア内でのカラム位置（0始まり、左→右）
 *   row : 同一カラム内での行位置（0始まり、上→下）
 *
 * - col, row ともに省略可能（部分指定OK）
 *   - col 省略: 前提スキルの依存関係から自動計算
 *   - row 省略: 同カラム内でのスキル登場順で自動割り当て
 * - LAYOUT_DATA にクラスやスキルのエントリがない場合は全て自動計算
 *
 * 例:
 *   "hero": {
 *     "afterimage":   { col: 0, row: 0 },  // col=0, row=0 に固定
 *     "mirage_sword": { col: 1 },           // col=1 に固定、row は自動
 *     "encourage":    { row: 4 },           // col は自動、row=4 に固定
 *   }
 */
export const LAYOUT_DATA = {
  hero: {
    // -- ノービス --
    hero_afterimage:    { col: 0, row: 0 },
    hero_mirage_sword:  { col: 1, row: 0 },
    hero_brave_wide:    { col: 0, row: 1 },
    hero_ice_slash:     { col: 1, row: 1 },
    hero_encourage:     { col: 0, row: 2 },
    hero_heroic_bond:   { col: 1, row: 2 },
    hero_shield_arts:   { col: 0, row: 3 },
    hero_clearing_mind: { col: 0, row: 4 },
    hero_felling:       { col: 0, row: 5 },

    // -- ベテラン --
    hero_shadow_charge:   { col: 0, row: 0 },
    hero_grace_shadow:    { col: 1, row: 0 },
    hero_shock_spark:     { col: 0, row: 1 },
    hero_burst_blade:     { col: 1, row: 1 },
    hero_boost:           { col: 0, row: 2 },
    hero_great_courage:   { col: 1, row: 2 },
    hero_shield_material: { col: 0, row: 3 },
    hero_heavy_hearted:   { col: 0, row: 4 },
    hero_new_challenge:   { col: 0, row: 5 },

    // -- マスター --
    hero_dense_shadow:  { col: 0, row: 0 },
    hero_act_breaker:   { col: 0, row: 1 },
    hero_regiment_rave: { col: 1, row: 1 },
    hero_force_gifting: { col: 0, row: 2 },
    hero_force_saving:  { col: 1, row: 2 },
    hero_guard_rush:    { col: 0, row: 3 },
  },
  paladin: {
    // -- ノービス (ゲーム画面準拠) --
    pal_front_guard:    { col: 0, row: 1 },
    pal_back_guard:     { col: 1, row: 1 },
    pal_cell_divide:    { col: 0, row: 2 },
    pal_konsin_defense: { col: 1, row: 2 },
    pal_shield_smite:   { col: 0, row: 3 },
    pal_provoke:        { col: 0, row: 4 },
    pal_preempt_provoke:{ col: 1, row: 4 },
    pal_heal_wall:      { col: 0, row: 5 },
    pal_logging:        { col: 0, row: 6 },

    // -- ベテラン --
    pal_recovery_guard: { col: 0, row: 1 },
    pal_resolve:        { col: 0, row: 2 },
    pal_shield_rush:    { col: 0, row: 3 },
    pal_keep_guard:     { col: 0, row: 4 },
    pal_phys_def_boost: { col: 0, row: 5 },
    pal_elem_def_boost: { col: 0, row: 6 },
    pal_fire_guard:     { col: 1, row: 4 },
    pal_freeze_guard:   { col: 1, row: 5 },
    pal_shock_guard:    { col: 1, row: 6 },

    // -- マスター --
    pal_hp_boost:     { col: 0, row: 0 },
    pal_heal_guard:   { col: 0, row: 1 },
    pal_line_divide:  { col: 0, row: 2 },
    pal_auto_guard:   { col: 1, row: 2 },
    pal_shield_flare: { col: 0, row: 3 },
    pal_full_guard:   { col: 0, row: 5 },
  },
  bushido: {
    // -- ノービス --
    bush_jodan:     { col: 0, row: 0 },
    bush_gyakukesa: { col: 1, row: 0 },
    bush_seigan:    { col: 0, row: 1 },
    bush_kantotsu:  { col: 1, row: 1 },
    bush_iai:       { col: 0, row: 2 },
    bush_sayageki:  { col: 1, row: 2 },
    bush_kuujin:    { col: 1, row: 3 },
    bush_koteuchi:  { col: 1, row: 4 },
    bush_mining:    { col: 0, row: 5 },
    bush_ibuki:     { col: 1, row: 5 },

    // -- ベテラン --
    bush_kabutowari:   { col: 0, row: 0 },
    bush_oroshien:     { col: 1, row: 0 },
    bush_kasumigiri:   { col: 0, row: 1 },
    bush_raiyakutsuki: { col: 1, row: 1 },
    bush_yokoichimonji:{ col: 0, row: 2 },
    bush_battou:       { col: 1, row: 2 },
    bush_hatashiai:    { col: 0, row: 3 },
    bush_phys_boost:   { col: 0, row: 5 },

    // -- マスター --
    bush_tsubame:     { col: 0, row: 0 },
    bush_nibudooshi:  { col: 0, row: 1 },
    bush_sange:       { col: 0, row: 2 },
    bush_menkyo:      { col: 0, row: 4 },
    bush_senni:       { col: 1, row: 4 },
    bush_speed_boost: { col: 0, row: 5 },
  },
  medic: {
    // -- ノービス --
    med_healing:      { col: 0, row: 1 },
    med_line_heal:    { col: 1, row: 1 },
    med_aftercare:    { col: 0, row: 3 },
    med_refresh:      { col: 1, row: 3 },
    med_antibody:     { col: 0, row: 4 },
    med_resurrection: { col: 1, row: 4 },
    med_insight:      { col: 0, row: 5 },
    med_head_drop:    { col: 1, row: 5 },
    med_harvest:      { col: 0, row: 6 },

    // -- ベテラン --
    med_delay_heal:     { col: 0, row: 1 },
    med_bind_recovery:  { col: 0, row: 3 },
    med_mass_rescue:    { col: 1, row: 3 },
    med_last_heal:      { col: 0, row: 4 },
    med_auto_resurrect: { col: 1, row: 4 },
    med_star_drop:      { col: 0, row: 5 },
    med_medical_rod:    { col: 1, row: 5 },
    med_patrol:         { col: 0, row: 6 },
    med_elem_def_boost: { col: 1, row: 6 },

    // -- マスター --
    med_area_heal:     { col: 0, row: 1 },
    med_chase_heal:    { col: 0, row: 2 },
    med_over_heal:     { col: 0, row: 3 },
    med_heal_dejavu:   { col: 0, row: 4 },
    med_heavy_strike:  { col: 0, row: 5 },
    med_staff_mastery: { col: 1, row: 5 },
  },
  ranger: {
    // -- ノービス --
    rng_power_shot:    { col: 0, row: 0 },
    rng_flame_arrow:   { col: 1, row: 0 },
    rng_blind_arrow:   { col: 0, row: 2 },
    rng_chain_dance:   { col: 1, row: 2 },
    rng_vigilance:     { col: 0, row: 3 },
    rng_danger_sense:  { col: 1, row: 3 },
    rng_first_aid:     { col: 0, row: 4 },
    rng_resuscitate:   { col: 1, row: 4 },
    rng_wild_instinct: { col: 0, row: 5 },

    // -- ベテラン --
    rng_flank_shot:    { col: 0, row: 0 },
    rng_finishing_shot: { col: 1, row: 0 },
    rng_double_shot:   { col: 0, row: 1 },
    rng_drop_shot:     { col: 1, row: 1 },
    rng_trick_step:    { col: 0, row: 2 },
    rng_patrol:        { col: 0, row: 3 },
    rng_efficient:     { col: 0, row: 4 },
    rng_speed_boost:   { col: 0, row: 5 },
    rng_others_step:   { col: 1, row: 5 },

    // -- マスター --
    rng_aiming_foot:     { col: 0, row: 0 },
    rng_sagittarius:     { col: 0, row: 1 },
    rng_hail_arrow:      { col: 0, row: 2 },
    rng_nature_blessing: { col: 0, row: 3 },
    rng_scapegoat:       { col: 0, row: 4 },
    rng_miracle:         { col: 0, row: 5 },
  },
  gunner: {
    // -- ノービス --
    gun_rapid_fire:  { col: 0, row: 0 },
    gun_spread:      { col: 1, row: 0 },
    gun_leg_snipe:   { col: 0, row: 1 },
    gun_arm_snipe:   { col: 1, row: 1 },
    gun_rear_support:{ col: 0, row: 3 },
    gun_rear_disrupt:{ col: 1, row: 3 },
    gun_drag_bullet: { col: 0, row: 4 },
    gun_flare:       { col: 1, row: 4 },
    gun_mining:      { col: 0, row: 5 },

    // -- ベテラン --
    gun_ricochet:        { col: 0, row: 0 },
    gun_sweep:           { col: 1, row: 0 },
    gun_head_snipe:      { col: 0, row: 1 },
    gun_quick_act:       { col: 0, row: 2 },
    gun_charge_shot:     { col: 1, row: 2 },
    gun_preempt_disrupt: { col: 0, row: 3 },
    gun_preempt_flare:   { col: 0, row: 4 },
    gun_penetrator:      { col: 0, row: 5 },
    gun_tp_boost:        { col: 1, row: 5 },

    // -- マスター --
    gun_ricochet2:      { col: 0, row: 0 },
    gun_charge_flame:   { col: 0, row: 1 },
    gun_charge_ice:     { col: 0, row: 2 },
    gun_charge_thunder: { col: 0, row: 3 },
    gun_phys_atk_boost: { col: 0, row: 4 },
    gun_double_action:  { col: 0, row: 5 },
  },
  warmagus: {
    // -- ノービス --
    wm_regenerate:    { col: 0, row: 0 },
    wm_regen_sash:    { col: 1, row: 0 },
    wm_disorder:      { col: 0, row: 2 },
    wm_atk_decay:     { col: 1, row: 2 },
    wm_def_decay:     { col: 1, row: 3 },
    wm_transfer:      { col: 0, row: 4 },
    wm_absorb:        { col: 1, row: 4 },
    wm_harvest:       { col: 0, row: 5 },
    wm_sword_mastery: { col: 1, row: 5 },

    // -- ベテラン --
    wm_soul_return: { col: 0, row: 0 },
    wm_pulse:       { col: 1, row: 0 },
    wm_response:    { col: 1, row: 1 },
    wm_head_seal:   { col: 0, row: 2 },
    wm_arm_seal:    { col: 0, row: 3 },
    wm_leg_seal:    { col: 1, row: 2 },
    wm_rally:       { col: 0, row: 4 },
    wm_hp_boost:    { col: 0, row: 5},
    wm_ailment_def_boost: { col: 1, row: 5 },

    // -- マスター --
    wm_regen_field:    { col: 0, row: 0 },
    wm_barrier:        { col: 1, row: 0 },
    wm_spirit_slash:   { col: 0, row: 2 },
    wm_spirit:         { col: 0, row: 4 },
    wm_epidemic:       { col: 1, row: 4 },
    wm_phys_atk_boost: { col: 0, row: 5 },
  },
  highlander: {
    // -- ノービス --
    hl_long_thrust:   { col: 0, row: 0 },
    hl_spear_impulse: { col: 1, row: 0 },
    hl_harvest:       { col: 0, row: 1 },
    hl_single_thrust: { col: 1, row: 1 },
    hl_legion_thrust: { col: 1, row: 2 },
    hl_spirit_shield: { col: 1, row: 3 },
    hl_blood_veil:    { col: 1, row: 4 },
    hl_mining:        { col: 0, row: 5 },
    hl_hp_boost:      { col: 1, row: 5 },

    // -- ベテラン --
    hl_brain_rend:       { col: 0, row: 0 },
    hl_single_burst:     { col: 0, row: 1 },
    hl_delay_charge:     { col: 1, row: 1 },
    hl_legion_burst:     { col: 0, row: 2 },
    hl_good_luck:        { col: 0, row: 3 },
    hl_defense_instinct: { col: 1, row: 3 },
    hl_blood_weapon:     { col: 0, row: 4 },
    hl_blood_rush:       { col: 1, row: 4 },
    hl_phys_def_boost:   { col: 0, row: 5 },

    // -- マスター --
    hl_spear_reversal: { col: 0, row: 0 },
    hl_cross_charge:   { col: 0, row: 1 },
    hl_legion_charge:  { col: 0, row: 2 },
    hl_bond_blessing:  { col: 1, row: 2 },
    hl_black_sabbath:  { col: 0, row: 4 },
    hl_phys_atk_boost: { col: 0, row: 5 },
  },
  prince: {
    // -- ノービス --
    pr_atk_order:   { col: 0, row: 2 },
    pr_fire_arms:   { col: 1, row: 1 },
    pr_freeze_arms: { col: 1, row: 2 },
    pr_shock_arms:  { col: 1, row: 3 },
    pr_def_order:   { col: 0, row: 4 },
    pr_reinforce:   { col: 1, row: 4 },
    pr_royal_veil:  { col: 0, row: 5 },
    pr_kings_march: { col: 1, row: 5 },
    pr_harvest:     { col: 0, row: 6 },
    pr_exchange:    { col: 1, row: 6 },

    // -- ベテラン --
    pr_kings_awe:      { col: 0, row: 0 },
    pr_royal_lineage:  { col: 1, row: 0 },
    pr_element_bomb1:  { col: 0, row: 2 },
    pr_morale_order:   { col: 0, row: 4 },
    pr_protect_order:  { col: 0, row: 5 },
    pr_prevent_order:  { col: 1, row: 4 },
    pr_pair_order:     { col: 1, row: 6 },
    pr_heal_order:     { col: 1, row: 7 },

    // -- マスター --
    pr_ailment_def_boost: { col: 0, row: 0 },
    pr_clearance:         { col: 0, row: 3 },
    pr_element_bomb2:     { col: 0, row: 2 },
    pr_unyield_order:     { col: 0, row: 4 },
    pr_last_order:        { col: 0, row: 6 },
    pr_reorder:           { col: 1, row: 6 },
  },
  shogun: {
    // -- ノービス --
    sg_haraigatana: { col: 0, row: 0 },
    sg_kodamanagashi: { col: 1, row: 0 },
    sg_zangetsu:    { col: 1, row: 1 },
    sg_raikiri:     { col: 1, row: 2 },
    sg_mumyo:       { col: 1, row: 3 },
    sg_daibushaer:  { col: 0, row: 4 },
    sg_shikaku:     { col: 1, row: 4 },
    sg_harvest:     { col: 0, row: 5 },
    sg_morale:      { col: 1, row: 5 },

    // -- ベテラン --
    sg_souen:        { col: 0, row: 0 },
    sg_suetora:      { col: 0, row: 1 },
    sg_midareryuu:   { col: 1, row: 1 },
    sg_myojo:        { col: 0, row: 2 },
    sg_katoki:       { col: 0, row: 3 },
    sg_chizome:      { col: 1, row: 3 },
    sg_kashisaisei:  { col: 1, row: 4 },
    sg_hichouotoshi: { col: 0, row: 5 },
    sg_seppuku:      { col: 1, row: 5 },

    // -- マスター --
    sg_gorin:        { col: 0, row: 0 },
    sg_fukushageki:  { col: 0, row: 1 },
    sg_ikkitousen:   { col: 1, row: 1 },
    sg_kuriuchi:     { col: 0, row: 3 },
    sg_kaishaku:     { col: 1, row: 3 },
    sg_senjin_meiyo: { col: 0, row: 4 },
  },
  zodiac: {
    // -- ノービス --
    zod_ether_glow:     { col: 0, row: 2 },
    zod_fire_star:      { col: 1, row: 1 },
    zod_ice_star:       { col: 1, row: 2 },
    zod_thunder_star:   { col: 1, row: 3 },
    zod_singularity:    { col: 0, row: 4 },
    zod_ether_compress: { col: 1, row: 4 },
    zod_return_ether:   { col: 1, row: 5 },
    zod_mining:         { col: 0, row: 6 },
    zod_stargazing:     { col: 1, row: 6 },

    // -- ベテラン --
    zod_ether_master:  { col: 0, row: 0 },
    zod_tp_boost:      { col: 1, row: 0 },
    zod_fire_chain:    { col: 0, row: 1 },
    zod_ice_chain:     { col: 0, row: 2 },
    zod_thunder_chain: { col: 0, row: 3 },
    zod_rest_ether:    { col: 0, row: 4 },
    zod_anti_ether:    { col: 1, row: 4 },
    zod_dark_ether:    { col: 0, row: 5 },
    zod_ether_shoot:   { col: 1, row: 5 },

    // -- マスター --
    zod_fire_prophet:    { col: 0, row: 1 },
    zod_ice_prophet:     { col: 0, row: 2 },
    zod_thunder_prophet: { col: 0, row: 3 },
    zod_tp_cut:          { col: 1, row: 2 },
    zod_multi_ether:     { col: 0, row: 4 },
    zod_meteor:          { col: 0, row: 6 },
  },
  shinobi: {
    // -- ノービス --
    snb_fukibari:     { col: 0, row: 0 },
    snb_makibishi:    { col: 1, row: 0 },
    snb_kagenui:      { col: 0, row: 1 },
    snb_honekudaki:   { col: 1, row: 1 },
    snb_keigyo:       { col: 0, row: 3 },
    snb_senpuku:      { col: 1, row: 3 },
    snb_yoen:         { col: 0, row: 4 },
    snb_logging:      { col: 0, row: 5 },
    snb_shinobi_heart:{ col: 1, row: 5 },

    // -- ベテラン --
    snb_mizukagami:    { col: 0, row: 0 },
    snb_izuna:         { col: 0, row: 1 },
    snb_takanoha:      { col: 1, row: 1 },
    snb_nikudan:       { col: 0, row: 2 },
    snb_bunshin:       { col: 1, row: 2 },
    snb_kubikiri:      { col: 0, row: 3 },
    snb_entobi:        { col: 1, row: 3 },
    snb_preempt_yoen:  { col: 0, row: 4 },
    snb_ailment_boost: { col: 0, row: 5 },

    // -- マスター --
    snb_kyounin:    { col: 0, row: 0 },
    snb_igaeshi:    { col: 1, row: 0 },
    snb_kosaienka:  { col: 0, row: 1 },
    snb_tagen_nuki: { col: 1, row: 2 },
    snb_unkai:      { col: 0, row: 3 },
    snb_kemuri:     { col: 0, row: 4 },
  },
  farmer: {
    // -- ノービス --
    fm_kega:      { col: 0, row: 0 },
    fm_fushigi:   { col: 1, row: 0 },
    fm_nakazu:    { col: 1, row: 1 },
    fm_tanchi:    { col: 0, row: 2 },
    fm_tansaku:   { col: 1, row: 2 },
    fm_moushin:   { col: 1, row: 3 },
    fm_oukyu:     { col: 0, row: 4 },
    fm_shukaku:   { col: 0, row: 5 },
    fm_daishizen: { col: 1, row: 5 },

    // -- ベテラン --
    fm_yowari:  { col: 0, row: 0 },
    fm_gobun:   { col: 1, row: 0 },
    fm_mokke:   { col: 0, row: 2 },
    fm_kaitai:  { col: 1, row: 1 },
    fm_amenimo: { col: 0, row: 3 },
    fm_anzen:   { col: 1, row: 3 },
    fm_onwake:  { col: 0, row: 4 },
    fm_kowai:   { col: 1, row: 4 },
    fm_seizon:  { col: 0, row: 5 },

    // -- マスター --
    fm_komori:        { col: 0, row: 0 },
    fm_rousaku:       { col: 1, row: 0 },
    fm_kaitai_megumi: { col: 0, row: 1 },
    fm_shukaku_sai:   { col: 0, row: 2 },
    fm_shizen_megumi: { col: 0, row: 5 },
    fm_nimousaku:     { col: 1, row: 5 },
  },
  swordman: {
    // -- ノービス --
    sw_kenshi:         { col: 0, row: 0 },
    sw_sonic_raid:     { col: 1, row: 0 },
    sw_link_flame:     { col: 1, row: 1 },
    sw_link_freeze:    { col: 1, row: 2 },
    sw_link_thunder:   { col: 1, row: 3 },
    sw_vanguard:       { col: 0, row: 4 },
    sw_power_break:    { col: 1, row: 4 },
    sw_mining:         { col: 0, row: 5 },
    sw_phys_def_boost: { col: 1, row: 5 },

    // -- ベテラン --
    sw_double_strike:    { col: 0, row: 0 },
    sw_round_sword:      { col: 1, row: 0 },
    sw_penetrate:        { col: 1, row: 1 },
    sw_link_plus:        { col: 0, row: 2 },
    sw_link_smash:       { col: 1, row: 2 },
    sw_guard_break:      { col: 0, row: 4 },
    sw_speed_break:      { col: 1, row: 4 },
    sw_sakigake:         { col: 0, row: 5 },
    sw_ailment_def_boost:{ col: 1, row: 5 },

    // -- マスター --
    sw_sword_tempest: { col: 0, row: 0 },
    sw_hayabusa:      { col: 0, row: 1 },
    sw_link_mastery:  { col: 0, row: 2 },
    sw_link_end:      { col: 1, row: 2 },
    sw_full_break:    { col: 0, row: 4 },
    sw_single_depot:  { col: 0, row: 5 },
  },
  nightseeker: {
    // -- ノービス --
    ns_blind_throw:  { col: 0, row: 0 },
    ns_sleep_throw:  { col: 1, row: 0 },
    ns_hide_cloak:   { col: 0, row: 2 },
    ns_delay_stab:   { col: 1, row: 2 },
    ns_ice_splash:   { col: 0, row: 3 },
    ns_thief_heart:  { col: 1, row: 3 },
    ns_decoy_sign:   { col: 0, row: 4 },
    ns_shadow_blade: { col: 1, row: 4 },
    ns_logging:      { col: 0, row: 5 },

    // -- ベテラン --
    ns_curse_throw:   { col: 0, row: 0 },
    ns_para_throw:    { col: 1, row: 0 },
    ns_shadow_bite:   { col: 0, row: 1 },
    ns_preempt_cloak: { col: 0, row: 2 },
    ns_back_stab:     { col: 1, row: 2 },
    ns_surprise:      { col: 0, row: 3 },
    ns_dark_mastery:  { col: 1, row: 3 },
    ns_speed_boost:   { col: 0, row: 5 },
    ns_spread_throw:  { col: 1, row: 5 },

    // -- マスター --
    ns_deadly_throw:   { col: 0, row: 0 },
    ns_swift_sword:    { col: 0, row: 1 },
    ns_assassination:  { col: 0, row: 2 },
    ns_return_cloak:   { col: 1, row: 2 },
    ns_shadow_zan:     { col: 0, row: 4 },
    ns_preempt_spread: { col: 0, row: 5 },
  },
  mystic: {
    // -- ノービス --
    my_kaifuku:        { col: 0, row: 0 },
    my_myaku_kassei:   { col: 1, row: 0 },
    my_wanfuu:         { col: 0, row: 1 },
    my_ashifuu:        { col: 1, row: 1 },
    my_mahi:           { col: 0, row: 2 },
    my_noroi:          { col: 1, row: 2 },
    my_kaifuku_hokou:  { col: 0, row: 3 },
    my_houjinshi:      { col: 0, row: 4 },
    my_harvest:        { col: 0, row: 5 },

    // -- ベテラン --
    my_saiki_kassei: { col: 0, row: 0 },
    my_akuumonha:    { col: 1, row: 1 },
    my_atamafuu:     { col: 0, row: 1 },
    my_suimin:       { col: 0, row: 2 },
    my_miryou:        { col: 0, row: 4 },
    my_suijaku:      { col: 1, row: 4 },
    my_ailment_boost:{ col: 0, row: 5 },
    my_chimyaku:     { col: 0, row: 6 },
    my_taima:        { col: 1, row: 6 },

    // -- マスター --
    my_akuu_meido:     { col: 0, row: 0 },
    my_houjin_mastery: { col: 1, row: 0 },
    my_doku:           { col: 0, row: 2 },
    my_genwaku:        { col: 0, row: 3 },
    my_daichi:         { col: 1, row: 2 },
    my_tp_return:      { col: 0, row: 5 },
  },
  imperial: {
    // -- ノービス --
    imp_sharp_edge:     { col: 0, row: 0 },
    imp_blood_edge:     { col: 1, row: 0 },
    imp_natural_edge:   { col: 0, row: 1 },
    imp_rear_guard:     { col: 0, row: 2 },
    imp_assault_drive:  { col: 0, row: 3 },
    imp_force_exhaust:  { col: 1, row: 3 },
    imp_overheat_guard: { col: 1, row: 4 },
    imp_avenger:        { col: 0, row: 4 },
    imp_mining:         { col: 0, row: 5 },

    // -- ベテラン --
    imp_massive_edge:     { col: 0, row: 0 },
    imp_cool_edge:        { col: 1, row: 0 },
    imp_trip_edge:        { col: 0, row: 1 },
    imp_impulse_edge:     { col: 1, row: 1 },
    imp_intercooler:      { col: 0, row: 3 },
    imp_flame_drive:      { col: 1, row: 2 },
    imp_freeze_drive:     { col: 1, row: 3 },
    imp_shock_drive:      { col: 1, row: 4 },
    imp_ailment_def_boost:{ col: 0, row: 5 },

    // -- マスター --
    imp_charge_edge:    { col: 0, row: 0 },
    imp_force_edge:     { col: 0, row: 1 },
    imp_hp_boost:       { col: 0, row: 2 },
    imp_accel_drive:    { col: 0, row: 3 },
    imp_converter:      { col: 0, row: 4 },
    imp_elem_atk_boost: { col: 0, row: 5 },
  },
  cestus: {
    // -- ノービス --
    cs_flicker:      { col: 0, row: 0 },
    cs_arm_break:    { col: 0, row: 1 },
    cs_one_two:      { col: 1, row: 1 },
    cs_river_blow:   { col: 0, row: 2 },
    cs_corkscrew:    { col: 1, row: 2 },
    cs_adrenaline:   { col: 0, row: 3 },
    cs_double_punch: { col: 0, row: 4 },
    cs_logging:      { col: 0, row: 5 },
    cs_hp_boost:     { col: 1, row: 5 },

    // -- ベテラン --
    cs_onijinken:     { col: 0, row: 0 },
    cs_toukon:        { col: 1, row: 0 },
    cs_oiuchi:        { col: 0, row: 1 },
    cs_lead_blow:     { col: 1, row: 1 },
    cs_interval:      { col: 0, row: 3 },
    cs_clinch:        { col: 1, row: 3 },
    cs_arm_block:     { col: 0, row: 4 },
    cs_ailment_boost: { col: 0, row: 5 },
    cs_cross_counter: { col: 1, row: 5 },

    // -- マスター --
    cs_raijinken:   { col: 0, row: 0 },
    cs_rush_out:    { col: 0, row: 1 },
    cs_meisou:      { col: 0, row: 3 },
    cs_doha:        { col: 1, row: 3 },
    cs_million_rush:{ col: 0, row: 5 },
    cs_resonance:   { col: 1, row: 5 },
  },
  reaper: {
    // -- ノービス --
    rp_sakujaku:       { col: 0, row: 0 },
    rp_donjaku:        { col: 1, row: 0 },
    rp_senjaku:        { col: 0, row: 1 },
    rp_teishi:         { col: 0, row: 2 },
    rp_sandoku:        { col: 1, row: 2 },
    rp_shouki_heisou:  { col: 0, row: 3 },
    rp_owarinaki:      { col: 1, row: 3 },
    rp_tsugunai:       { col: 1, row: 4 },
    rp_harvest:        { col: 0, row: 5 },

    // -- ベテラン --
    rp_kyojaku:      { col: 0, row: 0 },
    rp_bakujaku:     { col: 1, row: 0 },
    rp_shinkan:      { col: 0, row: 2 },
    rp_fukuran:      { col: 1, row: 2 },
    rp_kuroki:       { col: 0, row: 3 },
    rp_tamashii:     { col: 0, row: 4 },
    rp_kuroki_hadou: { col: 1, row: 4 },
    rp_seiki:        { col: 0, row: 5 },
    rp_ailment_boost:{ col: 1, row: 5 },

    // -- マスター --
    rp_shi_taisei:      { col: 0, row: 0 },
    rp_houmatsu:        { col: 0, row: 1 },
    rp_shi_no_kama:     { col: 0, row: 2 },
    rp_shouki_bouheki:  { col: 0, row: 4 },
    rp_reikon_kochaku:  { col: 0, row: 5 },
    rp_shouki_zanryuu:  { col: 1, row: 4 },
  },
};
