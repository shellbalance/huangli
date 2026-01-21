// 农历数据和计算
class LunarCalendar {
    constructor() {
        // 农历年份信息 (1900-2100)
        this.lunarInfo = [
            0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
            0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
            0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
            0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
            0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
            0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
            0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
            0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
            0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
            0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
            0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
            0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
            0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
            0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
            0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
            0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
            0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
            0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
            0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
            0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
            0x0d520
        ];

        // 天干
        this.Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
        // 地支
        this.Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
        // 生肖
        this.Animals = ["🐭 鼠", "🐮 牛", "🐯 虎", "🐰 兔", "🐲 龙", "🐍 蛇", "🐴 马", "🐑 羊", "🐵 猴", "🐔 鸡", "🐶 狗", "🐷 猪"];
        // 农历月份
        this.nStr1 = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊'];
        // 农历日期
        this.nStr2 = ['初', '十', '廿', '卅'];
        this.nStr3 = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

        // 宜忌数据
        this.suitable = [
            ["祭祀", "祈福", "求嗣", "开光", "出行", "解除", "理发", "会亲友"],
            ["嫁娶", "纳采", "订盟", "祭祀", "祈福", "求医", "治病", "动土"],
            ["开市", "交易", "立券", "纳财", "栽种", "安床", "拆卸", "修造"],
            ["祭祀", "沐浴", "捕捉", "结网", "畋猎", "取渔", "入殓", "除服"],
            ["嫁娶", "祭祀", "开光", "祈福", "求嗣", "出行", "出火", "入宅"],
            ["祭祀", "祈福", "斋醮", "出行", "开市", "立券", "动土", "移徙"],
            ["嫁娶", "开光", "祭祀", "祈福", "求嗣", "出火", "入宅", "移徙"]
        ];

        this.unsuitable = [
            ["嫁娶", "入宅", "移徙", "安床", "作灶", "开市", "破土", "安葬"],
            ["开市", "立券", "安床", "入宅", "安葬", "破土", "动土", "修造"],
            ["嫁娶", "安葬", "入宅", "出行", "祈福", "动土", "破土", "安门"],
            ["嫁娶", "移徙", "入宅", "开市", "动土", "破土", "修造", "安葬"],
            ["动土", "破土", "安葬", "开市", "交易", "立券", "纳财", "分居"],
            ["嫁娶", "安床", "开市", "安葬", "修造", "动土", "破土", "作灶"],
            ["安葬", "开市", "立券", "交易", "纳财", "安床", "伐木", "作梁"]
        ];

        // 五行
        this.wuxingData = ["海中金", "炉中火", "大林木", "路旁土", "剑锋金", "山头火", "涧下水", "城头土", "白蜡金", "杨柳木",
            "泉中水", "屋上土", "霹雳火", "松柏木", "长流水", "沙中金", "山下火", "平地木", "壁上土", "金箔金",
            "覆灯火", "天河水", "大驿土", "钗钏金", "桑柘木", "大溪水", "沙中土", "天上火", "石榴木", "大海水"];
    }

    // 获取农历年份的闰月，0表示无闰月
    leapMonth(year) {
        return this.lunarInfo[year - 1900] & 0xf;
    }

    // 获取农历年份的总天数
    lYearDays(year) {
        let sum = 348;
        for (let i = 0x8000; i > 0x8; i >>= 1) {
            sum += (this.lunarInfo[year - 1900] & i) ? 1 : 0;
        }
        return sum + this.leapDays(year);
    }

    // 获取农历年份闰月的天数
    leapDays(year) {
        if (this.leapMonth(year)) {
            return (this.lunarInfo[year - 1900] & 0x10000) ? 30 : 29;
        }
        return 0;
    }

