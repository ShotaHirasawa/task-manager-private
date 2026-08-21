# TID PRD 大光 全体感 & 現在地 (2026-08-21時点)

## プロジェクト全体像

私たちのチーム（TrustIdiom起点の認証認可領域＋銀行側ワークフロー／カスタマーダッシュボード）が関わる2行のプロジェクト。

| プロジェクト | 対象銀行 | フェーズ内容 | 予定リリース | 現在の工程 |
|---|---|---|---|---|
| 大光-Ph1.5 | 大光銀行 | 口座開設の単独導線対応（既存口座連携なしでのIB口座開設）、取引時確認の送信項目・CSV出力項目拡充（法令対応） | 2026/10/01 | 総合テスト |
| 大光-Ph2.0 | 大光銀行 | 定期預金開設・無通帳切替・カードローン・振替・投信パスワード再発行などの機能拡充 | 2027/07/01 | 基本設計 |


---

## 大光Ph1.5：今どこにいるか

総合テストの段階。Backlog `TAIKOBANK` プロジェクトの最新100件を確認したところ、完了済み課題は多数あるが、**未対応・処理中の課題が20件以上残っており、本番問い合わせ対応と総合テストの仕様確定が並行している**。

### 完了していること（代表的）
- 口座開設単独導線の基本設計承認（[TAIKOBANK-462](../../knowledge/backlog/taiko/TAIKOBANK-462.md)）
- 総合テストに伴う勘定系システム登録の協力依頼（[TAIKOBANK-511](../../knowledge/backlog/taiko/TAIKOBANK-511.md)）
- 定期預金口座開設・投信パスワード再設定の帳票サンプル提示（[TAIKOBANK-453](../../knowledge/backlog/taiko/TAIKOBANK-453.md)、[TAIKOBANK-452](../../knowledge/backlog/taiko/TAIKOBANK-452.md)）
- 取引時確認のコード値表示形式（[TAIKOBANK-501](../../knowledge/backlog/taiko/TAIKOBANK-501.md)）
- 口座開設とIB申込の確認事項文言（[TAIKOBANK-463](../../knowledge/backlog/taiko/TAIKOBANK-463.md)）

### 残っている主要タスク

| 優先 | 課題 | 状態 | 期限 | 内容・根拠 |
|---|---|---|---|---|
| 高 | [TAIKOBANK-532](../../knowledge/backlog/taiko/TAIKOBANK-532.md) | 未対応 | 未設定 | **本番問い合わせ**：Myらっこで「お客様のアカウントを守る為に再認証」が頻発。お客様が怒りモードで明日中回答必須。 |
| 中 | [TAIKOBANK-531](../../knowledge/backlog/taiko/TAIKOBANK-531.md) | 処理中 | 未設定 | **本番問い合わせ**：FIDO認証が完了せずループ。7月末強制アップデート後に発生。 |
| 中 | [TAIKOBANK-528](../../knowledge/backlog/taiko/TAIKOBANK-528.md) | 未対応 | 2026/11/13 | ヒアリングシート残項目（メール通知・外部遷移URL_IB・注意事項画面文言_IB）の提出依頼。 |
| 中 | [TAIKOBANK-527](../../knowledge/backlog/taiko/TAIKOBANK-527.md) | 未対応 | 2026/11/13 | 更新系機能のメール送信内容提示（定期預金預入/解約、カードローン借入/返済、振替）。DNSレコード追加の可能性あり。 |
| 中 | [TAIKOBANK-525](../../knowledge/backlog/taiko/TAIKOBANK-525.md) | 処理中 | 未設定 | 承認取引エラー時の返却値確認（カードローン・普通預金支払・定期預金入金/解約）。実装・テストに必要。 |
| 中 | [TAIKOBANK-521](../../knowledge/backlog/taiko/TAIKOBANK-521.md) | 未対応 | 未設定 | カードローン借入の「最終貸出期限日」超過時のエラー挙動・モーダル文言の確認。 |
| 中 | [TAIKOBANK-515](../../knowledge/backlog/taiko/TAIKOBANK-515.md) | 未対応 | 未設定 | 振替元口座選択画面の「ことら送金」注意文面の提示依頼。画面イメージ反映待ち。 |
| 中 | [TAIKOBANK-512](../../knowledge/backlog/taiko/TAIKOBANK-512.md) | 処理中 | 未設定 | 振替時の残高不足エラーコード・メッセージの整理（日立持ち帰り分）。 |
| 中 | [TAIKOBANK-505](../../knowledge/backlog/taiko/TAIKOBANK-505.md) | 処理中 | 未設定 | 本番環境で `GetAccountResult` GraphQL 500が発生。原因切り分け中。 |
| 中 | [TAIKOBANK-490](../../knowledge/backlog/taiko/TAIKOBANK-490.md) | 未対応 | 未設定 | テスト用マイナンバーカードの用意。総合テスト実施に必要。 |
| 中 | [TAIKOBANK-477](../../knowledge/backlog/taiko/TAIKOBANK-477.md) | 未対応 | 未設定 | PH1.5勘定系疎通確認用口座の仕込み依頼。総合テストに必要。 |

