export function bind(fn: () => any, ctx: Object): () => any {
    if (typeof fn.bind !== 'undefined') {
        return fn.bind(ctx);
    }

    var self = fn;
    return function() {
        self.apply(ctx, arguments);
    }
}
