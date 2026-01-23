
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]; // 0-11
// Current implementation array
const currentSha = ['北', '西', '南', '东', '北', '西', '南', '东', '北', '西', '南', '东'];

// Correct Logic (San He)
// Shen(9)-Zi(0)-Chen(4) calculated -> Sha South (Nan)
// Si(5)-You(9)-Chou(1) -> Sha East (Dong)
// Yin(2)-Wu(6)-Xu(10) -> Sha North (Bei)
// Hai(11)-Mao(3)-Wei(7) -> Sha West (Xi)

const correctMap = {};
[9, 0, 4].forEach(i => correctMap[i] = '南');
[5, 9, 1].forEach(i => correctMap[i] = '东'); // Wait, 9 (You) is repeated? Ah, Shen is 8.
// Index check:
// Zi=0, Chou=1, Yin=2, Mao=3, Chen=4, Si=5, Wu=6, Wei=7, Shen=8, You=9, Xu=10, Hai=11

// Re-eval:
// Water: Shen(8), Zi(0), Chen(4) -> Sha South
// Metal: Si(5), You(9), Chou(1) -> Sha East
// Fire: Yin(2), Wu(6), Xu(10) -> Sha North
// Wood: Hai(11), Mao(3), Wei(7) -> Sha West

console.log("Checking Sha Directions:");
for (let i = 0; i < 12; i++) {
    let zhi = Zhi[i];
    let curr = currentSha[i];

    let correct = '';
    if ([8, 0, 4].includes(i)) correct = '南';
    else if ([5, 9, 1].includes(i)) correct = '东';
    else if ([2, 6, 10].includes(i)) correct = '北';
    else if ([11, 3, 7].includes(i)) correct = '西';

    console.log(`${zhi}(${i}): Current=${curr}, Correct=${correct} -> ${curr === correct ? 'OK' : 'FAIL'}`);
}
