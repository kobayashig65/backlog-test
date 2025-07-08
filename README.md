# Sugoroku Game (TypeScript/HTML5)

## 概要 (Overview)

これは、TypeScriptとHTML Canvasを使用して実装された、日本のボードゲーム「すごろく」のシンプルなバージョンです。

This is a simple implementation of the Japanese board game "Sugoroku," built with TypeScript and rendered on an HTML Canvas.

## セットアップと実行方法 (Setup and How to Run)

1.  **依存関係のインストール (Install Dependencies)**
    プロジェクトのルートディレクトリで `npm` を使用して必要なパッケージをインストールします。
    Navigate to the project root directory and install the necessary packages using `npm`.
    ```bash
    npm install
    ```

2.  **開発サーバーの起動 (Start the Development Server)**
    以下のコマンドで開発サーバーを起動します。
    Run the following command to start the development server.
    ```bash
    npm start
    ```
    これにより、自動的にブラウザが開き、`http://localhost:9000` でゲームが実行されます。
    This will automatically open your browser and run the game at `http://localhost:9000`.

## 遊び方 (How to Play)

-   **目的 (Objective):** プレイヤー（青い円）がCPU（赤い円）より先にゴール（'G'マス）に到達することを目指します。
    The goal is to get your piece (the blue circle) to the goal ('G' square) before the CPU (the red circle).
-   **操作 (Controls):** あなたの番が来たら、スペースキーを押してサイコロを振ります。
    When it's your turn, press the spacebar to roll the dice.