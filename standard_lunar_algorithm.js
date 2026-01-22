// 标准农历算法 - 参考实现
// 这是一个经过验证的农历转换算法

function solarToLunar_Standard(date, lunarInfo) {
    const baseDate = new Date(1900, 0, 31);
    let offset = Math.floor((date - baseDate) / 86400000);

    // 计算农历年份
    let year = 1900;
    let daysOfYear = 0;
    while (year < 2100 && offset > 0) {
        daysOfYear = lYearDays(year, lunarInfo);
        offset -= daysOfYear;
        year++;
    }
    if (offset < 0) {
        offset += daysOfYear;
        year--;
    }

    // 计算农历月份
    let month = 1;
    let isLeap = false;
    const leap = leapMonth(year, lunarInfo);

    for (let i = 1; i < 13 && offset > 0; i++) {
        // 闰月
        if (leap > 0 && i == (leap + 1) && !isLeap) {
            --i;
            isLeap = true;
            daysOfMonth = leapDays(year, lunarInfo);
        } else {
            daysOfMonth = monthDays(year, i, lunarInfo);
        }

        offset -= daysOfMonth;

        // 解除闰月
        if (isLeap && i == leap) {
            isLeap = false;
        }

        if (!isLeap) {
            month++;
        }
    }

    // offset为0时，并且刚才计算的月份是闰月，要校正
    if (offset == 0 && leap > 0 && month == leap + 1) {
        if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            --month;
        }
    }

    // offset小于0时，也要校正
    if (offset < 0) {
        offset += daysOfMonth;
        --month;
    }

    const day = offset + 1;

    return {
        year: year,
        month: month,
        day: day,
        isLeap: isLeap
    };
}

function leapMonth(year, lunarInfo) {
    return lunarInfo[year - 1900] & 0xf;
}

function leapDays(year, lunarInfo) {
    if (leapMonth(year, lunarInfo)) {
        return (lunarInfo[year - 1900] & 0x10000) ? 30 : 29;
    }
    return 0;
}

function lYearDays(year, lunarInfo) {
    let sum = 348;
    for (let i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[year - 1900] & i) ? 1 : 0;
    }
    return sum + leapDays(year, lunarInfo);
}

function monthDays(year, month, lunarInfo) {
    return (lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

console.log("标准算法参考实现");