### 現在地のまとめ
Ph1.5の大枠は完了に近いが、**本番でのお客様問い合わせ2件（特に-532は高優先度）**と、総合テストに必要な承認エラー/残高不足エラーの返却値・テストデータ準備・メール通知文言などが未確定。リリース（2026/10/01）に向けて、本番問い合わせの迅速な対応と、総合テストを止めないための仕様確定が急務。

---

## 大光Ph2.0：今どこにいるか

基本設計フェーズ。Backlog上では、Ph2.0に紐づく未対応・処理中課題が複数残っており、**基本設計の承認前に解決すべき仕様確認が進行中**。

### 完了していること（代表的）
- PH2要件定義書・サービス仕様書の承認（[TAIKOBANK-481](../../knowledge/backlog/taiko/TAIKOBANK-481.md)）
- PH2使用予定API一覧資料作成（[TAIKOBANK-473](../../knowledge/backlog/taiko/TAIKOBANK-473.md)）
- CD表示ルールは大光銀行（林氏）より8/7ヒアリングシート確定版で受領・合意済み

### 残っている主要タスク

| 優先 | 課題 | 状態 | 期限 | 内容・根拠 |
|---|---|---|---|---|
| 高 | [TAIKOBANK-520](../../knowledge/backlog/taiko/TAIKOBANK-520.md) | 未対応 | 2026/8/17（超過） | PH2のMIRO画面設計書確認。期限超過しており、基本設計の先送りを防ぐため早急に対応必要。 |
| 中 | [TAIKOBANK-500](../../knowledge/backlog/taiko/TAIKOBANK-500.md) | 処理中 | 未設定 | PH2ヒアリングシート。暫定版7/31提出、確定版8/7提出済み。8/21時点でSBI回答待ち/最終承認待ち。 |
| 中 | [TAIKOBANK-530](../../knowledge/backlog/taiko/TAIKOBANK-530.md) | 処理中 | 未設定 | 無通帳口座切替の実際に切り替わるタイミング確認。翌日か、特定時刻か。画面/IF設計に必要。 |
| 中 | [TAIKOBANK-484](../../knowledge/backlog/taiko/TAIKOBANK-484.md) | 未対応 | 未設定 | 振込機能の実現に向けた検討。Ph2.0機能拡充の1つ。 |
| 中 | [TAIKOBANK-480](../../knowledge/backlog/taiko/TAIKOBANK-480.md) | 未対応 | 未設定 | アプリでの振替口座の選択範囲。仕様確定待ち。 |
| 中 | [TAIKOBANK-449](../../knowledge/backlog/taiko/TAIKOBANK-449.md) | 処理中 | 未設定 | カードローンの商品種類区分の確認。実装に必要。 |

### 現在地のまとめ
基本設計の前提となるMIRO画面設計書確認が未完了。**[TAIKOBANK-520](../../knowledge/backlog/taiko/TAIKOBANK-520.md)は8/17期限を超過**しており、最優先で対応すべき。一方、ヒアリングシートは[TAIKOBANK-500](../../knowledge/backlog/taiko/TAIKOBANK-500.md)で確定版が8/7に提出され、8/21にSBI側回答が記載された。主要仕様は確定に近く、銀行側の最終承認待ち。Ph2.0は2027/07/01リリース予定だが、MIRO確認の遅延が基本設計・開発・テスト工程に波及するリスクがある。
