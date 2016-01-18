var context_1 = require("./context");
var Injector = (function () {
    function Injector() {
        var _this = this;
        this.context = new context_1["default"]();
        this.Service = (function (target) {
            _this.context.register(target.service_name, function () { return new target(); });
            return target;
        }).bind(this);
        this.Inject = (function (runtime_id) {
            return function (target, key) {
                Object.defineProperty(target, key, {
                    get: function () {
                        return _this.context.resolve(runtime_id);
                    },
                    set: function () {
                        throw new Error("Cannot set injected field \"" + key + "\"");
                    }
                });
            };
        }).bind(this);
    }
    Injector.prototype.getContext = function () {
        return this.context;
    };
    return Injector;
})();
exports.__esModule = true;
exports["default"] = Injector;
function isString(s) {
    return typeof s === 'string';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluamVjdG9yLnRzIl0sIm5hbWVzIjpbIkluamVjdG9yIiwiSW5qZWN0b3IuY29uc3RydWN0b3IiLCJJbmplY3Rvci5nZXRDb250ZXh0IiwiaXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFvQixXQUFXLENBQUMsQ0FBQTtBQVFoQztJQUNFQTtRQURGQyxpQkEyQ0NBO1FBRFNBLFlBQU9BLEdBQVlBLElBQUlBLG9CQUFPQSxFQUFFQSxDQUFDQTtRQXhDdkNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLFVBQUNBLE1BQTJCQTtZQUMxQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsRUFBRUEsY0FBSUEsT0FBQUEsSUFBSUEsTUFBTUEsRUFBRUEsRUFBWkEsQ0FBWUEsQ0FBQ0EsQ0FBQ0E7WUFFN0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO1FBQ2hCQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVkQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxVQUFDQSxVQUFrQkE7WUFDaENBLE1BQU1BLENBQUNBLFVBQUNBLE1BQVdBLEVBQUVBLEdBQVdBO2dCQUM5QkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBRUE7b0JBQ2pDQSxHQUFHQSxFQUFFQTt3QkFDSEEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFDQSxDQUFDQTtvQkFDREEsR0FBR0EsRUFBRUE7d0JBQ0hBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLGlDQUE4QkEsR0FBR0EsT0FBR0EsQ0FBQ0EsQ0FBQUE7b0JBQ3ZEQSxDQUFDQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFFaEJBLENBQUNBO0lBaUJNRCw2QkFBVUEsR0FBakJBO1FBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO0lBQ3RCQSxDQUFDQTtJQUdIRixlQUFDQTtBQUFEQSxDQTNDQSxBQTJDQ0EsSUFBQTtBQTNDRDs2QkEyQ0MsQ0FBQTtBQUdELGtCQUFrQixDQUFDO0lBQ2pCRyxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxRQUFRQSxDQUFDQTtBQUMvQkEsQ0FBQ0EiLCJmaWxlIjoiaW5qZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQge0lDb250ZXh0fSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VDb25zdHJ1Y3RvciB7XG4gIG5ldygpOiBhbnk7XG4gIHNlcnZpY2VfbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuU2VydmljZSA9ICgodGFyZ2V0OiBJU2VydmljZUNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRleHQucmVnaXN0ZXIodGFyZ2V0LnNlcnZpY2VfbmFtZSwgKCk9Pm5ldyB0YXJnZXQoKSk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSkuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuSW5qZWN0ID0gKChydW50aW1lX2lkOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yZXNvbHZlKHJ1bnRpbWVfaWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgaW5qZWN0ZWQgZmllbGQgXCIke2tleX1cImApXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIHNlcnZpY2VcbiAgICogQHBhcmFtIHRhcmdldFxuICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgcHVibGljIFNlcnZpY2U6ICh0YXJnZXQ6IElTZXJ2aWNlQ29uc3RydWN0b3IpID0+IElTZXJ2aWNlQ29uc3RydWN0b3I7XG5cbiAgLyoqXG4gICAqIGluamVjdHMgZGVwZW5kZW5jeSB3aXRoIGdpdmVuIHJ1bnRpbWUgaWQgdG8gdGhlIGRlY29yYXRlZCBmaWVsZCBvbiBmaXJzdCBnZXRcbiAgICpcbiAgICogQHBhcmFtIHJ1bnRpbWVfaWRcbiAgICogQHJldHVybnMge2Z1bmN0aW9uKGFueSwgc3RyaW5nKX1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gIHB1YmxpYyBJbmplY3Q6IChydW50aW1lX2lkOiBzdHJpbmcpPT4oKHRhcmdldCwga2V5KT0+dm9pZCk7XG5cbiAgcHVibGljIGdldENvbnRleHQoKTogSUNvbnRleHQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnRleHQ6IENvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xufVxuXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHMpOiBzIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=