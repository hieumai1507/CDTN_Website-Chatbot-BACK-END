# Sử dụng Node.js phiên bản 18
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các thư viện
RUN npm install

# Copy toàn bộ code backend vào container
COPY . .

# Mở cổng 5000 để chạy API
EXPOSE 5000

# Chạy server khi container khởi động
CMD ["node", "server.js"]
