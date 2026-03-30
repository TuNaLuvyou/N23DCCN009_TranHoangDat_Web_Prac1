# N23DCCN009_TranHoangDat_Web_Prac1

## 👨‍🎓 Thông tin sinh viên

- **Họ và tên:** Trần Hoàng Đạt
- **Mã số sinh viên:** N23DCCN009
- **Lớp:** D23CQCN01-N
- **Học phần:** Phát triển ứng dụng Web

---

## 🚀 Giới thiệu dự án

Đây là bài thực hành số 1 nhằm xây dựng một ứng dụng web bán hàng cơ bản (E-commerce) sử dụng framework **Next.js** và **Tailwind CSS**. Ứng dụng kết nối với **FakeStore API** để lấy dữ liệu sản phẩm thực tế.

### Các tính năng chính:

- **Product Listing:** Hiển thị danh sách sản phẩm với bố cục Grid (Lưới) hỗ trợ Responsive (1 cột trên Mobile, 4 cột trên Desktop).
- **Product Detail:** Xem chi tiết thông tin từng sản phẩm (tên, giá, mô tả, hình ảnh) thông qua Dynamic Routes (`/product/[id]`).
- **Navigation:** Hệ thống điều hướng mượt mà giữa trang chủ và trang chi tiết bằng thẻ `Link` của Next.js.
- **UI/UX:** Giao diện hiện đại, sạch sẽ, hỗ trợ hiển thị tốt trên mọi thiết bị di động.

---

## 🛠 Công nghệ sử dụng

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **API:** [FakeStoreAPI](https://fakestoreapi.com/)
- **Version Control:** Git & GitHub

---

## 📂 Cấu trúc thư mục chính

- `app/page.js`: Trang chủ hiển thị danh sách sản phẩm.
- `app/product/[id]/page.js`: Trang chi tiết sản phẩm dựa trên ID.
- `components/`: Chứa các thành phần tái sử dụng (Navbar, ProductCard).
- `public/`: Chứa các tài nguyên tĩnh như hình ảnh, biểu tượng.

---

## 💻 Cách chạy dự án trên máy cục bộ

1. **Clone repository:**
   ```bash
   git clone https://github.com/TuNaLuvyou/N23DCCN009_TranHoangDat_Web_Prac1.git
   npm install
   npm run dev
   ```
