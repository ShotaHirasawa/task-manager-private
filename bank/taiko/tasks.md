# 大光銀行 残タスク・進捗管理

- **更新日**: 2026-08-21

## 今週〜今月中に対応が必要

| # | TID PRDタスク | プロジェクト | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 1 | ○（監視） | 大光Ph1.5 | 本番問い合わせ「再認証頻発」の原因調査と回答の進捗確認 | [TAIKOBANK-532]("../../knowledge/backlog/taiko/TAIKOBANK-532.md") 未対応・高優先度 | 明日中回答必須。お客様怒りモード。技術調査は開発・運用チームが実施し、TID PRDは進捗監視・銀行向け回答調整が中心。 |
| 2 | ○（監視） | 大光Ph1.5 | FIDO認証ループの調査進捗確認 | [TAIKOBANK-531]("../../knowledge/backlog/taiko/TAIKOBANK-531.md") 処理中 | 本番問い合わせ。強制アップデート後の不具合。技術調査はスコープ外だが、お客様対応の進捗はWatch。 |
| 3 | ◎ | 大光Ph2.0 | PH2 MIRO画面設計書の確認・コメント返信 | [TAIKOBANK-520]("../../knowledge/backlog/taiko/TAIKOBANK-520.md") 未対応・期限超過 | 8/17期限超過。基本設計の前提が止まる。TID PRDの責務。 |
| 4 | ◎ | 大光Ph2.0 | PH2ヒアリングシート確定版の最終承認 | [TAIKOBANK-500]("../../knowledge/backlog/taiko/TAIKOBANK-500.md") 処理中 | 暫定版7/31提出、確定版8/7提出済み。8/21時点でSBI回答待ち/最終承認待ち。 |
| 5 | ◎ | 大光Ph1.5 | 振替時の残高不足エラーコード・メッセージの確定 | [TAIKOBANK-512]("../../knowledge/backlog/taiko/TAIKOBANK-512.md") 処理中 | 総合テストに必要。仕様決め・銀行合意がTID PRDのスコープ。 |
| 6 | ◎ | 大光Ph1.5 | 承認取引エラー時の返却値確認 | [TAIKOBANK-525]("../../knowledge/backlog/taiko/TAIKOBANK-525.md") 処理中 | カードローン・定期預金・普通預金支払の実装・テストに必要。仕様決めがTID PRDのスコープ。 |

## 来月以降（リリースに向けた準備）

| # | TID PRDタスク | プロジェクト | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 7 | ◎ | 大光Ph2.0 | 更新系機能のメール送信内容提示 | [TAIKOBANK-527]("../../knowledge/backlog/taiko/TAIKOBANK-527.md") 未対応 | 11/13。DNSレコード追加の可能性あり。文言・送信元等の仕様決めがTID PRDのスコープ。 |
| 8 | ◎ | 大光Ph2.0 | ヒアリングシート残項目の提出 | [TAIKOBANK-528]("../../knowledge/backlog/taiko/TAIKOBANK-528.md") 未対応 | 11/13。基本設計以降の工程入力。TID PRDの責務。 |
| 9 | ◎ | 大光Ph2.0 | 無通帳口座切替の切替タイミング確定 | [TAIKOBANK-530]("../../knowledge/backlog/taiko/TAIKOBANK-530.md") 処理中 | Ph2.0のIF/画面設計に必要。業務仕様・銀行合意がTID PRDのスコープ。 |
| 10 | ◎ | 大光Ph2.0 | 振込機能・振替口座選択範囲の仕様確定 | [TAIKOBANK-484]("../../knowledge/backlog/taiko/TAIKOBANK-484.md")、[TAIKOBANK-480]("../../knowledge/backlog/taiko/TAIKOBANK-480.md") 未対応 | Ph2.0機能拡充。仕様決めがTID PRDのスコープ。 |
| 11 | ◎ | 大光Ph2.0 | カードローンの商品種類区分の確認 | [TAIKOBANK-449]("../../knowledge/backlog/taiko/TAIKOBANK-449.md") 処理中 | Ph2.0カードローン機能の実装に必要。 |
| 12 | × | 大光Ph1.5 | PH1.5勘定系疎通確認用口座の仕込み | [TAIKOBANK-477]("../../knowledge/backlog/taiko/TAIKOBANK-477.md") 未対応 | 総合テストに必要。環境・データ準備は技術チームの作業。 |
| 13 | × | 大光Ph1.5 | テスト用マイナンバーカードの用意 | [TAIKOBANK-490]("../../knowledge/backlog/taiko/TAIKOBANK-490.md") 未対応 | 総合テストに必要。実物調達・技術準備はスコープ外。 |
| 14 | × | 大光Ph1.5 | GraphQL 500発生の原因切り分け | [TAIKOBANK-505]("../../knowledge/backlog/taiko/TAIKOBANK-505.md") 処理中 | 本番環境で発生。日立様への調査依頼中。技術調査・障害対応はTID PRDのスコープ外。 |

## 期日メモ

- 2026/10/01: 大光Ph1.5 リリース予定
- 2026/11/13: 更新系メール送信内容・ヒアリングシート残項目 提出期限
- 2027/07/01: 大光Ph2.0 リリース予定

## 凡例

- **◎**: TID PRDの責務または直接関与する仕様決め・顧客折衝
- **○（監視）**: 進捗はWatchするが、技術調査自体はスコープ外
- **×**: 技術障害対応・環境準備などTID PRDのスコープ外
