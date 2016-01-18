var Context = (function () {
    function Context() {
        this.map = {};
    }
    /**
     * Saves instance with given id in context. If second argument is InstanceCreator, actual instance would be
     * instantiated on first resolve.
     *
     * @param runtime_id
     * @param instance
     * @param force
       */
    Context.prototype.register = function (runtime_id, instance, force) {
        if (force === void 0) { force = false; }
        if (this.map[runtime_id] && !force) {
            throw new Error("Instance with id \"" + runtime_id + "\" is already registered");
        }
        this.map[runtime_id] = {
            instance: isCreator(instance) ? null : instance,
            creator: isCreator(instance) ? instance : null
        };
    };
    /**
     * Returns previously registered instance for given key. If instance was never created, throws error.
     * @param runtime_id
     */
    Context.prototype.resolve = function (runtime_id) {
        var data = this.map[runtime_id];
        if (!data) {
            throw new Error("Instance with id " + runtime_id + " not found");
        }
        if (data.creator) {
            data.instance = data.creator();
            data.creator = null;
        }
        return data.instance;
    };
    /**
     * Removes all previously registered instances from context
     */
    Context.prototype.clear = function () {
        this.map = {};
    };
    return Context;
})();
exports.__esModule = true;
exports["default"] = Context;
function isCreator(obj) {
    return typeof obj === 'function';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOlsiQ29udGV4dCIsIkNvbnRleHQuY29uc3RydWN0b3IiLCJDb250ZXh0LnJlZ2lzdGVyIiwiQ29udGV4dC5yZXNvbHZlIiwiQ29udGV4dC5jbGVhciIsImlzQ3JlYXRvciJdLCJtYXBwaW5ncyI6IkFBVUE7SUFBQUE7UUEwQ1VDLFFBQUdBLEdBRVBBLEVBQUVBLENBQUNBO0lBQ1RBLENBQUNBO0lBNUNDRDs7Ozs7OztTQU9LQTtJQUNMQSwwQkFBUUEsR0FBUkEsVUFBWUEsVUFBa0JBLEVBQUVBLFFBQWdDQSxFQUFFQSxLQUFzQkE7UUFBdEJFLHFCQUFzQkEsR0FBdEJBLGFBQXNCQTtRQUN0RkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLHdCQUFxQkEsVUFBVUEsNkJBQXlCQSxDQUFDQSxDQUFDQTtRQUM1RUEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0E7WUFDckJBLFFBQVFBLEVBQUVBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLFFBQVFBO1lBQy9DQSxPQUFPQSxFQUFFQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxJQUFJQTtTQUMvQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFFREY7OztPQUdHQTtJQUNIQSx5QkFBT0EsR0FBUEEsVUFBV0EsVUFBa0JBO1FBQzNCRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0Esc0JBQW9CQSxVQUFVQSxlQUFZQSxDQUFDQSxDQUFDQTtRQUM5REEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1lBQy9CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURIOztPQUVHQTtJQUNIQSx1QkFBS0EsR0FBTEE7UUFDRUksSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBS0hKLGNBQUNBO0FBQURBLENBN0NBLEFBNkNDQSxJQUFBO0FBN0NEOzRCQTZDQyxDQUFBO0FBRUQsbUJBQW1CLEdBQVE7SUFDekJLLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLFVBQVVBLENBQUNBO0FBQ25DQSxDQUFDQSIsImZpbGUiOiJjb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUNyZWF0b3I8VD4ge1xuICAoKTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dCB7XG4gIHJlZ2lzdGVyPFQ+KHJ1bnRpbWVfaWQ6IHN0cmluZywgaW5zdGFuY2U6IFQgfCBJbnN0YW5jZUNyZWF0b3I8VD4sIGZvcmNlPzogYm9vbGVhbik7XG4gIHJlc29sdmU8VD4ocnVudGltZV9pZDogc3RyaW5nKTogVDtcbiAgY2xlYXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBpbXBsZW1lbnRzIElDb250ZXh0IHtcbiAgLyoqXG4gICAqIFNhdmVzIGluc3RhbmNlIHdpdGggZ2l2ZW4gaWQgaW4gY29udGV4dC4gSWYgc2Vjb25kIGFyZ3VtZW50IGlzIEluc3RhbmNlQ3JlYXRvciwgYWN0dWFsIGluc3RhbmNlIHdvdWxkIGJlXG4gICAqIGluc3RhbnRpYXRlZCBvbiBmaXJzdCByZXNvbHZlLlxuICAgKlxuICAgKiBAcGFyYW0gcnVudGltZV9pZFxuICAgKiBAcGFyYW0gaW5zdGFuY2VcbiAgICogQHBhcmFtIGZvcmNlXG4gICAgICovXG4gIHJlZ2lzdGVyPFQ+KHJ1bnRpbWVfaWQ6IHN0cmluZywgaW5zdGFuY2U6IFQgfCBJbnN0YW5jZUNyZWF0b3I8VD4sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5tYXBbcnVudGltZV9pZF0gJiYgIWZvcmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgXCIke3J1bnRpbWVfaWR9XCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkYCk7XG4gICAgfVxuICAgIHRoaXMubWFwW3J1bnRpbWVfaWRdID0ge1xuICAgICAgaW5zdGFuY2U6IGlzQ3JlYXRvcihpbnN0YW5jZSkgPyBudWxsIDogaW5zdGFuY2UsXG4gICAgICBjcmVhdG9yOiBpc0NyZWF0b3IoaW5zdGFuY2UpID8gaW5zdGFuY2UgOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBpbnN0YW5jZSBmb3IgZ2l2ZW4ga2V5LiBJZiBpbnN0YW5jZSB3YXMgbmV2ZXIgY3JlYXRlZCwgdGhyb3dzIGVycm9yLlxuICAgKiBAcGFyYW0gcnVudGltZV9pZFxuICAgKi9cbiAgcmVzb2x2ZTxUPihydW50aW1lX2lkOiBzdHJpbmcpOiBUIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMubWFwW3J1bnRpbWVfaWRdO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7cnVudGltZV9pZH0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGlmIChkYXRhLmNyZWF0b3IpIHtcbiAgICAgIGRhdGEuaW5zdGFuY2UgPSBkYXRhLmNyZWF0b3IoKTtcbiAgICAgIGRhdGEuY3JlYXRvciA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBpbnN0YW5jZXMgZnJvbSBjb250ZXh0XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXAgOiB7XG4gICAgW2tleTogc3RyaW5nXTogUnVudGltZURhdGE8YW55PjtcbiAgfSA9IHt9O1xufVxuXG5mdW5jdGlvbiBpc0NyZWF0b3Iob2JqOiBhbnkpIDogb2JqIGlzIEluc3RhbmNlQ3JlYXRvcjxhbnk+IHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59XG5cbmludGVyZmFjZSBSdW50aW1lRGF0YTxUPiB7XG4gIGluc3RhbmNlOiBUO1xuICBjcmVhdG9yOiBJbnN0YW5jZUNyZWF0b3I8VD47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=