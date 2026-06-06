# ==========================================
# STAGE 1: Build di Cloud GitHub
# ==========================================
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package management duluan untuk optimasi cache image
COPY package*.json ./
RUN npm install

# Copy seluruh source code
COPY . .

# Argument untuk membedakan mode build (development, staging, production)
ARG BUILD_MODE=development
RUN npm run build -- --mode ${BUILD_MODE}

# ==========================================
# STAGE 2: Runtime Environment 
# ==========================================
FROM nginx:stable-alpine AS production-stage

# Copy hasil build statis dari stage 1 ke folder HTML Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy konfigurasi Nginx khusus SPA Vue
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]