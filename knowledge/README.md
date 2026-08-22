# ナレッジの使い分け

このディレクトリには、PMOが判断するための要約と根拠を保存する。外部システムの原本を複製する場所ではない。タスクの状態・期限・担当ボールは、ここにあるProduct BacklogまたはNulab Backlogチケット知見のどちらか一方だけで更新する。

| 場所 | 管理するもの | 親子関係 |
|---|---|---|
| [product-backlog/](product-backlog/README.md) | TIDチーム全体の最上位タスク | 親 |
| [nulab-backlog/](nulab-backlog/) | 銀行との依頼・回答・合意に使うNulab Backlogの知見 | Product Backlogまたは銀行案件に紐付く子 |
| [minutes/](minutes/README.md) | 会議メモから抽出した決定・未決・アクション・リスク | 判断根拠として両方に紐付く |

更新時は、根拠のURLまたは元メモの保存先を必ず残す。

## 重複させないもの

- 銀行別の残タスク一覧は作らない。案件の現在地は `bank/{銀行名}/README.md`、タスクの詳細は上記の親子関係で参照する。
- 同じタスクの状態・期限・担当ボールを複数ファイルへ転記しない。
- Product Backlogが登録された後は、銀行Backlogの内容をProduct Backlogの親タスクに集約して参照する。