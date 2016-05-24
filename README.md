# myRedisSessionMiddleware

实现一个简单的 Redis Session 中间件, 支持类似如下的使用方法（最好包含基本的单元测试）

    // 初始化中间件
    app.use(mySession({
      connection: {host: '127.0.0.1', port: 6379}, // Redis连接信息
      maxAge: 3600, // session的有效期
      sessionId: 'my.sid', // session ID 的cookie名称
    }));
    
    // 使用时直接在 req.session 上添加或删除属性即可
