var context_1 = require("./context");
var Injector = (function () {
    function Injector() {
        this.context = new context_1["default"]();
        var self = this;
        this.Service = function (target) {
            self.getContext().register(target.service_name, function () { return new target(); });
            return target;
        };
        this.Inject = function (runtime_id) {
            return function (target, key) {
                Object.defineProperty(target, key, {
                    get: function () {
                        return self.getContext().resolve(runtime_id);
                    },
                    set: function () {
                        throw new Error("Cannot set injected field \"" + key + "\"");
                    }
                });
            };
        };
    }
    Injector.prototype.getContext = function () {
        return this.context;
    };
    Injector.prototype.createTestContext = function () {
        this.old_context = this.context;
        this.context = this.context.clone();
    };
    Injector.prototype.clearTestContext = function () {
        this.context = this.old_context;
    };
    return Injector;
})();
exports.__esModule = true;
exports["default"] = Injector;
function isString(s) {
    return typeof s === 'string';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluamVjdG9yLnRzIl0sIm5hbWVzIjpbIkluamVjdG9yIiwiSW5qZWN0b3IuY29uc3RydWN0b3IiLCJJbmplY3Rvci5nZXRDb250ZXh0IiwiSW5qZWN0b3IuY3JlYXRlVGVzdENvbnRleHQiLCJJbmplY3Rvci5jbGVhclRlc3RDb250ZXh0IiwiaXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFvQixXQUFXLENBQUMsQ0FBQTtBQVFoQztJQUNFQTtRQW9EUUMsWUFBT0EsR0FBYUEsSUFBSUEsb0JBQU9BLEVBQUVBLENBQUNBO1FBbkR4Q0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFaEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUNBLE1BQTJCQTtZQUN6Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsRUFBRUEsY0FBSUEsT0FBQUEsSUFBSUEsTUFBTUEsRUFBRUEsRUFBWkEsQ0FBWUEsQ0FBQ0EsQ0FBQ0E7WUFFbEVBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO1FBQ2hCQSxDQUFDQSxDQUFDQTtRQUVGQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxVQUFDQSxVQUFrQkE7WUFDL0JBLE1BQU1BLENBQUNBLFVBQUNBLE1BQVdBLEVBQUVBLEdBQVdBO2dCQUM5QkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBRUE7b0JBQ2pDQSxHQUFHQSxFQUFFQTt3QkFDSEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxDQUFDQTtvQkFDREEsR0FBR0EsRUFBRUE7d0JBQ0hBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLGlDQUE4QkEsR0FBR0EsT0FBR0EsQ0FBQ0EsQ0FBQUE7b0JBQ3ZEQSxDQUFDQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0EsQ0FBQ0E7SUFFSkEsQ0FBQ0E7SUFpQk1ELDZCQUFVQSxHQUFqQkE7UUFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRU1GLG9DQUFpQkEsR0FBeEJBO1FBQ0VHLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO1FBQ2hDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUFFTUgsbUNBQWdCQSxHQUF2QkE7UUFDRUksSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBS0hKLGVBQUNBO0FBQURBLENBeERBLEFBd0RDQSxJQUFBO0FBeEREOzZCQXdEQyxDQUFBO0FBR0Qsa0JBQWtCLENBQUM7SUFDakJLLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLFFBQVFBLENBQUNBO0FBQy9CQSxDQUFDQSIsImZpbGUiOiJpbmplY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7SUNvbnRleHR9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNvbnN0cnVjdG9yIHtcbiAgbmV3KCk6IGFueTtcbiAgc2VydmljZV9uYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluamVjdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5TZXJ2aWNlID0gKHRhcmdldDogSVNlcnZpY2VDb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgc2VsZi5nZXRDb250ZXh0KCkucmVnaXN0ZXIodGFyZ2V0LnNlcnZpY2VfbmFtZSwgKCk9Pm5ldyB0YXJnZXQoKSk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRoaXMuSW5qZWN0ID0gKHJ1bnRpbWVfaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXRDb250ZXh0KCkucmVzb2x2ZShydW50aW1lX2lkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2V0IGluamVjdGVkIGZpZWxkIFwiJHtrZXl9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICB9XG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gIHB1YmxpYyBTZXJ2aWNlOiAodGFyZ2V0OiBJU2VydmljZUNvbnN0cnVjdG9yKSA9PiBhbnk7XG5cbiAgLyoqXG4gICAqIGluamVjdHMgZGVwZW5kZW5jeSB3aXRoIGdpdmVuIHJ1bnRpbWUgaWQgdG8gdGhlIGRlY29yYXRlZCBmaWVsZCBvbiBmaXJzdCBnZXRcbiAgICpcbiAgICogQHBhcmFtIHJ1bnRpbWVfaWRcbiAgICogQHJldHVybnMge2Z1bmN0aW9uKGFueSwgc3RyaW5nKX1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gIHB1YmxpYyBJbmplY3Q6IChydW50aW1lX2lkOiBzdHJpbmcpPT4oKHRhcmdldCwga2V5KT0+dm9pZCk7XG5cbiAgcHVibGljIGdldENvbnRleHQoKTogSUNvbnRleHQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVGVzdENvbnRleHQoKSB7XG4gICAgdGhpcy5vbGRfY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNvbnRleHQuY2xvbmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclRlc3RDb250ZXh0KCkge1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub2xkX2NvbnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnRleHQ6IElDb250ZXh0ID0gbmV3IENvbnRleHQoKTtcblxuICBwcml2YXRlIG9sZF9jb250ZXh0OiBJQ29udGV4dDtcbn1cblxuXG5mdW5jdGlvbiBpc1N0cmluZyhzKTogcyBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
