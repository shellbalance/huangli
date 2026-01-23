
class LunarCalendar {
    constructor() {
        this.Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
        this.Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    }

    getGanZhiDay(date) {
        const baseDate = new Date(1900, 0, 31);
        const offset = Math.floor((date - baseDate) / 86400000);
        const ganIndex = (offset + 0) % 10;
        const zhiIndex = (offset + 4) % 12;
        return this.Gan[ganIndex] + this.Zhi[zhiIndex];
    }

    getTaiShen(ganzhi) {
        // Updated map with the fix for 丁酉
        const taishen = {
            '甲子': '占门碓 外东南', '乙丑': '碓磨厕 外东南', '丙寅': '厨灶炉 外正南', '丁卯': '仓库门 外正南',
            '戊辰': '房床栖 外正南', '己巳': '占门床 外正南', '庚午': '占碓磨 外正南', '辛未': '厨灶厕 外西南',
            '壬申': '仓库炉 外西南', '癸酉': '房床门 外西南', '甲戌': '占房床 外西南', '乙亥': '碓磨栖 外西南',
            '丙子': '厨灶碓 外西南', '丁丑': '仓库厕 外西南', '戊寅': '房床炉 外正南', '己卯': '占房门 外正南',
            '庚辰': '碓磨床 外正北', '辛巳': '厨灶栖 外正北', '壬午': '仓库碓 外正北', '癸未': '房床厕 外正北',
            '甲申': '占门炉 外东南', '乙酉': '碓磨门 外东南', '丙戌': '厨灶床 外西南', '丁亥': '仓库栖 外西南',
            '戊子': '房床碓 外正南', '己丑': '占门厕 外正南', '庚寅': '碓磨炉 外正北', '辛卯': '厨灶门 外正北',
            '壬辰': '仓库床 外正北', '癸巳': '房床栖 外正北', '甲午': '占门碓 外东南', '乙未': '碓磨厕 外东南',
            '丙申': '厨灶炉 外西南', '丁酉': '仓库门 房内北', '戊戌': '房床栖 外西南', '己亥': '占门床 外西南',
            '庚子': '占碓磨 外正南', '辛丑': '厨灶厕 外正南', '壬寅': '仓库炉 外正南', '癸卯': '房床门 外正南',
            '甲辰': '占房床 外东南', '乙巳': '碓磨栖 外东南', '丙午': '厨灶碓 外西南', '丁未': '仓库厕 外西南',
            '戊申': '房床炉 外正南', '己酉': '占房门 外正南', '庚戌': '碓磨床 外正北', '辛亥': '厨灶栖 外正北',
            '壬子': '仓库碓 外正南', '癸丑': '房床厕 外正南', '甲寅': '占门炉 外东南', '乙卯': '碓磨门 外东南',
            '丙辰': '厨灶床 外正南', '丁巳': '仓库栖 外正南', '戊午': '房床碓 外正南', '己未': '占门厕 外正南',
            '庚申': '碓磨炉 外正北', '辛酉': '厨灶门 外正北', '壬戌': '仓库床 外正北', '癸亥': '房床栖 外西南'
        };
        return taishen[ganzhi] || 'Unknown';
    }
}

const lunar = new LunarCalendar();
// Test for 2026-01-23 (Ding You)
const targetDate = new Date('2026-01-23T12:00:00+08:00');
const ganzhi = lunar.getGanZhiDay(targetDate);
const taishen = lunar.getTaiShen(ganzhi);

console.log("=== Tai Shen Test ===");
console.log(`Date: 2026-01-23`);
console.log(`GanZhi Day: ${ganzhi}`);
console.log(`Tai Shen Direction: ${taishen}`);
console.log("Expected: 仓库门 房内北");
console.log(`Pass: ${taishen === '仓库门 房内北'}`);
