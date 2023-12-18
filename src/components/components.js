import ELButton from "./el/Button.vue";
import ELInput from "./el/Input.vue";
import ELLink from "./el/Link.vue";
import ELTextArea from "./el/Textarea.vue";
import ELNote from "./el/Note.vue";
import ELModal from "./el/Modal.vue";

    const components = {
        'el-button': ELButton,
        'el-input': ELInput,
        'el-link': ELLink,
        'el-textarea': ELTextArea,
        'el-note': ELNote,
        'el-modal': ELModal,
    };

function install(app) {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
}
export default { install };


