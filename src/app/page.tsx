import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { defaultLocale } from "@/i18n";

/**
 * 將根路徑導向預設語系的首頁。
 * 嘗試從 Cookie 讀取使用者偏好的語系，若無則使用預設語系。
 */
export default function RootRedirect() {
  const cookieStore = cookies();
  const savedLocale = cookieStore.get("NEXT_LOCALE")?.value;

  redirect(`/${savedLocale || defaultLocale}`);
}
