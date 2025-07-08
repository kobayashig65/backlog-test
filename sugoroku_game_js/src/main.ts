
import { Player } from './player';

// 定数
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const BOARD_COLOR = "#FFFFFF";
const PLAYER_COLOR = "#0000FF";
const CPU_COLOR = "#FF0000";
const GOAL_COLOR = "#00FF00";
const TEXT_COLOR = "#000000";
const CELL_SIZE = 60;
const CELL_MARGIN = 10;
const BOARD_Y_POS = 250;

// キャンバスとコンテキストの取得
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// ゲームの状態
let player = new Player("Player", "blue");
let cpu = new Player("CPU", "red");
let turn = "player";
let message = "あなたの番です。スペースキーを押してサイコロを振ってください...";
let winner = "";

function drawBoard() {
    // 背景のクリア
    ctx.fillStyle = "#C8C8C8";
    ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    // ボードの描画
    for (let i = 0; i < 11; i++) {
        const x = CELL_MARGIN + i * (CELL_SIZE + CELL_MARGIN);
        const y = BOARD_Y_POS;
        ctx.fillStyle = (i === 10) ? GOAL_COLOR : BOARD_COLOR;
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        
        ctx.fillStyle = TEXT_COLOR;
        ctx.font = "24px sans-serif";
        const text = (i < 10) ? i.toString() : "G";
        ctx.fillText(text, x + 20, y + 40);
    }

    // プレイヤーとCPUの駒を描画
    const playerPosX = CELL_MARGIN + player.position * (CELL_SIZE + CELL_MARGIN) + CELL_SIZE / 2;
    ctx.fillStyle = PLAYER_COLOR;
    ctx.beginPath();
    ctx.arc(playerPosX, BOARD_Y_POS - 30, 20, 0, Math.PI * 2);
    ctx.fill();

    const cpuPosX = CELL_MARGIN + cpu.position * (CELL_SIZE + CELL_MARGIN) + CELL_SIZE / 2;
    ctx.fillStyle = CPU_COLOR;
    ctx.beginPath();
    ctx.arc(cpuPosX, BOARD_Y_POS + CELL_SIZE + 30, 20, 0, Math.PI * 2);
    ctx.fill();

    // メッセージの表示
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "28px sans-serif";
    ctx.fillText(message, 50, 50);
    ctx.fillText(`Player: ${player.position}, CPU: ${cpu.position}`, 50, 100);

    if (winner) {
        ctx.font = "48px sans-serif";
        ctx.fillText(winner, SCREEN_WIDTH / 2 - 150, SCREEN_HEIGHT / 2);
    }
}

function handlePlayerTurn() {
    const roll = Math.floor(Math.random() * 6) + 1;
    player.position += roll;
    message = `あなたは ${roll} を出しました。`;

    if (player.position >= 10) {
        player.position = 10;
        winner = "あなたの勝ちです！";
    }
    
    drawBoard();

    if (!winner) {
        turn = "cpu";
        setTimeout(handleCpuTurn, 1500);
    }
}

function handleCpuTurn() {
    message = "CPUの番です...";
    drawBoard();
    
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 6) + 1;
        cpu.position += roll;
        message = `CPUは ${roll} を出しました。`;

        if (cpu.position >= 10) {
            cpu.position = 10;
            winner = "CPUの勝ちです！";
        }

        drawBoard();

        if (!winner) {
            turn = "player";
            message = "あなたの番です。スペースキーを押してサイコロを振ってください...";
            drawBoard(); 
        }
    }, 1500);
}

// キー入力のリスナー
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && turn === 'player' && !winner) {
        handlePlayerTurn();
    }
});

// 初期描画
drawBoard();
