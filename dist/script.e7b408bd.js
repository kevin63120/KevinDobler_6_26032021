// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scriptsJS/photographers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilMedia = exports.Profil = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//creation de function de creation de profil
var Profil = /*#__PURE__*/function () {
  function Profil(photographer) {
    _classCallCheck(this, Profil);

    this.name = photographer.name;
    this.id = photographer.id;
    this.city = photographer.city;
    this.country = photographer.country;
    this.tags = photographer.tags;
    this.tagline = photographer.tagline;
    this.price = photographer.price;
    this.portrait = photographer.portrait;
  } //mehtod for index on website 


  _createClass(Profil, [{
    key: "createProfilStructure",
    value: function createProfilStructure(rootElement) {
      var article = rootElement.appendChild(document.createElement("article")); //tags array chang for return new array on desktop list 

      var tags = this.tags.map(function (tag) {
        return "<li class=\"photograph_tag-item personal\">#".concat(tag, "</li>");
      }); // url for picture profil photographer

      var rootPhoto = 'Sample Photos/Photographers ID Photos/'; // create card for index page 

      var card = "\n        <a class=\"link_photographer-page\"href=\"/photographers_pages.html\">\n            <img class=\"profil_picture\" src=\"".concat(rootPhoto + this.portrait, "\" alt=\"photo de profil\">\n            <h2 class=\"name\">").concat(this.name, "</h2>\n        </a>\n        <div class=\"photograph_description\">\n            <p class=\"photograph_location\">").concat(this.city).concat(this.country ? ', ' + this.country : '', "</p>\n            <p class=\"photograph_description-text\">").concat(this.tagline, "</p> \n            <p class=\"photograph_pricePerDay\">").concat(this.price, "</p>  \n        </div>\n        <footer class=\"photograph_tag\">\n            <ul aria-label=\"photograph_tag-list\" class=\"photograph_tag-list\">\n              ").concat(tags.join(''), "\n            </ul>\n        </footer>");
      article.classList.add("container_photographs_profils");
      article.innerHTML = card;
    } // method for create a personal page for photographers

  }, {
    key: "personalPageHeader",
    value: function personalPageHeader(rootElement) {
      var header = document.createElement("article");
      header.classList.add("photograph_profil_container");
      rootElement.appendChild(header); //tags array chang for return new array on desktop list 

      var tags = this.tags.map(function (tag) {
        return "<li class=\"photograph_tag-item personal\">#".concat(tag, "</li>");
      }); // url for picture profil photographer

      var rootPhoto = 'Sample Photos/Photographers ID Photos/';
      var headerProfil = "\n            <div class=\"photograph_profil-reference\">\n                <h1 class=\"name\" id=\"name_personal_page\">".concat(this.name, "</h1>\n                <p class=\"photograph_location\" id=\"location_personal_page\">").concat(this.city).concat(this.country ? ', ' + this.country : '', "</p>\n                <p class=\"photograph_description-text\" id=\"description_personal_page\">").concat(this.tagline, "</p>\n            </div>\n            <button class=\"btn-contact btn-contact-1\" aria-label=\"contact-me\">Contactez-moi</button>\n            <img src=\"").concat(rootPhoto + this.portrait, "\" alt=\"\" class=\"profil_picture\">\n            <div class=\"container_photograph_tag-list\">\n                <ul class=\"photograph_tag-list\" role=\"\">\n                    ").concat(tags.join(''), "\n                </ul> \n            </div>    \n            ");
      header.innerHTML = headerProfil;
    }
  }, {
    key: "personalPageModal",
    value: function personalPageModal(containerModal) {
      var modalForm = "\n            <form action=\"\" method=\"post\" class=\"form\">\n                    <header class=\"form_header\">\n                        <label>Contactez-moi</label>\n                        <button type=\"button\" class=\"close-modal\" aria-label=\"close-modal\"><img src=\"/Sample Photos/imageOfModel/x.svg\"></img></button>\n                        <h1 id=\"photographer-name\">test test</h1>\n                    </header>\n                     <div class=\"form_item\">\n                         <label for=\"name\" aria-labelledby=\"name\">Pr\xE9nom</label>\n                         <input type=\"text\" name=\"name\" id=\"name\" required>\n                     </div>\n                     <div class=\"form_item\">\n                         <label for=\"lastName\" aria-labelledby=\"lastName\" >nom</label>\n                         <input type=\"text\" aria-label=\"nom de famille\"name=\"lastName\" id=\"lastName\" required>\n                     </div>\n                     <div class=\"form_item\">\n                         <label for=\"email\" aria-labelledby=\"email\">email</label>\n                         <input type=\"email\" aria-label=\"email\" name=\"email\" id=\"email\">\n                     </div>\n                     <div class=\"form_item\">\n                         <label for=\"message\" aria-labelledby=\"message\">Votre message</label>\n                        <input type=\"text\" aria-label=\"votre message\" name=\"message\" id=\"message\">\n                     </div>\n                     <input id=\"submit\" type=\"submit\" value=\"Envoyer\">\n\n                 </form>\n            ";
    }
  }]);

  return Profil;
}();

exports.Profil = Profil;

var ProfilMedia = /*#__PURE__*/function (_Profil) {
  _inherits(ProfilMedia, _Profil);

  var _super = _createSuper(ProfilMedia);

  function ProfilMedia(photographerMedia) {
    var _this;

    _classCallCheck(this, ProfilMedia);

    _this.idPhoto = photographerMedia.id;
    _this.image = photographerMedia.image;
    _this.tags = photographerMedia.tags;
    _this.likes = photographerMedia.likes;
    _this.date = photographerMedia.date;
    _this.price = photographerMedia.price;
    return _possibleConstructorReturn(_this);
  }

  _createClass(ProfilMedia, [{
    key: "personalPageMedia",
    value: function personalPageMedia(containerArticles) {
      var containerMedia = document.createElement("div");
      containerMedia.classList.add("media_item");
      containerArticles.appendChild(containerMedia);
      var media = "\n            <article class=\"media_box\">\n                <div class=\"media_item\">\n                    <img src=\"/Sample Photos/".concat(this.name, "/").concat(this.image, "\" alt=\"photographie de ").concat(this.name, "\">\n                </div>\n                <footer class=\"media_item-descripton\">\n                    <p class=\"media_item-title\">").concat(this.tags, "</p>\n                    <p class=\"media_item-price\">").concat(this.price, "</p>\n                    <div class=\"media_item_likes_container\">\n                        <p class=\"counter\">").concat(this.likes, "</p>\n                        <img src=\"/Sample Photos/imageOfModel/Vectorheart.svg\" alt=\"like\" class=\"counter-btn\" aria-pressed=\"true\">\n                    </div>\n                </footer>\n            </article>");
      containerMedia.innerHTML = media;
    }
  }]);

  return ProfilMedia;
}(Profil);

exports.ProfilMedia = ProfilMedia;
},{}],"scriptsJS/script.js":[function(require,module,exports) {
"use strict";

var _photographers = require("./photographers");

// retrieved an items in the DOM for photograph card
var containerArticle = document.querySelector(".article-container"); //view profil function 
//dataProfil(photographName,gars.name)

fetch("/data-profils/data-photographers.json").then(function (response) {
  return response.json();
}).then(function (data) {
  var photographers = data;
  photographers.photographers.forEach(function (photographer) {
    new _photographers.Profil(photographer).createProfilStructure(containerArticle);
  });
});
},{"./photographers":"scriptsJS/photographers.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51232" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scriptsJS/script.js"], null)
//# sourceMappingURL=/script.e7b408bd.js.map