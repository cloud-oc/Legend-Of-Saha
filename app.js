const stage = document.getElementById('stage');
const status = document.getElementById('status');
document.getElementById('start').addEventListener('click', async () => {
  try {
    if (!window.RufflePlayer?.newest) throw new Error('运行器加载失败，请刷新页面后重试。');
    const player = window.RufflePlayer.newest().createPlayer();
    stage.replaceChildren(player);
    status.textContent = '正在加载游戏，请稍候…';
    await player.ruffle().load({url: './game/saha.swf'});
    status.textContent = '文件已载入，首次场景初始化可能需要 1–2 分钟。进入场景后点击画面使用键盘操作。';
    player.focus();
  } catch (error) {
    status.textContent = `加载失败：${error.message} 请刷新页面重试。`;
  }
});
document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await stage.requestFullscreen();
  } catch { status.textContent = '当前浏览器不支持全屏，请使用浏览器缩放。'; }
});

