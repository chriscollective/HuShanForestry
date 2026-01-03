/**
 * Sanity Studio 自訂 Logo 組件
 * 顯示在 CMS 後台左上角
 */
export function StudioLogo() {
  return (
    <img
      src="/icons/icon2.jpg"
      alt="虎山林業"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '3px',
      }}
    />
  );
}