    // 获取农历年份某月的天数
    monthDays(year, month) {
        return (this.lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29;
    }

    // 转换为农历日期
    toLunar(date) {
        const baseDate = new Date(1900, 0, 31);
        let offset = Math.floor((date - baseDate) / 86400000);

        let year = 1900;
        let daysOfYear = 0;
        while (year < 2100 && offset > 0) {
            daysOfYear = this.lYearDays(year);
            offset -= daysOfYear;
            year++;
        }
        if (offset < 0) {
            offset += daysOfYear;
            year--;
        }

        let month = 1;
        let leap = false;
        let daysOfMonth = 0;
        const leapMonth = this.leapMonth(year);

        while (month < 13 && offset > 0) {
            if (leapMonth > 0 && month === (leapMonth + 1) && !leap) {
                --month;
                leap = true;
                daysOfMonth = this.leapDays(year);
            } else {
                daysOfMonth = this.monthDays(year, month);
            }

            offset -= daysOfMonth;
            if (leap && month === (leapMonth + 1)) leap = false;
            if (!leap) month++;
        }

        if (offset === 0 && leapMonth > 0 && month === leapMonth + 1) {
            if (leap) {
                leap = false;
            } else {
                leap = true;
                --month;
            }
        }

        if (offset < 0) {
            offset += daysOfMonth;
            --month;
        }

        const day = offset + 1;

        return {
            year: year,
            month: month,
            day: day,
            isLeap: leap
        };
    }

    // 获取农历日期字符串
    getLunarDateStr(lunar) {
        let monthStr = (lunar.isLeap ? "闰" : "") + this.nStr1[lunar.month - 1] + "月";
        let dayStr;

        if (lunar.day === 10) {
            dayStr = '初十';
        } else if (lunar.day === 20) {
            dayStr = '二十';
        } else if (lunar.day === 30) {
            dayStr = '三十';
        } else {
            dayStr = this.nStr2[Math.floor(lunar.day / 10)] + this.nStr3[(lunar.day % 10) - 1];
        }

        return monthStr + dayStr;
    }

    // 获取天干地支年
    getGanZhiYear(year) {
        const ganIndex = (year - 4) % 10;
        const zhiIndex = (year - 4) % 12;
        return this.Gan[ganIndex] + this.Zhi[zhiIndex];
    }

    // 获取天干地支月
    getGanZhiMonth(year, month) {
        const ganIndex = ((year - 1900) * 12 + month + 12) % 10;
        const zhiIndex = (month + 2) % 12;
        return this.Gan[ganIndex] + this.Zhi[zhiIndex];
    }

    // 获取天干地支日
    getGanZhiDay(date) {
        // 1900年1月31日是甲辰日，作为基准
        const baseDate = new Date(1900, 0, 31);
        const offset = Math.floor((date - baseDate) / 86400000);
        // 1900年1月31日是甲辰日，甲=0, 辰=4
        const ganIndex = (offset + 0) % 10;
        const zhiIndex = (offset + 4) % 12;
        return this.Gan[ganIndex] + this.Zhi[zhiIndex];
    }

    // 获取生肖
    getAnimal(year) {
        return this.Animals[(year - 4) % 12];
    }

    // 获取五行
    getWuXing(year) {
        return this.wuxingData[(year - 4) % 60 % 30];
    }
}

// 初始化应用
class HuangLiApp {
    constructor() {
        this.lunar = new LunarCalendar();
        // 获取北京时间（UTC+8）
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        this.currentDate = new Date(utc + (3600000 * 8)); // 北京时间 UTC+8
        this.init();
    }

    init() {
        this.updateDate();
        this.updateFortune();
        this.updateExtraInfo();
        this.updateQuote();
    }

    updateDate() {
        const year = this.currentDate.getFullYear();
        const huangdiYear = year + 2697; // 黄帝历年份
        const month = this.currentDate.getMonth() + 1;
        const day = this.currentDate.getDate();
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const weekday = weekdays[this.currentDate.getDay()];

        // 更新黄帝历
        document.getElementById('solarDay').textContent = day;
        document.getElementById('solarMonthYear').textContent = `黄帝${huangdiYear}年${month}月`;
        document.getElementById('weekday').textContent = weekday;

        // 更新农历
        const lunarDate = this.lunar.toLunar(this.currentDate);
        const lunarStr = this.lunar.getLunarDateStr(lunarDate);
        document.getElementById('lunarDate').textContent = lunarStr;

        // 更新干支
        const ganzhiYear = this.lunar.getGanZhiYear(lunarDate.year);
        const ganzhiMonth = this.lunar.getGanZhiMonth(lunarDate.year, lunarDate.month);
        const ganzhiDay = this.lunar.getGanZhiDay(this.currentDate);
        document.getElementById('ganzhi').textContent = `${ganzhiYear}年 ${ganzhiMonth}月 ${ganzhiDay}日`;

        // 更新生肖
        const animal = this.lunar.getAnimal(lunarDate.year);
        document.getElementById('zodiac').textContent = `${animal}年`;
    }

