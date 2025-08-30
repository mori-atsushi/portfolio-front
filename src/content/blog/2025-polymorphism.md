---
title: 'ポリモーフィズムで条件分岐を置き換える利点と欠点'
description: '最近『良いコードの道しるべ 変化に強いソフトウェアを作る原則と実践』という書籍を出版しました。\nこの本は、主に初学者に向けて「どうすれば読みやすく、保守しやすいコードを書けるか」をできるだけシンプルにまとめました。\nそのため、複雑であったり議論を呼ぶようなテーマ、また特定の言語に強く紐づく内容は意図的に載せていません。\n本で書ききれなかった内容に関して、ブログでいくつか紹介したいと思います。\n初回は、「ポリモーフィズムで条件分岐を置き換える」ことのメリットとデメリットについて紹介します。'
pubDate: '2025-08-30'
ogpImage: '../../assets/2025/2025-08-30-ogp.png'
---

最近『[良いコードの道しるべ 変化に強いソフトウェアを作る原則と実践](https://amzn.asia/d/3SthU2n)』という書籍を出版しました。

この本は、主に初学者に向けて「どうすれば読みやすく、保守しやすいコードを書けるか」をできるだけシンプルにまとめました。

そのため、複雑であったり議論を呼ぶようなテーマ、また特定の言語に強く紐づく内容は意図的に載せていません。

本で書ききれなかった内容に関して、ブログでいくつか紹介したいと思います。

初回は、「ポリモーフィズムで条件分岐を置き換える」ことのメリットとデメリットについて紹介します。

## ポリモーフィズムで条件分岐を置き換える方法

`if` や `when` (`switch`)のような条件分岐はプログラミングを学び始めてすぐに習う構文であり、頻繁に使います。

一方で、条件分岐が複雑になって見通しが悪くなるケースも多々あります。

そのような場合に検討候補となるのが**ポリモーフィズム**による置き換えです。

たとえば以下のような条件分岐があったとします。

渡された記事をHTMLもしくはマークダウン形式で出力する関数です。

```kotlin
fun convertToString(article: Article, format: OutputFormat): String {
    return when (format) {
        OutputFormat.HTML ->
            "<h1>${article.title}</h1>\n<p>${article.body}</p>"

        OutputFormat.MARKDOWN ->
            "# ${article.title}\n\n${article.body}"
    }
}

enum class OutputFormat {
    HTML,
    MARKDOWN
}
```

これは、インターフェースを使って以下のように書き直すこともできます。

```kotlin
interface ArticleFormatter {
    fun convertToString(article: Article): String
}

object HtmlFormatter : ArticleFormatter {
    override fun convertToString(article: Article) =
        "<h1>${article.title}</h1>\n<p>${article.body}</p>"
}

object MarkdownFormatter : ArticleFormatter {
    override fun convertToString(article: Article) =
        "# ${article.title}\n\n${article.body}"
}
```

以下のように呼び出すことが可能です。

```kotlin
fun outputAsHtml(article: Article): String {
    return HtmlFormatter.convertToString(article)
}
```

今回は列挙型を例に挙げましたが、if文に対しても`true`の条件と`false`の条件に対して実装を用意することで、同じようにポリモーフィズムによる置き換えが可能です。

## ポリモーフィズムによる置き換えのメリット

このような置き換えには、主に2つのメリットがあります。

* **拡張が容易**: 新しいフォーマットを簡単に追加できます。
* **独立した変更が容易**: HTMLフォーマットとマークダウンフォーマットが別々のクラスになっているので、それぞれを独立して変更しやすくなります。

また、状況によっては以下のようなメリットが享受できます。

### 分散した条件分岐を1箇所にまとめる

同じ`if`や`when`がコードベースに散らばるのを防ぎ、振る舞いを型へ集約することで重複・齟齬・漏れを防ぐことが期待されます。

### 各ケース固有の依存や設定値の影響範囲を最小化できる

各ケースに固有の依存や設定値があった場合、たとえばマークダウン特有の設定があるなら、そのケースにだけ設定を渡せるため影響範囲を局所化できます。


```kotlin
class MarkdownFormatter(private val configuration: MarkdownConfiguration) : ArticleFormatter {
    override fun convertToString(article: Article) = /* ... */
}
```

共通の分岐ブロックに設定値を渡す設計だと、他のケースからもその値が見えてしまいがちです。

### テスト容易性の向上

各ケースが独立しているため、各ケースごとのテストがしやすくなります。

また、インターフェースを使っているため、テスト時は異なるフォーマットを使う、といったことも可能です。

## ポリモーフィズムによる置き換えの注意点

たまに、このポリモーフィズムによる置き換えを多用すべきだ、条件分岐はできるだけ避けるべき、といった主張を見かけますが、安易な多用は注意が必要です。

ポリモーフィズムはいくつかのメリットがあるものの、インターフェースを使うことで依存が暗黙的になり、コードを追いにくくなる側面があります。

### 列挙型に対する網羅性

条件分岐を避けるべきという主張の多くは、`when`(`switch`)は網羅性を担保できない、という前提で話していることが多いように感じます。

確かに以前のJavaなどでは列挙型に対する網羅性を担保できず、それの回避策としてポリモーフィズムを使うということもあったと思います。

しかし最近の多くの言語では、コンパイル時に網羅性をチェックしてくれることが増えています。

Javaも追加されたSwitch式で網羅性チェックがサポートされています。

また、テストを使って網羅性をチェックする方法もあります。

参考：[コード品質向上のテクニック：第41回 「アーキテクチャ」ただいま工事中](https://techblog.lycorp.co.jp/ja/20240905icq)

列挙型で十分に網羅性を確保できる場合、網羅性確保だけを目的にポリモーフィズムへ置き換えるのは得策ではありません。

### オブジェクトに振る舞いをもたせるべきという主張

もう一つは、オブジェクトには振る舞いをもたせるべき、という主張です。

DDD（ドメイン駆動設計）の文脈でもよく取り上げられるプラクティスだと思います。

この主張には概ね賛同しますが、いくつか注意点があります。

#### レイヤーの関心事に注意する

一つのオブジェクトにむやみに多くの挙動を持たせようとすると、本来各レイヤーに配置すべきような内容が全て一つのオブジェクトにまとまってしまうことがあります。

たとえば以下はユーザの状態を表現する型ですが、データレイヤー用の実装とUIレイヤー用の実装が一箇所にまとまっています。

```kotlin
interface UserStatus {
    fun asDbValue(): String // データレイヤー用
    fun formatToString(): String // UI用
}
```

これはUIとデータレイヤーを独立して変更したいときの妨げになりますし、各レイヤーから不要な情報が見えるという面でもあまり良くありません。

以下のように、適切なレイヤーに配置するほうがよいでしょう。

```kotlin
enum class UserStatus { /* ... */ }

// データレイヤーに配置
fun UserStatus.asDbValue(): String {
    return when (this) {
        /* ... */
    }
}

// UIレイヤーに配置
fun UserStatus.formatToString(): String {
    return when (this) {
        /* ... */
    }
}
```

#### 依存関係に注意する

オブジェクトに多くの挙動を持たせようとすると、そのオブジェクトが依存関係を持つ可能性があります。

たとえば、メールまたはログとしてテキストを出力する処理をポリモーフィズムで表現しています。

```kotlin
interface Output {
    fun send(message: String)
}

class MailOutput(private val mailer: Mailer) : Output {
    override fun send(message: String) {
        mailer.sendMail(message)
    }
}

object LogOutput : Output {
    override fun send(message: String) {
        println(message)
    }
}
```

このコード自体には問題はありませんが、この `Output` オブジェクトを広範囲に引き回すと、依存関係が複雑になります。

特にレイヤー間をまたぐオブジェクトは、依存関係を持たない純粋なデータオブジェクトであるのが望ましいです。

レイヤー間は列挙型でやり取りし、最後実際に処理を行うときにインターフェースに移譲するという方法もあります。

```kotlin
class OutputUseCase(private val outputs: Map<OutputType, Output>) {
    fun send(message: String, type: OutputType) {
        outputs[type]?.send(message)
    }
}

enum class OutputType {
    Mail,
    Log
}
```

## どう使い分けるか

これまで説明したとおり、ポリモーフィズムを使うべきタイミングとそうでないタイミングが存在します。

複雑さに見合うメリットがあるか確認すべきです。

具体的には、以下のようなケースでポリモーフィズムを使った置き換えを検討するのが良いでしょう。

* 十分に抽象可能な概念である
* 条件の数が多い
* 各条件の独立性が高い
* 今後条件が増えることが予想される

たとえば、以下のコードはポリモーフィズムを使わないほうが良いでしょう。

整数を人が読みやすい形式に変換する関数です。

```kotlin
/**
 * 整数を表示形式に変換します。
 *
 * 例：
 * 950 -> 950
 * 1000 -> 1K
 * 1100 -> 1.1K
 * 12345 -> 12.3K
 */
fun formatToString(count: Int): String {
    return if (count < 1000) {
        count.toString()
    } else {
        val kValue = count / 1000.0
        if (kValue % 1.0 == 0.0) {
            "${kValue.toInt()}K"
        } else {
            String.format("%.1fK", kValue)
        }
    }
}
```

これは、抽象化して扱える事柄が少なく、呼び出し元が詳細について知っておいたほうが便利だからです。

また、ポリモーフィズムを使うと決めた場合、レイヤーの知識や依存関係に注意し、どのスコープで使うかについても考慮が必要です。

## まとめ
ポリモーフィズムによる条件分岐の置き換えは、効果的に使えば非常に便利です。

一方で、不要にコードを複雑にするリスクも備えています。

新しい設計方法を学んだ際、安易に適用するのではなく、そのメリットやデメリットを十分に理解することが重要です。

インターフェースの使い方や抽象については書籍でも詳しく触れているので、よければこちらも参照してください。

[![](../../assets/2025/good-code-book-cover.png)](https://amzn.asia/d/3SthU2n)
[良いコードの道しるべ 変化に強いソフトウェアを作る原則と実践](https://amzn.asia/d/3SthU2n)