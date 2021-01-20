import { Locale } from "vant";
import enUS from "vant/lib/locale/lang/en-US";
import zhCN from "vant/lib/locale/lang/zh-CN";
import jaJP from "vant/lib/locale/lang/ja-JP";
// import de from "xxx"; // 可换成自己的语言包地址
// import cs from "xxx";
export function Locals(lang) {
    switch (lang) {
        case "zh":
            Locale.use("zh", zhCN);
            break;
        case "ja":
            Locale.use("ja", jaJP);
            break;
        default:
            Locale.use("en", enUS);
            break;
    }
}