    updateFortune() {
        const dayOfYear = Math.floor((this.currentDate - new Date(this.currentDate.getFullYear(), 0, 0)) / 86400000);
        const index = dayOfYear % this.lunar.suitable.length;

        const suitableList = document.getElementById('suitableList');
        const unsuitableList = document.getElementById('unsuitableList');

        suitableList.innerHTML = '';
        unsuitableList.innerHTML = '';

        this.lunar.suitable[index].forEach(item => {
            const span = document.createElement('span');
            span.className = 'fortune-item';
            span.textContent = item;
            suitableList.appendChild(span);
        });

        this.lunar.unsuitable[index].forEach(item => {
            const span = document.createElement('span');
            span.className = 'fortune-item';
            span.textContent = item;
            unsuitableList.appendChild(span);
        });
    }

    updateExtraInfo() {
        const lunarDate = this.lunar.toLunar(this.currentDate);
        const ganzhiDay = this.lunar.getGanZhiDay(this.currentDate);

        // 五行纳音（根据日干支计算）
        const wuxing = this.getNaYinWuXing(ganzhiDay);
        document.getElementById('wuxing').textContent = wuxing;

        // 冲煞（根据当日地支计算）
        const dayZhi = ganzhiDay[1]; // 获取日干支的地支部分
        const dayZhiIndex = this.lunar.Zhi.indexOf(dayZhi);

        // 地支相冲：子午冲、丑未冲、寅申冲、卯酉冲、辰戌冲、巳亥冲
        const chongIndex = (dayZhiIndex + 6) % 12;
        const chongAnimal = this.lunar.Animals[chongIndex].split(' ')[1];

        // 煞方位：根据日支确定
        const shaDirections = ['北', '西', '南', '东', '北', '西', '南', '东', '北', '西', '南', '东'];
        const shaDirection = shaDirections[dayZhiIndex];

        document.getElementById('chongsha').textContent = `冲${chongAnimal}煞${shaDirection}`;

        // 胎神占方（根据日干支计算）
        const taishen = this.getTaiShen(ganzhiDay);
        document.getElementById('taishen').textContent = taishen;

        // 吉神（根据日期计算）
        const jishen = this.getJiShen(this.currentDate, ganzhiDay);
        document.getElementById('jishen').textContent = jishen;
    }

    // 获取纳音五行
    getNaYinWuXing(ganzhi) {
        const nayin = {
            '甲子': '海中金', '乙丑': '海中金', '丙寅': '炉中火', '丁卯': '炉中火',
            '戊辰': '大林木', '己巳': '大林木', '庚午': '路旁土', '辛未': '路旁土',
            '壬申': '剑锋金', '癸酉': '剑锋金', '甲戌': '山头火', '乙亥': '山头火',
            '丙子': '涧下水', '丁丑': '涧下水', '戊寅': '城头土', '己卯': '城头土',
            '庚辰': '白蜡金', '辛巳': '白蜡金', '壬午': '杨柳木', '癸未': '杨柳木',
            '甲申': '泉中水', '乙酉': '泉中水', '丙戌': '屋上土', '丁亥': '屋上土',
            '戊子': '霹雳火', '己丑': '霹雳火', '庚寅': '松柏木', '辛卯': '松柏木',
            '壬辰': '长流水', '癸巳': '长流水', '甲午': '砂石金', '乙未': '砂石金',
            '丙申': '山下火', '丁酉': '山下火', '戊戌': '平地木', '己亥': '平地木',
            '庚子': '壁上土', '辛丑': '壁上土', '壬寅': '金箔金', '癸卯': '金箔金',
            '甲辰': '覆灯火', '乙巳': '覆灯火', '丙午': '天河水', '丁未': '天河水',
            '戊申': '大驿土', '己酉': '大驿土', '庚戌': '钗钏金', '辛亥': '钗钏金',
            '壬子': '桑柘木', '癸丑': '桑柘木', '甲寅': '大溪水', '乙卯': '大溪水',
            '丙辰': '沙中土', '丁巳': '沙中土', '戊午': '天上火', '己未': '天上火',
            '庚申': '石榴木', '辛酉': '石榴木', '壬戌': '大海水', '癸亥': '大海水'
        };
        return nayin[ganzhi] || '松柏木';
    }

