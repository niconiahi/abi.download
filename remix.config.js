/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
const DEV_SERVER_BROADCAST_DELAY = 1000
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerBroadcastDelay: DEV_SERVER_BROADCAST_DELAY,
}
