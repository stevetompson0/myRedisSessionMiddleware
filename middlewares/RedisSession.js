/**
 *
 * RedisSession middleware -- created for practice
 * @param {Object}: config - the configuration object (connection, maxAge, sessionId)
 * @param {Object}: config.connection - the connection object for Redis server
 * @param {String}: config.connection.host - the redis host
 * @param {Number}: config.connection.port - the redis port
 * @param {Number}: config.maxAge - the time to live
 * @param {String}: config.sessionId - the key for the session's id in the cookie
 *
 * @example
 * ```js
 * // initialize the middleware
 * app.use(mySession({
 *   connection: {host: '127.0.0.1', port: 6379}, // Redis连接信息
 *   maxAge: 3600, // session的有效期
 *   sessionId: 'my.sid', // session ID 的cookie名称
 * }));
 *
 * // set/get session variables in req.session
 * ```
 */

exports = module.exports = (config => {
  return (req, res, next) => {
    console.log();
  };
});

