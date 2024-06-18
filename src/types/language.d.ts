type LanguageType = 'vn' | 'en'

interface LanguageContextType {
  language: LanguageType
  updateLanguage: (lang: LanguageType) => void
  t: any // bạn có thể thay thế `any` bằng kiểu dữ liệu cụ thể hơn nếu có
}
