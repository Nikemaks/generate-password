export class Component {

    constructor(tmpl, params) {
        this.tmpl = tmpl;
        this.params = params;
        this._events = {};
    }

    render() {
        return this.tmpl(this.params);
    }

    on(event, listener) {
        (this._events[event] || (this._events[event] = [])).push(listener);
        return this;
    }

    emit(event, arg) {
        (this._events[event] || []).slice().forEach(lsn => lsn(arg));
    }
}