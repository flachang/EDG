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
})({"main.js":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var string = "\n/*\u606D\u559C\u56FD\u7535\u593A\u51A0\uFF0C\u6211\u867D\u4E0D\u662F\u6DC0\u7C89\uFF0C\u4F46\u5374\u88AB\u8FD9\u79CD\u4E0D\u7834\u4E0D\u7ACB\u7684\u7CBE\u795E\u611F\u52A8\u3002\n*\u63A5\u4E0B\u6765\u6211\u8981\u7528\u6211\u5C11\u5F97\u53EF\u601C\u7684\u524D\u7AEF\u529F\u5E95\u4E3AEDG\u505A\u4E00\u4E2A\u5E86\u795D\u9875\u9762\u3002\n*\u5E0C\u671B\u4F60\u53EF\u4EE5\u770B\u4E0B\u53BB\u54E6~\n*\u9996\u5148\uFF0C\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n*/                               \n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/*\u63A5\u4E0B\u6765\u8BA9EDG\u7684\u961F\u6807\u51FA\u73B0\u5427\u3002\n*\u9996\u5148\uFF0C\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\u3002\n*/\n#div1{\n    border-radius: 50%;\n    border: none;\n    background: radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 55%, rgba(255,255,255,1) 62%, rgba(0,0,0,1) 62%, rgba(0,0,0,1) 71%, rgba(255,255,255,1) 71%, rgba(255,255,255,1) 77%);\n}\n/*\u7136\u540E\uFF0C\u8BA9EDG\u4E09\u4E2A\u5927\u5B57\u51FA\u73B0\u5728\u4E2D\u95F4\u3002\n*/\n#div1{\n    font-size: 50px;\n    font-weight: 15px;\n    color: white;\n    padding-top: 50px;\n    padding-left: 50px;\n}\n/*\u518D\u628A\u56FD\u7535\u7684\u56FE\u6807\u7F8E\u5316\u4E00\u4E0B\u3002\n*\u5148\u521B\u5EFA\u4E00\u4E2Adiv\u5143\u7D20\u3002\n*/\n#div2{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/*\u53BB\u6389\u8FB9\u6846\uFF0C\u628A\u8FD9\u4E2Adiv\u5143\u7D20\u4E0A\u9762\u7684\u5B57\u6BCD\u79FB\u5230\u56FE\u6807\u4E0B\u65B9\u7684\u6B63\u4E2D\u95F4\u3002\n*/\n#div2{\n    border: none;\n    font-size: 15px;\n    font-weight: 1px;\n    color: white;\n    padding-top: 130px;\n    padding-left: 42px;\n}\n/*\u4F5C\u4E3A\u4E00\u4E2A\u6B22\u5E86\u9875\u600E\u4E48\u80FD\u5C11\u4E86\u56FE\u7247\u5462\uFF1F\n*/\n#img-1{\n    position: fixed;\n    height: 40px;\n   \n    top: 0;\n    right: 0;\n    margin-right: 8px;\n}\n/*\u961F\u6807\u5E95\u90E8\u518D\u653E\u4E00\u5F20\u6367\u676F\u7684\u7167\u7247\u3002\n*/\n#img-2 {\n    position: fixed;\n    height: 140px;\n    top: 251px;\n    right: 0;\n    margin-right: 15px;\n}\n/*\u73B0\u5728\u8FD9\u4E2A\u5E86\u795D\u9875\u5C31\u505A\u597D\u5566\u3002\n*\u5341\u5206\u94A6\u4F69\u4ED6\u4EEC\u7684\u4E0D\u7834\u4E0D\u7ACB\u7CBE\u795E\u3002\n*\u5E0C\u671B\u6211\u81EA\u5DF1\u4E5F\u80FD\u505A\u5230\u4E0D\u7834\u4E0D\u7ACB\u3002\n*/\n\n";
var n = 0;
var string2 = '';

var step = function step() {
  setTimeout(function () {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += '&nbsp';
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);

    if (n + 1 < string.length) {
      n += 1;
      step();
    }
  }, 5);
};

step();
},{}],"C:/Users/5555/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5516" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["C:/Users/5555/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map