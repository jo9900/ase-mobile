import { Locale } from "vant";
import enUS from "vant/lib/locale/lang/en-US";
import zhCN from "vant/lib/locale/lang/zh-CN";
// import de from "xxx"; // 可换成自己的语言包地址
// import cs from "xxx";
export function Locals(lang) {
    switch (lang) {
        case "zh":
            Locale.use("zh", zhCN);
            break;
        case "de":
            Locale.use("de", de);
            break;
        case "cs":
            Locale.use("cs", cs);
            break;
        default:
            Locale.use("en", enUS);
            break;
    }
}