    // 获取胎神占方
    getTaiShen(ganzhi) {
        const taishen = {
            '甲子': '占门碓 外东南', '乙丑': '碓磨厕 外东南', '丙寅': '厨灶炉 外正南', '丁卯': '仓库门 外正南',
            '戊辰': '房床栖 外正南', '己巳': '占门床 外正南', '庚午': '占碓磨 外正南', '辛未': '厨灶厕 外正南',
            '壬申': '仓库炉 外正南', '癸酉': '房床门 外正南', '甲戌': '占房床 外西南', '乙亥': '碓磨栖 外西南',
            '丙子': '厨灶碓 外西南', '丁丑': '仓库厕 外西南', '戊寅': '房床炉 外正北', '己卯': '占房门 外正北',
            '庚辰': '碓磨床 外正北', '辛巳': '厨灶栖 外正北', '壬午': '仓库碓 外正北', '癸未': '房床厕 外正北',
            '甲申': '占门炉 外西南', '乙酉': '碓磨门 外西南', '丙戌': '厨灶床 外西南', '丁亥': '仓库栖 外西南',
            '戊子': '房床碓 外正北', '己丑': '占门厕 外正北', '庚寅': '碓磨炉 外正北', '辛卯': '厨灶门 外正北',
            '壬辰': '仓库床 外正北', '癸巳': '房床栖 外正北', '甲午': '占门碓 外东南', '乙未': '碓磨厕 外东南',
            '丙申': '厨灶炉 外西南', '丁酉': '仓库门 外西南', '戊戌': '房床栖 外西南', '己亥': '占门床 外西南',
            '庚子': '占碓磨 外东北', '辛丑': '厨灶厕 外东北', '壬寅': '仓库炉 外东北', '癸卯': '房床门 外东北',
            '甲辰': '占房床 外东南', '乙巳': '碓磨栖 外东南', '丙午': '厨灶碓 外正南', '丁未': '仓库厕 外正南',
            '戊申': '房床炉 外西南', '己酉': '占房门 外西南', '庚戌': '碓磨床 外西南', '辛亥': '厨灶栖 外西南',
            '壬子': '仓库碓 外西北', '癸丑': '房床厕 外西北', '甲寅': '占门炉 外东北', '乙卯': '碓磨门 外东北',
            '丙辰': '厨灶床 外东南', '丁巳': '仓库栖 外东南', '戊午': '房床碓 外正南', '己未': '占门厕 外正南',
            '庚申': '碓磨炉 外西南', '辛酉': '厨灶门 外西南', '壬戌': '仓库床 外西南', '癸亥': '房床栖 外西南'
        };
        return taishen[ganzhi] || '碓磨炉 外正北';
    }

    // 获取吉神
    getJiShen(date, ganzhi) {
        const dayZhi = ganzhi[1];
        const jishenMap = {
            '子': '时德 月空 天巫 福德',
            '丑': '天德 月德 天恩 母仓',
            '寅': '时德 相日 驿马 天后 天马 天巫 福德 不将 福生 五合 鸣吠对',
            '卯': '月德 天恩 母仓 时阳 生气',
            '辰': '时德 民日 三合 临日',
            '巳': '天德 月德 天恩 天马',
            '午': '天喜 天医 福德 福生',
            '未': '月德 天恩 母仓 时阳',
            '申': '时德 相日 驿马 天后',
            '酉': '天德 月德 天恩 母仓',
            '戌': '福德 福生 天赦 天愿',
            '亥': '月德 天恩 母仓 时阳'
        };
        return jishenMap[dayZhi] || '时德 福德';
    }

    updateQuote() {
        const quotes = [
            "顺天时，应人事，择吉而行，诸事顺遂。",
            "天时地利人和，万事皆可成。",
            "良辰吉日，宜行善事，积德行善。",
            "黄道吉日，诸事皆宜，心想事成。",
            "择日而行，顺应天时，福泽绵长。",
            "吉日良辰，宜修身养性，静心明志。",
            "天道酬勤，择吉而动，事半功倍。"
        ];
        const index = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').textContent = quotes[index];
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    new HuangLiApp();
});
