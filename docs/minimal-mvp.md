# TID Workboard 最小構成

## 目的

TIDチーム全体の Jira タスク、銀行とのやり取りを記録する Nuvolab Backlog、銀行ごとのプロジェクト現在地を `index.html` で一目で確認し、読むべきチケット数を減らす。

## 対象

- TID Product Backlog と、その実行チーム（TID PRD / Berserkers / SDK等）のJiraタスク
- 銀行とのやり取りに使う Nuvolab Backlog。これは銀行案件の状態確認における最優先の原本とする。
- 銀行ごとのプロジェクト一覧

## 対象外

- 定例運用の管理
- Slack連携、議事録の構造化
- JiraやBacklogへの書き戻し
- タスクの自動クローズ判断

## AIによる更新ルール

1. 銀行案件は Nuvolab Backlog を最優先の原本とする。JiraはTID内部のタスク管理に用いる。
2. AIは各チケットから、ゴール、背景、現在地、関連情報、完了予定日、担当ボールを要約する。
3. 情報が欠ける場合は `未設定` / `要確認` と表示し、補完・推測しない。
4. 担当ボールは、次にアクションする組織を表示する。例: `TID PRD`、`TID Berserkers`、`SDKチーム`、`XXX銀行`、`IB1チーム`。
5. JiraのステータスとPMO上の「現在地」を区別する。前者は原本、後者はAI要約である。

## データの置き場所

- `data/tid-dashboard-data.js`: ダッシュボードが読むデータ。ブラウザで直接 `index.html` を開けるようJavaScript形式にする。
- `index.html`: 画面。データ表示だけを行い、原本を更新しない。
- `bank/{銀行名}/README.md`: 銀行別プロジェクトの人間向け詳細。

## Jira取込に必要な情報

自動更新を開始するには、次のいずれかが必要。

1. Jira MCP / API の接続設定と、対象プロジェクトキー・JQL。
2. Jiraチケット一覧のCSVまたはJSONエクスポート。
3. Jira検索結果または各チケットURLをチャットで共有。

接続後、AIは `data/tid-dashboard-data.js` を更新し、`index.html` に即時反映する。Backlogの未取得・Jiraの未接続は、ダッシュボードで明示する。