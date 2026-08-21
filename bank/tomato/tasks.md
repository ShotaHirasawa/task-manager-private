# トマト銀行 残タスク・進捗管理

- **更新日**: 2026-08-21

## 今週〜今月中に対応が必要

| # | TID PRDタスク | プロジェクト | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 1 | ◎ | トマト-IB移行 | 帳票レイアウト案の提示とIB契約表扱いの確認 | [TMT_IBPJ-24]("../../knowledge/backlog/tomato/TMT_IBPJ-24.md") 未対応 | 8/31期限。10/15内部結合テストに影響。顧客折衝・仕様決めがTID PRDのスコープ。 |
| 2 | ◎ | トマト-IB移行 | ヒアリングシート未回答項目の確認・CSV項目FIX | [TMT_IBPJ-6]("../../knowledge/backlog/tomato/TMT_IBPJ-6.md") 処理中 | 期限8/21（本日）。8/18に空カラム削除・住所項目扱い等の決定事項提示済み。SBI最終確認待ち。 |
| 3 | ◎ | トマト-IB移行 | ローン連携による口座種別の読み替えをCSV項目に反映 | [TMT_IBPJ-23]("../../knowledge/backlog/tomato/TMT_IBPJ-23.md") 処理中 | 8/20に仕様確定（IBアプリ・CDは和名、CSVはコード値1/2/3/4）。SBI/開発側の承認・反映待ち。 |
| 4 | ◎ | トマト-IB移行 | 共通バリデーションExcelデータの共有 | [TMT_IBPJ-20]("../../knowledge/backlog/tomato/TMT_IBPJ-20.md") 処理中・期限超過 | 8/3超過。7/31にExcel提示されたが大光仕様混在・CSV項目不足の指摘あり。正しいトマト向けデータの再提出と、CSV項目属性・桁数の確定が必要。 |

## 来月以降（リリースに向けた準備）

| # | TID PRDタスク | プロジェクト | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 5 | ◎ | トマト-IB移行 | バックオフィス事務フローの確定 | [TMT_IBPJ-21]("../../knowledge/backlog/tomato/TMT_IBPJ-21.md") 処理中 | 実装・テストに必要。業務フロー・仕様決めがTID PRDのスコープ。 |
| 6 | ◎ | トマト-IB移行 | 暗証番号・仮パスワード変換表の確定 | [TMT_IBPJ-22]("../../knowledge/backlog/tomato/TMT_IBPJ-22.md") 処理中 | 実装・テストに必要。セキュリティ上重要。 |
| 7 | × | トマト-IB移行 | テスト口座・テストカード・勘定系テストカレンダー・脆弱性診断の整備 | [TMT_IBPJ-13]("../../knowledge/backlog/tomato/TMT_IBPJ-13.md")、[TMT_IBPJ-9]("../../knowledge/backlog/tomato/TMT_IBPJ-9.md")、[TMT_IBPJ-15]("../../knowledge/backlog/tomato/TMT_IBPJ-15.md")、[TMT_IBPJ-14]("../../knowledge/backlog/tomato/TMT_IBPJ-14.md") 処理中 | 10/15内部結合テスト完了に向けて必要。環境・テスト準備は技術チームの作業。 |
| 8 | × | トマト-IB移行 | 画面遷移・文言・メール設定の整備 | [TMT_IBPJ-5]("../../knowledge/backlog/tomato/TMT_IBPJ-5.md")、[TMT_IBPJ-1]("../../knowledge/backlog/tomato/TMT_IBPJ-1.md")、[TMT_IBPJ-10]("../../knowledge/backlog/tomato/TMT_IBPJ-10.md") 処理中 | 基本設計以降の工程で必要。 |

## 期日メモ

- 2026/08/31: トマト帳票・CSVの銀行回答フォロー期日
- 2026/10/15: トマトIB移行 内部結合テスト完了目標（勘定系テスト環境リフレッシュが9/30→10/16に変更された影響）
- 2027/03/01: トマト-IB移行 リリース予定

## 凡例

- **◎**: TID PRDの責務または直接関与する仕様決め・顧客折衝
- **○（監視）**: 進捗はWatchするが、技術調査自体はスコープ外
- **×**: 技術障害対応・環境準備などTID PRDのスコープ外
