(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1462:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='\x3c!--\n`nuxeo-file-view-layout`\n@group Nuxeo UI\n@element nuxeo-file-view-layout\n--\x3e\n<dom-module id="nuxeo-file-view-layout">\n  <template>\n    <style>\n      *[role=\'widget\'] {\n        @apply --nuxeo-widget;\n      }\n    </style>\n\n    <h1 role="widget">[[document.properties.dc:title]]</h1>\n\n    <img role="widget" src="[[document.properties.file:content.data]]" />\n  </template>\n\n  <script>\n    Polymer({\n      is: \'nuxeo-file-view-layout\',\n      behaviors: [Nuxeo.LayoutBehavior],\n      properties: {\n        /**\n         * @doctype File\n         */\n        document: Object,\n      },\n    });\n  <\/script>\n</dom-module>\n'}}]);
//# sourceMappingURL=5.fbcfdd4ab035b3353b1d.bundle.js.map