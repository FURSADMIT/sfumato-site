/** @type {import('next').NextConfig} */
const nextConfig = {
  // Разрешаем открывать дев-сервер с телефона по IP мака в локальной сети
  // (иначе Next блокирует JS-чанки с 403 и на устройстве не работает ничего скриптового)
  allowedDevOrigins: ["192.168.1.*", "172.20.10.*"],
};

export default nextConfig;
