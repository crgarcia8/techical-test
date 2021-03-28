import { ADDTODO, COMPLETETODO, REMOVETODO } from "../Actions/actions"

export default function todo(state = [], { type, payload }) {
    switch (type) {
        case ADDTODO:
            return { items: [...state.items, { id: parseFloat(Math.random()).toFixed(2), name: payload, complete: false }] };
        case COMPLETETODO:
            let data = [...state.items].reduce((acc, el) => {
                if (el.id == payload) el.complete = !el.complete;
                return acc.concat(el);
            }, []);
            return { items: data };
        case REMOVETODO:
            let dataRemove = state.items.filter((item) => item.id != payload);
            return { items: dataRemove };
        default:
            return { items: state }
    }
}