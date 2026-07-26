function selectQ(index){
    if(answered[index]!==null) return;

    // bỏ active cũ
    document.querySelectorAll(".cell").forEach(c=>c.classList.remove("active"));

    current=index;
    document.getElementById("cell"+index).classList.add("active");

    loadQ();
}
// 🔄 đổi lượt: 1 → 2 → 3 → 1
teamTurn++;
if(teamTurn > 3) teamTurn = 1;