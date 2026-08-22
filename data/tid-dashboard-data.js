window.TID_DASHBOARD_DATA = {
  updatedAt: "2026-08-22",
  jiraSync: {
    status: "not_connected",
    message: "Jiraは未接続です。Jiraタスクは接続情報またはチケット一覧を受け取った後に追加します。"
  },
  backlogSync: {
    status: "connected",
    message: "大光銀行 Backlogを2026-08-22にMCPから取得しました。状態・優先度・担当者はBacklog原本、担当ボールはローカル台帳の直近確認を表示します。"
  },
  tasks: [
    { key: "TAIKOBANK-532", title: "再認証メッセージ頻発の原因・対策確認", source: "銀行 Backlog", classification: "大光 Ph1.5 / 本番問い合わせ", goal: "お客様への原因・対策回答", background: "Myらっこで再認証が頻発し、翌営業日中の回答が必要。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "開発・運用（調査）", backlogAssignee: "進藤 翔真", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-532", detailPath: "knowledge/backlog/taiko/TAIKOBANK-532.md" },
    { key: "TAIKOBANK-531", title: "FIDO認証ループの調査", source: "銀行 Backlog", classification: "大光 Ph1.5 / 本番問い合わせ", goal: "FIDO認証ループの解消方法を回答", background: "強制アップデート後、Android端末でFIDO認証が完了しない。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "開発・運用（調査）", backlogAssignee: "進藤 翔真", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-531", detailPath: "knowledge/backlog/taiko/TAIKOBANK-531.md" },
    { key: "TAIKOBANK-520", title: "PH2 MIRO画面設計書のレビュー", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "画面設計をレビューし、指摘をMIROへ反映", background: "基本設計の前提となる10画面の確認依頼。", currentStatus: "未対応（Backlog、期限超過）", dueDate: "2026-08-17", ballOwner: "TID PRD", backlogAssignee: "窪田洋輔", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-520", detailPath: "knowledge/backlog/taiko/TAIKOBANK-520.md" },
    { key: "TAIKOBANK-500", title: "PH2ヒアリングシートの最終承認", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "ヒアリングシートの内容を確定", background: "確定版提出後の確認・最終承認待ち。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "SBI", backlogAssignee: "SBI_中嶋", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-500", detailPath: "knowledge/backlog/taiko/TAIKOBANK-500.md" },
    { key: "TAIKOBANK-512", title: "振替時の残高不足エラーの確定", source: "銀行 Backlog", classification: "大光 Ph1.5 / 総合テスト", goal: "エラーコード・メッセージを仕様として確定", background: "総合テストに必要な勘定系エラーの確認。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "日立（技術調査）", backlogAssignee: "神山紘和", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-512", detailPath: "knowledge/backlog/taiko/TAIKOBANK-512.md" },
    { key: "TAIKOBANK-525", title: "承認取引エラー時の返却値確認", source: "銀行 Backlog", classification: "大光 Ph1.5 / 総合テスト", goal: "対象APIのエラー返却値を確定", background: "カードローン・預金系APIの実装・テストに必要。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "SBI・日立", backlogAssignee: "神山紘和", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-525", detailPath: "knowledge/backlog/taiko/TAIKOBANK-525.md" },
    { key: "TAIKOBANK-527", title: "更新系機能のメール送信内容提示", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "メール文面・送信元を提示", background: "DNSレコード追加が必要になる可能性がある。", currentStatus: "未対応（Backlog）", dueDate: "2026-11-13", ballOwner: "TID PRD", backlogAssignee: "窪田洋輔", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-527", detailPath: "knowledge/backlog/taiko/TAIKOBANK-527.md" },
    { key: "TAIKOBANK-528", title: "ヒアリングシート残項目の提出", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "メール通知・外部遷移URL・注意事項文言を提出", background: "基本設計以降の工程入力に必要。", currentStatus: "未対応（Backlog）", dueDate: "2026-11-13", ballOwner: "TID PRD", backlogAssignee: "窪田洋輔", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-528", detailPath: "knowledge/backlog/taiko/TAIKOBANK-528.md" },
    { key: "TAIKOBANK-530", title: "無通帳口座切替タイミングの確認", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "実際の切替日時を仕様として確定", background: "画面・IF設計に必要な業務仕様の確認。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "銀行・日立", backlogAssignee: "林 竜太郎", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-530", detailPath: "knowledge/backlog/taiko/TAIKOBANK-530.md" },
    { key: "TAIKOBANK-484", title: "振込機能の勘定系実現案確認", source: "銀行 Backlog", classification: "大光 Ph2.0 / 要件検討", goal: "勘定系の実現案を受け、実現可否を判断", background: "実現案は日立、最終判断は銀行が担当。", currentStatus: "未対応（Backlog）", dueDate: "2026-08-31", ballOwner: "日立", backlogAssignee: "有安 和優", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-484", detailPath: "knowledge/backlog/taiko/TAIKOBANK-484.md" },
    { key: "TAIKOBANK-480", title: "アプリでの振替口座選択範囲の確定", source: "銀行 Backlog", classification: "大光 Ph2.0 / 要件検討", goal: "振替口座の選択仕様を決定", background: "アプリ側での対応可否を提示済みで、銀行判断待ち。", currentStatus: "未対応（Backlog）", dueDate: "未設定", ballOwner: "大光銀行", backlogAssignee: "窪田洋輔", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-480", detailPath: "knowledge/backlog/taiko/TAIKOBANK-480.md" },
    { key: "TAIKOBANK-449", title: "カードローンの商品種類区分確認", source: "銀行 Backlog", classification: "大光 Ph2.0 / 基本設計", goal: "事業性・消費性を判別するAPI仕様を確認", background: "カードローン借入・返済の実装に必要。", currentStatus: "処理中（Backlog）", dueDate: "未設定", ballOwner: "SBI・日立", backlogAssignee: "神山紘和", backlogUrl: "https://sbifi.backlog.com/view/TAIKOBANK-449", detailPath: "knowledge/backlog/taiko/TAIKOBANK-449.md" }
  ],
  projects: [
    {
      id: "taiko-ph15",
      bank: "大光銀行",
      name: "大光 Ph1.5",
      goal: "口座開設の単独導線と取引時確認機能をリリースする。",
      phase: "総合テスト",
      releaseDate: "2026-10-01",
      status: "要確認",
      detailPath: "bank/taiko/README.md"
    },
    {
      id: "taiko-ph20",
      bank: "大光銀行",
      name: "大光 Ph2.0",
      goal: "定期預金、無通帳、カードローン、振替などの機能を拡充する。",
      phase: "基本設計",
      releaseDate: "2027-07-01",
      status: "要対応",
      detailPath: "bank/taiko/README.md"
    },
    {
      id: "tomato-ib-migration",
      bank: "トマト銀行",
      name: "トマト IB移行",
      goal: "VoltからIBへ移行し、銀行固有の業務差分を反映する。",
      phase: "開発・内部結合テスト",
      releaseDate: "2027-03-01",
      status: "進行中",
      detailPath: "bank/tomato/README.md"
    }
  ]
};