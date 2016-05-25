"use strict";
/**
 *
 * RedisSession middleware -- created for practice
 *
 * @param {object} config - the configuration object (connection, maxAge, sessionId)
 * @param {object} config.connection - the connection object for Redis server
 * @param {string} config.connection.host - the redis host
 * @param {number} config.connection.port - the redis port
 * @param {number} config.maxAge - the time to live
 * @param {string} config.sessionId - the key for the session's id in the cookie
 *
 * @example
 * // initialize the middleware
 * app.use(mySession({
 *   connection: {host: '127.0.0.1', port: 6379}, // Redis连接信息
 *   maxAge: 3600, // session的有效期
 *   sessionId: 'my.sid', // session ID 的cookie名称
 * }));
 *
 * // set/get session variables in req.session
 *
 */
function RedisSession(config) {
  return (req, res, next) => {
    console.log();
  };
}


exports = module.exports = RedisSession;
