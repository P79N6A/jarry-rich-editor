import JrEditor from "./src/editor.vue";

JrEditor.install = function(Vue) {
    Vue.component(JrEditor.name, JrEditor);
};

export default JrEditor;
