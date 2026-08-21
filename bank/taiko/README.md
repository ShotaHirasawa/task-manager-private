# TID PRD 大光・トマト 全体感 & 現在地 (2026-08-21時点)

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
- 口座開設単独導線の基本設計承認（[TAIKOBANK-462](https://sbifi.backlog.com/view/TAIKOBANK-462)）
- 総合テストに伴う勘定系システム登録の協力依頼（[TAIKOBANK-511](https://sbifi.backlog.com/view/TAIKOBANK-511)）
- 定期預金口座開設・投信パスワード再設定の帳票サンプル提示（[TAIKOBANK-453](https://sbifi.backlog.com/view/TAIKOBANK-453)、[TAIKOBANK-452](https://sbifi.backlog.com/view/TAIKOBANK-452)）
- 取引時確認のコード値表示形式（[TAIKOBANK-501](https://sbifi.backlog.com/view/TAIKOBANK-501)）
- 口座開設とIB申込の確認事項文言（[TAIKOBANK-463](https://sbifi.backlog.com/view/TAIKOBANK-463)）

### 残っている主要タスク

| 優先 | 課題 | 状態 | 期限 | 内容・根拠 |
|---|---|---|---|---|
| 高 | [TAIKOBANK-532](https://sbifi.backlog.com/view/TAIKOBANK-532) | 未対応 | 未設定 | **本番問い合わせ**：Myらっこで「お客様のアカウントを守る為に再認証」が頻発。お客様が怒りモードで明日中回答必須。 |
| 中 | [TAIKOBANK-531](https://sbifi.backlog.com/view/TAIKOBANK-531) | 処理中 | 未設定 | **本番問い合わせ**：FIDO認証が完了せずループ。7月末強制アップデート後に発生。 |
| 中 | [TAIKOBANK-528](https://sbifi.backlog.com/view/TAIKOBANK-528) | 未対応 | 2026/11/13 | ヒアリングシート残項目（メール通知・外部遷移URL_IB・注意事項画面文言_IB）の提出依頼。 |
| 中 | [TAIKOBANK-527](https://sbifi.backlog.com/view/TAIKOBANK-527) | 未対応 | 2026/11/13 | 更新系機能のメール送信内容提示（定期預金預入/解約、カードローン借入/返済、振替）。DNSレコード追加の可能性あり。 |
| 中 | [TAIKOBANK-525](https://sbifi.backlog.com/view/TAIKOBANK-525) | 処理中 | 未設定 | 承認取引エラー時の返却値確認（カードローン・普通預金支払・定期預金入金/解約）。実装・テストに必要。 |
| 中 | [TAIKOBANK-521](https://sbifi.backlog.com/view/TAIKOBANK-521) | 未対応 | 未設定 | カードローン借入の「最終貸出期限日」超過時のエラー挙動・モーダル文言の確認。 |
| 中 | [TAIKOBANK-515](https://sbifi.backlog.com/view/TAIKOBANK-515) | 未対応 | 未設定 | 振替元口座選択画面の「ことら送金」注意文面の提示依頼。画面イメージ反映待ち。 |
| 中 | [TAIKOBANK-512](https://sbifi.backlog.com/view/TAIKOBANK-512) | 処理中 | 未設定 | 振替時の残高不足エラーコード・メッセージの整理（日立持ち帰り分）。 |
| 中 | [TAIKOBANK-505](https://sbifi.backlog.com/view/TAIKOBANK-505) | 処理中 | 未設定 | 本番環境で `GetAccountResult` GraphQL 500が発生。原因切り分け中。 |
| 中 | [TAIKOBANK-490](https://sbifi.backlog.com/view/TAIKOBANK-490) | 未対応 | 未設定 | テスト用マイナンバーカードの用意。総合テスト実施に必要。 |
| 中 | [TAIKOBANK-477](https://sbifi.backlog.com/view/TAIKOBANK-477) | 未対応 | 未設定 | PH1.5勘定系疎通確認用口座の仕込み依頼。総合テストに必要。 |

### 現在地のまとめ
Ph1.5の大枠は完了に近いが、**本番でのお客様問い合わせ2件（特に-532は高優先度）**と、総合テストに必要な承認エラー/残高不足エラーの返却値・テストデータ準備・メール通知文言などが未確定。リリース（2026/10/01）に向けて、本番問い合わせの迅速な対応と、総合テストを止めないための仕様確定が急務。

---

## 大光Ph2.0：今どこにいるか

基本設計フェーズ。Backlog上では、Ph2.0に紐づく未対応・処理中課題が複数残っており、**基本設計の承認前に解決すべき仕様確認が進行中**。

### 完了していること（代表的）
- PH2要件定義書・サービス仕様書の承認（[TAIKOBANK-481](https://sbifi.backlog.com/view/TAIKOBANK-481)）
- PH2使用予定API一覧資料作成（[TAIKOBANK-473](https://sbifi.backlog.com/view/TAIKOBANK-473)）
- CD表示ルールは大光銀行（林氏）より8/7ヒアリングシート確定版で受領・合意済み

### 残っている主要タスク

| 優先 | 課題 | 状態 | 期限 | 内容・根拠 |
|---|---|---|---|---|
| 高 | [TAIKOBANK-520](https://sbifi.backlog.com/view/TAIKOBANK-520) | 未対応 | 2026/8/17（超過） | PH2のMIRO画面設計書確認。期限超過しており、基本設計の先送りを防ぐため早急に対応必要。 |
| 中 | [TAIKOBANK-500](https://sbifi.backlog.com/view/TAIKOBANK-500) | 処理中 | 未設定 | PH2ヒアリングシート。暫定版7/31提出、確定版8/7提出済み。8/21時点でSBI回答待ち/最終承認待ち。 |
| 中 | [TAIKOBANK-530](https://sbifi.backlog.com/view/TAIKOBANK-530) | 処理中 | 未設定 | 無通帳口座切替の実際に切り替わるタイミング確認。翌日か、特定時刻か。画面/IF設計に必要。 |
| 中 | [TAIKOBANK-484](https://sbifi.backlog.com/view/TAIKOBANK-484) | 未対応 | 未設定 | 振込機能の実現に向けた検討。Ph2.0機能拡充の1つ。 |
| 中 | [TAIKOBANK-480](https://sbifi.backlog.com/view/TAIKOBANK-480) | 未対応 | 未設定 | アプリでの振替口座の選択範囲。仕様確定待ち。 |
| 中 | [TAIKOBANK-449](https://sbifi.backlog.com/view/TAIKOBANK-449) | 処理中 | 未設定 | カードローンの商品種類区分の確認。実装に必要。 |

### 現在地のまとめ
基本設計の前提となるMIRO画面設計書確認が未完了。**[TAIKOBANK-520](https://sbifi.backlog.com/view/TAIKOBANK-520)は8/17期限を超過**しており、最優先で対応すべき。一方、ヒアリングシートは[TAIKOBANK-500](https://sbifi.backlog.com/view/TAIKOBANK-500)で確定版が8/7に提出され、8/21にSBI側回答が記載された。主要仕様は確定に近く、銀行側の最終承認待ち。Ph2.0は2027/07/01リリース予定だが、MIRO確認の遅延が基本設計・開発・テスト工程に波及するリスクがある。

---


---

## 全体TODO（優先順）

### 今週〜今月中に対応が必要

| # | TID PRDタスク | 対象銀行 | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 1 | ○（監視） | 大光 | 本番問い合わせ「再認証頻発」の原因調査と回答の進捗確認 | [TAIKOBANK-532](https://sbifi.backlog.com/view/TAIKOBANK-532) 未対応・高優先度 | 明日中回答必須。お客様怒りモード。技術調査は開発・運用チームが実施し、TID PRDは進捗監視・銀行向け回答調整が中心。 |
| 2 | ○（監視） | 大光 | FIDO認証ループの調査進捗確認 | [TAIKOBANK-531](https://sbifi.backlog.com/view/TAIKOBANK-531) 処理中 | 本番問い合わせ。強制アップデート後の不具合。技術調査はスコープ外だが、お客様対応の進捗はWatch。 |
| 3 | ◎ | 大光 | PH2 MIRO画面設計書の確認・コメント返信 | [TAIKOBANK-520](https://sbifi.backlog.com/view/TAIKOBANK-520) 未対応・期限超過 | 8/17期限超過。基本設計の前提が止まる。TID PRDの責務。 |
| 4 | ◎ | 大光 | PH2ヒアリングシート確定版の提出 | [TAIKOBANK-500](https://sbifi.backlog.com/view/TAIKOBANK-500) 処理中 | 暫定版〜7/31、確定版〜8/7予定。遅延中。TID PRDの責務。 |
| 5 | ◎ | 大光 | 振替時の残高不足エラーコード・メッセージの確定 | [TAIKOBANK-512](https://sbifi.backlog.com/view/TAIKOBANK-512) 処理中 | 総合テストに必要。仕様決め・銀行合意がTID PRDのスコープ。 |
| 6 | ◎ | 大光 | 承認取引エラー時の返却値確認 | [TAIKOBANK-525](https://sbifi.backlog.com/view/TAIKOBANK-525) 処理中 | カードローン・定期預金・普通預金支払の実装・テストに必要。仕様決めがTID PRDのスコープ。 |
| 7 | × | 大光 | GraphQL 500発生の原因切り分け | [TAIKOBANK-505](https://sbifi.backlog.com/view/TAIKOBANK-505) 処理中 | 本番環境で発生。日立様への調査依頼中。技術調査・障害対応はTID PRDのスコープ外。 |
| 8 | ◎ | トマト | 帳票レイアウト案の提示とIB契約表扱いの確認 | [TMT_IBPJ-24](https://sbinbs.backlog.com/view/TMT_IBPJ-24) 未対応 | 8/31期限。10/15内部結合テストに影響。顧客折衝・仕様決めがTID PRDのスコープ。 |
| 9 | ◎ | トマト | ヒアリングシート未回答項目の確認・CSV項目FIX | [TMT_IBPJ-6](https://sbinbs.backlog.com/view/TMT_IBPJ-6)、[TMT_IBPJ-23](https://sbinbs.backlog.com/view/TMT_IBPJ-23) 処理中 | 期限8/21。CSV実装の前提。顧客折衝・仕様決めがTID PRDのスコープ。 |
| 10 | ◎ | トマト | 共通バリデーションExcelデータの共有 | [TMT_IBPJ-20](https://sbinbs.backlog.com/view/TMT_IBPJ-20) 処理中・期限超過 | 8/3超過。7/31にExcel提示されたが大光仕様混在・CSV項目不足の指摘あり。正しいトマト向けデータの再提出と、CSV項目属性・桁数の確定が必要。 |

### 来月以降（リリースに向けた準備）

| # | TID PRDタスク | 対象銀行 | やること | 根拠・チケット | 期限・影響 |
|---|---|---|---|---|---|
| 11 | × | 大光 | PH1.5勘定系疎通確認用口座の仕込み | [TAIKOBANK-477](https://sbifi.backlog.com/view/TAIKOBANK-477) 未対応 | 総合テストに必要。環境・データ準備は技術チームの作業。 |
| 12 | × | 大光 | テスト用マイナンバーカードの用意 | [TAIKOBANK-490](https://sbifi.backlog.com/view/TAIKOBANK-490) 未対応 | 総合テストに必要。実物調達・技術準備はスコープ外。 |
| 13 | ◎ | 大光 | 更新系機能のメール送信内容提示 | [TAIKOBANK-527](https://sbifi.backlog.com/view/TAIKOBANK-527) 未対応 | 11/13。DNSレコード追加の可能性あり。文言・送信元等の仕様決めがTID PRDのスコープ。 |
| 14 | ◎ | 大光 | ヒアリングシート残項目の提出 | [TAIKOBANK-528](https://sbifi.backlog.com/view/TAIKOBANK-528) 未対応 | 11/13。基本設計以降の工程入力。TID PRDの責務。 |
| 15 | ◎ | 大光 | 無通帳口座切替の切替タイミング確定 | [TAIKOBANK-530](https://sbifi.backlog.com/view/TAIKOBANK-530) 処理中 | Ph2.0のIF/画面設計に必要。業務仕様・銀行合意がTID PRDのスコープ。 |
| 16 | ◎ | 大光 | 振込機能・振替口座選択範囲の仕様確定 | [TAIKOBANK-484](https://sbifi.backlog.com/view/TAIKOBANK-484)、[TAIKOBANK-480](https://sbifi.backlog.com/view/TAIKOBANK-480) 未対応 | Ph2.0機能拡充。仕様決めがTID PRDのスコープ。 |
| 17 | ◎ | トマト | ローン連携、バックオフィス事務フロー、パスワード変換表の確定 | [TMT_IBPJ-21](https://sbinbs.backlog.com/view/TMT_IBPJ-21)、[TMT_IBPJ-22](https://sbinbs.backlog.com/view/TMT_IBPJ-22)、[TMT_IBPJ-23](https://sbinbs.backlog.com/view/TMT_IBPJ-23) 処理中 | 実装・テストに必要。業務フロー・仕様決めがTID PRDのスコープ。 |
| 18 | × | トマト | テスト口座・テストカード・勘定系テストカレンダー・脆弱性診断の整備 | [TMT_IBPJ-13](https://sbinbs.backlog.com/view/TMT_IBPJ-13)、[TMT_IBPJ-9](https://sbinbs.backlog.com/view/TMT_IBPJ-9)、[TMT_IBPJ-15](https://sbinbs.backlog.com/view/TMT_IBPJ-15)、[TMT_IBPJ-14](https://sbinbs.backlog.com/view/TMT_IBPJ-14) 処理中 | 10/15内部結合テスト完了に向けて必要。環境・テスト準備は技術チームの作業。 |

---

## 全体の期日メモ
- 8/31：トマト帳票・CSVの銀行回答フォロー期日
- 10/15：トマトIB移行 内部結合テスト完了目標（勘定系テスト環境リフレッシュが9/30→10/16に変更された影響）
