(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='\x3c!--\n`nuxeo-file-edit-layout`\n@group Nuxeo UI\n@element nuxeo-file-edit-layout\n--\x3e\n<dom-module id="nuxeo-file-edit-layout">\n  <template>\n    <style>\n      *[role=\'widget\'] {\n        @apply --nuxeo-widget;\n      }\n    </style>\n\n    <nuxeo-input role="widget" label="Title" value="{{document.properties.dc:title}}" autofocus required> </nuxeo-input>\n\n    <nuxeo-textarea role="widget" label="Description" value="{{document.properties.dc:description}}"> </nuxeo-textarea>\n\n    <nuxeo-date-picker role="widget" label="Expire date" value="{{document.properties.dc:expired}}">\n    </nuxeo-date-picker>\n  </template>\n\n  <script>\n    Polymer({\n      is: \'nuxeo-file-edit-layout\',\n      behaviors: [Nuxeo.LayoutBehavior],\n      properties: {\n        /**\n         * @doctype File\n         */\n        document: Object,\n      },\n    });\n  <\/script>\n</dom-module>\n'}}]);
//# sourceMappingURL=3.fbcfdd4ab035b3353b1d.bundle.js.map