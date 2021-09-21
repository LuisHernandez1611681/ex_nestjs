export default () => ({
    port: parseInt(process.env.PORT,10) || 3000,
    app_name: process.env.APP_NAME,
    url: process.env.URL
});