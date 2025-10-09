# 🚀 Hướng dẫn Deploy AinovaTrend lên Vercel

## 📋 Tổng quan
Website AinovaTrend bao gồm:
- **Frontend**: HTML/CSS/JS (static files)
- **Backend**: Node.js API kết nối Google Sheets
- **Admin Panel**: Quản lý nội dung

## 🔧 Bước 1: Chuẩn bị

### 1.1 Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### 1.2 Login Vercel
```bash
vercel login
```

## 🚀 Bước 2: Deploy Backend API

### 2.1 Deploy Backend
```bash
cd backend
vercel --prod
```

### 2.2 Lấy URL Backend
Sau khi deploy, Vercel sẽ trả về URL như:
```
https://ainovatrend-backend.vercel.app
```

### 2.3 Cập nhật Frontend API URL
Mở file `assets/js/api.js` và thay đổi:
```javascript
// Thay đổi từ:
this.baseURL = 'http://localhost:3000/api';

// Thành:
this.baseURL = 'https://your-backend-url.vercel.app/api';
```

## 🌐 Bước 3: Deploy Frontend

### 3.1 Deploy Frontend
```bash
# Từ thư mục gốc
vercel --prod
```

### 3.2 Cấu hình Vercel cho Frontend
Tạo file `vercel.json` trong thư mục gốc:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## 🔐 Bước 4: Cấu hình Google Sheets

### 4.1 Share Google Sheets
1. Mở Google Sheets: https://docs.google.com/spreadsheets/d/1Cs_M4H4AXCjqfLJ0BxEzBZap_Pe5mEO7f7kyusbEA3Q/edit
2. Click **Share** (nút chia sẻ)
3. Thêm email: `a-s-n-821@my-project-note-428310.iam.gserviceaccount.com`
4. Cấp quyền **Editor**

### 4.2 Cấu hình Environment Variables
Trong Vercel Dashboard:
1. Vào Project Settings > Environment Variables
2. Thêm các biến:
   - `NODE_ENV`: `production`
   - `GOOGLE_SHEETS_ID`: `1Cs_M4H4AXCjqfLJ0BxEzBZap_Pe5mEO7f7kyusbEA3Q`

## 📱 Bước 5: Test Website

### 5.1 Test Frontend
- Truy cập URL frontend
- Kiểm tra các trang: Home, Review, Blog, About
- Test responsive design

### 5.2 Test Admin Panel
- Truy cập: `https://your-frontend-url.vercel.app/admin`
- Login với: `admin` / `admin123`
- Test CRUD operations

### 5.3 Test API
- Test API endpoints:
  - `GET /api/reviews`
  - `GET /api/blogs`
  - `GET /api/fresh`
  - `GET /api/messages`

## 🔄 Bước 6: Cập nhật DNS (Optional)

### 6.1 Custom Domain
1. Trong Vercel Dashboard
2. Vào Project Settings > Domains
3. Thêm domain tùy chỉnh
4. Cấu hình DNS records

## 🛠️ Troubleshooting

### Lỗi thường gặp:

#### 1. API không hoạt động
- Kiểm tra Google Sheets đã share chưa
- Kiểm tra environment variables
- Kiểm tra logs trong Vercel Dashboard

#### 2. Frontend không load được
- Kiểm tra file `vercel.json`
- Kiểm tra đường dẫn assets
- Kiểm tra console errors

#### 3. Admin panel không login được
- Kiểm tra localStorage
- Kiểm tra API connection
- Kiểm tra authentication logic

## 📊 Monitoring

### Vercel Analytics
- Vào Vercel Dashboard
- Xem Analytics tab
- Monitor performance và errors

### Google Sheets
- Kiểm tra dữ liệu trong Google Sheets
- Monitor API usage trong Google Cloud Console

## 🎉 Hoàn thành!

Sau khi deploy xong, bạn sẽ có:
- ✅ Website frontend hoạt động
- ✅ Backend API kết nối Google Sheets
- ✅ Admin panel quản lý nội dung
- ✅ Responsive design
- ✅ SEO optimized

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. Vercel logs
2. Browser console
3. Network tab
4. Google Sheets permissions
