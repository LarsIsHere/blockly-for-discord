/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("blockly/core"));
    else if ("function" == typeof define && define.amd) define(["blockly/core"], t);
    else {
        var r = "object" == typeof exports ? t(require("blockly/core")) : t(e.Blockly);
        for (var s in r) ("object" == typeof exports ? exports : e)[s] = r[s];
    }
})(this, (e) =>
    (() => {
        "use strict";
        var t = {
                573: (t) => {
                    t.exports = e;
                },
            },
            r = {};
        function s(e) {
            var o = r[e];
            if (void 0 !== o) return o.exports;
            var i = (r[e] = { exports: {} });
            return t[e](i, i.exports, s), i.exports;
        }
        s.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        };
        var o = {};
        return (
            (() => {
                s.r(o);
                var e = s(573);
                class t {
                    constructor() {
                        (this.blockCreationWorkspace = new e.Workspace()), (this.trigramsToBlocks = new Map());
                    }
                    indexBlocks(t) {
                        const r = new e.Workspace();
                        t.forEach((e) => {
                            const t = r.newBlock(e);
                            this.indexBlockText(e.replaceAll("_", " "), e),
                                t.inputList.forEach((t) => {
                                    t.fieldRow.forEach((t) => {
                                        this.indexBlockText(t.getText(), e);
                                    });
                                });
                        });
                    }
                    blockTypesMatching(e) {
                        return [
                            ...this.generateTrigrams(e)
                                .map((e) => {
                                    var t;
                                    return null !== (t = this.trigramsToBlocks.get(e)) && void 0 !== t ? t : new Set();
                                })
                                .reduce((e, t) => this.getIntersection(e, t))
                                .values(),
                        ];
                    }
                    indexBlockText(e, t) {
                        this.generateTrigrams(e).forEach((e) => {
                            var r;
                            const s = null !== (r = this.trigramsToBlocks.get(e)) && void 0 !== r ? r : new Set();
                            s.add(t), this.trigramsToBlocks.set(e, s);
                        });
                    }
                    generateTrigrams(e) {
                        const t = e.toLowerCase();
                        if (!t) return [];
                        if (t.length <= 3) return [t];
                        const r = [];
                        for (let e = 0; e < t.length - 3; e++) r.push(t.substring(e, e + 3));
                        return r;
                    }
                    getIntersection(e, t) {
                        return new Set([...e].filter((e) => t.has(e)));
                    }
                }
                class r extends e.ToolboxCategory {
                    constructor(e, r, s) {
                        super(e, r, s), (this.blockSearcher = new t()), this.initBlockSearcher(), this.registerShortcut();
                    }
                    createDom_() {
                        const e = super.createDom_();
                        return (
                            (this.searchField = document.createElement("input")),
                            (this.searchField.type = "search"),
                            (this.searchField.placeholder = "Search"),
                            this.workspace_.RTL ? (this.searchField.style.marginRight = "8px") : (this.searchField.style.marginLeft = "8px"),
                            this.searchField.addEventListener("keyup", (e) => {
                                if ("Escape" === e.key) return this.parentToolbox_.clearSelection(), !0;
                                this.matchBlocks();
                            }),
                            this.rowContents_.replaceChildren(this.searchField),
                            e
                        );
                    }
                    getPosition() {
                        const e = this.workspace_.options.languageTree.contents;
                        for (let t = 0; t < e.length; t++) if (e[t].kind === r.SEARCH_CATEGORY_KIND) return t;
                        return -1;
                    }
                    registerShortcut() {
                        const t = e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.B, [e.utils.KeyCodes.CTRL]);
                        e.ShortcutRegistry.registry.register({
                            name: r.START_SEARCH_SHORTCUT,
                            callback: () => {
                                const e = this.getPosition();
                                return !(e < 0 || (this.parentToolbox_.selectItemByPosition(e), 0));
                            },
                            keyCodes: [t],
                        });
                    }
                    getAvailableBlocks(e, t) {
                        "contents" in e
                            ? e.contents.forEach((e) => {
                                  this.getAvailableBlocks(e, t);
                              })
                            : "block" === e.kind.toLowerCase() && "type" in e && e.type && t.add(e.type);
                    }
                    initBlockSearcher() {
                        const e = new Set();
                        this.workspace_.options.languageTree.contents.map((t) => this.getAvailableBlocks(t, e)), this.blockSearcher.indexBlocks([...e]);
                    }
                    onClick(e) {
                        super.onClick(e), e.preventDefault(), e.stopPropagation(), this.setSelected(this.parentToolbox_.getSelectedItem() === this);
                    }
                    setSelected(e) {
                        super.setSelected(e), e ? (this.searchField.focus(), this.matchBlocks()) : ((this.searchField.value = ""), this.searchField.blur());
                    }
                    matchBlocks() {
                        const e = this.searchField.value;
                        (this.flyoutItems_ = e ? this.blockSearcher.blockTypesMatching(e).map((e) => ({ kind: "block", type: e })) : []),
                            this.flyoutItems_.length || this.flyoutItems_.push({ kind: "label", text: e.length < 3 ? "Type to search for blocks" : "No matching blocks found" }),
                            this.parentToolbox_.refreshSelection();
                    }
                    dispose() {
                        super.dispose(), e.ShortcutRegistry.registry.unregister(r.START_SEARCH_SHORTCUT);
                    }
                }
                (r.START_SEARCH_SHORTCUT = "startSearch"), (r.SEARCH_CATEGORY_KIND = "search"), e.registry.register(e.registry.Type.TOOLBOX_ITEM, r.SEARCH_CATEGORY_KIND, r);
            })(),
            o
        );
    })()
);
//# sourceMappingURL=https://unpkg.com/@blockly/toolbox-search@1.1.5/dist/index.js.map