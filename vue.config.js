module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/manage_sms'
    : '/'
}