# React + TypeScript + Vite

# Cấu trúc dự án

## Thư mục `src/`

```
src
├── assets
│   ├── svg -> Chứa file svg
│   └── images -> Chứa file ảnh
│
├── components
│   ├── layout -> Chứa layout
│   │   └── main-layout.tsx
│   ├── ui -> shadcn component (thêm bằng command)
│   │
│   └── ui-parts -> Chứa component dùng chung (tạo từ ui component)
│
├── constants -> Application constants
│   └── reg-exp.ts
│
├── contexts -> Global context
│   └── app-context.tsx
│
├── hooks -> Global hooks
│
├── lib -> Config của thư viện hoặc custom
│   ├── axios.ts -> Axios instance configuration
│   ├── query.ts -> React Query setup
│   ├── utils.ts -> lib utilities
│   └── local-store.ts -> Local storage utilities
│   
│
├── locales -> Đa ngôn ngữ
│   ├── ja -> English translations
│   └── index.ts -> i18n configuration
│ 
│
├── pages -> Khởi tạo trang
│   └── user -> Trang cá nhân (ví dụ)
│       ├── api -> API calls của trang
│       │   └── get-me.ts
│       ├── components -> Chứa các component riêng (nếu có) của trang
│       ├── hooks -> Chứa các hook riêng (nếu có) của trang
│       ├── utils -> Chứa các function riêng (nếu có) của trang
│       └── index.tsx -> Component chính của trang
│
├── router -> Config route
│   ├── index.tsx -> Import lazy page (nếu có)
│   ├── protected-route.tsx -> Bảo vệ route khi chưa đăng nhập hoặc không có quyền
│   └── routes.tsx -> Định nghĩa các url
│
├── theme
│   └── index.ts -> Config theme 
│
├── types -> Định nghĩa type
│
├── utils -> Utility functions
│
├── app.tsx -> Root component
└── main.tsx -> Entry point
```
