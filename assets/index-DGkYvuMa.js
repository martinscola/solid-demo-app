const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Buttons-C_HBZyIV.js","assets/Button-ylnL0y4I.js","assets/Entity-5MVjb4Xr.js","assets/Login-rpD3HvKu.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/solid-demo-app/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector('link[href="'.concat(dep, '"]').concat(cssSelector))) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
          link.crossOrigin = "";
        }
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error("Unable to preload CSS for ".concat(dep)))
            );
          });
        }
      })
    );
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const __vite_import_meta_env__$1 = { "BASE_URL": "/solid-demo-app/", "DEV": false, "LEGACY": false, "MODE": "production", "PROD": true, "SSR": false };
function createWebGLContext(canvas, contextSpy) {
  const config = {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: true,
    desynchronized: false,
    // Disabled because it prevents Visual Regression Tests from working
    // failIfMajorPerformanceCaveat: true,
    powerPreference: "high-performance",
    premultipliedAlpha: true,
    preserveDrawingBuffer: false
  };
  const gl = (
    // TODO: Remove this assertion once this issue is fixed in TypeScript
    // https://github.com/microsoft/TypeScript/issues/53614
    canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config)
  );
  if (!gl) {
    throw new Error("Unable to create WebGL context");
  }
  if (contextSpy) {
    return new Proxy(gl, {
      get(target, prop) {
        const value = target[prop];
        if (typeof value === "function") {
          contextSpy.increment(String(prop));
          return value.bind(target);
        }
        return value;
      }
    });
  }
  return gl;
}
function assertTruthy(condition, message) {
  if (isProductionEnvironment())
    return;
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
function mergeColorProgress(rgba1, rgba2, p) {
  const r1 = Math.trunc(rgba1 >>> 24);
  const g1 = Math.trunc(rgba1 >>> 16 & 255);
  const b1 = Math.trunc(rgba1 >>> 8 & 255);
  const a1 = Math.trunc(rgba1 & 255);
  const r2 = Math.trunc(rgba2 >>> 24);
  const g2 = Math.trunc(rgba2 >>> 16 & 255);
  const b2 = Math.trunc(rgba2 >>> 8 & 255);
  const a2 = Math.trunc(rgba2 & 255);
  const r = Math.round(r2 * p + r1 * (1 - p));
  const g = Math.round(g2 * p + g1 * (1 - p));
  const b = Math.round(b2 * p + b1 * (1 - p));
  const a = Math.round(a2 * p + a1 * (1 - p));
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
function mergeColorAlpha(rgba, alpha) {
  const r = rgba >>> 24;
  const g = rgba >>> 16 & 255;
  const b = rgba >>> 8 & 255;
  const a = Math.trunc((rgba & 255) * alpha);
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
let premultiplyRGB = true;
function setPremultiplyMode(mode) {
  premultiplyRGB = mode === "webgl";
}
function mergeColorAlphaPremultiplied(rgba, alpha, flipEndianess = false) {
  const newAlpha = (rgba & 255) / 255 * alpha;
  const rgbAlpha = premultiplyRGB ? newAlpha : 1;
  const r = Math.trunc((rgba >>> 24) * rgbAlpha);
  const g = Math.trunc((rgba >>> 16 & 255) * rgbAlpha);
  const b = Math.trunc((rgba >>> 8 & 255) * rgbAlpha);
  const a = Math.trunc(newAlpha * 255);
  if (flipEndianess) {
    return (a << 24 | b << 16 | g << 8 | r) >>> 0;
  }
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function isProductionEnvironment() {
  return __vite_import_meta_env__$1 && true;
}
let nextId = 1;
function getNewId() {
  return nextId++;
}
class EventEmitter {
  constructor() {
    __publicField(this, "eventListeners", {});
  }
  on(event, listener) {
    let listeners = this.eventListeners[event];
    if (!listeners) {
      listeners = [];
    }
    listeners.push(listener);
    this.eventListeners[event] = listeners;
  }
  off(event, listener) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return;
    }
    if (!listener) {
      delete this.eventListeners[event];
      return;
    }
    const index = listeners.indexOf(listener);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
  }
  once(event, listener) {
    const onceListener = (target, data) => {
      this.off(event, onceListener);
      listener(target, data);
    };
    this.on(event, onceListener);
  }
  emit(event, data) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return;
    }
    [...listeners].forEach((listener) => {
      listener(this, data);
    });
  }
  removeAllListeners() {
    this.eventListeners = {};
  }
}
const PROTOCOL_REGEX = /^(data|ftps?|https?):/;
const getNormalizedRgbaComponents = (rgba) => {
  const r = rgba >>> 24;
  const g = rgba >>> 16 & 255;
  const b = rgba >>> 8 & 255;
  const a = rgba & 255;
  return [r / 255, g / 255, b / 255, a / 255];
};
function createBound(x1, y1, x2, y2, out) {
  if (out) {
    out.x1 = x1;
    out.y1 = y1;
    out.x2 = x2;
    out.y2 = y2;
    return out;
  }
  return {
    x1,
    y1,
    x2,
    y2
  };
}
function boundsOverlap(a, b) {
  return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
}
function convertBoundToRect(bound, out) {
  if (out) {
    out.x = bound.x1;
    out.y = bound.y1;
    out.width = bound.x2 - bound.x1;
    out.height = bound.y2 - bound.y1;
    return out;
  }
  return {
    x: bound.x1,
    y: bound.y1,
    width: bound.x2 - bound.x1,
    height: bound.y2 - bound.y1
  };
}
function intersectRect(a, b, out) {
  const x = Math.max(a.x, b.x);
  const y = Math.max(a.y, b.y);
  const width = Math.min(a.x + a.width, b.x + b.width) - x;
  const height = Math.min(a.y + a.height, b.y + b.height) - y;
  if (width > 0 && height > 0) {
    if (out) {
      out.x = x;
      out.y = y;
      out.width = width;
      out.height = height;
      return out;
    }
    return {
      x,
      y,
      width,
      height
    };
  }
  if (out) {
    out.x = 0;
    out.y = 0;
    out.width = 0;
    out.height = 0;
    return out;
  }
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
}
function copyRect(a, out) {
  if (out) {
    out.x = a.x;
    out.y = a.y;
    out.width = a.width;
    out.height = a.height;
    return out;
  }
  return {
    x: a.x,
    y: a.y,
    width: a.width,
    height: a.height
  };
}
function compareRect(a, b) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function boundInsideBound(bound1, bound2) {
  return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
}
function isBoundPositive(bound) {
  return bound.x1 < bound.x2 && bound.y1 < bound.y2;
}
function convertUrlToAbsolute(url) {
  if (self.location.protocol === "file:" && !PROTOCOL_REGEX.test(url)) {
    const path = self.location.pathname.split("/");
    path.pop();
    const basePath2 = path.join("/");
    const baseUrl = self.location.protocol + "//" + basePath2;
    if (url.charAt(0) === ".") {
      url = url.slice(1);
    }
    if (url.charAt(0) === "/") {
      url = url.slice(1);
    }
    return baseUrl + "/" + url;
  }
  const absoluteUrl = new URL(url, self.location.href);
  return absoluteUrl.href;
}
class Matrix3d {
  /**
   * Creates a new 3x3 matrix.
   *
   * @param entries Row-major 3x3 matrix
   */
  constructor() {
    __publicField(this, "ta");
    __publicField(this, "tb");
    __publicField(this, "tx");
    __publicField(this, "tc");
    __publicField(this, "td");
    __publicField(this, "ty");
    __publicField(this, "_floatArr", null);
    /**
     * Potential Mutation Flag
     *
     * @remarks
     * This flag is set to true whenever the matrix is potentially modified.
     * We don't waste CPU trying to identify if each operation actually modifies
     * the matrix. Instead, we set this flag to true whenever we think the matrix
     * is modified. This signals that the `floatArr` should to be updated.
     */
    __publicField(this, "mutation");
    this.ta = 0;
    this.tb = 0;
    this.tx = 0;
    this.tc = 0;
    this.td = 0;
    this.ty = 0;
    this.mutation = true;
  }
  /**
   * Returns a temporary matrix that can be used for calculations.
   *
   * @remarks
   * This is useful for avoiding allocations in tight loops.
   *
   * The matrix is not guaranteed to be the same between calls.
   *
   * @returns
   */
  static get temp() {
    return tempMatrix;
  }
  static multiply(a, b, out) {
    const e0 = a.ta * b.ta + a.tb * b.tc;
    const e1 = a.ta * b.tb + a.tb * b.td;
    const e2 = a.ta * b.tx + a.tb * b.ty + a.tx;
    const e3 = a.tc * b.ta + a.td * b.tc;
    const e4 = a.tc * b.tb + a.td * b.td;
    const e5 = a.tc * b.tx + a.td * b.ty + a.ty;
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = e0;
    out.tb = e1;
    out.tx = e2;
    out.tc = e3;
    out.td = e4;
    out.ty = e5;
    out.mutation = true;
    return out;
  }
  static identity(out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = 1;
    out.tb = 0;
    out.tx = 0;
    out.tc = 0;
    out.td = 1;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static translate(x, y, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = 1;
    out.tb = 0;
    out.tx = x;
    out.tc = 0;
    out.td = 1;
    out.ty = y;
    out.mutation = true;
    return out;
  }
  static scale(sx, sy, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = sx;
    out.tb = 0;
    out.tx = 0;
    out.tc = 0;
    out.td = sy;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static rotate(angle, out) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = cos;
    out.tb = -sin;
    out.tx = 0;
    out.tc = sin;
    out.td = cos;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static copy(src, dst) {
    if (!dst) {
      dst = new Matrix3d();
    }
    dst.ta = src.ta;
    dst.tc = src.tc;
    dst.tb = src.tb;
    dst.td = src.td;
    dst.tx = src.tx;
    dst.ty = src.ty;
    dst.mutation = true;
    return dst;
  }
  translate(x, y) {
    this.tx = this.ta * x + this.tb * y + this.tx;
    this.ty = this.tc * x + this.td * y + this.ty;
    this.mutation = true;
    return this;
  }
  scale(sx, sy) {
    this.ta = this.ta * sx;
    this.tb = this.tb * sy;
    this.tc = this.tc * sx;
    this.td = this.td * sy;
    this.mutation = true;
    return this;
  }
  rotate(angle) {
    if (angle === 0 || !(angle % Math.PI * 2)) {
      return this;
    }
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const e0 = this.ta * cos + this.tb * sin;
    const e1 = this.tb * cos - this.ta * sin;
    const e3 = this.tc * cos + this.td * sin;
    const e4 = this.td * cos - this.tc * sin;
    this.ta = e0;
    this.tb = e1;
    this.tc = e3;
    this.td = e4;
    this.mutation = true;
    return this;
  }
  multiply(other) {
    return Matrix3d.multiply(this, other, this);
  }
  /**
   * Returns the matrix as a Float32Array in column-major order.
   *
   * @remarks
   * This method is optimized to avoid unnecessary allocations. The same array
   * is returned every time this method is called, and is updated in place.
   *
   * WARNING: Use the array only for passing directly to a WebGL shader uniform
   * during a frame render. Do not modify or hold onto the array for longer than
   * a frame.
   */
  getFloatArr() {
    if (!this._floatArr) {
      this._floatArr = new Float32Array(9);
    }
    if (this.mutation) {
      this._floatArr[0] = this.ta;
      this._floatArr[1] = this.tc;
      this._floatArr[2] = 0;
      this._floatArr[3] = this.tb;
      this._floatArr[4] = this.td;
      this._floatArr[5] = 0;
      this._floatArr[6] = this.tx;
      this._floatArr[7] = this.ty;
      this._floatArr[8] = 1;
      this.mutation = false;
    }
    return this._floatArr;
  }
}
const tempMatrix = new Matrix3d();
const rx1 = 0;
const rx2 = 2;
const rx3 = 4;
const rx4 = 6;
const ry1 = 1;
const ry2 = 3;
const ry3 = 5;
const ry4 = 7;
class RenderCoords {
  constructor(entries) {
    __publicField(this, "data");
    this.data = new Float32Array(8);
    if (entries) {
      this.data[rx1] = entries[rx1];
      this.data[rx2] = entries[rx2];
      this.data[rx3] = entries[rx3];
      this.data[rx4] = entries[rx4];
      this.data[ry1] = entries[ry1];
      this.data[ry2] = entries[ry2];
      this.data[ry3] = entries[ry3];
      this.data[ry4] = entries[ry4];
    }
  }
  static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
    if (!out) {
      out = new RenderCoords();
    }
    out.data[rx1] = x1;
    out.data[rx2] = x2;
    out.data[rx3] = x3;
    out.data[rx4] = x4;
    out.data[ry1] = y1;
    out.data[ry2] = y2;
    out.data[ry3] = y3;
    out.data[ry4] = y4;
    return out;
  }
  get x1() {
    return this.data[rx1];
  }
  get x2() {
    return this.data[rx2];
  }
  get x3() {
    return this.data[rx3];
  }
  get x4() {
    return this.data[rx4];
  }
  get y1() {
    return this.data[ry1];
  }
  get y2() {
    return this.data[ry2];
  }
  get y3() {
    return this.data[ry3];
  }
  get y4() {
    return this.data[ry4];
  }
}
const isPowerOfTwo = (value) => {
  return value && !(value & value - 1);
};
const getTimingBezier = (a, b, c, d) => {
  const xc = 3 * a;
  const xb = 3 * (c - a) - xc;
  const xa = 1 - xc - xb;
  const yc = 3 * b;
  const yb = 3 * (d - b) - yc;
  const ya = 1 - yc - yb;
  return function(time) {
    if (time >= 1) {
      return 1;
    }
    if (time <= 0) {
      return 0;
    }
    let t = 0.5, cbx, cbxd, dx;
    for (let it = 0; it < 20; it++) {
      cbx = t * (t * (t * xa + xb) + xc);
      dx = time - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc);
      }
      cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
      if (cbxd > 1e-10 && cbxd < 1e-10) {
        break;
      }
      t += dx / cbxd;
    }
    let minT = 0;
    let maxT = 1;
    for (let it = 0; it < 20; it++) {
      t = 0.5 * (minT + maxT);
      cbx = t * (t * (t * xa + xb) + xc);
      dx = time - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc);
      }
      if (dx < 0) {
        maxT = t;
      } else {
        minT = t;
      }
    }
  };
};
const timingMapping = {};
const timingLookup = {
  ease: [0.25, 0.1, 0.25, 1],
  "ease-in": [0.42, 0, 1, 1],
  "ease-out": [0, 0, 0.58, 1],
  "ease-in-out": [0.42, 0, 0.58, 1],
  "ease-in-sine": [0.12, 0, 0.39, 0],
  "ease-out-sine": [0.12, 0, 0.39, 0],
  "ease-in-out-sine": [0.37, 0, 0.63, 1],
  "ease-in-cubic": [0.32, 0, 0.67, 0],
  "ease-out-cubic": [0.33, 1, 0.68, 1],
  "ease-in-out-cubic": [0.65, 0, 0.35, 1],
  "ease-in-circ": [0.55, 0, 1, 0.45],
  "ease-out-circ": [0, 0.55, 0.45, 1],
  "ease-in-out-circ": [0.85, 0, 0.15, 1],
  "ease-in-back": [0.36, 0, 0.66, -0.56],
  "ease-out-back": [0.34, 1.56, 0.64, 1],
  "ease-in-out-back": [0.68, -0.6, 0.32, 1.6]
};
const defaultTiming = (t) => t;
const parseCubicBezier = (str) => {
  const regex = /-?\d*\.?\d+/g;
  const match = str.match(regex);
  if (match) {
    const [num1, num2, num3, num4] = match;
    const a = parseFloat(num1 || "0.42");
    const b = parseFloat(num2 || "0");
    const c = parseFloat(num3 || "1");
    const d = parseFloat(num4 || "1");
    const timing = getTimingBezier(a, b, c, d);
    timingMapping[str] = timing;
    return timing;
  }
  console.warn("Unknown cubic-bezier timing: " + str);
  return defaultTiming;
};
const getTimingFunction = (str) => {
  if (str === "linear") {
    return defaultTiming;
  }
  if (timingMapping[str] !== void 0) {
    return timingMapping[str] || defaultTiming;
  }
  if (str === "step-start") {
    return () => {
      return 1;
    };
  }
  if (str === "step-end") {
    return (time) => {
      return time === 1 ? 1 : 0;
    };
  }
  const lookup = timingLookup[str];
  if (lookup !== void 0) {
    const [a, b, c, d] = lookup;
    const timing = getTimingBezier(a, b, c, d);
    timingMapping[str] = timing;
    return timing;
  }
  if (str.startsWith("cubic-bezier")) {
    return parseCubicBezier(str);
  }
  console.warn("Unknown timing function: " + str);
  return defaultTiming;
};
function bytesToMb$1(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}
class CoreAnimation extends EventEmitter {
  constructor(node, props, settings) {
    var _a, _b, _c, _d, _e, _f;
    super();
    __publicField(this, "node");
    __publicField(this, "props");
    __publicField(this, "settings");
    __publicField(this, "progress", 0);
    __publicField(this, "delayFor", 0);
    __publicField(this, "timingFunction");
    __publicField(this, "propValuesMap", {});
    __publicField(this, "dynPropValuesMap");
    this.node = node;
    this.props = props;
    for (const key2 in props) {
      if (key2 !== "shaderProps") {
        if (this.propValuesMap["props"] === void 0) {
          this.propValuesMap["props"] = {};
        }
        this.propValuesMap["props"][key2] = {
          start: node[key2] || 0,
          target: props[key2]
        };
      } else if (node.shader.type !== "DynamicShader") {
        this.propValuesMap["shaderProps"] = {};
        for (const key3 in props.shaderProps) {
          this.propValuesMap["shaderProps"][key3] = {
            start: node.shader.props[key3],
            target: props.shaderProps[key3]
          };
        }
      } else {
        const shaderPropKeys = Object.keys(props.shaderProps);
        const spLength = shaderPropKeys.length;
        this.dynPropValuesMap = {};
        for (let j = 0; j < spLength; j++) {
          const effectName = shaderPropKeys[j];
          const effect2 = props.shaderProps[effectName];
          this.dynPropValuesMap[effectName] = {};
          const effectProps = Object.entries(effect2);
          const eLength = effectProps.length;
          for (let k = 0; k < eLength; k++) {
            const [key3, value] = effectProps[k];
            this.dynPropValuesMap[effectName][key3] = {
              start: node.shader.props[effectName][key3],
              target: value
            };
          }
        }
      }
    }
    const easing = settings.easing || "linear";
    const delay2 = (_a = settings.delay) != null ? _a : 0;
    this.settings = {
      duration: (_b = settings.duration) != null ? _b : 0,
      delay: delay2,
      easing,
      loop: (_c = settings.loop) != null ? _c : false,
      repeat: (_d = settings.repeat) != null ? _d : 0,
      repeatDelay: (_e = settings.repeatDelay) != null ? _e : 0,
      stopMethod: (_f = settings.stopMethod) != null ? _f : false
    };
    this.timingFunction = getTimingFunction(easing);
    this.delayFor = delay2;
  }
  reset() {
    this.progress = 0;
    this.delayFor = this.settings.delay || 0;
    this.update(0);
  }
  restoreValues(target, valueMap) {
    const entries = Object.entries(valueMap);
    const eLength = entries.length;
    for (let i = 0; i < eLength; i++) {
      const [key2, value] = entries[i];
      target[key2] = value.start;
    }
  }
  restore() {
    this.reset();
    if (this.propValuesMap["props"] !== void 0) {
      this.restoreValues(this.node, this.propValuesMap["props"]);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.restoreValues(this.node.shader.props, this.propValuesMap["shaderProps"]);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key2 = dynEntries[i];
          this.restoreValues(this.node.shader.props[key2], this.dynPropValuesMap[key2]);
        }
      }
    }
  }
  reverseValues(valueMap) {
    const entries = Object.entries(valueMap);
    const eLength = entries.length;
    for (let i = 0; i < eLength; i++) {
      const [key2, value] = entries[i];
      valueMap[key2] = {
        start: value.target,
        target: value.start
      };
    }
  }
  reverse() {
    this.progress = 0;
    if (this.propValuesMap["props"] !== void 0) {
      this.reverseValues(this.propValuesMap["props"]);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.reverseValues(this.propValuesMap["shaderProps"]);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key2 = dynEntries[i];
          this.reverseValues(this.dynPropValuesMap[key2]);
        }
      }
    }
    if (!this.settings.loop) {
      this.settings.stopMethod = false;
    }
  }
  applyEasing(p, s, e) {
    return (this.timingFunction(p) || p) * (e - s) + s;
  }
  updateValue(propName, propValue, startValue, easing) {
    if (this.progress === 1) {
      return propValue;
    }
    if (this.progress === 0) {
      return startValue;
    }
    const endValue = propValue;
    if (propName.indexOf("color") !== -1) {
      if (startValue === endValue) {
        return startValue;
      }
      if (easing) {
        const easingProgressValue = this.timingFunction(this.progress) || this.progress;
        return mergeColorProgress(startValue, endValue, easingProgressValue);
      }
      return mergeColorProgress(startValue, endValue, this.progress);
    }
    if (easing) {
      return this.applyEasing(this.progress, startValue, endValue);
    }
    return startValue + (endValue - startValue) * this.progress;
  }
  updateValues(target, valueMap, easing) {
    const entries = Object.entries(valueMap);
    const eLength = entries.length;
    for (let i = 0; i < eLength; i++) {
      const [key2, value] = entries[i];
      target[key2] = this.updateValue(key2, value.target, value.start, easing);
    }
  }
  update(dt) {
    const { duration, loop, easing, stopMethod } = this.settings;
    const { delayFor } = this;
    if (duration === 0 && delayFor === 0) {
      this.emit("finished", {});
      return;
    }
    if (this.delayFor > 0) {
      this.delayFor -= dt;
      if (this.delayFor >= 0) {
        return;
      } else {
        dt = -this.delayFor;
        this.delayFor = 0;
      }
    }
    if (duration === 0) {
      this.emit("finished", {});
      return;
    }
    if (this.progress === 0) {
      this.emit("animating", {});
    }
    this.progress += dt / duration;
    if (this.progress > 1) {
      this.progress = loop ? 0 : 1;
      if (stopMethod) {
        this.emit("finished", {});
        return;
      }
    }
    if (this.propValuesMap["props"] !== void 0) {
      this.updateValues(this.node, this.propValuesMap["props"], easing);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.updateValues(this.node.shader.props, this.propValuesMap["shaderProps"], easing);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key2 = dynEntries[i];
          this.updateValues(this.node.shader.props[key2], this.dynPropValuesMap[key2], easing);
        }
      }
    }
    if (this.progress === 1) {
      this.emit("finished", {});
    }
  }
}
class CoreAnimationController extends EventEmitter {
  constructor(manager, animation) {
    super();
    __publicField(this, "manager");
    __publicField(this, "animation");
    __publicField(this, "stoppedPromise");
    /**
     * If this is null, then the animation is in a finished / stopped state.
     */
    __publicField(this, "stoppedResolve", null);
    __publicField(this, "state");
    this.manager = manager;
    this.animation = animation;
    this.state = "stopped";
    this.stoppedPromise = Promise.resolve();
    this.onAnimating = this.onAnimating.bind(this);
    this.onFinished = this.onFinished.bind(this);
  }
  start() {
    if (this.state !== "running") {
      this.makeStoppedPromise();
      this.registerAnimation();
      this.state = "running";
    }
    return this;
  }
  stop() {
    this.unregisterAnimation();
    if (this.stoppedResolve !== null) {
      this.stoppedResolve();
      this.stoppedResolve = null;
      this.emit("stopped", this);
    }
    this.animation.reset();
    this.state = "stopped";
    return this;
  }
  pause() {
    this.unregisterAnimation();
    this.state = "paused";
    return this;
  }
  restore() {
    this.stoppedResolve = null;
    this.animation.restore();
    return this;
  }
  waitUntilStopped() {
    return this.stoppedPromise;
  }
  registerAnimation() {
    this.animation.once("finished", this.onFinished);
    this.animation.on("animating", this.onAnimating);
    this.manager.registerAnimation(this.animation);
  }
  unregisterAnimation() {
    this.manager.unregisterAnimation(this.animation);
    this.animation.off("finished", this.onFinished);
    this.animation.off("animating", this.onAnimating);
  }
  makeStoppedPromise() {
    if (this.stoppedResolve === null) {
      this.stoppedPromise = new Promise((resolve) => {
        this.stoppedResolve = resolve;
      });
    }
  }
  onFinished() {
    assertTruthy(this.stoppedResolve);
    const { loop, stopMethod } = this.animation.settings;
    if (stopMethod === "reverse") {
      this.animation.once("finished", this.onFinished);
      this.animation.reverse();
      return;
    }
    if (loop) {
      return;
    }
    this.unregisterAnimation();
    this.stoppedResolve();
    this.stoppedResolve = null;
    this.emit("stopped", this);
    this.state = "stopped";
  }
  onAnimating() {
    this.emit("animating", this);
  }
}
var CoreNodeRenderState;
(function(CoreNodeRenderState2) {
  CoreNodeRenderState2[CoreNodeRenderState2["Init"] = 0] = "Init";
  CoreNodeRenderState2[CoreNodeRenderState2["OutOfBounds"] = 2] = "OutOfBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InBounds"] = 4] = "InBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InViewport"] = 8] = "InViewport";
})(CoreNodeRenderState || (CoreNodeRenderState = {}));
const CoreNodeRenderStateMap = /* @__PURE__ */ new Map();
CoreNodeRenderStateMap.set(CoreNodeRenderState.Init, "init");
CoreNodeRenderStateMap.set(CoreNodeRenderState.OutOfBounds, "outOfBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InBounds, "inBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InViewport, "inViewport");
var UpdateType;
(function(UpdateType2) {
  UpdateType2[UpdateType2["Children"] = 1] = "Children";
  UpdateType2[UpdateType2["ScaleRotate"] = 2] = "ScaleRotate";
  UpdateType2[UpdateType2["Local"] = 4] = "Local";
  UpdateType2[UpdateType2["Global"] = 8] = "Global";
  UpdateType2[UpdateType2["Clipping"] = 16] = "Clipping";
  UpdateType2[UpdateType2["CalculatedZIndex"] = 32] = "CalculatedZIndex";
  UpdateType2[UpdateType2["ZIndexSortedChildren"] = 64] = "ZIndexSortedChildren";
  UpdateType2[UpdateType2["PremultipliedColors"] = 128] = "PremultipliedColors";
  UpdateType2[UpdateType2["WorldAlpha"] = 256] = "WorldAlpha";
  UpdateType2[UpdateType2["RenderState"] = 512] = "RenderState";
  UpdateType2[UpdateType2["IsRenderable"] = 1024] = "IsRenderable";
  UpdateType2[UpdateType2["RenderTexture"] = 2048] = "RenderTexture";
  UpdateType2[UpdateType2["ParentRenderTexture"] = 4096] = "ParentRenderTexture";
  UpdateType2[UpdateType2["None"] = 0] = "None";
  UpdateType2[UpdateType2["All"] = 8191] = "All";
})(UpdateType || (UpdateType = {}));
class CoreNode extends EventEmitter {
  constructor(stage, props) {
    super();
    __publicField(this, "stage");
    __publicField(this, "children", []);
    __publicField(this, "_id", getNewId());
    __publicField(this, "props");
    __publicField(this, "updateType", UpdateType.All);
    __publicField(this, "globalTransform");
    __publicField(this, "scaleRotateTransform");
    __publicField(this, "localTransform");
    __publicField(this, "renderCoords");
    __publicField(this, "renderBound");
    __publicField(this, "strictBound");
    __publicField(this, "preloadBound");
    __publicField(this, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: false
    });
    __publicField(this, "isRenderable", false);
    __publicField(this, "renderState", CoreNodeRenderState.Init);
    __publicField(this, "worldAlpha", 1);
    __publicField(this, "premultipliedColorTl", 0);
    __publicField(this, "premultipliedColorTr", 0);
    __publicField(this, "premultipliedColorBl", 0);
    __publicField(this, "premultipliedColorBr", 0);
    __publicField(this, "calcZIndex", 0);
    __publicField(this, "hasRTTupdates", false);
    __publicField(this, "parentHasRenderTexture", false);
    __publicField(this, "onTextureLoaded", (_, dimensions) => {
      var _a, _b;
      this.autosizeNode(dimensions);
      this.stage.requestRender();
      if (this.parentHasRenderTexture) {
        this.setRTTUpdates(1);
      }
      this.emit("loaded", {
        type: "texture",
        dimensions
      });
      if (((_b = (_a = this.props.textureOptions) == null ? void 0 : _a.resizeMode) == null ? void 0 : _b.type) === "contain") {
        this.setUpdateType(UpdateType.Local);
      }
    });
    __publicField(this, "onTextureFailed", (_, error) => {
      this.emit("failed", {
        type: "texture",
        error
      });
    });
    __publicField(this, "onTextureFreed", () => {
      this.emit("freed", {
        type: "texture"
      });
    });
    this.stage = stage;
    this.props = {
      ...props,
      parent: null,
      texture: null,
      src: null,
      rtt: false
    };
    this.parent = props.parent;
    this.texture = props.texture;
    this.src = props.src;
    this.rtt = props.rtt;
    this.updateScaleRotateTransform();
  }
  //#region Textures
  loadTexture() {
    const { texture } = this.props;
    assertTruthy(texture);
    queueMicrotask(() => {
      texture.preventCleanup = this.props.preventCleanup;
      if (this.textureOptions.preload) {
        texture.ctxTexture.load();
      }
      if (texture.state === "loaded") {
        assertTruthy(texture.dimensions);
        this.onTextureLoaded(texture, texture.dimensions);
      } else if (texture.state === "failed") {
        assertTruthy(texture.error);
        this.onTextureFailed(texture, texture.error);
      } else if (texture.state === "freed") {
        this.onTextureFreed(texture);
      }
      texture.on("loaded", this.onTextureLoaded);
      texture.on("failed", this.onTextureFailed);
      texture.on("freed", this.onTextureFreed);
    });
  }
  unloadTexture() {
    if (this.texture) {
      this.texture.off("loaded", this.onTextureLoaded);
      this.texture.off("failed", this.onTextureFailed);
      this.texture.off("freed", this.onTextureFreed);
      this.texture.setRenderableOwner(this, false);
    }
  }
  autosizeNode(dimensions) {
    if (this.autosize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
    }
  }
  //#endregion Textures
  /**
   * Change types types is used to determine the scope of the changes being applied
   *
   * @remarks
   * See {@link UpdateType} for more information on each type
   *
   * @param type
   */
  setUpdateType(type) {
    this.updateType |= type;
    const parent = this.props.parent;
    if (parent && !(parent.updateType & UpdateType.Children)) {
      parent.setUpdateType(UpdateType.Children);
    }
    if (this.parentHasRenderTexture) {
      this.setRTTUpdates(type);
    }
  }
  sortChildren() {
    this.children.sort((a, b) => a.calcZIndex - b.calcZIndex);
  }
  updateScaleRotateTransform() {
    const { rotation, scaleX, scaleY } = this.props;
    if (rotation === 0 && scaleX === 1 && scaleY === 1) {
      this.scaleRotateTransform = void 0;
      return;
    }
    this.scaleRotateTransform = Matrix3d.rotate(rotation, this.scaleRotateTransform).scale(scaleX, scaleY);
  }
  updateLocalTransform() {
    var _a, _b;
    const { x, y, width, height } = this.props;
    const mountTranslateX = this.props.mountX * width;
    const mountTranslateY = this.props.mountY * height;
    if (this.scaleRotateTransform) {
      const pivotTranslateX = this.props.pivotX * width;
      const pivotTranslateY = this.props.pivotY * height;
      this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(this.scaleRotateTransform).translate(-pivotTranslateX, -pivotTranslateY);
    } else {
      this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
    }
    const texture = this.props.texture;
    if (texture && texture.dimensions && ((_b = (_a = this.props.textureOptions) == null ? void 0 : _a.resizeMode) == null ? void 0 : _b.type) === "contain") {
      let resizeModeScaleX = 1;
      let resizeModeScaleY = 1;
      let extraX = 0;
      let extraY = 0;
      const { width: tw, height: th } = texture.dimensions;
      const txAspectRatio = tw / th;
      const nodeAspectRatio = width / height;
      if (txAspectRatio > nodeAspectRatio) {
        const scaleX = width / tw;
        const scaledTxHeight = th * scaleX;
        extraY = (height - scaledTxHeight) / 2;
        resizeModeScaleY = scaledTxHeight / height;
      } else {
        const scaleY = height / th;
        const scaledTxWidth = tw * scaleY;
        extraX = (width - scaledTxWidth) / 2;
        resizeModeScaleX = scaledTxWidth / width;
      }
      this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
    }
    this.setUpdateType(UpdateType.Global);
  }
  /**
   * @todo: test for correct calculation flag
   * @param delta
   */
  update(delta, parentClippingRect) {
    var _a;
    if (this.updateType & UpdateType.ScaleRotate) {
      this.updateScaleRotateTransform();
      this.setUpdateType(UpdateType.Local);
    }
    if (this.updateType & UpdateType.Local) {
      this.updateLocalTransform();
      this.setUpdateType(UpdateType.Global);
    }
    const parent = this.props.parent;
    let childUpdateType = UpdateType.None;
    if (this.updateType & UpdateType.ParentRenderTexture) {
      let p = this.parent;
      while (p) {
        if (p.rtt) {
          this.parentHasRenderTexture = true;
        }
        p = p.parent;
      }
    }
    if (this.updateType ^ UpdateType.All && this.updateType & UpdateType.RenderTexture) {
      this.children.forEach((child) => {
        child.setUpdateType(UpdateType.All);
      });
    }
    if (this.updateType & UpdateType.Global) {
      assertTruthy(this.localTransform);
      this.globalTransform = Matrix3d.copy((parent == null ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
      if (this.parentHasRenderTexture && ((_a = this.props.parent) == null ? void 0 : _a.rtt)) {
        this.globalTransform = Matrix3d.identity();
      }
      if (parent) {
        this.globalTransform.multiply(this.localTransform);
      }
      this.calculateRenderCoords();
      this.updateBoundingRect();
      this.setUpdateType(UpdateType.Clipping | UpdateType.RenderState | UpdateType.Children);
      childUpdateType |= UpdateType.Global;
    }
    if (this.updateType & UpdateType.Clipping) {
      this.calculateClippingRect(parentClippingRect);
      this.setUpdateType(UpdateType.Children);
      childUpdateType |= UpdateType.Clipping;
    }
    if (this.updateType & UpdateType.WorldAlpha) {
      if (parent) {
        this.worldAlpha = parent.worldAlpha * this.props.alpha;
      } else {
        this.worldAlpha = this.props.alpha;
      }
      this.setUpdateType(UpdateType.Children | UpdateType.PremultipliedColors | UpdateType.IsRenderable);
      childUpdateType |= UpdateType.WorldAlpha;
    }
    if (this.updateType & UpdateType.PremultipliedColors) {
      this.premultipliedColorTl = mergeColorAlphaPremultiplied(this.props.colorTl, this.worldAlpha, true);
      if (this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl) {
        this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl;
      } else {
        this.premultipliedColorTr = mergeColorAlphaPremultiplied(this.props.colorTr, this.worldAlpha, true);
        this.premultipliedColorBl = mergeColorAlphaPremultiplied(this.props.colorBl, this.worldAlpha, true);
        this.premultipliedColorBr = mergeColorAlphaPremultiplied(this.props.colorBr, this.worldAlpha, true);
      }
    }
    if (this.updateType & UpdateType.RenderState) {
      this.updateRenderState(parentClippingRect);
      this.setUpdateType(UpdateType.IsRenderable);
    }
    if (this.updateType & UpdateType.IsRenderable) {
      this.updateIsRenderable();
    }
    if (parent && this.updateType & UpdateType.CalculatedZIndex) {
      this.calculateZIndex();
      parent.setUpdateType(UpdateType.ZIndexSortedChildren);
    }
    if (this.updateType & UpdateType.Children && this.children.length && !this.rtt) {
      this.children.forEach((child) => {
        child.setUpdateType(childUpdateType);
        if (child.updateType === 0) {
          return;
        }
        child.update(delta, this.clippingRect);
      });
    }
    if (this.updateType & UpdateType.ZIndexSortedChildren) {
      this.sortChildren();
    }
    this.updateType = 0;
  }
  //check if CoreNode is renderable based on props
  checkRenderProps() {
    if (this.props.texture) {
      return true;
    }
    if (!this.props.width || !this.props.height) {
      return false;
    }
    if (this.props.shader !== this.stage.defShaderCtr) {
      return true;
    }
    if (this.props.clipping) {
      return true;
    }
    if (this.props.color !== 0) {
      return true;
    }
    if (this.props.colorTop !== 0) {
      return true;
    }
    if (this.props.colorBottom !== 0) {
      return true;
    }
    if (this.props.colorLeft !== 0) {
      return true;
    }
    if (this.props.colorRight !== 0) {
      return true;
    }
    if (this.props.colorTl !== 0) {
      return true;
    }
    if (this.props.colorTr !== 0) {
      return true;
    }
    if (this.props.colorBl !== 0) {
      return true;
    }
    if (this.props.colorBr !== 0) {
      return true;
    }
    return false;
  }
  checkRenderBounds(parentClippingRect) {
    assertTruthy(this.renderBound);
    const rectW = parentClippingRect.width || this.stage.root.width;
    const rectH = parentClippingRect.height || this.stage.root.height;
    this.strictBound = createBound(parentClippingRect.x, parentClippingRect.y, parentClippingRect.x + rectW, parentClippingRect.y + rectH, this.strictBound);
    if (boundInsideBound(this.renderBound, this.strictBound)) {
      return CoreNodeRenderState.InViewport;
    }
    const renderM = this.stage.boundsMargin;
    this.preloadBound = createBound(this.strictBound.x1 - renderM[3], this.strictBound.y1 - renderM[0], this.strictBound.x2 + renderM[1], this.strictBound.y2 + renderM[2], this.preloadBound);
    if (boundInsideBound(this.renderBound, this.preloadBound)) {
      return CoreNodeRenderState.InBounds;
    }
    return CoreNodeRenderState.OutOfBounds;
  }
  updateRenderState(parentClippingRect) {
    const renderState = this.checkRenderBounds(parentClippingRect);
    if (renderState === this.renderState) {
      return;
    }
    const previous = this.renderState;
    this.renderState = renderState;
    const event = CoreNodeRenderStateMap.get(renderState);
    assertTruthy(event);
    this.emit(event, {
      previous,
      current: renderState
    });
  }
  /**
   * This function updates the `isRenderable` property based on certain conditions.
   *
   * @returns
   */
  updateIsRenderable() {
    let newIsRenderable;
    if (this.worldAlpha === 0 || !this.checkRenderProps()) {
      newIsRenderable = false;
    } else {
      newIsRenderable = this.renderState > CoreNodeRenderState.OutOfBounds;
    }
    if (this.isRenderable !== newIsRenderable) {
      this.isRenderable = newIsRenderable;
      this.onChangeIsRenderable(newIsRenderable);
    }
  }
  onChangeIsRenderable(isRenderable) {
    var _a;
    (_a = this.texture) == null ? void 0 : _a.setRenderableOwner(this, isRenderable);
  }
  calculateRenderCoords() {
    const { width, height, globalTransform: transform } = this;
    assertTruthy(transform);
    const { tx, ty, ta, tb, tc, td } = transform;
    if (tb === 0 && tc === 0) {
      const minX = tx;
      const maxX = tx + width * ta;
      const minY = ty;
      const maxY = ty + height * td;
      this.renderCoords = RenderCoords.translate(
        //top-left
        minX,
        minY,
        //top-right
        maxX,
        minY,
        //bottom-right
        maxX,
        maxY,
        //bottom-left
        minX,
        maxY,
        this.renderCoords
      );
    } else {
      this.renderCoords = RenderCoords.translate(
        //top-left
        tx,
        ty,
        //top-right
        tx + width * ta,
        ty + width * tc,
        //bottom-right
        tx + width * ta + height * tb,
        ty + width * tc + height * td,
        //bottom-left
        tx + height * tb,
        ty + height * td,
        this.renderCoords
      );
    }
  }
  updateBoundingRect() {
    const { renderCoords, globalTransform: transform } = this;
    assertTruthy(transform);
    assertTruthy(renderCoords);
    const { tb, tc } = transform;
    const { x1, y1, x3, y3 } = renderCoords;
    if (tb === 0 || tc === 0) {
      this.renderBound = createBound(x1, y1, x3, y3, this.renderBound);
    } else {
      const { x2, x4, y2, y4 } = renderCoords;
      this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
    }
  }
  /**
   * This function calculates the clipping rectangle for a node.
   *
   * The function then checks if the node is rotated. If the node requires clipping and is not rotated, a new clipping rectangle is created based on the node's global transform and dimensions.
   * If a parent clipping rectangle exists, it is intersected with the node's clipping rectangle (if it exists), or replaces the node's clipping rectangle.
   *
   * Finally, the node's parentClippingRect and clippingRect properties are updated.
   */
  calculateClippingRect(parentClippingRect) {
    assertTruthy(this.globalTransform);
    const { clippingRect, props, globalTransform: gt } = this;
    const { clipping } = props;
    const isRotated = gt.tb !== 0 || gt.tc !== 0;
    if (clipping && !isRotated) {
      clippingRect.x = gt.tx;
      clippingRect.y = gt.ty;
      clippingRect.width = this.width * gt.ta;
      clippingRect.height = this.height * gt.td;
      clippingRect.valid = true;
    } else {
      clippingRect.valid = false;
    }
    if (parentClippingRect.valid && clippingRect.valid) {
      intersectRect(parentClippingRect, clippingRect, clippingRect);
    } else if (parentClippingRect.valid) {
      copyRect(parentClippingRect, clippingRect);
      clippingRect.valid = true;
    }
  }
  calculateZIndex() {
    var _a, _b;
    const props = this.props;
    const z = props.zIndex || 0;
    const p = ((_a = props.parent) == null ? void 0 : _a.zIndex) || 0;
    let zIndex = z;
    if ((_b = props.parent) == null ? void 0 : _b.zIndexLocked) {
      zIndex = z < p ? z : p;
    }
    this.calcZIndex = zIndex;
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    this.unloadTexture();
    this.clippingRect.valid = false;
    this.isRenderable = false;
    delete this.renderCoords;
    delete this.renderBound;
    delete this.strictBound;
    delete this.preloadBound;
    delete this.globalTransform;
    delete this.scaleRotateTransform;
    delete this.localTransform;
    this.props.texture = null;
    this.props.shader = this.stage.defShaderCtr;
    const children2 = [...this.children];
    for (let i = 0; i < children2.length; i++) {
      children2[i].destroy();
    }
    this.parent = null;
    if (this.rtt) {
      this.stage.renderer.removeRTTNode(this);
    }
    this.removeAllListeners();
  }
  renderQuads(renderer2) {
    const { texture, width, height, textureOptions, rtt, shader } = this.props;
    if (this.parentHasRenderTexture) {
      if (!renderer2.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer2.activeRttNode) {
        return;
      }
    }
    const { premultipliedColorTl, premultipliedColorTr, premultipliedColorBl, premultipliedColorBr } = this;
    const { zIndex, worldAlpha, globalTransform: gt, clippingRect, renderCoords } = this;
    assertTruthy(gt);
    assertTruthy(renderCoords);
    renderer2.addQuad({
      width,
      height,
      colorTl: premultipliedColorTl,
      colorTr: premultipliedColorTr,
      colorBl: premultipliedColorBl,
      colorBr: premultipliedColorBr,
      texture,
      textureOptions,
      zIndex,
      shader: shader.shader,
      shaderProps: shader.getResolvedProps(),
      alpha: worldAlpha,
      clippingRect,
      tx: gt.tx,
      ty: gt.ty,
      ta: gt.ta,
      tb: gt.tb,
      tc: gt.tc,
      td: gt.td,
      renderCoords,
      rtt,
      parentHasRenderTexture: this.parentHasRenderTexture,
      framebufferDimensions: this.framebufferDimensions
    });
  }
  //#region Properties
  get id() {
    return this._id;
  }
  get data() {
    return this.props.data;
  }
  set data(d) {
    this.props.data = d;
  }
  get x() {
    return this.props.x;
  }
  set x(value) {
    if (this.props.x !== value) {
      this.props.x = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get absX() {
    var _a, _b, _c;
    return this.props.x + -this.props.width * this.props.mountX + (((_a = this.props.parent) == null ? void 0 : _a.absX) || ((_c = (_b = this.props.parent) == null ? void 0 : _b.globalTransform) == null ? void 0 : _c.tx) || 0);
  }
  get absY() {
    var _a, _b;
    return this.props.y + -this.props.height * this.props.mountY + ((_b = (_a = this.props.parent) == null ? void 0 : _a.absY) != null ? _b : 0);
  }
  get y() {
    return this.props.y;
  }
  set y(value) {
    if (this.props.y !== value) {
      this.props.y = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    if (this.props.width !== value) {
      this.props.width = value;
      this.setUpdateType(UpdateType.Local);
      if (this.props.rtt) {
        this.texture = this.stage.txManager.loadTexture("RenderTexture", {
          width: this.width,
          height: this.height
        });
        this.textureOptions.preload = true;
        this.setUpdateType(UpdateType.RenderTexture);
      }
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    if (this.props.height !== value) {
      this.props.height = value;
      this.setUpdateType(UpdateType.Local);
      if (this.props.rtt) {
        this.texture = this.stage.txManager.loadTexture("RenderTexture", {
          width: this.width,
          height: this.height
        });
        this.textureOptions.preload = true;
        this.setUpdateType(UpdateType.RenderTexture);
      }
    }
  }
  get scale() {
    return this.scaleX;
  }
  set scale(value) {
    this.scaleX = value;
    this.scaleY = value;
  }
  get scaleX() {
    return this.props.scaleX;
  }
  set scaleX(value) {
    if (this.props.scaleX !== value) {
      this.props.scaleX = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get scaleY() {
    return this.props.scaleY;
  }
  set scaleY(value) {
    if (this.props.scaleY !== value) {
      this.props.scaleY = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get mount() {
    return this.props.mount;
  }
  set mount(value) {
    if (this.props.mountX !== value || this.props.mountY !== value) {
      this.props.mountX = value;
      this.props.mountY = value;
      this.props.mount = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountX() {
    return this.props.mountX;
  }
  set mountX(value) {
    if (this.props.mountX !== value) {
      this.props.mountX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountY() {
    return this.props.mountY;
  }
  set mountY(value) {
    if (this.props.mountY !== value) {
      this.props.mountY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivot() {
    return this.props.pivot;
  }
  set pivot(value) {
    if (this.props.pivotX !== value || this.props.pivotY !== value) {
      this.props.pivotX = value;
      this.props.pivotY = value;
      this.props.pivot = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotX() {
    return this.props.pivotX;
  }
  set pivotX(value) {
    if (this.props.pivotX !== value) {
      this.props.pivotX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotY() {
    return this.props.pivotY;
  }
  set pivotY(value) {
    if (this.props.pivotY !== value) {
      this.props.pivotY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get rotation() {
    return this.props.rotation;
  }
  set rotation(value) {
    if (this.props.rotation !== value) {
      this.props.rotation = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get alpha() {
    return this.props.alpha;
  }
  set alpha(value) {
    this.props.alpha = value;
    this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha);
  }
  get autosize() {
    return this.props.autosize;
  }
  set autosize(value) {
    this.props.autosize = value;
  }
  get clipping() {
    return this.props.clipping;
  }
  set clipping(value) {
    this.props.clipping = value;
    this.setUpdateType(UpdateType.Clipping);
  }
  get color() {
    return this.props.color;
  }
  set color(value) {
    this.colorTop = value;
    this.colorBottom = value;
    this.colorLeft = value;
    this.colorRight = value;
    this.props.color = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTop() {
    return this.props.colorTop;
  }
  set colorTop(value) {
    if (this.props.colorTl !== value || this.props.colorTr !== value) {
      this.colorTl = value;
      this.colorTr = value;
    }
    this.props.colorTop = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBottom() {
    return this.props.colorBottom;
  }
  set colorBottom(value) {
    if (this.props.colorBl !== value || this.props.colorBr !== value) {
      this.colorBl = value;
      this.colorBr = value;
    }
    this.props.colorBottom = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorLeft() {
    return this.props.colorLeft;
  }
  set colorLeft(value) {
    if (this.props.colorTl !== value || this.props.colorBl !== value) {
      this.colorTl = value;
      this.colorBl = value;
    }
    this.props.colorLeft = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorRight() {
    return this.props.colorRight;
  }
  set colorRight(value) {
    if (this.props.colorTr !== value || this.props.colorBr !== value) {
      this.colorTr = value;
      this.colorBr = value;
    }
    this.props.colorRight = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTl() {
    return this.props.colorTl;
  }
  set colorTl(value) {
    this.props.colorTl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTr() {
    return this.props.colorTr;
  }
  set colorTr(value) {
    this.props.colorTr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBl() {
    return this.props.colorBl;
  }
  set colorBl(value) {
    this.props.colorBl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBr() {
    return this.props.colorBr;
  }
  set colorBr(value) {
    this.props.colorBr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  // we're only interested in parent zIndex to test
  // if we should use node zIndex is higher then parent zIndex
  get zIndexLocked() {
    return this.props.zIndexLocked || 0;
  }
  set zIndexLocked(value) {
    this.props.zIndexLocked = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get zIndex() {
    return this.props.zIndex;
  }
  set zIndex(value) {
    this.props.zIndex = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get parent() {
    return this.props.parent;
  }
  set parent(newParent) {
    const oldParent = this.props.parent;
    if (oldParent === newParent) {
      return;
    }
    this.props.parent = newParent;
    if (oldParent) {
      const index = oldParent.children.indexOf(this);
      assertTruthy(index !== -1, "CoreNode.parent: Node not found in old parent's children!");
      oldParent.children.splice(index, 1);
      oldParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
    }
    if (newParent) {
      newParent.children.push(this);
      this.setUpdateType(UpdateType.All);
      newParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
      if (newParent.rtt || newParent.parentHasRenderTexture) {
        this.setRTTUpdates(UpdateType.All);
      }
    }
    this.updateScaleRotateTransform();
  }
  get preventCleanup() {
    return this.props.preventCleanup;
  }
  set preventCleanup(value) {
    this.props.preventCleanup = value;
  }
  get rtt() {
    return this.props.rtt;
  }
  set rtt(value) {
    var _a, _b;
    if (this.props.rtt === true) {
      this.props.rtt = value;
      if (value === false && this.texture !== null) {
        this.unloadTexture();
        this.setUpdateType(UpdateType.All);
        this.children.forEach((child) => {
          child.parentHasRenderTexture = false;
        });
        (_a = this.stage.renderer) == null ? void 0 : _a.removeRTTNode(this);
        return;
      }
    }
    if (value === false) {
      return;
    }
    this.texture = this.stage.txManager.loadTexture("RenderTexture", {
      width: this.width,
      height: this.height
    });
    this.textureOptions.preload = true;
    this.props.rtt = true;
    this.hasRTTupdates = true;
    this.setUpdateType(UpdateType.All);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.All);
    });
    (_b = this.stage.renderer) == null ? void 0 : _b.renderToTexture(this);
  }
  get shader() {
    return this.props.shader;
  }
  set shader(value) {
    if (this.props.shader === value) {
      return;
    }
    this.props.shader = value;
    this.setUpdateType(UpdateType.IsRenderable);
  }
  get src() {
    return this.props.src;
  }
  set src(imageUrl) {
    if (this.props.src === imageUrl) {
      return;
    }
    this.props.src = imageUrl;
    if (!imageUrl) {
      this.texture = null;
      return;
    }
    this.texture = this.stage.txManager.loadTexture("ImageTexture", {
      src: imageUrl,
      width: this.props.width,
      height: this.props.height,
      type: this.props.imageType,
      sx: this.props.srcX,
      sy: this.props.srcY,
      sw: this.props.srcWidth,
      sh: this.props.srcHeight
    });
  }
  set imageType(type) {
    if (this.props.imageType === type) {
      return;
    }
    this.props.imageType = type;
  }
  get imageType() {
    return this.props.imageType || null;
  }
  get srcHeight() {
    return this.props.srcHeight;
  }
  set srcHeight(value) {
    this.props.srcHeight = value;
  }
  get srcWidth() {
    return this.props.srcWidth;
  }
  set srcWidth(value) {
    this.props.srcWidth = value;
  }
  get srcX() {
    return this.props.srcX;
  }
  set srcX(value) {
    this.props.srcX = value;
  }
  get srcY() {
    return this.props.srcY;
  }
  set srcY(value) {
    this.props.srcY = value;
  }
  /**
   * Returns the framebuffer dimensions of the node.
   * If the node has a render texture, the dimensions are the same as the node's dimensions.
   * If the node does not have a render texture, the dimensions are inherited from the parent.
   * If the node parent has a render texture and the node is a render texture, the nodes dimensions are used.
   */
  get framebufferDimensions() {
    if (this.parentHasRenderTexture && !this.rtt && this.parent) {
      return this.parent.framebufferDimensions;
    }
    return { width: this.width, height: this.height };
  }
  /**
   * Returns the parent render texture node if it exists.
   */
  get parentRenderTexture() {
    let parent = this.parent;
    while (parent) {
      if (parent.rtt) {
        return parent;
      }
      parent = parent.parent;
    }
    return null;
  }
  get texture() {
    return this.props.texture;
  }
  set texture(value) {
    if (this.props.texture === value) {
      return;
    }
    const oldTexture = this.props.texture;
    if (oldTexture) {
      oldTexture.setRenderableOwner(this, false);
      this.unloadTexture();
    }
    this.props.texture = value;
    if (value) {
      value.setRenderableOwner(this, this.isRenderable);
      this.loadTexture();
    }
    this.setUpdateType(UpdateType.IsRenderable);
  }
  set textureOptions(value) {
    this.props.textureOptions = value;
  }
  get textureOptions() {
    return this.props.textureOptions;
  }
  setRTTUpdates(type) {
    var _a;
    this.hasRTTupdates = true;
    (_a = this.parent) == null ? void 0 : _a.setRTTUpdates(type);
  }
  animate(props, settings) {
    const animation = new CoreAnimation(this, props, settings);
    const controller = new CoreAnimationController(this.stage.animationManager, animation);
    return controller;
  }
  flush() {
  }
}
const startLoop = (stage) => {
  let isIdle = false;
  const runLoop = () => {
    stage.updateFrameTime();
    stage.updateAnimations();
    if (!stage.hasSceneUpdates()) {
      stage.calculateFps();
      setTimeout(runLoop, 16.666666666666668);
      if (!isIdle) {
        if (stage.txMemManager.checkCleanup()) {
          stage.txMemManager.cleanup();
        }
        stage.eventBus.emit("idle");
        isIdle = true;
      }
      stage.flushFrameEvents();
      return;
    }
    isIdle = false;
    stage.drawFrame();
    stage.flushFrameEvents();
    requestAnimationFrame(runLoop);
  };
  requestAnimationFrame(runLoop);
};
const getTimeStamp = () => {
  return performance ? performance.now() : Date.now();
};
class AnimationManager {
  constructor() {
    __publicField(this, "activeAnimations", /* @__PURE__ */ new Set());
  }
  registerAnimation(animation) {
    this.activeAnimations.add(animation);
  }
  unregisterAnimation(animation) {
    this.activeAnimations.delete(animation);
  }
  update(dt) {
    this.activeAnimations.forEach((animation) => {
      animation.update(dt);
    });
  }
}
class Texture extends EventEmitter {
  constructor(txManager) {
    super();
    __publicField(this, "txManager");
    /**
     * The dimensions of the texture
     *
     * @remarks
     * Until the texture data is loaded for the first time the value will be
     * `null`.
     */
    __publicField(this, "dimensions", null);
    __publicField(this, "error", null);
    __publicField(this, "state", "freed");
    __publicField(this, "renderableOwners", /* @__PURE__ */ new Set());
    __publicField(this, "renderable", false);
    __publicField(this, "lastRenderableChangeTime", 0);
    __publicField(this, "preventCleanup", false);
    this.txManager = txManager;
  }
  /**
   * Add/remove an owner to/from the Texture based on its renderability.
   *
   * @remarks
   * Any object can own a texture, be it a CoreNode or even the state object
   * from a Text Renderer.
   *
   * When the reference to the texture that an owner object holds is replaced
   * or cleared it must call this with `renderable=false` to release the owner
   * association.
   *
   * @param owner
   * @param renderable
   */
  setRenderableOwner(owner, renderable) {
    var _a, _b;
    const oldSize = this.renderableOwners.size;
    if (renderable) {
      this.renderableOwners.add(owner);
      const newSize = this.renderableOwners.size;
      if (newSize > oldSize && newSize === 1) {
        this.renderable = true;
        this.lastRenderableChangeTime = this.txManager.frameTime;
        (_a = this.onChangeIsRenderable) == null ? void 0 : _a.call(this, true);
      }
    } else {
      this.renderableOwners.delete(owner);
      const newSize = this.renderableOwners.size;
      if (newSize < oldSize && newSize === 0) {
        this.renderable = false;
        this.lastRenderableChangeTime = this.txManager.frameTime;
        (_b = this.onChangeIsRenderable) == null ? void 0 : _b.call(this, false);
      }
    }
  }
  /**
   * Get the CoreContextTexture for this Texture
   *
   * @remarks
   * Each Texture has a corresponding CoreContextTexture that is used to
   * manage the texture's native data depending on the renderer's mode
   * (WebGL, Canvas, etc).
   *
   * The Texture and CoreContextTexture are always linked together in a 1:1
   * relationship.
   */
  get ctxTexture() {
    const ctxTexture = this.txManager.renderer.createCtxTexture(this);
    Object.defineProperty(this, "ctxTexture", { value: ctxTexture });
    return ctxTexture;
  }
  /**
   * Set the state of the texture
   *
   * @remark
   * Intended for internal-use only but declared public so that it can be set
   * by it's associated {@link CoreContextTexture}
   *
   * @param state
   * @param args
   */
  setState(state, ...args) {
    if (this.state !== state) {
      this.state = state;
      if (state === "loaded") {
        const loadedArgs = args;
        this.dimensions = loadedArgs[0];
      } else if (state === "failed") {
        const failedArgs = args;
        this.error = failedArgs[0];
      }
      this.emit(state, ...args);
    }
  }
  /**
   * Make a cache key for this texture.
   *
   * @remarks
   * Each concrete `Texture` subclass must implement this method to provide an
   * appropriate cache key for the texture type including the texture's
   * properties that uniquely identify a copy of the texture. If the texture
   * type does not support caching, then this method should return `false`.
   *
   * @param props
   * @returns
   * A cache key for this texture or `false` if the texture type does not
   * support caching.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static makeCacheKey(props) {
    return false;
  }
  /**
   * Resolve the default values for the texture's properties.
   *
   * @remarks
   * Each concrete `Texture` subclass must implement this method to provide
   * default values for the texture's optional properties.
   *
   * @param props
   * @returns
   * The default values for the texture's properties.
   */
  static resolveDefaults(props) {
    return {};
  }
}
function createImageWorker() {
  function hasAlphaChannel(mimeType) {
    return mimeType.indexOf("image/png") !== -1;
  }
  function getImage(src, premultiplyAlpha, x, y, width, height) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (xhr.status !== 200) {
          return reject(new Error("Failed to load image: " + xhr.statusText));
        }
        var blob = xhr.response;
        var withAlphaChannel = premultiplyAlpha !== void 0 ? premultiplyAlpha : hasAlphaChannel(blob.type);
        if (width !== null && height !== null) {
          createImageBitmap(blob, x || 0, y || 0, width, height, {
            premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
            colorSpaceConversion: "none",
            imageOrientation: "none"
          }).then(function(data) {
            resolve({ data, premultiplyAlpha });
          }).catch(function(error) {
            reject(error);
          });
          return;
        }
        createImageBitmap(blob, {
          premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
          colorSpaceConversion: "none",
          imageOrientation: "none"
        }).then(function(data) {
          resolve({ data, premultiplyAlpha });
        }).catch(function(error) {
          reject(error);
        });
      };
      xhr.onerror = function() {
        reject(new Error("Network error occurred while trying to fetch the image."));
      };
      xhr.send();
    });
  }
  self.onmessage = (event) => {
    var src = event.data.src;
    var id = event.data.id;
    var premultiplyAlpha = event.data.premultiplyAlpha;
    var x = event.data.sx;
    var y = event.data.sy;
    var width = event.data.sw;
    var height = event.data.sh;
    getImage(src, premultiplyAlpha, x, y, width, height).then(function(data) {
      self.postMessage({ id, src, data });
    }).catch(function(error) {
      self.postMessage({ id, src, error: error.message });
    });
  };
}
class ImageWorkerManager {
  constructor(numImageWorkers) {
    __publicField(this, "imageWorkersEnabled", true);
    __publicField(this, "messageManager", {});
    __publicField(this, "workers", []);
    __publicField(this, "workerIndex", 0);
    __publicField(this, "nextId", 0);
    this.workers = this.createWorkers(numImageWorkers);
    this.workers.forEach((worker) => {
      worker.onmessage = this.handleMessage.bind(this);
    });
  }
  handleMessage(event) {
    const { id, data, error } = event.data;
    const msg = this.messageManager[id];
    if (msg) {
      const [resolve, reject] = msg;
      delete this.messageManager[id];
      if (error) {
        reject(new Error(error));
      } else {
        resolve(data);
      }
    }
  }
  createWorkers(numWorkers = 1) {
    const workerCode = "(".concat(createImageWorker.toString(), ")()");
    const blob = new Blob([workerCode.replace('"use strict";', "")], {
      type: "application/javascript"
    });
    const blobURL = (self.URL ? URL : webkitURL).createObjectURL(blob);
    const workers = [];
    for (let i = 0; i < numWorkers; i++) {
      workers.push(new Worker(blobURL));
    }
    return workers;
  }
  getNextWorker() {
    const worker = this.workers[this.workerIndex];
    this.workerIndex = (this.workerIndex + 1) % this.workers.length;
    return worker;
  }
  getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
    return new Promise((resolve, reject) => {
      try {
        if (this.workers) {
          const id = this.nextId++;
          this.messageManager[id] = [resolve, reject];
          const nextWorker = this.getNextWorker();
          if (nextWorker) {
            nextWorker.postMessage({
              id,
              src,
              premultiplyAlpha,
              sx,
              sy,
              sw,
              sh
            });
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
const _ColorTexture = class _ColorTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _ColorTexture.resolveDefaults(props || {});
  }
  get color() {
    return this.props.color;
  }
  set color(color) {
    this.props.color = color;
  }
  async getTextureData() {
    const pixelData32 = new Uint32Array([this.color]);
    const pixelData8 = new Uint8ClampedArray(pixelData32.buffer);
    return {
      data: new ImageData(pixelData8, 1, 1),
      premultiplyAlpha: true
    };
  }
  static makeCacheKey(props) {
    const resolvedProps = _ColorTexture.resolveDefaults(props);
    return "ColorTexture,".concat(resolvedProps.color);
  }
  static resolveDefaults(props) {
    return {
      color: props.color || 4294967295
    };
  }
};
__publicField(_ColorTexture, "z$__type__Props");
let ColorTexture = _ColorTexture;
function isCompressedTextureContainer(url) {
  return /\.(ktx|pvr)$/.test(url);
}
const loadCompressedTexture = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  if (url.indexOf(".ktx") !== -1) {
    return loadKTXData(arrayBuffer);
  }
  return loadPVRData(arrayBuffer);
};
const loadKTXData = async (buffer) => {
  const view = new DataView(buffer);
  const littleEndian = view.getUint32(12) === 16909060 ? true : false;
  const mipmaps = [];
  const data = {
    glInternalFormat: view.getUint32(28, littleEndian),
    pixelWidth: view.getUint32(36, littleEndian),
    pixelHeight: view.getUint32(40, littleEndian),
    numberOfMipmapLevels: view.getUint32(56, littleEndian),
    bytesOfKeyValueData: view.getUint32(60, littleEndian)
  };
  let offset = 64;
  offset += data.bytesOfKeyValueData;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const imageSize = view.getUint32(offset);
    offset += 4;
    mipmaps.push(view.buffer.slice(offset, imageSize));
    offset += imageSize;
  }
  return {
    data: {
      glInternalFormat: data.glInternalFormat,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "ktx"
    },
    premultiplyAlpha: false
  };
};
const loadPVRData = async (buffer) => {
  const pvrHeaderLength = 13;
  const pvrFormatEtc1 = 36196;
  const pvrWidth = 7;
  const pvrHeight = 6;
  const pvrMipmapCount = 11;
  const pvrMetadata = 12;
  const arrayBuffer = buffer;
  const header = new Int32Array(arrayBuffer, 0, pvrHeaderLength);
  const dataOffset = header[pvrMetadata] + 52;
  const pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
  const mipmaps = [];
  const data = {
    pixelWidth: header[pvrWidth],
    pixelHeight: header[pvrHeight],
    numberOfMipmapLevels: header[pvrMipmapCount] || 0
  };
  let offset = 0;
  let width = data.pixelWidth || 0;
  let height = data.pixelHeight || 0;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
    const view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
    mipmaps.push(view);
    offset += level;
    width = width >> 1;
    height = height >> 1;
  }
  return {
    data: {
      glInternalFormat: pvrFormatEtc1,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "pvr"
    },
    premultiplyAlpha: false
  };
};
function isSvgImage(url) {
  return /\.(svg)$/.test(url);
}
const loadSvg = (url, width, height, sx, sy, sw, sh) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    assertTruthy(ctx);
    ctx.imageSmoothingEnabled = true;
    const img = new Image();
    img.onload = () => {
      const x = sx != null ? sx : 0;
      const y = sy != null ? sy : 0;
      const w = width || img.width;
      const h = height || img.height;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      resolve({
        data: ctx.getImageData(x, y, sw != null ? sw : w, sh != null ? sh : h),
        premultiplyAlpha: false
      });
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
};
const _ImageTexture = class _ImageTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _ImageTexture.resolveDefaults(props);
  }
  hasAlphaChannel(mimeType) {
    return mimeType.indexOf("image/png") !== -1;
  }
  async loadImage(src) {
    const { premultiplyAlpha, sx, sy, sw, sh, width, height } = this.props;
    if (this.txManager.imageWorkerManager !== null) {
      return await this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh);
    } else if (this.txManager.hasCreateImageBitmap === true) {
      const response = await fetch(src);
      const blob = await response.blob();
      const hasAlphaChannel = premultiplyAlpha != null ? premultiplyAlpha : this.hasAlphaChannel(blob.type);
      if (sw !== null && sh !== null) {
        return {
          data: await createImageBitmap(blob, sx != null ? sx : 0, sy != null ? sy : 0, sw, sh, {
            premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
            colorSpaceConversion: "none",
            imageOrientation: "none"
          }),
          premultiplyAlpha: hasAlphaChannel
        };
      }
      return {
        data: await createImageBitmap(blob, {
          premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
          colorSpaceConversion: "none",
          imageOrientation: "none"
        }),
        premultiplyAlpha: hasAlphaChannel
      };
    } else {
      const img = new Image(width || void 0, height || void 0);
      if (!(src.substr(0, 5) === "data:")) {
        img.crossOrigin = "Anonymous";
      }
      img.src = src;
      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
      }).catch((e) => {
        console.error(e);
      });
      return {
        data: img,
        premultiplyAlpha: premultiplyAlpha != null ? premultiplyAlpha : true
      };
    }
  }
  async getTextureData() {
    const { src, premultiplyAlpha, type } = this.props;
    if (src === null) {
      return {
        data: null
      };
    }
    if (typeof src !== "string") {
      if (src instanceof ImageData) {
        return {
          data: src,
          premultiplyAlpha
        };
      }
      return {
        data: src(),
        premultiplyAlpha
      };
    }
    const absoluteSrc = convertUrlToAbsolute(src);
    if (type === "regular") {
      return this.loadImage(absoluteSrc);
    }
    if (type === "svg") {
      return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
    }
    if (isSvgImage(src) === true) {
      return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
    }
    if (type === "compressed") {
      return loadCompressedTexture(absoluteSrc);
    }
    if (isCompressedTextureContainer(src) === true) {
      return loadCompressedTexture(absoluteSrc);
    }
    return this.loadImage(absoluteSrc);
  }
  /**
   * Generates a cache key for the ImageTexture based on the provided props.
   * @param props - The props used to generate the cache key.
   * @returns The cache key as a string, or `false` if the key cannot be generated.
   */
  static makeCacheKey(props) {
    var _a, _b, _c;
    const resolvedProps = _ImageTexture.resolveDefaults(props);
    const key2 = resolvedProps.key || resolvedProps.src;
    if (typeof key2 !== "string") {
      return false;
    }
    let dimensionProps = "";
    if (resolvedProps.sh !== null && resolvedProps.sw !== null) {
      dimensionProps += ",";
      dimensionProps += (_a = resolvedProps.sx) != null ? _a : "";
      dimensionProps += (_b = resolvedProps.sy) != null ? _b : "";
      dimensionProps += resolvedProps.sw || "";
      dimensionProps += resolvedProps.sh || "";
    }
    return "ImageTexture,".concat(key2, ",").concat((_c = resolvedProps.premultiplyAlpha) != null ? _c : "true").concat(dimensionProps);
  }
  static resolveDefaults(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    return {
      src: (_a = props.src) != null ? _a : "",
      premultiplyAlpha: (_b = props.premultiplyAlpha) != null ? _b : true,
      key: (_c = props.key) != null ? _c : null,
      type: (_d = props.type) != null ? _d : null,
      width: (_e = props.width) != null ? _e : null,
      height: (_f = props.height) != null ? _f : null,
      sx: (_g = props.sx) != null ? _g : null,
      sy: (_h = props.sy) != null ? _h : null,
      sw: (_i = props.sw) != null ? _i : null,
      sh: (_j = props.sh) != null ? _j : null
    };
  }
};
__publicField(_ImageTexture, "z$__type__Props");
let ImageTexture = _ImageTexture;
const _NoiseTexture = class _NoiseTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _NoiseTexture.resolveDefaults(props);
  }
  async getTextureData() {
    const { width, height } = this.props;
    const size = width * height * 4;
    const pixelData8 = new Uint8ClampedArray(size);
    for (let i = 0; i < size; i += 4) {
      const v = Math.floor(Math.random() * 256);
      pixelData8[i] = v;
      pixelData8[i + 1] = v;
      pixelData8[i + 2] = v;
      pixelData8[i + 3] = 255;
    }
    return {
      data: new ImageData(pixelData8, width, height)
    };
  }
  static makeCacheKey(props) {
    if (props.cacheId === void 0) {
      return false;
    }
    const resolvedProps = _NoiseTexture.resolveDefaults(props);
    return "NoiseTexture,".concat(resolvedProps.width, ",").concat(resolvedProps.height, ",").concat(resolvedProps.cacheId);
  }
  static resolveDefaults(props) {
    var _a, _b, _c;
    return {
      width: (_a = props.width) != null ? _a : 128,
      height: (_b = props.height) != null ? _b : 128,
      cacheId: (_c = props.cacheId) != null ? _c : 0
    };
  }
};
__publicField(_NoiseTexture, "z$__type__Props");
let NoiseTexture = _NoiseTexture;
const _SubTexture = class _SubTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    __publicField(this, "parentTexture");
    __publicField(this, "onParentTxLoaded", () => {
      this.setState("loaded", {
        width: this.props.width,
        height: this.props.height
      });
    });
    __publicField(this, "onParentTxFailed", (target, error) => {
      this.setState("failed", error);
    });
    this.props = _SubTexture.resolveDefaults(props || {});
    this.parentTexture = this.props.texture;
    queueMicrotask(() => {
      const parentTx = this.parentTexture;
      if (parentTx.state === "loaded") {
        this.onParentTxLoaded(parentTx, parentTx.dimensions);
      } else if (parentTx.state === "failed") {
        this.onParentTxFailed(parentTx, parentTx.error);
      }
      parentTx.on("loaded", this.onParentTxLoaded);
      parentTx.on("failed", this.onParentTxFailed);
    });
  }
  onChangeIsRenderable(isRenderable) {
    this.parentTexture.setRenderableOwner(this, isRenderable);
  }
  async getTextureData() {
    return {
      data: this.props
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static makeCacheKey(props) {
    return false;
  }
  static resolveDefaults(props) {
    return {
      texture: props.texture,
      x: props.x || 0,
      y: props.y || 0,
      width: props.width || 0,
      height: props.height || 0
    };
  }
};
__publicField(_SubTexture, "z$__type__Props");
let SubTexture = _SubTexture;
const _RenderTexture = class _RenderTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _RenderTexture.resolveDefaults(props || {});
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    this.props.width = value;
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    this.props.height = value;
  }
  async getTextureData() {
    return {
      data: null,
      premultiplyAlpha: null
    };
  }
  static resolveDefaults(props) {
    return {
      width: props.width || 256,
      height: props.height || 256
    };
  }
};
__publicField(_RenderTexture, "z$__type__Props");
let RenderTexture = _RenderTexture;
class CoreTextureManager {
  constructor(numImageWorkers) {
    /**
     * Map of textures by cache key
     */
    __publicField(this, "keyCache", /* @__PURE__ */ new Map());
    /**
     * Map of cache keys by texture
     */
    __publicField(this, "inverseKeyCache", /* @__PURE__ */ new WeakMap());
    /**
     * Map of texture constructors by their type name
     */
    __publicField(this, "txConstructors", {});
    __publicField(this, "imageWorkerManager", null);
    __publicField(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    __publicField(this, "hasWorker", !!self.Worker);
    /**
     * Renderer that this texture manager is associated with
     *
     * @remarks
     * This MUST be set before the texture manager is used. Otherwise errors
     * will occur when using the texture manager.
     */
    __publicField(this, "renderer");
    /**
     * The current frame time in milliseconds
     *
     * @remarks
     * This is used to populate the `lastRenderableChangeTime` property of
     * {@link Texture} instances when their renderable state changes.
     *
     * Set by stage via `updateFrameTime` method.
     */
    __publicField(this, "frameTime", 0);
    if (this.hasCreateImageBitmap && this.hasWorker && numImageWorkers > 0) {
      this.imageWorkerManager = new ImageWorkerManager(numImageWorkers);
    }
    if (!this.hasCreateImageBitmap) {
      console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
    }
    this.registerTextureType("ImageTexture", ImageTexture);
    this.registerTextureType("ColorTexture", ColorTexture);
    this.registerTextureType("NoiseTexture", NoiseTexture);
    this.registerTextureType("SubTexture", SubTexture);
    this.registerTextureType("RenderTexture", RenderTexture);
  }
  registerTextureType(textureType, textureClass) {
    this.txConstructors[textureType] = textureClass;
  }
  loadTexture(textureType, props) {
    let texture;
    const TextureClass = this.txConstructors[textureType];
    if (!TextureClass) {
      throw new Error('Texture type "'.concat(textureType, '" is not registered'));
    }
    if (!texture) {
      const cacheKey = TextureClass.makeCacheKey(props);
      if (cacheKey && this.keyCache.has(cacheKey)) {
        texture = this.keyCache.get(cacheKey);
      } else {
        texture = new TextureClass(this, props);
        if (cacheKey) {
          this.initTextureToCache(texture, cacheKey);
        }
      }
    }
    return texture;
  }
  initTextureToCache(texture, cacheKey) {
    const { keyCache, inverseKeyCache } = this;
    keyCache.set(cacheKey, texture);
    inverseKeyCache.set(texture, cacheKey);
  }
  /**
   * Remove a texture from the cache
   *
   * @remarks
   * Called by Texture Cleanup when a texture is freed.
   *
   * @param texture
   */
  removeTextureFromCache(texture) {
    const { inverseKeyCache, keyCache } = this;
    const cacheKey = inverseKeyCache.get(texture);
    if (cacheKey) {
      keyCache.delete(cacheKey);
    }
  }
}
const fontCache = /* @__PURE__ */ new Map();
const weightConversions = {
  normal: 400,
  bold: 700,
  bolder: 900,
  lighter: 100
};
const fontWeightToNumber = (weight) => {
  if (typeof weight === "number") {
    return weight;
  }
  return weightConversions[weight] || 400;
};
function resolveFontToUse(familyMapsByPriority, family, weightIn, style, stretch) {
  let weight = fontWeightToNumber(weightIn);
  for (const fontFamiles of familyMapsByPriority) {
    const fontFaces = fontFamiles[family];
    if (!fontFaces) {
      continue;
    }
    if (fontFaces.size === 1) {
      console.warn("TrFontManager: Only one font face found for family: '".concat(family, "' - will be used for all weights and styles"));
      return fontFaces.values().next().value;
    }
    const weightMap = /* @__PURE__ */ new Map();
    for (const fontFace of fontFaces) {
      const fontFamilyWeight = fontWeightToNumber(fontFace.descriptors.weight);
      if (fontFamilyWeight === weight && fontFace.descriptors.style === style && fontFace.descriptors.stretch === stretch) {
        return fontFace;
      }
      weightMap.set(fontFamilyWeight, fontFace);
    }
    const msg = "TrFontManager: No exact match: '".concat(family, " Weight: ").concat(weight, " Style: ").concat(style, " Stretch: ").concat(stretch, "'");
    console.error(msg);
    if (weight === 400 && weightMap.has(500)) {
      return weightMap.get(500);
    }
    if (weight === 500 && weightMap.has(400)) {
      return weightMap.get(400);
    }
    if (weight < 400) {
      while (weight > 0) {
        if (weightMap.has(weight)) {
          return weightMap.get(weight);
        }
        weight -= 100;
      }
      weight = 600;
    }
    while (weight < 1e3) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight += 100;
    }
    weight = 500;
    while (weight > 0) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight -= 100;
    }
  }
  return;
}
class TrFontManager {
  constructor(textRenderers) {
    __publicField(this, "textRenderers");
    this.textRenderers = textRenderers;
  }
  addFontFace(font) {
    for (const trId in this.textRenderers) {
      const tr = this.textRenderers[trId];
      if (tr && tr.isFontFaceSupported(font)) {
        tr.addFontFace(font);
      }
    }
  }
  /**
   * Utility method to resolve a single font face from a list of prioritized family maps based on
   * a set of font properties.
   *
   * @remarks
   * These are to be used by a text renderer to resolve a font face if needed.
   *
   * @param familyMapsByPriority
   * @param props
   * @returns
   */
  static resolveFontFace(familyMapsByPriority, props) {
    const { fontFamily, fontWeight, fontStyle, fontStretch } = props;
    const fontCacheString = "".concat(fontFamily).concat(fontStyle).concat(fontWeight).concat(fontStretch);
    if (fontCache.has(fontCacheString) === true) {
      return fontCache.get(fontCacheString);
    }
    const resolvedFont = resolveFontToUse(familyMapsByPriority, fontFamily, fontWeight, fontStyle, fontStretch);
    if (resolvedFont !== void 0) {
      fontCache.set(fontCacheString, resolvedFont);
    }
    return resolvedFont;
  }
}
class CoreShader {
  // abstract draw(): void;
  static makeCacheKey(props) {
    return false;
  }
  static resolveDefaults(props) {
    return {};
  }
}
function createShader$1(glw, type, source) {
  const shader = glw.createShader(type);
  if (!shader) {
    throw new Error();
  }
  glw.shaderSource(shader, source);
  glw.compileShader(shader);
  const success = glw.getShaderParameter(shader, glw.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.log(glw.getShaderInfoLog(shader));
  glw.deleteShader(shader);
}
function createProgram(glw, vertexShader, fragmentShader) {
  const program = glw.createProgram();
  if (!program) {
    throw new Error();
  }
  glw.attachShader(program, vertexShader);
  glw.attachShader(program, fragmentShader);
  glw.linkProgram(program);
  const success = glw.getProgramParameter(program, glw.LINK_STATUS);
  if (success) {
    return program;
  }
  console.log(glw.getProgramInfoLog(program));
  glw.deleteProgram(program);
  return void 0;
}
class WebGlCoreShader extends CoreShader {
  constructor(options) {
    super();
    __publicField(this, "boundBufferCollection", null);
    __publicField(this, "buffersBound", false);
    __publicField(this, "program");
    /**
     * Vertex Array Object
     *
     * @remarks
     * Used by WebGL2 Only
     */
    __publicField(this, "vao");
    __publicField(this, "renderer");
    __publicField(this, "glw");
    __publicField(this, "attributeBuffers");
    __publicField(this, "attributeLocations");
    __publicField(this, "attributeNames");
    __publicField(this, "uniformLocations");
    __publicField(this, "uniformTypes");
    __publicField(this, "supportsIndexedTextures");
    const renderer2 = this.renderer = options.renderer;
    const glw = this.glw = this.renderer.glw;
    this.supportsIndexedTextures = options.supportsIndexedTextures || false;
    const webGl2 = glw.isWebGl2();
    const requiredExtensions = webGl2 && options.webgl2Extensions || !webGl2 && options.webgl1Extensions || [];
    const glVersion = webGl2 ? "2.0" : "1.0";
    requiredExtensions.forEach((extensionName) => {
      if (!glw.getExtension(extensionName)) {
        throw new Error('Shader "'.concat(this.constructor.name, '" requires extension "').concat(extensionName, '" for WebGL ').concat(glVersion, " but wasn't found"));
      }
    });
    const shaderSources = options.shaderSources || this.constructor.shaderSources;
    if (!shaderSources) {
      throw new Error('Shader "'.concat(this.constructor.name, '" is missing shaderSources.'));
    } else if (webGl2 && (shaderSources == null ? void 0 : shaderSources.webGl2)) {
      shaderSources.fragment = shaderSources.webGl2.fragment;
      shaderSources.vertex = shaderSources.webGl2.vertex;
      delete shaderSources.webGl2;
    }
    const textureUnits = renderer2.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    const vertexSource = shaderSources.vertex instanceof Function ? shaderSources.vertex(textureUnits) : shaderSources.vertex;
    const fragmentSource = shaderSources.fragment instanceof Function ? shaderSources.fragment(textureUnits) : shaderSources.fragment;
    const vertexShader = createShader$1(glw, glw.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader$1(glw, glw.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) {
      throw new Error();
    }
    const program = createProgram(glw, vertexShader, fragmentShader);
    if (!program) {
      throw new Error();
    }
    this.program = program;
    if (webGl2) {
      const vao = glw.createVertexArray();
      if (!vao) {
        throw new Error();
      }
      this.vao = vao;
      glw.bindVertexArray(this.vao);
    }
    this.attributeLocations = {};
    this.attributeBuffers = {};
    this.attributeNames = [];
    [...options.attributes].forEach((attributeName) => {
      const location = glw.getAttribLocation(this.program, attributeName);
      if (location < 0) {
        throw new Error("".concat(this.constructor.name, ': Vertex shader must have an attribute "').concat(attributeName, '"!'));
      }
      const buffer = glw.createBuffer();
      if (!buffer) {
        throw new Error("".concat(this.constructor.name, ': Could not create buffer for attribute "').concat(attributeName, '"'));
      }
      this.attributeLocations[attributeName] = location;
      this.attributeBuffers[attributeName] = buffer;
      this.attributeNames.push(attributeName);
    });
    this.uniformLocations = {};
    this.uniformTypes = {};
    options.uniforms.forEach((uniform) => {
      const location = glw.getUniformLocation(this.program, uniform.name);
      this.uniformTypes[uniform.name] = uniform.uniform;
      if (!location) {
        console.warn('Shader "'.concat(this.constructor.name, '" could not get uniform location for "').concat(uniform.name, '"'));
        return;
      }
      this.uniformLocations[uniform.name] = location;
    });
  }
  bindBufferAttribute(location, buffer, attribute) {
    const { glw } = this;
    glw.enableVertexAttribArray(location);
    glw.vertexAttribPointer(buffer, location, attribute.size, attribute.type, attribute.normalized, attribute.stride, attribute.offset);
  }
  disableAttribute(location) {
    this.glw.disableVertexAttribArray(location);
  }
  disableAttributes() {
    for (const loc in this.attributeLocations) {
      this.disableAttribute(this.attributeLocations[loc]);
    }
    this.boundBufferCollection = null;
  }
  /**
   * Given two sets of Shader props destined for this Shader, determine if they can be batched together
   * to reduce the number of draw calls.
   *
   * @remarks
   * This is used by the {@link WebGlCoreRenderer} to determine if it can batch multiple consecutive draw
   * calls into a single draw call.
   *
   * By default, this returns false (meaning no batching is allowed), but can be
   * overridden by child classes to provide more efficient batching.
   *
   * @param propsA
   * @param propsB
   * @returns
   */
  canBatchShaderProps(propsA, propsB) {
    return false;
  }
  bindRenderOp(renderOp, props) {
    this.bindBufferCollection(renderOp.buffers);
    if (renderOp.textures.length > 0) {
      this.bindTextures(renderOp.textures);
    }
    const { glw, parentHasRenderTexture, renderToTexture } = renderOp;
    if (renderToTexture && parentHasRenderTexture) {
      return;
    }
    if (parentHasRenderTexture) {
      const { width, height } = renderOp.framebufferDimensions || {};
      this.setUniform("u_pixelRatio", 1);
      this.setUniform("u_resolution", new Float32Array([width != null ? width : 0, height != null ? height : 0]));
    } else {
      this.setUniform("u_pixelRatio", renderOp.options.pixelRatio);
      this.setUniform("u_resolution", new Float32Array([glw.canvas.width, glw.canvas.height]));
    }
    if (props) {
      if (hasOwn(props, "$dimensions")) {
        let dimensions = props.$dimensions;
        if (!dimensions) {
          dimensions = renderOp.dimensions;
        }
        this.setUniform("u_dimensions", [dimensions.width, dimensions.height]);
      }
      if (hasOwn(props, "$alpha")) {
        let alpha = props.$alpha;
        if (!alpha) {
          alpha = renderOp.alpha;
        }
        this.setUniform("u_alpha", alpha);
      }
      this.bindProps(props);
    }
  }
  setUniform(name, ...value) {
    this.glw.setUniform(this.uniformTypes[name], this.uniformLocations[name], ...value);
  }
  bindBufferCollection(buffer) {
    if (this.boundBufferCollection === buffer) {
      return;
    }
    for (const attributeName in this.attributeLocations) {
      const resolvedBuffer = buffer.getBuffer(attributeName);
      const resolvedInfo = buffer.getAttributeInfo(attributeName);
      assertTruthy(resolvedBuffer, 'Buffer for "'.concat(attributeName, '" not found'));
      assertTruthy(resolvedInfo);
      this.bindBufferAttribute(this.attributeLocations[attributeName], resolvedBuffer, resolvedInfo);
    }
    this.boundBufferCollection = buffer;
  }
  bindProps(props) {
  }
  bindTextures(textures) {
  }
  attach() {
    this.glw.useProgram(this.program);
    this.glw.useProgram(this.program);
    if (this.glw.isWebGl2() && this.vao) {
      this.glw.bindVertexArray(this.vao);
    }
  }
  detach() {
    this.disableAttributes();
  }
}
__publicField(WebGlCoreShader, "shaderSources");
class DefaultShader extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
}
__publicField(DefaultShader, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
class DefaultShaderBatched extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: [
        "a_position",
        "a_textureCoordinate",
        "a_color",
        "a_textureIndex"
      ],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_textures[0]", uniform: "uniform1iv" }
      ]
    });
    __publicField(this, "supportsIndexedTextures", true);
  }
  bindTextures(texture) {
    const { renderer: renderer2, glw } = this;
    if (texture.length > renderer2.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) {
      throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(renderer2.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
    }
    texture.forEach((t, i) => {
      glw.activeTexture(i);
      glw.bindTexture(t.ctxTexture);
    });
    const samplers = Array.from(Array(texture.length).keys());
    this.setUniform("u_textures[0]", samplers);
  }
}
__publicField(DefaultShaderBatched, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: (textureUnits) => "\n      #define txUnits ".concat(textureUnits, "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(textureUnits, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(textureUnits).keys()).map((idx) => "\n          ".concat(idx !== 0 ? "else " : "", "if (idx == ").concat(idx, ") {\n            return texture2D(textures[").concat(idx, "], uv);\n          }\n        ")).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ")
});
class ShaderEffect {
  constructor(options) {
    __publicField(this, "priority", 1);
    __publicField(this, "name", "");
    __publicField(this, "ref");
    __publicField(this, "target");
    __publicField(this, "passParameters", "");
    __publicField(this, "declaredUniforms", "");
    __publicField(this, "uniformInfo", {});
    const { ref, target, props = {} } = options;
    this.ref = ref;
    this.target = target;
    const uniformInfo = {};
    const passParameters = [];
    let declaredUniforms = "";
    const uniforms = this.constructor.uniforms || {};
    for (const u in uniforms) {
      const unif = uniforms[u];
      const uniType = unif.type;
      const uniformName = "".concat(ref, "_").concat(u);
      let define = "";
      if (unif.size) {
        define = "[".concat(unif.size(props), "]");
      }
      passParameters.push(uniformName);
      declaredUniforms += "uniform ".concat(uniType, " ").concat(uniformName).concat(define, ";");
      uniformInfo[u] = { name: uniformName, uniform: uniforms[u].method };
    }
    this.passParameters = passParameters.join(",");
    this.declaredUniforms = declaredUniforms;
    this.uniformInfo = uniformInfo;
  }
  static getEffectKey(props) {
    return "";
  }
  static getMethodParameters(uniforms, props) {
    const res = [];
    for (const u in uniforms) {
      const uni = uniforms[u];
      let define = "";
      if (uni.size) {
        define = "[".concat(uni.size(props), "]");
      }
      res.push("".concat(uni.type, " ").concat(u).concat(define));
    }
    return res.join(",");
  }
  static resolveDefaults(props) {
    return {};
  }
  static makeEffectKey(props) {
    return false;
  }
}
__publicField(ShaderEffect, "uniforms", {});
__publicField(ShaderEffect, "methods");
__publicField(ShaderEffect, "onShaderMask");
__publicField(ShaderEffect, "onColorize");
__publicField(ShaderEffect, "onEffectMask");
const effectCache = /* @__PURE__ */ new Map();
const getResolvedEffect = (effects, effectContructors) => {
  const key2 = JSON.stringify(effects);
  if (effectCache.has(key2)) {
    return effectCache.get(key2);
  }
  effects = effects != null ? effects : [];
  const resolvedEffects = [];
  const effectsLength = effects.length;
  let i = 0;
  for (; i < effectsLength; i++) {
    const { name, type, props } = effects[i];
    const resolvedEffect = {
      name,
      type,
      props: {}
    };
    const effectConstructor = effectContructors[type];
    const defaultPropValues = effectConstructor.resolveDefaults(props);
    const uniforms = effectConstructor.uniforms;
    const uniformKeys = Object.keys(uniforms);
    const uniformsLength = uniformKeys.length;
    let j = 0;
    for (; j < uniformsLength; j++) {
      const key3 = uniformKeys[j];
      const uniform = uniforms[key3];
      const result = {
        value: defaultPropValues[key3],
        programValue: void 0,
        updateOnBind: uniform.updateOnBind || false,
        hasValidator: uniform.validator !== void 0,
        hasProgramValueUpdater: uniform.updateProgramValue !== void 0
      };
      const validatedValue = result.hasValidator && uniform.validator(defaultPropValues[key3], defaultPropValues) || defaultPropValues[key3];
      if (defaultPropValues[key3] !== validatedValue) {
        result.validatedValue = validatedValue;
      }
      if (result.hasProgramValueUpdater) {
        uniform.updateProgramValue(result);
      }
      if (result.programValue === void 0) {
        result.programValue = result.value;
      }
      resolvedEffect.props[key3] = result;
    }
    resolvedEffects.push(resolvedEffect);
  }
  effectCache.set(key2, resolvedEffects);
  return resolvedEffects;
};
const _DynamicShader = class _DynamicShader extends WebGlCoreShader {
  constructor(renderer2, props, effectContructors) {
    const shader = _DynamicShader.createShader(props, effectContructors);
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_alpha", uniform: "uniform1f" },
        ...shader.uniforms
      ],
      shaderSources: {
        vertex: shader.vertex,
        fragment: shader.fragment
      }
    });
    __publicField(this, "effects", []);
    this.effects = shader.effects;
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    var _a;
    const effects = props.effects;
    const effectsL = effects.length;
    let i = 0;
    for (; i < effectsL; i++) {
      const effect2 = effects[i];
      const uniformInfo = this.effects[i].uniformInfo;
      const propKeys = Object.keys(effect2.props);
      const propsLength = propKeys.length;
      let j = 0;
      for (; j < propsLength; j++) {
        const key2 = propKeys[j];
        const prop = effect2.props[key2];
        if (prop.updateOnBind === true) {
          const uniform = (_a = this.renderer.shManager.getRegisteredEffects()[effect2.type]) == null ? void 0 : _a.uniforms[key2];
          uniform == null ? void 0 : uniform.updateProgramValue(effect2.props[key2], props);
        }
        this.setUniform(uniformInfo[key2].name, effect2.props[key2].programValue);
      }
    }
  }
  canBatchShaderProps(propsA, propsB) {
    if (propsA.$dimensions.width !== propsB.$dimensions.width || propsA.$dimensions.height !== propsB.$dimensions.height || propsA.effects.length !== propsB.effects.length) {
      return false;
    }
    const propsEffectsLen = propsA.effects.length;
    let i = 0;
    for (; i < propsEffectsLen; i++) {
      const effectA = propsA.effects[i];
      const effectB = propsB.effects[i];
      if (effectA.type !== effectB.type) {
        return false;
      }
      for (const key2 in effectA.props) {
        if (effectB.props && !effectB.props[key2] || effectA.props[key2].value !== effectB.props[key2].value) {
          return false;
        }
      }
    }
    return true;
  }
  static createShader(props, effectContructors) {
    const effectNameCount = {};
    const methods = {};
    let declareUniforms = "";
    const uniforms = [];
    const uFx = [];
    const effects = props.effects.map((effect2) => {
      const baseClass = effectContructors[effect2.type];
      const key2 = baseClass.getEffectKey(effect2.props || {});
      effectNameCount[key2] = effectNameCount[key2] ? ++effectNameCount[key2] : 1;
      const nr = effectNameCount[key2];
      if (nr === 1) {
        uFx.push({ key: key2, type: effect2.type, props: effect2.props });
      }
      const fxClass = new baseClass({
        ref: "".concat(key2).concat(nr === 1 ? "" : nr),
        target: key2,
        props: effect2.props
      });
      declareUniforms += fxClass.declaredUniforms;
      uniforms.push(...Object.values(fxClass.uniformInfo));
      return fxClass;
    });
    let effectMethods = "";
    uFx == null ? void 0 : uFx.forEach((fx) => {
      var _a;
      const fxClass = effectContructors[fx.type];
      const fxProps = fxClass.resolveDefaults((_a = fx.props) != null ? _a : {});
      const remap = [];
      for (const m in fxClass.methods) {
        let cm = m;
        const fxMethod = fxClass.methods[m];
        if (methods[m] && methods[m] !== fxMethod) {
          cm = _DynamicShader.resolveMethodDuplicate(m, fxMethod, methods);
        }
        methods[cm] = fxMethod.replace("function", cm);
        remap.push({ m, cm });
      }
      let onShaderMask = fxClass.onShaderMask instanceof Function ? fxClass.onShaderMask(fxProps) : fxClass.onShaderMask;
      let onColorize = fxClass.onColorize instanceof Function ? fxClass.onColorize(fxProps) : fxClass.onColorize;
      let onEffectMask = fxClass.onEffectMask instanceof Function ? fxClass.onEffectMask(fxProps) : fxClass.onEffectMask;
      remap.forEach((r) => {
        const { m, cm } = r;
        const reg = new RegExp("\\$".concat(m), "g");
        if (onShaderMask) {
          onShaderMask = onShaderMask.replace(reg, cm);
        }
        if (onColorize) {
          onColorize = onColorize.replace(reg, cm);
        }
        if (onEffectMask) {
          onEffectMask = onEffectMask.replace(reg, cm);
        }
      });
      const methodParameters = fxClass.getMethodParameters(fxClass.uniforms, fxProps);
      const pm = methodParameters.length > 0 ? ", ".concat(methodParameters) : "";
      if (onShaderMask) {
        effectMethods += "\n        float fx_".concat(fx.key, "_onShaderMask(float shaderMask ").concat(pm, ") {\n          ").concat(onShaderMask, "\n        }\n        ");
      }
      if (onColorize) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onColorize, "\n          }\n        ");
      }
      if (onEffectMask) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onEffectMask, "\n          }\n        ");
      }
    });
    let sharedMethods = "";
    for (const m in methods) {
      sharedMethods += methods[m];
    }
    let currentMask = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))";
    let drawEffects = "\n\n    ";
    for (let i = 0; i < effects.length; i++) {
      const current = effects[i];
      const pm = current.passParameters.length > 0 ? ", ".concat(current.passParameters) : "";
      const currentClass = effectContructors[current.name];
      if (currentClass.onShaderMask) {
        drawEffects += "\n        shaderMask = fx_".concat(current.target, "_onShaderMask(shaderMask ").concat(pm, ");\n        ");
      }
      if (currentClass.onColorize) {
        drawEffects += "\n        maskColor = fx_".concat(current.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(pm, ");\n        ");
      }
      if (currentClass.onEffectMask) {
        currentMask = "fx_".concat(current.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(pm, ")");
      }
      const next = effects[i + 1];
      if (next === void 0 || effectContructors[next.name].onEffectMask) {
        drawEffects += "\n          shaderColor = ".concat(currentMask, ";\n        ");
      }
    }
    return {
      effects,
      uniforms,
      fragment: _DynamicShader.fragment(declareUniforms, sharedMethods, effectMethods, drawEffects),
      vertex: _DynamicShader.vertex()
    };
  }
  static resolveMethodDuplicate(key2, effectMethod, methodCollection, increment = 0) {
    const m = key2 + (increment > 0 ? increment : "");
    if (methodCollection[m] && methodCollection[m] !== effectMethod) {
      return this.resolveMethodDuplicate(key2, effectMethod, methodCollection, ++increment);
    }
    return m;
  }
  static resolveDefaults(props, effectContructors) {
    var _a;
    assertTruthy(effectContructors);
    return {
      effects: getResolvedEffect((_a = props.effects) != null ? _a : [], effectContructors),
      $dimensions: {
        width: 0,
        height: 0
      },
      $alpha: 0
    };
  }
  static makeCacheKey(props, effectContructors) {
    var _a;
    let fx = "";
    (_a = props.effects) == null ? void 0 : _a.forEach((effect2) => {
      const baseClass = effectContructors[effect2.type];
      const key2 = baseClass.getEffectKey(effect2.props || {});
      fx += ",".concat(key2);
    });
    return "DynamicShader".concat(fx);
  }
};
__publicField(_DynamicShader, "z$__type__Props");
__publicField(_DynamicShader, "vertex", () => "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ");
__publicField(_DynamicShader, "fragment", (uniforms, methods, effectMethods, drawEffects) => "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(uniforms, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(methods, "\n\n    ").concat(effectMethods, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(drawEffects, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  "));
let DynamicShader = _DynamicShader;
class RoundedRectangle extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_radius", uniform: "uniform1f" }
      ]
    });
  }
  static resolveDefaults(props) {
    return {
      radius: props.radius || 10,
      $dimensions: {
        width: 0,
        height: 0
      }
    };
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    const radiusFactor = Math.min(props.$dimensions.width, props.$dimensions.height) / (2 * props.radius);
    this.setUniform("u_radius", props.radius * Math.min(radiusFactor, 1));
  }
  canBatchShaderProps(propsA, propsB) {
    return propsA.radius === propsB.radius && propsA.$dimensions.width === propsB.$dimensions.width && propsA.$dimensions.height === propsB.$dimensions.height;
  }
}
__publicField(RoundedRectangle, "z$__type__Props");
__publicField(RoundedRectangle, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
const IDENTITY_MATRIX_3x3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
const _SdfShader = class _SdfShader extends WebGlCoreShader {
  constructor(renderer2) {
    super({
      renderer: renderer2,
      attributes: ["a_position", "a_textureCoordinate"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_transform", uniform: "uniformMatrix3fv" },
        { name: "u_scrollY", uniform: "uniform1f" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_color", uniform: "uniform4fv" },
        { name: "u_size", uniform: "uniform1f" },
        { name: "u_distanceRange", uniform: "uniform1f" },
        { name: "u_debug", uniform: "uniform1i" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    const resolvedProps = _SdfShader.resolveDefaults(props);
    for (const key2 in resolvedProps) {
      if (key2 === "transform") {
        this.setUniform("u_transform", false, resolvedProps[key2]);
      } else if (key2 === "scrollY") {
        this.setUniform("u_scrollY", resolvedProps[key2]);
      } else if (key2 === "color") {
        const components = getNormalizedRgbaComponents(resolvedProps.color);
        this.setUniform("u_color", components);
      } else if (key2 === "size") {
        this.setUniform("u_size", resolvedProps[key2]);
      } else if (key2 === "distanceRange") {
        this.setUniform("u_distanceRange", resolvedProps[key2]);
      } else if (key2 === "debug") {
        this.setUniform("u_debug", resolvedProps[key2] ? 1 : 0);
      }
    }
  }
  static resolveDefaults(props = {}) {
    var _a, _b, _c, _d, _e, _f;
    return {
      transform: (_a = props.transform) != null ? _a : IDENTITY_MATRIX_3x3,
      scrollY: (_b = props.scrollY) != null ? _b : 0,
      color: (_c = props.color) != null ? _c : 4294967295,
      size: (_d = props.size) != null ? _d : 16,
      distanceRange: (_e = props.distanceRange) != null ? _e : 1,
      debug: (_f = props.debug) != null ? _f : false
    };
  }
};
__publicField(_SdfShader, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
let SdfShader = _SdfShader;
const updateShaderEffectColor = (values) => {
  if (values.programValue === void 0) {
    values.programValue = new Float32Array(4);
  }
  const rgba = values.value;
  const floatArray = values.programValue;
  floatArray[0] = (rgba >>> 24) / 255;
  floatArray[1] = (rgba >>> 16 & 255) / 255;
  floatArray[2] = (rgba >>> 8 & 255) / 255;
  floatArray[3] = (rgba & 255) / 255;
};
const updateFloat32ArrayLength2 = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const floatArray = values.programValue;
    floatArray[0] = validatedValue[0];
    floatArray[1] = validatedValue[1];
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const updateFloat32ArrayLength4 = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const floatArray = values.programValue;
    floatArray[0] = validatedValue[0];
    floatArray[1] = validatedValue[1];
    floatArray[2] = validatedValue[1];
    floatArray[3] = validatedValue[1];
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const updateFloat32ArrayLengthN = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const len = validatedValue.length;
    const programValue = values.programValue;
    for (let i = 0; i < len; i++) {
      programValue[i] = validatedValue[i];
    }
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const validateArrayLength4 = (value) => {
  const isArray2 = Array.isArray(value);
  if (!isArray2) {
    return [value, value, value, value];
  } else if (isArray2 && value.length === 4) {
    return value;
  } else if (isArray2 && value.length === 2) {
    return [value[0], value[1], value[0], value[1]];
  } else if (isArray2 && value.length === 3) {
    return [value[0], value[1], value[2], value[0]];
  }
  return [value[0], value[0], value[0], value[0]];
};
const updateWebSafeRadius = (values, shaderProps) => {
  if (values.programValue === void 0) {
    values.programValue = new Float32Array(4);
  }
  const programValue = values.programValue;
  const validatedValue = values.validatedValue || values.value;
  if (shaderProps === void 0 && values.$dimensions === void 0) {
    programValue[0] = validatedValue[0];
    programValue[1] = validatedValue[1];
    programValue[2] = validatedValue[2];
    programValue[3] = validatedValue[3];
    return;
  }
  let storedDimensions = values.$dimensions;
  if (shaderProps !== void 0) {
    const { $dimensions } = shaderProps;
    if (storedDimensions !== void 0 && (storedDimensions.width === $dimensions.width || storedDimensions.height === $dimensions.height)) {
      return;
    }
    if (storedDimensions === void 0) {
      storedDimensions = {
        width: $dimensions == null ? void 0 : $dimensions.width,
        height: $dimensions == null ? void 0 : $dimensions.height
      };
      values.$dimensions = storedDimensions;
    }
  }
  const { width, height } = storedDimensions;
  const [r0, r1, r2, r3] = validatedValue;
  const factor = Math.min(Math.min(Math.min(width / Math.max(width, r0 + r1), width / Math.max(width, r2 + r3)), Math.min(height / Math.max(height, r0 + r2), height / Math.max(height, r1 + r3))), 1);
  programValue[0] = r0 * factor;
  programValue[1] = r1 * factor;
  programValue[2] = r2 * factor;
  programValue[3] = r3 * factor;
};
class RadiusEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radius");
  }
  static getEffectKey() {
    return "radius";
  }
  static resolveDefaults(props) {
    var _a;
    return {
      radius: (_a = props.radius) != null ? _a : 10
    };
  }
}
__publicField(RadiusEffect, "z$__type__Props");
__publicField(RadiusEffect, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    updateOnBind: true,
    validator: validateArrayLength4,
    updateProgramValue: updateWebSafeRadius
  }
});
__publicField(RadiusEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(RadiusEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  ");
__publicField(RadiusEffect, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
class BorderEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "border");
  }
  static getEffectKey() {
    return "border";
  }
  static resolveDefaults(props) {
    var _a, _b;
    return {
      width: (_a = props.width) != null ? _a : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderEffect, "z$__type__Props");
__publicField(BorderEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderEffect, "onEffectMask", "\n  float intR = shaderMask + 1.0;\n  float mask = clamp(intR + width, 0.0, 1.0) - clamp(intR, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  ");
__publicField(BorderEffect, "onColorize", "\n    return color;\n  ");
const _LinearGradientEffect = class _LinearGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "linearGradient");
  }
  static getEffectKey(props) {
    return "linearGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a, _b;
    const colors = (_a = props.colors) != null ? _a : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      angle: (_b = props.angle) != null ? _b : 0
    };
  }
};
__publicField(_LinearGradientEffect, "z$__type__Props");
__publicField(_LinearGradientEffect, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      return rgbas.reduce((acc, val) => acc.concat(getNormalizedRgbaComponents(val)), []);
    },
    updateProgramValue: updateFloat32ArrayLengthN,
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_LinearGradientEffect, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
});
__publicField(_LinearGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_LinearGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(_LinearGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let LinearGradientEffect = _LinearGradientEffect;
class GrayscaleEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "grayscale");
  }
  static getEffectKey() {
    return "grayscale";
  }
  static resolveDefaults(props) {
    var _a;
    return {
      amount: (_a = props.amount) != null ? _a : 1
    };
  }
}
__publicField(GrayscaleEffect, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
});
__publicField(GrayscaleEffect, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
class BorderRightEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderRight");
  }
  static getEffectKey() {
    return "borderRight";
  }
  static resolveDefaults(props) {
    var _a, _b;
    return {
      width: (_a = props.width) != null ? _a : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderRightEffect, "z$__type__Props");
__publicField(BorderRightEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderRightEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderRightEffect, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderRightEffect, "onColorize", "\n    return color;\n  ");
class BorderTopEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderTop");
  }
  static getEffectKey() {
    return "borderTop";
  }
  static resolveDefaults(props) {
    var _a, _b;
    return {
      width: (_a = props.width) != null ? _a : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderTopEffect, "z$__type__Props");
__publicField(BorderTopEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderTopEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderTopEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderTopEffect, "onColorize", "\n    return color;\n  ");
class BorderBottomEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderBottom");
  }
  static getEffectKey() {
    return "borderBottom";
  }
  static resolveDefaults(props) {
    var _a, _b;
    return {
      width: (_a = props.width) != null ? _a : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderBottomEffect, "z$__type__Props");
__publicField(BorderBottomEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderBottomEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderBottomEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderBottomEffect, "onColorize", "\n    return color;\n  ");
class BorderLeftEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderLeft");
  }
  static getEffectKey() {
    return "borderLeft";
  }
  static resolveDefaults(props) {
    var _a, _b;
    return {
      width: (_a = props.width) != null ? _a : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderLeftEffect, "z$__type__Props");
__publicField(BorderLeftEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderLeftEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderLeftEffect, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderLeftEffect, "onColorize", "\n    return color;\n  ");
class GlitchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "glitch");
  }
  static getEffectKey(props) {
    return "glitch";
  }
  static resolveDefaults(props) {
    var _a, _b, _c, _d, _e;
    return {
      amplitude: (_a = props.amplitude) != null ? _a : 0.2,
      narrowness: (_b = props.narrowness) != null ? _b : 4,
      blockiness: (_c = props.blockiness) != null ? _c : 2,
      minimizer: (_d = props.minimizer) != null ? _d : 8,
      time: (_e = props.time) != null ? _e : Date.now()
    };
  }
}
__publicField(GlitchEffect, "z$__type__Props");
__publicField(GlitchEffect, "uniforms", {
  amplitude: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  narrowness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  blockiness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  minimizer: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  time: {
    value: 0,
    method: "uniform1f",
    updateOnBind: true,
    updateProgramValue: (values) => {
      const value = values.value = (Date.now() - values.value) % 1e3;
      values.programValue = value;
    },
    type: "float"
  }
});
__publicField(GlitchEffect, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
});
__publicField(GlitchEffect, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
class FadeOutEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "fadeOut");
  }
  static getEffectKey() {
    return "fadeOut";
  }
  static resolveDefaults(props) {
    var _a;
    return {
      fade: (_a = props.fade) != null ? _a : 10
    };
  }
}
__publicField(FadeOutEffect, "z$__type__Props");
__publicField(FadeOutEffect, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: validateArrayLength4,
    updateProgramValue: updateFloat32ArrayLength4
  }
});
__publicField(FadeOutEffect, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
const _RadialGradientEffect = class _RadialGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialGradient");
  }
  static getEffectKey(props) {
    return "radialGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a, _b, _c, _d, _e;
    const colors = (_a = props.colors) != null ? _a : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      width: (_b = props.width) != null ? _b : 0,
      height: (_d = (_c = props.height) != null ? _c : props.width) != null ? _d : 0,
      pivot: (_e = props.pivot) != null ? _e : [0.5, 0.5]
    };
  }
};
__publicField(_RadialGradientEffect, "z$__type__Props");
__publicField(_RadialGradientEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  pivot: {
    value: [0.5, 0.5],
    updateProgramValue: updateFloat32ArrayLength2,
    method: "uniform2fv",
    type: "vec2"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      return rgbas.reduce((acc, val) => acc.concat(getNormalizedRgbaComponents(val)), []);
    },
    updateProgramValue: updateFloat32ArrayLengthN,
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_RadialGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_RadialGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(_RadialGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let RadialGradientEffect = _RadialGradientEffect;
class RadialProgressEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialProgress");
  }
  static getEffectKey() {
    return "radialProgress";
  }
  static resolveDefaults(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
      width: (_a = props.width) != null ? _a : 10,
      progress: (_b = props.progress) != null ? _b : 0.5,
      offset: (_c = props.offset) != null ? _c : 0,
      range: (_d = props.range) != null ? _d : Math.PI * 2,
      rounded: (_e = props.rounded) != null ? _e : false,
      radius: (_f = props.radius) != null ? _f : 1,
      color: (_g = props.color) != null ? _g : 4294967295
    };
  }
}
__publicField(RadialProgressEffect, "z$__type__Props");
__publicField(RadialProgressEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  progress: {
    value: 0.5,
    method: "uniform1f",
    type: "float"
  },
  offset: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  range: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  rounded: {
    value: 0,
    method: "uniform1f",
    type: "float",
    validator: (value) => {
      return value ? 1 : 0;
    }
  },
  radius: {
    value: 1,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(RadialProgressEffect, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
});
__publicField(RadialProgressEffect, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  ");
__publicField(RadialProgressEffect, "onColorize", "\n    return color;\n  ");
class HolePunchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "holePunch");
  }
  static getEffectKey() {
    return "holePunch";
  }
  static resolveDefaults(props) {
    var _a;
    return {
      x: props.x || 0,
      y: props.y || 0,
      width: props.width || 50,
      height: props.height || 50,
      radius: (_a = props.radius) != null ? _a : 0
    };
  }
}
__publicField(HolePunchEffect, "z$__type__Props");
__publicField(HolePunchEffect, "uniforms", {
  x: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  y: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    updateOnBind: true,
    validator: validateArrayLength4,
    updateProgramValue: updateWebSafeRadius
  }
});
__publicField(HolePunchEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(HolePunchEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  ");
__publicField(HolePunchEffect, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
const ROUNDED_RECTANGLE_SHADER_TYPE = "RoundedRectangle";
class UnsupportedShader extends CoreShader {
  constructor(shType) {
    super();
    __publicField(this, "shType");
    this.shType = shType;
    if (shType !== ROUNDED_RECTANGLE_SHADER_TYPE) {
      console.warn("Unsupported shader:", shType);
    }
  }
  bindRenderOp() {
  }
  bindProps() {
  }
  attach() {
  }
  detach() {
  }
}
class ShaderController {
  constructor(type, shader, props, stage) {
    __publicField(this, "type");
    __publicField(this, "shader");
    __publicField(this, "resolvedProps");
    __publicField(this, "props");
    this.type = type;
    this.shader = shader;
    this.resolvedProps = props;
    const keys = Object.keys(props);
    const l = keys.length;
    const definedProps = {};
    for (let i = 0; i < l; i++) {
      const name = keys[i];
      Object.defineProperty(definedProps, name, {
        get: () => {
          return this.resolvedProps[name];
        },
        set: (value) => {
          this.resolvedProps[name] = value;
          stage.requestRender();
        }
      });
    }
    this.props = definedProps;
  }
  getResolvedProps() {
    return this.resolvedProps;
  }
}
class DynamicShaderController {
  constructor(shader, props, shManager) {
    __publicField(this, "shader");
    __publicField(this, "resolvedProps");
    __publicField(this, "props");
    __publicField(this, "type");
    this.shader = shader;
    this.type = "DynamicShader";
    this.resolvedProps = props;
    const effectConstructors = shManager.getRegisteredEffects();
    const definedProps = {};
    const effects = props.effects;
    const effectsLength = effects.length;
    for (let i = 0; i < effectsLength; i++) {
      const { name: effectName, props: effectProps, type: effectType } = effects[i];
      if (effectName === void 0) {
        continue;
      }
      const definedEffectProps = {};
      const propEntries = Object.keys(effectProps);
      const propEntriesLength = propEntries.length;
      for (let j = 0; j < propEntriesLength; j++) {
        const propName = propEntries[j];
        Object.defineProperty(definedEffectProps, propName, {
          get: () => {
            return this.resolvedProps.effects[i].props[propName].value;
          },
          set: (value) => {
            var _a, _b;
            const target = this.resolvedProps.effects[i].props[propName];
            target.value = value;
            if (target.hasValidator) {
              value = target.validatedValue = (_a = effectConstructors[effectType].uniforms[propName]) == null ? void 0 : _a.validator(value, effectProps);
            }
            if (target.hasProgramValueUpdater) {
              (_b = effectConstructors[effectType].uniforms[propName]) == null ? void 0 : _b.updateProgramValue(target);
            } else {
              target.programValue = value;
            }
            shManager.renderer.stage.requestRender();
          }
        });
      }
      Object.defineProperty(definedProps, effectName, {
        get: () => {
          return definedEffectProps;
        }
      });
    }
    this.props = definedProps;
  }
  getResolvedProps() {
    return this.resolvedProps;
  }
}
class CoreShaderManager {
  constructor() {
    __publicField(this, "shCache", /* @__PURE__ */ new Map());
    __publicField(this, "shConstructors", {});
    __publicField(this, "attachedShader", null);
    __publicField(this, "effectConstructors", {});
    __publicField(this, "renderer");
    this.registerShaderType("DefaultShader", DefaultShader);
    this.registerShaderType("DefaultShaderBatched", DefaultShaderBatched);
    this.registerShaderType("RoundedRectangle", RoundedRectangle);
    this.registerShaderType("DynamicShader", DynamicShader);
    this.registerShaderType("SdfShader", SdfShader);
    this.registerEffectType("border", BorderEffect);
    this.registerEffectType("borderBottom", BorderBottomEffect);
    this.registerEffectType("borderLeft", BorderLeftEffect);
    this.registerEffectType("borderRight", BorderRightEffect);
    this.registerEffectType("borderTop", BorderTopEffect);
    this.registerEffectType("fadeOut", FadeOutEffect);
    this.registerEffectType("linearGradient", LinearGradientEffect);
    this.registerEffectType("radialGradient", RadialGradientEffect);
    this.registerEffectType("grayscale", GrayscaleEffect);
    this.registerEffectType("glitch", GlitchEffect);
    this.registerEffectType("radius", RadiusEffect);
    this.registerEffectType("radialProgress", RadialProgressEffect);
    this.registerEffectType("holePunch", HolePunchEffect);
  }
  registerShaderType(shType, shClass) {
    this.shConstructors[shType] = shClass;
  }
  registerEffectType(effectType, effectClass) {
    this.effectConstructors[effectType] = effectClass;
  }
  getRegisteredEffects() {
    return this.effectConstructors;
  }
  getRegisteredShaders() {
    return this.shConstructors;
  }
  /**
   * Loads a shader (if not already loaded) and returns a controller for it.
   *
   * @param shType
   * @param props
   * @returns
   */
  loadShader(shType, props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const ShaderClass = this.shConstructors[shType];
    if (!ShaderClass) {
      throw new Error('Shader type "'.concat(shType, '" is not registered'));
    }
    if (this.renderer.mode === "canvas" && ShaderClass.prototype instanceof WebGlCoreShader) {
      return this._createShaderCtr(shType, new UnsupportedShader(shType), props);
    }
    if (shType === "DynamicShader") {
      return this.loadDynamicShader(props);
    }
    const resolvedProps = ShaderClass.resolveDefaults(props);
    const cacheKey = ShaderClass.makeCacheKey(resolvedProps) || ShaderClass.name;
    if (cacheKey && this.shCache.has(cacheKey)) {
      return this._createShaderCtr(shType, this.shCache.get(cacheKey), resolvedProps);
    }
    const shader = new ShaderClass(this.renderer, props);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return this._createShaderCtr(shType, shader, resolvedProps);
  }
  loadDynamicShader(props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const resolvedProps = DynamicShader.resolveDefaults(props, this.effectConstructors);
    const cacheKey = DynamicShader.makeCacheKey(resolvedProps, this.effectConstructors);
    if (cacheKey && this.shCache.has(cacheKey)) {
      return this._createDynShaderCtr(this.shCache.get(cacheKey), resolvedProps);
    }
    const shader = new DynamicShader(this.renderer, props, this.effectConstructors);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return this._createDynShaderCtr(shader, resolvedProps);
  }
  _createShaderCtr(type, shader, props) {
    return new ShaderController(type, shader, props, this.renderer.stage);
  }
  _createDynShaderCtr(shader, props) {
    return new DynamicShaderController(shader, props, this);
  }
  useShader(shader) {
    if (this.attachedShader === shader) {
      return;
    }
    if (this.attachedShader) {
      this.attachedShader.detach();
    }
    shader.attach();
    this.attachedShader = shader;
  }
}
const trPropSetterDefaults = {
  x: (state, value) => {
    state.props.x = value;
  },
  y: (state, value) => {
    state.props.y = value;
  },
  width: (state, value) => {
    state.props.width = value;
  },
  height: (state, value) => {
    state.props.height = value;
  },
  color: (state, value) => {
    state.props.color = value;
  },
  zIndex: (state, value) => {
    state.props.zIndex = value;
  },
  fontFamily: (state, value) => {
    state.props.fontFamily = value;
  },
  fontWeight: (state, value) => {
    state.props.fontWeight = value;
  },
  fontStyle: (state, value) => {
    state.props.fontStyle = value;
  },
  fontStretch: (state, value) => {
    state.props.fontStretch = value;
  },
  fontSize: (state, value) => {
    state.props.fontSize = value;
  },
  text: (state, value) => {
    state.props.text = value;
  },
  textAlign: (state, value) => {
    state.props.textAlign = value;
  },
  contain: (state, value) => {
    state.props.contain = value;
  },
  offsetY: (state, value) => {
    state.props.offsetY = value;
  },
  scrollable: (state, value) => {
    state.props.scrollable = value;
  },
  scrollY: (state, value) => {
    state.props.scrollY = value;
  },
  letterSpacing: (state, value) => {
    state.props.letterSpacing = value;
  },
  lineHeight: (state, value) => {
    state.props.lineHeight = value;
  },
  maxLines: (state, value) => {
    state.props.maxLines = value;
  },
  textBaseline: (state, value) => {
    state.props.textBaseline = value;
  },
  verticalAlign: (state, value) => {
    state.props.verticalAlign = value;
  },
  overflowSuffix: (state, value) => {
    state.props.overflowSuffix = value;
  },
  debug: (state, value) => {
    state.props.debug = value;
  }
};
class TextRenderer {
  constructor(stage) {
    __publicField(this, "stage");
    __publicField(this, "set");
    this.stage = stage;
    const propSetters = {
      ...trPropSetterDefaults,
      ...this.getPropertySetters()
    };
    this.set = Object.freeze(Object.fromEntries(Object.entries(propSetters).map(([key2, setter]) => {
      return [
        key2,
        (state, value) => {
          if (state.props[key2] !== value) {
            setter(state, value);
            this.stage.requestRender();
          }
        }
      ];
    })));
  }
  setStatus(state, status, error) {
    if (state.status === status) {
      return;
    }
    state.status = status;
    state.emitter.emit(status, error);
  }
  /**
   * Allows the CoreTextNode to communicate changes to the isRenderable state of
   * the itself.
   *
   * @param state
   * @param renderable
   */
  setIsRenderable(state, renderable) {
    state.isRenderable = renderable;
  }
  /**
   * Destroy/Clean up the state object
   *
   * @remarks
   * Opposite of createState(). Frees any event listeners / resources held by
   * the state that may not reliably get garbage collected.
   *
   * @param state
   */
  destroyState(state) {
    this.setStatus(state, "destroyed");
    state.emitter.removeAllListeners();
  }
  /**
   * Schedule a state update via queueMicrotask
   *
   * @remarks
   * This method is used to schedule a state update via queueMicrotask. This
   * method should be called whenever a state update is needed, and it will
   * ensure that the state is only updated once per microtask.
   * @param state
   * @returns
   */
  scheduleUpdateState(state) {
    if (state.updateScheduled) {
      return;
    }
    state.updateScheduled = true;
    queueMicrotask(() => {
      if (state.status === "destroyed") {
        return;
      }
      state.updateScheduled = false;
      this.updateState(state);
    });
  }
}
class ContextSpy {
  constructor() {
    __publicField(this, "data", {});
  }
  reset() {
    this.data = {};
  }
  increment(name) {
    if (!this.data[name]) {
      this.data[name] = 0;
    }
    this.data[name]++;
  }
  getData() {
    return { ...this.data };
  }
}
class TextureMemoryManager {
  constructor(stage, settings) {
    __publicField(this, "stage");
    __publicField(this, "memUsed", 0);
    __publicField(this, "loadedTextures", /* @__PURE__ */ new Map());
    __publicField(this, "criticalThreshold");
    __publicField(this, "targetThreshold");
    __publicField(this, "cleanupInterval");
    __publicField(this, "debugLogging");
    __publicField(this, "lastCleanupTime", 0);
    __publicField(this, "criticalCleanupRequested", false);
    /**
     * The current frame time in milliseconds
     *
     * @remarks
     * This is used to determine when to perform Idle Texture Cleanups.
     *
     * Set by stage via `updateFrameTime` method.
     */
    __publicField(this, "frameTime", 0);
    this.stage = stage;
    const { criticalThreshold } = settings;
    this.criticalThreshold = Math.round(criticalThreshold);
    const targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
    this.targetThreshold = Math.round(criticalThreshold * targetFraction);
    this.cleanupInterval = settings.cleanupInterval;
    this.debugLogging = settings.debugLogging;
    if (settings.debugLogging) {
      let lastMemUse = 0;
      setInterval(() => {
        if (lastMemUse !== this.memUsed) {
          lastMemUse = this.memUsed;
          console.log("[TextureMemoryManager] Memory used: ".concat(bytesToMb$1(this.memUsed), " mb / ").concat(bytesToMb$1(this.criticalThreshold), " mb (").concat((this.memUsed / this.criticalThreshold * 100).toFixed(1), "%)"));
        }
      }, 1e3);
    }
    if (criticalThreshold === 0) {
      this.setTextureMemUse = () => {
      };
    }
  }
  setTextureMemUse(texture, byteSize) {
    if (this.loadedTextures.has(texture)) {
      this.memUsed -= this.loadedTextures.get(texture);
    }
    if (byteSize === 0) {
      this.loadedTextures.delete(texture);
      return;
    } else {
      this.memUsed += byteSize;
      this.loadedTextures.set(texture, byteSize);
    }
    if (this.memUsed > this.criticalThreshold) {
      this.criticalCleanupRequested = true;
    }
  }
  checkCleanup() {
    return this.criticalCleanupRequested || this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
  }
  cleanup() {
    const critical = this.criticalCleanupRequested;
    this.lastCleanupTime = this.frameTime;
    this.criticalCleanupRequested = false;
    if (critical) {
      this.stage.queueFrameEvent("criticalCleanup", {
        memUsed: this.memUsed,
        criticalThreshold: this.criticalThreshold
      });
    }
    if (this.debugLogging) {
      console.log("[TextureMemoryManager] Cleaning up textures. Critical: ".concat(critical));
    }
    const textures = [...this.loadedTextures.keys()].sort((textureA, textureB) => {
      const txARenderable = textureA.renderable;
      const txBRenderable = textureB.renderable;
      if (txARenderable === txBRenderable) {
        return textureA.lastRenderableChangeTime - textureB.lastRenderableChangeTime;
      } else if (txARenderable) {
        return 1;
      } else if (txBRenderable) {
        return -1;
      }
      return 0;
    });
    const memTarget = this.targetThreshold;
    const txManager = this.stage.txManager;
    for (const texture of textures) {
      if (texture.renderable) {
        break;
      }
      if (texture.preventCleanup === false) {
        texture.ctxTexture.free();
        txManager.removeTextureFromCache(texture);
      }
      if (this.memUsed <= memTarget) {
        break;
      }
    }
    if (this.memUsed >= this.criticalThreshold) {
      this.stage.queueFrameEvent("criticalCleanupFailed", {
        memUsed: this.memUsed,
        criticalThreshold: this.criticalThreshold
      });
      console.warn("[TextureMemoryManager] Memory usage above critical threshold after cleanup: ".concat(this.memUsed));
    }
  }
  /**
   * Get the current texture memory usage information
   *
   * @remarks
   * This method is for debugging purposes and returns information about the
   * current memory usage of the textures in the Renderer.
   */
  getMemoryInfo() {
    let renderableTexturesLoaded = 0;
    const renderableMemUsed = [...this.loadedTextures.keys()].reduce(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (acc, texture) => {
        renderableTexturesLoaded += texture.renderable ? 1 : 0;
        return acc + (texture.renderable ? this.loadedTextures.get(texture) : 0);
      },
      0
    );
    return {
      criticalThreshold: this.criticalThreshold,
      targetThreshold: this.targetThreshold,
      renderableMemUsed,
      memUsed: this.memUsed,
      renderableTexturesLoaded,
      loadedTextures: this.loadedTextures.size
    };
  }
}
class CoreContextTexture {
  constructor(memManager, textureSource) {
    __publicField(this, "textureSource");
    __publicField(this, "memManager");
    this.memManager = memManager;
    this.textureSource = textureSource;
  }
  setTextureMemUse(byteSize) {
    this.memManager.setTextureMemUse(this.textureSource, byteSize);
  }
  get renderable() {
    return this.textureSource.renderable;
  }
}
class CoreRenderer {
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "mode");
    __publicField(this, "stage");
    //// Core Managers
    __publicField(this, "txManager");
    __publicField(this, "txMemManager");
    __publicField(this, "shManager");
    __publicField(this, "rttNodes", []);
    this.options = options;
    this.stage = options.stage;
    this.txManager = options.txManager;
    this.txMemManager = options.txMemManager;
    this.shManager = options.shManager;
  }
}
class CoreTextNode extends CoreNode {
  constructor(stage, props, textRenderer) {
    super(stage, props);
    __publicField(this, "textRenderer");
    __publicField(this, "trState");
    __publicField(this, "_textRendererOverride", null);
    __publicField(this, "onTextLoaded", () => {
      const { contain } = this;
      const setWidth = this.trState.props.width;
      const setHeight = this.trState.props.height;
      const calcWidth = this.trState.textW || 0;
      const calcHeight = this.trState.textH || 0;
      if (contain === "both") {
        this.props.width = setWidth;
        this.props.height = setHeight;
      } else if (contain === "width") {
        this.props.width = setWidth;
        this.props.height = calcHeight;
      } else if (contain === "none") {
        this.props.width = calcWidth;
        this.props.height = calcHeight;
      }
      this.updateLocalTransform();
      this.stage.requestRender();
      this.emit("loaded", {
        type: "text",
        dimensions: {
          width: this.trState.textW || 0,
          height: this.trState.textH || 0
        }
      });
    });
    __publicField(this, "onTextFailed", (target, error) => {
      this.emit("failed", {
        type: "text",
        error
      });
    });
    this._textRendererOverride = props.textRendererOverride;
    this.textRenderer = textRenderer;
    const textRendererState = this.createState({
      x: this.absX,
      y: this.absY,
      width: props.width,
      height: props.height,
      textAlign: props.textAlign,
      color: props.color,
      zIndex: props.zIndex,
      contain: props.contain,
      scrollable: props.scrollable,
      scrollY: props.scrollY,
      offsetY: props.offsetY,
      letterSpacing: props.letterSpacing,
      debug: props.debug,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontStretch: props.fontStretch,
      fontStyle: props.fontStyle,
      fontWeight: props.fontWeight,
      text: props.text,
      lineHeight: props.lineHeight,
      maxLines: props.maxLines,
      textBaseline: props.textBaseline,
      verticalAlign: props.verticalAlign,
      overflowSuffix: props.overflowSuffix
    });
    this.trState = textRendererState;
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    this.props.width = value;
    this.textRenderer.set.width(this.trState, value);
    if (this.contain === "none") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    this.props.height = value;
    this.textRenderer.set.height(this.trState, value);
    if (this.contain !== "both") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get color() {
    return this.trState.props.color;
  }
  set color(value) {
    this.textRenderer.set.color(this.trState, value);
  }
  get text() {
    return this.trState.props.text;
  }
  set text(value) {
    this.textRenderer.set.text(this.trState, value);
  }
  get textRendererOverride() {
    return this._textRendererOverride;
  }
  set textRendererOverride(value) {
    this._textRendererOverride = value;
    this.textRenderer.destroyState(this.trState);
    const textRenderer = this.stage.resolveTextRenderer(this.trState.props, this._textRendererOverride);
    if (!textRenderer) {
      console.warn("Text Renderer not found for font", this.trState.props.fontFamily);
      return;
    }
    this.textRenderer = textRenderer;
    this.trState = this.createState(this.trState.props);
  }
  get fontSize() {
    return this.trState.props.fontSize;
  }
  set fontSize(value) {
    this.textRenderer.set.fontSize(this.trState, value);
  }
  get fontFamily() {
    return this.trState.props.fontFamily;
  }
  set fontFamily(value) {
    this.textRenderer.set.fontFamily(this.trState, value);
  }
  get fontStretch() {
    return this.trState.props.fontStretch;
  }
  set fontStretch(value) {
    this.textRenderer.set.fontStretch(this.trState, value);
  }
  get fontStyle() {
    return this.trState.props.fontStyle;
  }
  set fontStyle(value) {
    this.textRenderer.set.fontStyle(this.trState, value);
  }
  get fontWeight() {
    return this.trState.props.fontWeight;
  }
  set fontWeight(value) {
    this.textRenderer.set.fontWeight(this.trState, value);
  }
  get textAlign() {
    return this.trState.props.textAlign;
  }
  set textAlign(value) {
    this.textRenderer.set.textAlign(this.trState, value);
  }
  get contain() {
    return this.trState.props.contain;
  }
  set contain(value) {
    this.textRenderer.set.contain(this.trState, value);
  }
  get scrollable() {
    return this.trState.props.scrollable;
  }
  set scrollable(value) {
    this.textRenderer.set.scrollable(this.trState, value);
  }
  get scrollY() {
    return this.trState.props.scrollY;
  }
  set scrollY(value) {
    this.textRenderer.set.scrollY(this.trState, value);
  }
  get offsetY() {
    return this.trState.props.offsetY;
  }
  set offsetY(value) {
    this.textRenderer.set.offsetY(this.trState, value);
  }
  get letterSpacing() {
    return this.trState.props.letterSpacing;
  }
  set letterSpacing(value) {
    this.textRenderer.set.letterSpacing(this.trState, value);
  }
  get lineHeight() {
    return this.trState.props.lineHeight;
  }
  set lineHeight(value) {
    this.textRenderer.set.lineHeight(this.trState, value);
  }
  get maxLines() {
    return this.trState.props.maxLines;
  }
  set maxLines(value) {
    this.textRenderer.set.maxLines(this.trState, value);
  }
  get textBaseline() {
    return this.trState.props.textBaseline;
  }
  set textBaseline(value) {
    this.textRenderer.set.textBaseline(this.trState, value);
  }
  get verticalAlign() {
    return this.trState.props.verticalAlign;
  }
  set verticalAlign(value) {
    this.textRenderer.set.verticalAlign(this.trState, value);
  }
  get overflowSuffix() {
    return this.trState.props.overflowSuffix;
  }
  set overflowSuffix(value) {
    this.textRenderer.set.overflowSuffix(this.trState, value);
  }
  get debug() {
    return this.trState.props.debug;
  }
  set debug(value) {
    this.textRenderer.set.debug(this.trState, value);
  }
  update(delta, parentClippingRect) {
    super.update(delta, parentClippingRect);
    assertTruthy(this.globalTransform);
    this.textRenderer.set.x(this.trState, this.globalTransform.tx);
    this.textRenderer.set.y(this.trState, this.globalTransform.ty);
  }
  checkRenderProps() {
    if (this.trState && this.trState.props.text !== "") {
      return true;
    }
    return super.checkRenderProps();
  }
  onChangeIsRenderable(isRenderable) {
    super.onChangeIsRenderable(isRenderable);
    this.textRenderer.setIsRenderable(this.trState, isRenderable);
  }
  renderQuads(renderer2) {
    var _a;
    assertTruthy(this.globalTransform);
    if (!this.textRenderer.renderQuads) {
      super.renderQuads(renderer2);
      return;
    }
    if (this.parentHasRenderTexture) {
      if (!renderer2.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer2.activeRttNode) {
        return;
      }
    }
    if (this.parentHasRenderTexture && ((_a = this.props.parent) == null ? void 0 : _a.rtt)) {
      this.globalTransform = Matrix3d.identity();
      if (this.localTransform) {
        this.globalTransform.multiply(this.localTransform);
      }
    }
    assertTruthy(this.globalTransform);
    this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions);
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    super.destroy();
    this.textRenderer.destroyState(this.trState);
  }
  /**
   * Resolve a text renderer and a new state based on the current text renderer props provided
   * @param props
   * @returns
   */
  createState(props) {
    const textRendererState = this.textRenderer.createState(props, this);
    textRendererState.emitter.on("loaded", this.onTextLoaded);
    textRendererState.emitter.on("failed", this.onTextFailed);
    this.textRenderer.scheduleUpdateState(textRendererState);
    return textRendererState;
  }
}
function santizeCustomDataMap(d) {
  const validTypes = {
    boolean: true,
    string: true,
    number: true,
    undefined: true
  };
  const keys = Object.keys(d);
  for (let i = 0; i < keys.length; i++) {
    const key2 = keys[i];
    if (!key2) {
      continue;
    }
    const value = d[key2];
    const valueType = typeof value;
    if (valueType === "string" && value.length > 2048) {
      console.warn("Custom Data value for ".concat(key2, " is too long, it will be truncated to 2048 characters"));
      d[key2] = value.substring(0, 2048);
    }
    if (!validTypes[valueType]) {
      console.warn("Custom Data value for ".concat(key2, " is not a boolean, string, or number, it will be ignored"));
      delete d[key2];
    }
  }
  return d;
}
const bufferMemory = 2e6;
class Stage {
  /**
   * Stage constructor
   */
  constructor(options) {
    __publicField(this, "options");
    /// Module Instances
    __publicField(this, "animationManager");
    __publicField(this, "txManager");
    __publicField(this, "txMemManager");
    __publicField(this, "fontManager");
    __publicField(this, "textRenderers");
    __publicField(this, "shManager");
    __publicField(this, "renderer");
    __publicField(this, "root");
    __publicField(this, "boundsMargin");
    __publicField(this, "defShaderCtr");
    /**
     * Renderer Event Bus for the Stage to emit events onto
     *
     * @remarks
     * In reality this is just the RendererMain instance, which is an EventEmitter.
     * this allows us to directly emit events from the Stage to RendererMain
     * without having to set up forwarding handlers.
     */
    __publicField(this, "eventBus");
    /// State
    __publicField(this, "deltaTime", 0);
    __publicField(this, "lastFrameTime", 0);
    __publicField(this, "currentFrameTime", 0);
    __publicField(this, "fpsNumFrames", 0);
    __publicField(this, "fpsElapsedTime", 0);
    __publicField(this, "renderRequested", false);
    __publicField(this, "frameEventQueue", []);
    __publicField(this, "fontResolveMap", {});
    /// Debug data
    __publicField(this, "contextSpy", null);
    this.options = options;
    const { canvas, clearColor, appWidth, appHeight, boundsMargin, enableContextSpy, numImageWorkers, textureMemory, renderEngine, fontEngines } = options;
    this.eventBus = options.eventBus;
    this.txManager = new CoreTextureManager(numImageWorkers);
    this.txMemManager = new TextureMemoryManager(this, textureMemory);
    this.shManager = new CoreShaderManager();
    this.animationManager = new AnimationManager();
    this.contextSpy = enableContextSpy ? new ContextSpy() : null;
    let bm = [0, 0, 0, 0];
    if (boundsMargin) {
      bm = Array.isArray(boundsMargin) ? boundsMargin : [boundsMargin, boundsMargin, boundsMargin, boundsMargin];
    }
    this.boundsMargin = bm;
    const rendererOptions = {
      stage: this,
      canvas,
      pixelRatio: options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio,
      clearColor: clearColor != null ? clearColor : 4278190080,
      bufferMemory,
      txManager: this.txManager,
      txMemManager: this.txMemManager,
      shManager: this.shManager,
      contextSpy: this.contextSpy
    };
    this.renderer = new renderEngine(rendererOptions);
    const renderMode = this.renderer.mode || "webgl";
    this.defShaderCtr = this.renderer.getDefShaderCtr();
    setPremultiplyMode(renderMode);
    this.txManager.renderer = this.renderer;
    this.textRenderers = {};
    fontEngines.forEach((fontEngineConstructor) => {
      const fontEngineInstance = new fontEngineConstructor(this);
      const className = fontEngineInstance.type;
      if (className === "sdf" && renderMode === "canvas") {
        console.warn("SdfTextRenderer is not compatible with Canvas renderer. Skipping...");
        return;
      }
      if (fontEngineInstance instanceof TextRenderer) {
        if (className === "canvas") {
          this.textRenderers["canvas"] = fontEngineInstance;
        } else if (className === "sdf") {
          this.textRenderers["sdf"] = fontEngineInstance;
        }
      }
    });
    if (Object.keys(this.textRenderers).length === 0) {
      console.warn("No text renderers available. Your text will not render.");
    }
    this.fontManager = new TrFontManager(this.textRenderers);
    const rootNode2 = new CoreNode(this, {
      x: 0,
      y: 0,
      width: appWidth,
      height: appHeight,
      alpha: 1,
      autosize: false,
      clipping: false,
      color: 0,
      colorTop: 0,
      colorBottom: 0,
      colorLeft: 0,
      colorRight: 0,
      colorTl: 0,
      colorTr: 0,
      colorBl: 0,
      colorBr: 0,
      zIndex: 0,
      zIndexLocked: 0,
      scaleX: 1,
      scaleY: 1,
      mountX: 0,
      mountY: 0,
      mount: 0,
      pivot: 0.5,
      pivotX: 0.5,
      pivotY: 0.5,
      rotation: 0,
      parent: null,
      texture: null,
      textureOptions: {},
      shader: this.defShaderCtr,
      rtt: false,
      src: null,
      scale: 1,
      preventCleanup: false
    });
    this.root = rootNode2;
    {
      startLoop(this);
    }
  }
  updateFrameTime() {
    const newFrameTime = getTimeStamp();
    this.lastFrameTime = this.currentFrameTime;
    this.currentFrameTime = newFrameTime;
    this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
    this.txManager.frameTime = newFrameTime;
    this.txMemManager.frameTime = newFrameTime;
    this.eventBus.emit("frameTick", {
      time: this.currentFrameTime,
      delta: this.deltaTime
    });
  }
  /**
   * Update animations
   */
  updateAnimations() {
    const { animationManager } = this;
    if (!this.root) {
      return;
    }
    animationManager.update(this.deltaTime);
  }
  /**
   * Check if the scene has updates
   */
  hasSceneUpdates() {
    return !!this.root.updateType || this.renderRequested;
  }
  /**
   * Start a new frame draw
   */
  drawFrame() {
    const { renderer: renderer2, renderRequested } = this;
    assertTruthy(renderer2);
    if (this.root.updateType !== 0) {
      this.root.update(this.deltaTime, this.root.clippingRect);
    }
    renderer2.reset();
    if (this.txMemManager.criticalCleanupRequested) {
      this.txMemManager.cleanup();
    }
    if (renderer2.rttNodes.length > 0) {
      renderer2.renderRTTNodes();
    }
    this.addQuads(this.root);
    renderer2 == null ? void 0 : renderer2.render();
    this.calculateFps();
    if (renderRequested) {
      this.renderRequested = false;
    }
  }
  /**
   * Queue an event to be emitted after the current/next frame is rendered
   *
   * @remarks
   * When we are operating in the context of the render loop, we may want to
   * emit events that are related to the current frame. However, we generally do
   * NOT want to emit events directly in the middle of the render loop, since
   * this could enable event handlers to modify the scene graph and cause
   * unexpected behavior. Instead, we queue up events to be emitted and then
   * flush the queue after the frame has been rendered.
   *
   * @param name
   * @param data
   */
  queueFrameEvent(name, data) {
    this.frameEventQueue.push([name, data]);
  }
  /**
   * Emit all queued frame events
   *
   * @remarks
   * This method should be called after the frame has been rendered to emit
   * all events that were queued during the frame.
   *
   * See {@link queueFrameEvent} for more information.
   */
  flushFrameEvents() {
    for (const [name, data] of this.frameEventQueue) {
      this.eventBus.emit(name, data);
    }
    this.frameEventQueue = [];
  }
  calculateFps() {
    var _a, _b, _c;
    const { fpsUpdateInterval } = this.options;
    if (fpsUpdateInterval) {
      this.fpsNumFrames++;
      this.fpsElapsedTime += this.deltaTime;
      if (this.fpsElapsedTime >= fpsUpdateInterval) {
        const fps2 = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0;
        this.fpsElapsedTime = 0;
        this.queueFrameEvent("fpsUpdate", {
          fps: fps2,
          contextSpyData: (_b = (_a = this.contextSpy) == null ? void 0 : _a.getData()) != null ? _b : null
        });
        (_c = this.contextSpy) == null ? void 0 : _c.reset();
      }
    }
  }
  addQuads(node) {
    assertTruthy(this.renderer && node.globalTransform);
    if (node.isRenderable) {
      node.renderQuads(this.renderer);
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (!child) {
        continue;
      }
      if ((child == null ? void 0 : child.worldAlpha) === 0) {
        continue;
      }
      this.addQuads(child);
    }
  }
  /**
   * Request a render pass without forcing an update
   */
  requestRender() {
    this.renderRequested = true;
  }
  /**
   * Given a font name, and possible renderer override, return the best compatible text renderer.
   *
   * @remarks
   * Will try to return a canvas renderer if no other suitable renderer can be resolved.
   *
   * @param fontFamily
   * @param textRendererOverride
   * @returns
   */
  resolveTextRenderer(trProps, textRendererOverride = null) {
    const fontCacheString = "".concat(trProps.fontFamily).concat(trProps.fontStyle).concat(trProps.fontWeight).concat(trProps.fontStretch).concat(textRendererOverride ? textRendererOverride : "");
    if (this.fontResolveMap[fontCacheString] !== void 0) {
      return this.fontResolveMap[fontCacheString];
    }
    let rendererId = textRendererOverride;
    let overrideFallback = false;
    if (rendererId) {
      const possibleRenderer = this.textRenderers[rendererId];
      if (!possibleRenderer) {
        console.warn("Text renderer override '".concat(rendererId, "' not found."));
        rendererId = null;
        overrideFallback = true;
      } else if (!possibleRenderer.canRenderFont(trProps)) {
        console.warn("Cannot use override text renderer '".concat(rendererId, "' for font"), trProps);
        rendererId = null;
        overrideFallback = true;
      }
    }
    if (!rendererId) {
      for (const [trId, tr] of Object.entries(this.textRenderers)) {
        if (tr.canRenderFont(trProps)) {
          rendererId = trId;
          break;
        }
      }
      if (!rendererId && this.textRenderers.canvas !== void 0) {
        rendererId = "canvas";
      }
    }
    if (overrideFallback) {
      console.warn("Falling back to text renderer ".concat(String(rendererId)));
    }
    if (!rendererId) {
      return null;
    }
    const resolvedTextRenderer = this.textRenderers[rendererId];
    assertTruthy(resolvedTextRenderer, "resolvedTextRenderer undefined");
    this.fontResolveMap[fontCacheString] = resolvedTextRenderer;
    return resolvedTextRenderer;
  }
  /**
   * Create a shader controller instance
   *
   * @param type
   * @param props
   * @returns
   */
  createShaderCtr(type, props) {
    return this.shManager.loadShader(type, props);
  }
  createNode(props) {
    const resolvedProps = this.resolveNodeDefaults(props);
    return new CoreNode(this, resolvedProps);
  }
  createTextNode(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    const fontSize = (_a = props.fontSize) != null ? _a : 16;
    const resolvedProps = {
      ...this.resolveNodeDefaults(props),
      text: (_b = props.text) != null ? _b : "",
      textRendererOverride: (_c = props.textRendererOverride) != null ? _c : null,
      fontSize,
      fontFamily: (_d = props.fontFamily) != null ? _d : "sans-serif",
      fontStyle: (_e = props.fontStyle) != null ? _e : "normal",
      fontWeight: (_f = props.fontWeight) != null ? _f : "normal",
      fontStretch: (_g = props.fontStretch) != null ? _g : "normal",
      textAlign: (_h = props.textAlign) != null ? _h : "left",
      contain: (_i = props.contain) != null ? _i : "none",
      scrollable: (_j = props.scrollable) != null ? _j : false,
      scrollY: (_k = props.scrollY) != null ? _k : 0,
      offsetY: (_l = props.offsetY) != null ? _l : 0,
      letterSpacing: (_m = props.letterSpacing) != null ? _m : 0,
      lineHeight: props.lineHeight,
      maxLines: (_n = props.maxLines) != null ? _n : 0,
      textBaseline: (_o = props.textBaseline) != null ? _o : "alphabetic",
      verticalAlign: (_p = props.verticalAlign) != null ? _p : "middle",
      overflowSuffix: (_q = props.overflowSuffix) != null ? _q : "...",
      debug: (_r = props.debug) != null ? _r : {},
      shaderProps: null
    };
    const resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, props.textRendererOverride);
    if (!resolvedTextRenderer) {
      throw new Error("No compatible text renderer found for ".concat(resolvedProps.fontFamily));
    }
    return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
  }
  /**
   * Resolves the default property values for a Node
   *
   * @remarks
   * This method is used internally by the RendererMain to resolve the default
   * property values for a Node. It is exposed publicly so that it can be used
   * by Core Driver implementations.
   *
   * @param props
   * @returns
   */
  resolveNodeDefaults(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X;
    const color = (_a = props.color) != null ? _a : 4294967295;
    const colorTl = (_d = (_c = (_b = props.colorTl) != null ? _b : props.colorTop) != null ? _c : props.colorLeft) != null ? _d : color;
    const colorTr = (_g = (_f = (_e = props.colorTr) != null ? _e : props.colorTop) != null ? _f : props.colorRight) != null ? _g : color;
    const colorBl = (_j = (_i = (_h = props.colorBl) != null ? _h : props.colorBottom) != null ? _i : props.colorLeft) != null ? _j : color;
    const colorBr = (_m = (_l = (_k = props.colorBr) != null ? _k : props.colorBottom) != null ? _l : props.colorRight) != null ? _m : color;
    const data = santizeCustomDataMap((_n = props.data) != null ? _n : {});
    return {
      x: (_o = props.x) != null ? _o : 0,
      y: (_p = props.y) != null ? _p : 0,
      width: (_q = props.width) != null ? _q : 0,
      height: (_r = props.height) != null ? _r : 0,
      alpha: (_s = props.alpha) != null ? _s : 1,
      autosize: (_t = props.autosize) != null ? _t : false,
      clipping: (_u = props.clipping) != null ? _u : false,
      color,
      colorTop: (_v = props.colorTop) != null ? _v : color,
      colorBottom: (_w = props.colorBottom) != null ? _w : color,
      colorLeft: (_x = props.colorLeft) != null ? _x : color,
      colorRight: (_y = props.colorRight) != null ? _y : color,
      colorBl,
      colorBr,
      colorTl,
      colorTr,
      zIndex: (_z = props.zIndex) != null ? _z : 0,
      zIndexLocked: (_A = props.zIndexLocked) != null ? _A : 0,
      parent: (_B = props.parent) != null ? _B : null,
      texture: (_C = props.texture) != null ? _C : null,
      textureOptions: (_D = props.textureOptions) != null ? _D : {},
      shader: (_E = props.shader) != null ? _E : this.defShaderCtr,
      // Since setting the `src` will trigger a texture load, we need to set it after
      // we set the texture. Otherwise, problems happen.
      src: (_F = props.src) != null ? _F : null,
      srcHeight: props.srcHeight,
      srcWidth: props.srcWidth,
      srcX: props.srcX,
      srcY: props.srcY,
      scale: (_G = props.scale) != null ? _G : null,
      scaleX: (_I = (_H = props.scaleX) != null ? _H : props.scale) != null ? _I : 1,
      scaleY: (_K = (_J = props.scaleY) != null ? _J : props.scale) != null ? _K : 1,
      mount: (_L = props.mount) != null ? _L : 0,
      mountX: (_N = (_M = props.mountX) != null ? _M : props.mount) != null ? _N : 0,
      mountY: (_P = (_O = props.mountY) != null ? _O : props.mount) != null ? _P : 0,
      pivot: (_Q = props.pivot) != null ? _Q : 0.5,
      pivotX: (_S = (_R = props.pivotX) != null ? _R : props.pivot) != null ? _S : 0.5,
      pivotY: (_U = (_T = props.pivotY) != null ? _T : props.pivot) != null ? _U : 0.5,
      rotation: (_V = props.rotation) != null ? _V : 0,
      rtt: (_W = props.rtt) != null ? _W : false,
      data,
      preventCleanup: (_X = props.preventCleanup) != null ? _X : false,
      imageType: props.imageType
    };
  }
}
class RendererMain extends EventEmitter {
  /**
   * Constructs a new Renderer instance
   *
   * @param settings Renderer settings
   * @param target Element ID or HTMLElement to insert the canvas into
   * @param driver Core Driver to use
   */
  constructor(settings, target) {
    var _a, _b, _c, _d, _e, _f, _g;
    super();
    __publicField(this, "root");
    __publicField(this, "canvas");
    __publicField(this, "settings");
    __publicField(this, "stage");
    __publicField(this, "inspector", null);
    const resolvedTxSettings = {
      criticalThreshold: ((_a = settings.textureMemory) == null ? void 0 : _a.criticalThreshold) || 124e6,
      targetThresholdLevel: ((_b = settings.textureMemory) == null ? void 0 : _b.targetThresholdLevel) || 0.5,
      cleanupInterval: ((_c = settings.textureMemory) == null ? void 0 : _c.cleanupInterval) || 3e4,
      debugLogging: ((_d = settings.textureMemory) == null ? void 0 : _d.debugLogging) || false
    };
    const resolvedSettings = {
      appWidth: settings.appWidth || 1920,
      appHeight: settings.appHeight || 1080,
      textureMemory: resolvedTxSettings,
      boundsMargin: settings.boundsMargin || 0,
      deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: (_e = settings.clearColor) != null ? _e : 0,
      fpsUpdateInterval: settings.fpsUpdateInterval || 0,
      numImageWorkers: settings.numImageWorkers !== void 0 ? settings.numImageWorkers : 2,
      enableContextSpy: (_f = settings.enableContextSpy) != null ? _f : false,
      inspector: settings.inspector,
      renderEngine: settings.renderEngine,
      quadBufferSize: (_g = settings.quadBufferSize) != null ? _g : 4 * 1024 * 1024,
      fontEngines: settings.fontEngines
    };
    this.settings = resolvedSettings;
    const { appWidth, appHeight, deviceLogicalPixelRatio, devicePhysicalPixelRatio, inspector } = resolvedSettings;
    const deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
    const deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
    canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
    canvas.style.width = "".concat(deviceLogicalWidth, "px");
    canvas.style.height = "".concat(deviceLogicalHeight, "px");
    this.stage = new Stage({
      appWidth: this.settings.appWidth,
      appHeight: this.settings.appHeight,
      boundsMargin: this.settings.boundsMargin,
      clearColor: this.settings.clearColor,
      canvas: this.canvas,
      deviceLogicalPixelRatio: this.settings.deviceLogicalPixelRatio,
      devicePhysicalPixelRatio: this.settings.devicePhysicalPixelRatio,
      enableContextSpy: this.settings.enableContextSpy,
      fpsUpdateInterval: this.settings.fpsUpdateInterval,
      numImageWorkers: this.settings.numImageWorkers,
      renderEngine: this.settings.renderEngine,
      textureMemory: resolvedTxSettings,
      eventBus: this,
      quadBufferSize: this.settings.quadBufferSize,
      fontEngines: this.settings.fontEngines
    });
    this.root = this.stage.root;
    let targetEl;
    if (typeof target === "string") {
      targetEl = document.getElementById(target);
    } else {
      targetEl = target;
    }
    if (!targetEl) {
      throw new Error("Could not find target element");
    }
    targetEl.appendChild(canvas);
    if (inspector && !isProductionEnvironment()) {
      this.inspector = new inspector(canvas, resolvedSettings);
    }
  }
  /**
   * Create a new scene graph node
   *
   * @remarks
   * A node is the main graphical building block of the Renderer scene graph. It
   * can be a container for other nodes, or it can be a leaf node that renders a
   * solid color, gradient, image, or specific texture, using a specific shader.
   *
   * To create a text node, see {@link createTextNode}.
   *
   * See {@link CoreNode} for more details.
   *
   * @param props
   * @returns
   */
  createNode(props) {
    assertTruthy(this.stage, "Stage is not initialized");
    const node = this.stage.createNode(props);
    if (this.inspector) {
      return this.inspector.createNode(node);
    }
    return node;
  }
  /**
   * Create a new scene graph text node
   *
   * @remarks
   * A text node is the second graphical building block of the Renderer scene
   * graph. It renders text using a specific text renderer that is automatically
   * chosen based on the font requested and what type of fonts are installed
   * into an app.
   *
   * See {@link ITextNode} for more details.
   *
   * @param props
   * @returns
   */
  createTextNode(props) {
    const textNode = this.stage.createTextNode(props);
    if (this.inspector) {
      return this.inspector.createTextNode(textNode);
    }
    return textNode;
  }
  /**
   * Destroy a node
   *
   * @remarks
   * This method destroys a node
   *
   * @param node
   * @returns
   */
  destroyNode(node) {
    if (this.inspector) {
      this.inspector.destroyNode(node.id);
    }
    return node.destroy();
  }
  /**
   * Create a new texture reference
   *
   * @remarks
   * This method creates a new reference to a texture. The texture is not
   * loaded until it is used on a node.
   *
   * It can be assigned to a node's `texture` property, or it can be used
   * when creating a SubTexture.
   *
   * @param textureType
   * @param props
   * @param options
   * @returns
   */
  createTexture(textureType, props) {
    return this.stage.txManager.loadTexture(textureType, props);
  }
  /**
   * Create a new shader controller for a shader type
   *
   * @remarks
   * This method creates a new Shader Controller for a specific shader type.
   *
   * If the shader has not been loaded yet, it will be loaded. Otherwise, the
   * existing shader will be reused.
   *
   * It can be assigned to a Node's `shader` property.
   *
   * @param shaderType
   * @param props
   * @returns
   */
  createShader(shaderType, props) {
    return this.stage.shManager.loadShader(shaderType, props);
  }
  /**
   * Create a new Dynamic Shader controller
   *
   * @remarks
   * A Dynamic Shader is a shader that can be composed of an array of mulitple
   * effects. Each effect can be animated or changed after creation (provided
   * the effect is given a name).
   *
   * Example:
   * ```ts
   * renderer.createNode({
   *   shader: renderer.createDynamicShader([
   *     renderer.createEffect('radius', {
   *       radius: 0
   *     }, 'effect1'),
   *     renderer.createEffect('border', {
   *       color: 0xff00ffff,
   *       width: 10,
   *     }, 'effect2'),
   *   ]),
   * });
   * ```
   *
   * @param effects
   * @returns
   */
  createDynamicShader(effects) {
    return this.stage.shManager.loadDynamicShader({
      effects
    });
  }
  /**
   * Create an effect to be used in a Dynamic Shader
   *
   * @remark
   * The {name} parameter is optional but required if you want to animate the effect
   * or change the effect's properties after creation.
   *
   * See {@link createDynamicShader} for an example.
   *
   * @param type
   * @param props
   * @param name
   * @returns
   */
  createEffect(type, props, name) {
    return {
      name,
      type,
      props
    };
  }
  /**
   * Get a Node by its ID
   *
   * @param id
   * @returns
   */
  getNodeById(id) {
    var _a;
    const root = (_a = this.stage) == null ? void 0 : _a.root;
    if (!root) {
      return null;
    }
    const findNode = (node) => {
      if (node.id === id) {
        return node;
      }
      for (const child of node.children) {
        const found = findNode(child);
        if (found) {
          return found;
        }
      }
      return null;
    };
    return findNode(root);
  }
  toggleFreeze() {
    throw new Error("Not implemented");
  }
  advanceFrame() {
    throw new Error("Not implemented");
  }
  getBufferInfo() {
    return this.stage.renderer.getBufferInfo();
  }
  /**
   * Re-render the current frame without advancing any running animations.
   *
   * @remarks
   * Any state changes will be reflected in the re-rendered frame. Useful for
   * debugging.
   *
   * May not do anything if the render loop is running on a separate worker.
   */
  rerender() {
    throw new Error("Not implemented");
  }
}
class TrFontFace extends EventEmitter {
  constructor(options) {
    super();
    __publicField(this, "fontFamily");
    __publicField(this, "descriptors");
    __publicField(this, "loaded", false);
    __publicField(this, "metrics", null);
    const { fontFamily, descriptors, metrics } = options;
    if (metrics) {
      this.metrics = {
        ascender: metrics.ascender / metrics.unitsPerEm,
        descender: metrics.descender / metrics.unitsPerEm,
        lineGap: metrics.lineGap / metrics.unitsPerEm
      };
    }
    this.fontFamily = fontFamily;
    this.descriptors = {
      style: "normal",
      weight: "normal",
      stretch: "normal",
      ...descriptors
    };
  }
  /**
   * Convert a TrFontFaceDescriptors to a FontFaceDescriptors which differ slightly
   *
   * @param descriptors
   * @returns
   */
  static convertToCssFontFaceDescriptors(descriptors) {
    return {
      style: descriptors.style,
      weight: typeof descriptors.weight === "number" ? "".concat(descriptors.weight) : descriptors.weight,
      stretch: descriptors.stretch,
      unicodeRange: descriptors.unicodeRange,
      featureSettings: descriptors.featureSettings,
      display: descriptors.display
    };
  }
}
class WebTrFontFace extends TrFontFace {
  constructor(options) {
    super(options);
    __publicField(this, "fontFace");
    __publicField(this, "fontUrl");
    const { fontFamily, fontUrl } = options;
    const fontUrlWithoutParentheses = fontUrl.replace(/\(|\)/g, "");
    const determinedDescriptors = this.descriptors;
    const cssDescriptors = {
      style: determinedDescriptors.style,
      weight: typeof determinedDescriptors.weight === "number" ? "".concat(determinedDescriptors.weight) : determinedDescriptors.weight,
      stretch: determinedDescriptors.stretch,
      unicodeRange: determinedDescriptors.unicodeRange,
      featureSettings: determinedDescriptors.featureSettings,
      display: determinedDescriptors.display
    };
    const fontFace = new FontFace(fontFamily, "url(".concat(fontUrlWithoutParentheses, ")"), cssDescriptors);
    if (fontUrlWithoutParentheses.length > 0) {
      fontFace.load().then(() => {
        this.loaded = true;
        this.emit("loaded");
      }).catch(console.error);
    } else {
      this.loaded = true;
      this.emit("loaded");
    }
    this.fontFace = fontFace;
    this.fontUrl = fontUrl;
  }
}
class CoreRenderOp {
}
class WebGlCoreRenderOp extends CoreRenderOp {
  constructor(glw, options, buffers, shader, shaderProps, alpha, clippingRect, dimensions, bufferIdx, zIndex, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
    super();
    __publicField(this, "glw");
    __publicField(this, "options");
    __publicField(this, "buffers");
    __publicField(this, "shader");
    __publicField(this, "shaderProps");
    __publicField(this, "alpha");
    __publicField(this, "clippingRect");
    __publicField(this, "dimensions");
    __publicField(this, "bufferIdx");
    __publicField(this, "zIndex");
    __publicField(this, "renderToTexture");
    __publicField(this, "parentHasRenderTexture");
    __publicField(this, "framebufferDimensions");
    __publicField(this, "length", 0);
    __publicField(this, "numQuads", 0);
    __publicField(this, "textures", []);
    __publicField(this, "maxTextures");
    this.glw = glw;
    this.options = options;
    this.buffers = buffers;
    this.shader = shader;
    this.shaderProps = shaderProps;
    this.alpha = alpha;
    this.clippingRect = clippingRect;
    this.dimensions = dimensions;
    this.bufferIdx = bufferIdx;
    this.zIndex = zIndex;
    this.renderToTexture = renderToTexture;
    this.parentHasRenderTexture = parentHasRenderTexture;
    this.framebufferDimensions = framebufferDimensions;
    this.maxTextures = shader.supportsIndexedTextures ? glw.getParameter(glw.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
  }
  addTexture(texture) {
    const { textures, maxTextures } = this;
    const existingIdx = textures.findIndex((t) => t === texture);
    if (existingIdx !== -1) {
      return existingIdx;
    }
    const newIdx = textures.length;
    if (newIdx >= maxTextures) {
      return 4294967295;
    }
    this.textures.push(texture);
    return newIdx;
  }
  draw() {
    const { glw, shader, shaderProps, options } = this;
    const { shManager } = options;
    shManager.useShader(shader);
    shader.bindRenderOp(this, shaderProps);
    const quadIdx = this.bufferIdx / 24 * 6 * 2;
    if (this.clippingRect.valid) {
      const { x, y, width, height } = this.clippingRect;
      const pixelRatio = options.pixelRatio;
      const canvasHeight = options.canvas.height;
      const clipX = Math.round(x * pixelRatio);
      const clipWidth = Math.round(width * pixelRatio);
      const clipHeight = Math.round(height * pixelRatio);
      const clipY = Math.round(canvasHeight - clipHeight - y * pixelRatio);
      glw.setScissorTest(true);
      glw.scissor(clipX, clipY, clipWidth, clipHeight);
    } else {
      glw.setScissorTest(false);
    }
    glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
  }
}
function getWebGlParameters(glw) {
  const params2 = {
    MAX_RENDERBUFFER_SIZE: 0,
    MAX_TEXTURE_SIZE: 0,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    MAX_VIEWPORT_DIMS: 0,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
    MAX_TEXTURE_IMAGE_UNITS: 0,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
    MAX_VERTEX_ATTRIBS: 0,
    MAX_VARYING_VECTORS: 0,
    MAX_VERTEX_UNIFORM_VECTORS: 0,
    MAX_FRAGMENT_UNIFORM_VECTORS: 0
  };
  const keys = Object.keys(params2);
  keys.forEach((key2) => {
    params2[key2] = glw.getParameter(glw[key2]);
  });
  return params2;
}
function getWebGlExtensions(glw) {
  const extensions = {
    ANGLE_instanced_arrays: null,
    WEBGL_compressed_texture_s3tc: null,
    WEBGL_compressed_texture_astc: null,
    WEBGL_compressed_texture_etc: null,
    WEBGL_compressed_texture_etc1: null,
    WEBGL_compressed_texture_pvrtc: null,
    WEBKIT_WEBGL_compressed_texture_pvrtc: null,
    WEBGL_compressed_texture_s3tc_srgb: null,
    OES_vertex_array_object: null
  };
  const keys = Object.keys(extensions);
  keys.forEach((key2) => {
    extensions[key2] = glw.getExtension(key2);
  });
  return extensions;
}
function createIndexBuffer(glw, size) {
  const maxQuads = ~~(size / 80);
  const indices = new Uint16Array(maxQuads * 6);
  for (let i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
    indices[i] = j;
    indices[i + 1] = j + 1;
    indices[i + 2] = j + 2;
    indices[i + 3] = j + 2;
    indices[i + 4] = j + 1;
    indices[i + 5] = j + 3;
  }
  const buffer = glw.createBuffer();
  glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
}
function isHTMLImageElement(obj) {
  return obj !== null && typeof obj === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement";
}
const TRANSPARENT_TEXTURE_DATA = new Uint8Array([0, 0, 0, 0]);
class WebGlCoreCtxTexture extends CoreContextTexture {
  constructor(glw, memManager, textureSource) {
    super(memManager, textureSource);
    __publicField(this, "glw");
    __publicField(this, "_nativeCtxTexture", null);
    __publicField(this, "_state", "freed");
    __publicField(this, "_w", 0);
    __publicField(this, "_h", 0);
    this.glw = glw;
  }
  get ctxTexture() {
    if (this._state === "freed") {
      this.load();
    }
    assertTruthy(this._nativeCtxTexture);
    return this._nativeCtxTexture;
  }
  get w() {
    return this._w;
  }
  get h() {
    return this._h;
  }
  /**
   * Load the texture data from the Texture source and upload it to the GPU
   *
   * @remarks
   * This method is called automatically when accessing the ctxTexture property
   * if the texture hasn't been loaded yet. But it can also be called manually
   * to force the texture to be pre-loaded prior to accessing the ctxTexture
   * property.
   */
  load() {
    if (this._state === "loading" || this._state === "loaded") {
      return;
    }
    this._state = "loading";
    this.textureSource.setState("loading");
    this._nativeCtxTexture = this.createNativeCtxTexture();
    this.onLoadRequest().then(({ width, height }) => {
      if (this._state === "freed") {
        return;
      }
      this._state = "loaded";
      this._w = width;
      this._h = height;
      this.textureSource.setState("loaded", { width, height });
    }).catch((err) => {
      if (this._state === "freed") {
        return;
      }
      this._state = "failed";
      this.textureSource.setState("failed", err);
      console.error(err);
    });
  }
  /**
   * Called when the texture data needs to be loaded and uploaded to a texture
   */
  async onLoadRequest() {
    var _a, _b;
    const { glw } = this;
    glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
    this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
    const textureData = await ((_a = this.textureSource) == null ? void 0 : _a.getTextureData());
    if (!this._nativeCtxTexture) {
      assertTruthy(this._state === "freed");
      return { width: 0, height: 0 };
    }
    let width = 0;
    let height = 0;
    assertTruthy(this._nativeCtxTexture);
    glw.activeTexture(0);
    if (textureData.data instanceof ImageBitmap || textureData.data instanceof ImageData || // not using typeof HTMLImageElement due to web worker
    isHTMLImageElement(textureData.data)) {
      const data = textureData.data;
      width = data.width;
      height = data.height;
      glw.bindTexture(this._nativeCtxTexture);
      glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
      glw.texImage2D(0, glw.RGBA, glw.RGBA, glw.UNSIGNED_BYTE, data);
      this.setTextureMemUse(width * height * 4);
      if (glw.isWebGl2() || isPowerOfTwo(width) && isPowerOfTwo(height)) {
        glw.generateMipmap();
      }
    } else if (textureData.data === null) {
      width = 0;
      height = 0;
      glw.bindTexture(this._nativeCtxTexture);
      glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
      this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
    } else if ("mipmaps" in textureData.data && textureData.data.mipmaps) {
      const { mipmaps, width: width2 = 0, height: height2 = 0, type, glInternalFormat } = textureData.data;
      const view = type === "ktx" ? new DataView((_b = mipmaps[0]) != null ? _b : new ArrayBuffer(0)) : mipmaps[0];
      glw.bindTexture(this._nativeCtxTexture);
      glw.compressedTexImage2D(0, glInternalFormat, width2, height2, 0, view);
      glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
      glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
      glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
      glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
      this.setTextureMemUse(view.byteLength);
    } else {
      console.error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned", textureData);
    }
    return {
      width,
      height
    };
  }
  /**
   * Free the WebGLTexture from the GPU
   *
   * @returns
   */
  free() {
    if (this._state === "freed") {
      return;
    }
    this._state = "freed";
    this.textureSource.setState("freed");
    this._w = 0;
    this._h = 0;
    if (!this._nativeCtxTexture) {
      return;
    }
    const { glw } = this;
    glw.deleteTexture(this._nativeCtxTexture);
    this.setTextureMemUse(0);
    this._nativeCtxTexture = null;
  }
  /**
   * Create native context texture
   *
   * @remarks
   * When this method returns the returned texture will be bound to the GL context state.
   *
   * @param width
   * @param height
   * @returns
   */
  createNativeCtxTexture() {
    const { glw } = this;
    const nativeTexture = glw.createTexture();
    if (!nativeTexture) {
      throw new Error("Could not create WebGL Texture");
    }
    glw.activeTexture(0);
    glw.bindTexture(nativeTexture);
    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
    return nativeTexture;
  }
}
class WebGlCoreCtxSubTexture extends WebGlCoreCtxTexture {
  constructor(glw, memManager, textureSource) {
    super(glw, memManager, textureSource);
  }
  async onLoadRequest() {
    var _a, _b;
    const props = await this.textureSource.getTextureData();
    return {
      width: ((_a = props.data) == null ? void 0 : _a.width) || 0,
      height: ((_b = props.data) == null ? void 0 : _b.height) || 0
    };
  }
}
class BufferCollection {
  constructor(config) {
    __publicField(this, "config");
    this.config = config;
  }
  /**
   * Get the WebGLBuffer associated with the given attribute name if it exists.
   *
   * @param attributeName
   * @returns
   */
  getBuffer(attributeName) {
    var _a;
    return (_a = this.config.find((item) => item.attributes[attributeName])) == null ? void 0 : _a.buffer;
  }
  /**
   * Get the AttributeInfo associated with the given attribute name if it exists.
   *
   * @param attributeName
   * @returns
   */
  getAttributeInfo(attributeName) {
    var _a;
    return (_a = this.config.find((item) => item.attributes[attributeName])) == null ? void 0 : _a.attributes[attributeName];
  }
}
function isWebGl2(gl) {
  return self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext;
}
class WebGlContextWrapper {
  //#endregion WebGL Enums
  constructor(gl) {
    __publicField(this, "gl");
    //#region Cached WebGL State
    __publicField(this, "activeTextureUnit", 0);
    __publicField(this, "texture2dUnits");
    __publicField(this, "texture2dParams", /* @__PURE__ */ new WeakMap());
    __publicField(this, "scissorEnabled");
    __publicField(this, "scissorX");
    __publicField(this, "scissorY");
    __publicField(this, "scissorWidth");
    __publicField(this, "scissorHeight");
    __publicField(this, "blendEnabled");
    __publicField(this, "blendSrcRgb");
    __publicField(this, "blendDstRgb");
    __publicField(this, "blendSrcAlpha");
    __publicField(this, "blendDstAlpha");
    __publicField(this, "boundArrayBuffer");
    __publicField(this, "boundElementArrayBuffer");
    __publicField(this, "curProgram");
    __publicField(this, "programUniforms", /* @__PURE__ */ new WeakMap());
    //#endregion Cached WebGL State
    //#region Canvas
    __publicField(this, "canvas");
    //#endregion Canvas
    //#region WebGL Enums
    __publicField(this, "MAX_RENDERBUFFER_SIZE");
    __publicField(this, "MAX_TEXTURE_SIZE");
    __publicField(this, "MAX_VIEWPORT_DIMS");
    __publicField(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_VERTEX_ATTRIBS");
    __publicField(this, "MAX_VARYING_VECTORS");
    __publicField(this, "MAX_VERTEX_UNIFORM_VECTORS");
    __publicField(this, "MAX_FRAGMENT_UNIFORM_VECTORS");
    __publicField(this, "TEXTURE_MAG_FILTER");
    __publicField(this, "TEXTURE_MIN_FILTER");
    __publicField(this, "TEXTURE_WRAP_S");
    __publicField(this, "TEXTURE_WRAP_T");
    __publicField(this, "LINEAR");
    __publicField(this, "CLAMP_TO_EDGE");
    __publicField(this, "RGBA");
    __publicField(this, "UNSIGNED_BYTE");
    __publicField(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL");
    __publicField(this, "UNPACK_FLIP_Y_WEBGL");
    __publicField(this, "FLOAT");
    __publicField(this, "TRIANGLES");
    __publicField(this, "UNSIGNED_SHORT");
    __publicField(this, "ONE");
    __publicField(this, "ONE_MINUS_SRC_ALPHA");
    __publicField(this, "VERTEX_SHADER");
    __publicField(this, "FRAGMENT_SHADER");
    __publicField(this, "STATIC_DRAW");
    __publicField(this, "COMPILE_STATUS");
    __publicField(this, "LINK_STATUS");
    __publicField(this, "DYNAMIC_DRAW");
    __publicField(this, "COLOR_ATTACHMENT0");
    this.gl = gl;
    this.activeTextureUnit = gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0;
    const maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    this.texture2dUnits = new Array(maxTextureUnits).fill(void 0).map((_, i) => {
      this.activeTexture(i);
      return gl.getParameter(gl.TEXTURE_BINDING_2D);
    });
    this.activeTexture(this.activeTextureUnit);
    this.scissorEnabled = gl.isEnabled(gl.SCISSOR_TEST);
    const scissorBox = gl.getParameter(gl.SCISSOR_BOX);
    this.scissorX = scissorBox[0];
    this.scissorY = scissorBox[1];
    this.scissorWidth = scissorBox[2];
    this.scissorHeight = scissorBox[3];
    this.blendEnabled = gl.isEnabled(gl.BLEND);
    this.blendSrcRgb = gl.getParameter(gl.BLEND_SRC_RGB);
    this.blendDstRgb = gl.getParameter(gl.BLEND_DST_RGB);
    this.blendSrcAlpha = gl.getParameter(gl.BLEND_SRC_ALPHA);
    this.blendDstAlpha = gl.getParameter(gl.BLEND_DST_ALPHA);
    this.boundArrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
    this.boundElementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
    this.curProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    this.canvas = gl.canvas;
    this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
    this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
    this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
    this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
    this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
    this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
    this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
    this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
    this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
    this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
    this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
    this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
    this.LINEAR = gl.LINEAR;
    this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
    this.RGBA = gl.RGBA;
    this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
    this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
    this.FLOAT = gl.FLOAT;
    this.TRIANGLES = gl.TRIANGLES;
    this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    this.ONE = gl.ONE;
    this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    this.TRIANGLES = gl.TRIANGLES;
    this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    this.VERTEX_SHADER = gl.VERTEX_SHADER;
    this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
    this.STATIC_DRAW = gl.STATIC_DRAW;
    this.COMPILE_STATUS = gl.COMPILE_STATUS;
    this.LINK_STATUS = gl.LINK_STATUS;
    this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
    this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
  }
  /**
   * Returns true if the WebGL context is WebGL2
   *
   * @returns
   */
  isWebGl2() {
    return isWebGl2(this.gl);
  }
  /**
   * ```
   * gl.activeTexture(textureUnit + gl.TEXTURE0);
   * ```
   *
   * @remarks
   * **WebGL Difference**: `textureUnit` is based from 0, not `gl.TEXTURE0`.
   *
   * @param textureUnit
   */
  activeTexture(textureUnit) {
    const { gl } = this;
    if (this.activeTextureUnit !== textureUnit) {
      gl.activeTexture(textureUnit + gl.TEXTURE0);
      this.activeTextureUnit = textureUnit;
    }
  }
  /**
   * ```
   * gl.bindTexture(gl.TEXTURE_2D, texture);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   *
   * @param texture
   */
  bindTexture(texture) {
    const { gl, activeTextureUnit, texture2dUnits } = this;
    if (texture2dUnits[activeTextureUnit] === texture) {
      return;
    }
    texture2dUnits[activeTextureUnit] = texture;
    gl.bindTexture(this.gl.TEXTURE_2D, texture);
  }
  _getActiveTexture() {
    const { activeTextureUnit, texture2dUnits } = this;
    return texture2dUnits[activeTextureUnit];
  }
  /**
   * ```
   * gl.texParameteri(gl.TEXTURE_2D, pname, param);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   *
   * @param pname
   * @param param
   * @returns
   */
  texParameteri(pname, param) {
    const { gl, texture2dParams } = this;
    const activeTexture = this._getActiveTexture();
    if (!activeTexture) {
      throw new Error("No active texture");
    }
    let textureParams = texture2dParams.get(activeTexture);
    if (!textureParams) {
      textureParams = {};
      texture2dParams.set(activeTexture, textureParams);
    }
    if (textureParams[pname] === param) {
      return;
    }
    textureParams[pname] = param;
    gl.texParameteri(gl.TEXTURE_2D, pname, param);
  }
  texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
    const { gl } = this;
    if (format) {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
    }
  }
  /**
   * ```
   * gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, data);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   */
  compressedTexImage2D(level, internalformat, width, height, border, data) {
    const { gl } = this;
    gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalformat, width, height, border, data);
  }
  /**
   * ```
   * gl.pixelStorei(pname, param);
   * ```
   *
   * @param pname
   * @param param
   */
  pixelStorei(pname, param) {
    const { gl } = this;
    gl.pixelStorei(pname, param);
  }
  /**
   * ```
   * gl.generateMipmap(gl.TEXTURE_2D);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   */
  generateMipmap() {
    const { gl } = this;
    gl.generateMipmap(gl.TEXTURE_2D);
  }
  /**
   * ```
   * gl.createTexture();
   * ```
   *
   * @returns
   */
  createTexture() {
    const { gl } = this;
    return gl.createTexture();
  }
  /**
   * ```
   * gl.deleteTexture(texture);
   * ```
   *
   * @param texture
   */
  deleteTexture(texture) {
    const { gl } = this;
    if (texture) {
      this.texture2dParams.delete(texture);
    }
    gl.deleteTexture(texture);
  }
  /**
   * ```
   * gl.viewport(x, y, width, height);
   * ```
   */
  viewport(x, y, width, height) {
    const { gl } = this;
    gl.viewport(x, y, width, height);
  }
  /**
   * ```
   * gl.clearColor(red, green, blue, alpha);
   * ```
   *
   * @param red
   * @param green
   * @param blue
   * @param alpha
   */
  clearColor(red, green, blue, alpha) {
    const { gl } = this;
    gl.clearColor(red, green, blue, alpha);
  }
  /**
   * ```
   * gl["enable"|"disable"](gl.SCISSOR_TEST);
   * ```
   * @param enable
   */
  setScissorTest(enable) {
    const { gl, scissorEnabled } = this;
    if (enable === scissorEnabled) {
      return;
    }
    if (enable) {
      gl.enable(gl.SCISSOR_TEST);
    } else {
      gl.disable(gl.SCISSOR_TEST);
    }
    this.scissorEnabled = enable;
  }
  /**
   * ```
   * gl.scissor(x, y, width, height);
   * ```
   *
   * @param x
   * @param y
   * @param width
   * @param height
   */
  scissor(x, y, width, height) {
    const { gl, scissorX, scissorY, scissorWidth, scissorHeight } = this;
    if (x !== scissorX || y !== scissorY || width !== scissorWidth || height !== scissorHeight) {
      gl.scissor(x, y, width, height);
      this.scissorX = x;
      this.scissorY = y;
      this.scissorWidth = width;
      this.scissorHeight = height;
    }
  }
  /**
   * ```
   * gl["enable"|"disable"](gl.BLEND);
   * ```
   *
   * @param blend
   * @returns
   */
  setBlend(blend) {
    const { gl, blendEnabled } = this;
    if (blend === blendEnabled) {
      return;
    }
    if (blend) {
      gl.enable(gl.BLEND);
    } else {
      gl.disable(gl.BLEND);
    }
    this.blendEnabled = blend;
  }
  /**
   * ```
   * gl.blendFunc(src, dst);
   * ```
   *
   * @param src
   * @param dst
   */
  blendFunc(src, dst) {
    const { gl, blendSrcRgb, blendDstRgb, blendSrcAlpha, blendDstAlpha } = this;
    if (src !== blendSrcRgb || dst !== blendDstRgb || src !== blendSrcAlpha || dst !== blendDstAlpha) {
      gl.blendFunc(src, dst);
      this.blendSrcRgb = src;
      this.blendDstRgb = dst;
      this.blendSrcAlpha = src;
      this.blendDstAlpha = dst;
    }
  }
  /**
   * ```
   * gl.createBuffer();
   * ```
   *
   * @returns
   */
  createBuffer() {
    const { gl } = this;
    return gl.createBuffer();
  }
  /**
   * ```
   * gl.createFramebuffer();
   * ```
   * @returns
   */
  createFramebuffer() {
    const { gl } = this;
    return gl.createFramebuffer();
  }
  /**
   * ```
   * gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
   * ```
   *
   * @param framebuffer
   */
  bindFramebuffer(framebuffer) {
    const { gl } = this;
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  }
  /**
   * ```
   * gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.FRAMEBUFFER` and textarget is always `gl.TEXTURE_2D`
   */
  framebufferTexture2D(attachment, texture, level) {
    const { gl } = this;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
  }
  /**
   * ```
   * gl.clear(gl.COLOR_BUFFER_BIT);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Clear mask is always `gl.COLOR_BUFFER_BIT`
   */
  clear() {
    const { gl } = this;
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
   * gl.bufferData(gl.ARRAY_BUFFER, data, usage);
   * ```
   *
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
   *
   * @param buffer
   * @param data
   * @param usage
   */
  arrayBufferData(buffer, data, usage) {
    const { gl, boundArrayBuffer } = this;
    if (boundArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      this.boundArrayBuffer = buffer;
    }
    gl.bufferData(gl.ARRAY_BUFFER, data, usage);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
   * gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
   * ```
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
   *
   * @param buffer
   * @param data
   * @param usage
   */
  elementArrayBufferData(buffer, data, usage) {
    const { gl, boundElementArrayBuffer } = this;
    if (boundElementArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
      this.boundElementArrayBuffer = buffer;
    }
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
   * gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
   * ```
   *
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.vertexAttribPointer` are combined into one function.
   *
   * @param buffer
   * @param index
   * @param size
   * @param type
   * @param normalized
   * @param stride
   * @param offset
   */
  vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
    const { gl, boundArrayBuffer } = this;
    if (boundArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      this.boundArrayBuffer = buffer;
    }
    gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
  }
  /**
   * ```
   * gl.useProgram(program);
   * ```
   *
   * @param program
   * @returns
   */
  useProgram(program) {
    const { gl, curProgram } = this;
    if (curProgram === program) {
      return;
    }
    gl.useProgram(program);
    this.curProgram = program;
  }
  setUniform(type, location, ...args) {
    const { gl, programUniforms } = this;
    let uniforms = programUniforms.get(this.curProgram);
    if (!uniforms) {
      uniforms = /* @__PURE__ */ new Map();
      programUniforms.set(this.curProgram, uniforms);
    }
    const uniformArgs = uniforms.get(location);
    if (!uniformArgs || !compareArrays(uniformArgs, args)) {
      uniforms.set(location, args);
      gl[type](location, ...args);
    }
  }
  /**
   * ```
   * gl.getParameter(pname);
   * ```
   *
   * @param pname
   * @returns
   */
  getParameter(pname) {
    const { gl } = this;
    return gl.getParameter(pname);
  }
  /**
   * ```
   * gl.drawElements(mode, count, type, offset);
   * ```
   *
   * @param mode
   * @param count
   * @param type
   * @param offset
   */
  drawElements(mode, count2, type, offset) {
    const { gl } = this;
    gl.drawElements(mode, count2, type, offset);
  }
  /**
   * ```
   * gl.drawArrays(mode, first, count);
   * ```
   *
   * @param name
   * @returns
   */
  getExtension(name) {
    const { gl } = this;
    return gl.getExtension(name);
  }
  /**
   * ```
   * gl.createVertexArray();
   * ```
   *
   * @returns
   */
  createVertexArray() {
    const { gl } = this;
    assertTruthy(gl instanceof WebGL2RenderingContext);
    return gl.createVertexArray();
  }
  /**
   * ```
   * gl.bindVertexArray(vertexArray);
   * ```
   *
   * @param vertexArray
   */
  bindVertexArray(vertexArray) {
    const { gl } = this;
    assertTruthy(gl instanceof WebGL2RenderingContext);
    gl.bindVertexArray(vertexArray);
  }
  /**
   * ```
   * gl.getAttribLocation(program, name);
   * ```
   *
   * @param program
   * @param name
   * @returns
   */
  getAttribLocation(program, name) {
    const { gl } = this;
    return gl.getAttribLocation(program, name);
  }
  /**
   * ```
   * gl.getUniformLocation(program, name);
   * ```
   *
   * @param program
   * @param name
   * @returns
   */
  getUniformLocation(program, name) {
    const { gl } = this;
    return gl.getUniformLocation(program, name);
  }
  /**
   * ```
   * gl.enableVertexAttribArray(index);
   * ```
   *
   * @param index
   */
  enableVertexAttribArray(index) {
    const { gl } = this;
    gl.enableVertexAttribArray(index);
  }
  /**
   * ```
   * gl.disableVertexAttribArray(index);
   * ```
   *
   * @param index
   */
  disableVertexAttribArray(index) {
    const { gl } = this;
    gl.disableVertexAttribArray(index);
  }
  /**
   * ```
   * gl.createShader(type);
   * ```
   *
   * @param type
   * @returns
   */
  createShader(type) {
    const { gl } = this;
    return gl.createShader(type);
  }
  /**
   * ```
   * gl.compileShader(shader);
   * ```
   *
   * @param shader
   * @returns
   */
  compileShader(shader) {
    const { gl } = this;
    gl.compileShader(shader);
  }
  /**
   * ```
   * gl.attachShader(program, shader);
   * ```
   *
   * @param program
   * @param shader
   */
  attachShader(program, shader) {
    const { gl } = this;
    gl.attachShader(program, shader);
  }
  /**
   * ```
   * gl.linkProgram(program);
   * ```
   *
   * @param program
   */
  linkProgram(program) {
    const { gl } = this;
    gl.linkProgram(program);
  }
  /**
   * ```
   * gl.deleteProgram(shader);
   * ```
   *
   * @param shader
   */
  deleteProgram(shader) {
    const { gl } = this;
    gl.deleteProgram(shader);
  }
  /**
   * ```
   * gl.getShaderParameter(shader, pname);
   * ```
   *
   * @param shader
   * @param pname
   */
  getShaderParameter(shader, pname) {
    const { gl } = this;
    return gl.getShaderParameter(shader, pname);
  }
  /**
   * ```
   * gl.getShaderInfoLog(shader);
   * ```
   *
   * @param shader
   */
  getShaderInfoLog(shader) {
    const { gl } = this;
    return gl.getShaderInfoLog(shader);
  }
  /**
   * ```
   * gl.createProgram();
   * ```
   *
   * @returns
   */
  createProgram() {
    const { gl } = this;
    return gl.createProgram();
  }
  /**
   * ```
   * gl.getProgramParameter(program, pname);
   * ```
   *
   * @param program
   * @param pname
   * @returns
   */
  getProgramParameter(program, pname) {
    const { gl } = this;
    return gl.getProgramParameter(program, pname);
  }
  /**
   * ```
   * gl.getProgramInfoLog(program);
   * ```
   *
   * @param program
   * @returns
   */
  getProgramInfoLog(program) {
    const { gl } = this;
    return gl.getProgramInfoLog(program);
  }
  /**
   * ```
   * gl.shaderSource(shader, source);
   * ```
   *
   * @param shader
   * @param source
   */
  shaderSource(shader, source) {
    const { gl } = this;
    gl.shaderSource(shader, source);
  }
  /**
   * ```
   * gl.deleteShader(shader);
   * ```
   *
   * @param shader
   */
  deleteShader(shader) {
    const { gl } = this;
    gl.deleteShader(shader);
  }
}
function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((v, i) => {
    if (Array.isArray(v) || v instanceof Float32Array) {
      return false;
    } else {
      return v === b[i];
    }
  });
}
class WebGlCoreCtxRenderTexture extends WebGlCoreCtxTexture {
  constructor(glw, memManager, textureSource) {
    super(glw, memManager, textureSource);
    __publicField(this, "framebuffer");
    const framebuffer = glw.createFramebuffer();
    assertTruthy(framebuffer, "Unable to create framebuffer");
    this.framebuffer = framebuffer;
  }
  async onLoadRequest() {
    const { glw } = this;
    const nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture();
    const { width, height } = this.textureSource;
    glw.texImage2D(0, glw.RGBA, width, height, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
    this.setTextureMemUse(width * height * 4);
    glw.bindFramebuffer(this.framebuffer);
    glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
    glw.bindFramebuffer(null);
    return {
      width,
      height
    };
  }
}
const WORDS_PER_QUAD = 24;
class WebGlCoreRenderer extends CoreRenderer {
  constructor(options) {
    super(options);
    //// WebGL Native Context and Data
    __publicField(this, "glw");
    __publicField(this, "system");
    //// Persistent data
    __publicField(this, "quadBuffer");
    __publicField(this, "fQuadBuffer");
    __publicField(this, "uiQuadBuffer");
    __publicField(this, "renderOps", []);
    //// Render Op / Buffer Filling State
    __publicField(this, "curBufferIdx", 0);
    __publicField(this, "curRenderOp", null);
    __publicField(this, "rttNodes", []);
    __publicField(this, "activeRttNode", null);
    //// Default Shader
    __publicField(this, "defShaderCtrl");
    __publicField(this, "defaultShader");
    __publicField(this, "quadBufferCollection");
    /**
     * White pixel texture used by default when no texture is specified.
     */
    __publicField(this, "defaultTexture");
    __publicField(this, "quadBufferUsage", 0);
    /**
     * Whether the renderer is currently rendering to a texture.
     */
    __publicField(this, "renderToTextureActive", false);
    this.quadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize);
    this.fQuadBuffer = new Float32Array(this.quadBuffer);
    this.uiQuadBuffer = new Uint32Array(this.quadBuffer);
    this.mode = "webgl";
    const { canvas, clearColor, bufferMemory: bufferMemory2 } = options;
    this.defaultTexture = new ColorTexture(this.txManager);
    this.defaultTexture.setRenderableOwner(this, true);
    this.defaultTexture.once("loaded", () => {
      this.stage.requestRender();
    });
    const gl = createWebGLContext(canvas, options.contextSpy);
    const glw = this.glw = new WebGlContextWrapper(gl);
    const color = getNormalizedRgbaComponents(clearColor);
    glw.viewport(0, 0, canvas.width, canvas.height);
    glw.clearColor(color[0], color[1], color[2], color[3]);
    glw.setBlend(true);
    glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
    createIndexBuffer(glw, bufferMemory2);
    this.system = {
      parameters: getWebGlParameters(this.glw),
      extensions: getWebGlExtensions(this.glw)
    };
    this.shManager.renderer = this;
    this.defShaderCtrl = this.shManager.loadShader("DefaultShader");
    this.defaultShader = this.defShaderCtrl.shader;
    const quadBuffer = glw.createBuffer();
    assertTruthy(quadBuffer);
    const stride = 6 * Float32Array.BYTES_PER_ELEMENT;
    this.quadBufferCollection = new BufferCollection([
      {
        buffer: quadBuffer,
        attributes: {
          a_position: {
            name: "a_position",
            size: 2,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 0
            // start at the beginning of the buffer
          },
          a_textureCoordinate: {
            name: "a_textureCoordinate",
            size: 2,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 2 * Float32Array.BYTES_PER_ELEMENT
          },
          a_color: {
            name: "a_color",
            size: 4,
            type: glw.UNSIGNED_BYTE,
            normalized: true,
            stride,
            offset: 4 * Float32Array.BYTES_PER_ELEMENT
          },
          a_textureIndex: {
            name: "a_textureIndex",
            size: 1,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 5 * Float32Array.BYTES_PER_ELEMENT
          }
        }
      }
    ]);
  }
  reset() {
    const { glw } = this;
    this.curBufferIdx = 0;
    this.curRenderOp = null;
    this.renderOps.length = 0;
    glw.setScissorTest(false);
    glw.clear();
  }
  getShaderManager() {
    return this.shManager;
  }
  createCtxTexture(textureSource) {
    if (textureSource instanceof SubTexture) {
      return new WebGlCoreCtxSubTexture(this.glw, this.txMemManager, textureSource);
    } else if (textureSource instanceof RenderTexture) {
      return new WebGlCoreCtxRenderTexture(this.glw, this.txMemManager, textureSource);
    }
    return new WebGlCoreCtxTexture(this.glw, this.txMemManager, textureSource);
  }
  /**
   * This function adds a quad (a rectangle composed of two triangles) to the WebGL rendering pipeline.
   *
   * It takes a set of options that define the quad's properties, such as its dimensions, colors, texture, shader, and transformation matrix.
   * The function first updates the shader properties with the current dimensions if necessary, then sets the default texture if none is provided.
   * It then checks if a new render operation is needed, based on the current shader and clipping rectangle.
   * If a new render operation is needed, it creates one and updates the current render operation.
   * The function then adjusts the texture coordinates based on the texture options and adds the texture to the texture manager.
   *
   * Finally, it calculates the vertices for the quad, taking into account any transformations, and adds them to the quad buffer.
   * The function updates the length and number of quads in the current render operation, and updates the current buffer index.
   */
  addQuad(params2) {
    var _a, _b, _c, _d, _e;
    const { fQuadBuffer, uiQuadBuffer } = this;
    const { width, height, colorTl, colorTr, colorBl, colorBr, textureOptions, shader, shaderProps, alpha, clippingRect, tx, ty, ta, tb, tc, td, renderCoords, rtt: renderToTexture, parentHasRenderTexture, framebufferDimensions } = params2;
    let { texture } = params2;
    if (shaderProps && hasOwn(shaderProps, "$dimensions")) {
      const dimensions = shaderProps.$dimensions;
      dimensions.width = width;
      dimensions.height = height;
    }
    texture = texture != null ? texture : this.defaultTexture;
    assertTruthy(texture instanceof Texture, "Invalid texture type");
    let { curBufferIdx: bufferIdx, curRenderOp } = this;
    const targetDims = {
      width,
      height
    };
    const targetShader = shader || this.defaultShader;
    assertTruthy(targetShader instanceof WebGlCoreShader);
    if (!this.reuseRenderOp(params2)) {
      this.newRenderOp(targetShader, shaderProps, alpha, targetDims, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions);
      curRenderOp = this.curRenderOp;
      assertTruthy(curRenderOp);
    }
    const flipX = (_a = textureOptions == null ? void 0 : textureOptions.flipX) != null ? _a : false;
    let flipY = (_b = textureOptions == null ? void 0 : textureOptions.flipY) != null ? _b : false;
    if (texture instanceof RenderTexture) {
      flipY = !flipY;
    }
    let texCoordX1 = 0;
    let texCoordY1 = 0;
    let texCoordX2 = 1;
    let texCoordY2 = 1;
    if (texture instanceof SubTexture) {
      const { x: tx2, y: ty2, width: tw, height: th } = texture.props;
      const { width: parentW = 0, height: parentH = 0 } = texture.parentTexture.dimensions || { width: 0, height: 0 };
      texCoordX1 = tx2 / parentW;
      texCoordX2 = texCoordX1 + tw / parentW;
      texCoordY1 = ty2 / parentH;
      texCoordY2 = texCoordY1 + th / parentH;
      texture = texture.parentTexture;
    }
    const resizeMode = (_c = textureOptions == null ? void 0 : textureOptions.resizeMode) != null ? _c : false;
    if (texture instanceof ImageTexture) {
      if (resizeMode && texture.dimensions) {
        const { width: tw, height: th } = texture.dimensions;
        if (resizeMode.type === "cover") {
          const scaleX = width / tw;
          const scaleY = height / th;
          const scale = Math.max(scaleX, scaleY);
          const precision = 1 / scale;
          if (scale && scaleX && scaleX < scale) {
            const desiredSize = precision * width;
            texCoordX1 = (1 - desiredSize / tw) * ((_d = resizeMode.clipX) != null ? _d : 0.5);
            texCoordX2 = texCoordX1 + desiredSize / tw;
          }
          if (scale && scaleY && scaleY < scale) {
            const desiredSize = precision * height;
            texCoordY1 = (1 - desiredSize / th) * ((_e = resizeMode.clipY) != null ? _e : 0.5);
            texCoordY2 = texCoordY1 + desiredSize / th;
          }
        }
      }
    }
    if (flipX) {
      [texCoordX1, texCoordX2] = [texCoordX2, texCoordX1];
    }
    if (flipY) {
      [texCoordY1, texCoordY2] = [texCoordY2, texCoordY1];
    }
    const ctxTexture = texture.ctxTexture;
    assertTruthy(ctxTexture instanceof WebGlCoreCtxTexture);
    const textureIdx = this.addTexture(ctxTexture, bufferIdx);
    curRenderOp = this.curRenderOp;
    assertTruthy(curRenderOp);
    if (renderCoords) {
      const { x1, y1, x2, y2, x3, y3, x4, y4 } = renderCoords;
      fQuadBuffer[bufferIdx++] = x1;
      fQuadBuffer[bufferIdx++] = y1;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x2;
      fQuadBuffer[bufferIdx++] = y2;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x4;
      fQuadBuffer[bufferIdx++] = y4;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x3;
      fQuadBuffer[bufferIdx++] = y3;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    } else if (tb !== 0 || tc !== 0) {
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + width * ta;
      fQuadBuffer[bufferIdx++] = ty + width * tc;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + height * tb;
      fQuadBuffer[bufferIdx++] = ty + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + width * ta + height * tb;
      fQuadBuffer[bufferIdx++] = ty + width * tc + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    } else {
      const rightCornerX = tx + width * ta;
      const rightCornerY = ty + height * td;
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    }
    curRenderOp.length += WORDS_PER_QUAD;
    curRenderOp.numQuads++;
    this.curBufferIdx = bufferIdx;
  }
  /**
   * Replace the existing RenderOp with a new one that uses the specified Shader
   * and starts at the specified buffer index.
   *
   * @param shader
   * @param bufferIdx
   */
  newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
    const curRenderOp = new WebGlCoreRenderOp(
      this.glw,
      this.options,
      this.quadBufferCollection,
      shader,
      shaderProps,
      alpha,
      clippingRect,
      dimensions,
      bufferIdx,
      0,
      // Z-Index is only used for explictly added Render Ops
      renderToTexture,
      parentHasRenderTexture,
      framebufferDimensions
    );
    this.curRenderOp = curRenderOp;
    this.renderOps.push(curRenderOp);
  }
  /**
   * Add a texture to the current RenderOp. If the texture cannot be added to the
   * current RenderOp, a new RenderOp will be created and the texture will be added
   * to that one.
   *
   * If the texture cannot be added to the new RenderOp, an error will be thrown.
   *
   * @param texture
   * @param bufferIdx
   * @param recursive
   * @returns Assigned Texture Index of the texture in the render op
   */
  addTexture(texture, bufferIdx, recursive) {
    const { curRenderOp } = this;
    assertTruthy(curRenderOp);
    const textureIdx = curRenderOp.addTexture(texture);
    if (textureIdx === 4294967295) {
      if (recursive) {
        throw new Error("Unable to add texture to render op");
      }
      const { shader, shaderProps, dimensions, clippingRect, alpha } = curRenderOp;
      this.newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx);
      return this.addTexture(texture, bufferIdx, true);
    }
    return textureIdx;
  }
  /**
   * Test if the current Render operation can be reused for the specified parameters.
   * @param params
   * @returns
   */
  reuseRenderOp(params2) {
    var _a;
    const { shader, shaderProps, parentHasRenderTexture, rtt, clippingRect } = params2;
    const targetShader = shader || this.defaultShader;
    if (((_a = this.curRenderOp) == null ? void 0 : _a.shader) !== targetShader) {
      return false;
    }
    if (!compareRect(this.curRenderOp.clippingRect, clippingRect)) {
      return false;
    }
    if (parentHasRenderTexture || rtt) {
      return false;
    }
    if (this.curRenderOp.shader !== this.defaultShader && (!shaderProps || !this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps, shaderProps))) {
      return false;
    }
    return true;
  }
  /**
   * add RenderOp to the render pipeline
   */
  addRenderOp(renderable) {
    this.renderOps.push(renderable);
    this.curRenderOp = null;
  }
  /**
   * Render the current set of RenderOps to render to the specified surface.
   *
   * TODO: 'screen' is the only supported surface at the moment.
   *
   * @param surface
   */
  render(surface = "screen") {
    var _a;
    const { glw, quadBuffer } = this;
    const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
    const buffer = (_a = this.quadBufferCollection.getBuffer("a_position")) != null ? _a : null;
    glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
    this.renderOps.forEach((renderOp, i) => {
      renderOp.draw();
    });
    this.quadBufferUsage = this.curBufferIdx * arr.BYTES_PER_ELEMENT;
  }
  renderToTexture(node) {
    for (let i = 0; i < this.rttNodes.length; i++) {
      if (this.rttNodes[i] === node) {
        return;
      }
    }
    this.rttNodes.unshift(node);
  }
  renderRTTNodes() {
    const { glw } = this;
    this.stage;
    for (let i = 0; i < this.rttNodes.length; i++) {
      const node = this.rttNodes[i];
      if (!node || !node.hasRTTupdates) {
        continue;
      }
      this.activeRttNode = node;
      assertTruthy(node.texture, "RTT node missing texture");
      const ctxTexture = node.texture.ctxTexture;
      assertTruthy(ctxTexture instanceof WebGlCoreCtxRenderTexture);
      this.renderToTextureActive = true;
      glw.bindFramebuffer(ctxTexture.framebuffer);
      glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
      glw.clear();
      for (let i2 = 0; i2 < node.children.length; i2++) {
        const child = node.children[i2];
        if (!child) {
          continue;
        }
        child.update(this.stage.deltaTime, {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          valid: false
        });
        this.stage.addQuads(child);
        child.hasRTTupdates = false;
      }
      this.render();
      this.renderOps.length = 0;
      node.hasRTTupdates = false;
    }
    glw.bindFramebuffer(null);
    glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
    this.renderToTextureActive = false;
  }
  removeRTTNode(node) {
    const index = this.rttNodes.indexOf(node);
    if (index === -1) {
      return;
    }
    this.rttNodes.splice(index, 1);
  }
  getBufferInfo() {
    const bufferInfo = {
      totalAvailable: this.stage.options.quadBufferSize,
      totalUsed: this.quadBufferUsage
    };
    return bufferInfo;
  }
  getDefShaderCtr() {
    return this.defShaderCtrl;
  }
}
const SpecialCodepoints = {
  LINE_FEED: 10,
  CARRIAGE_RETURN: 13,
  SPACE: 32,
  TAB: 9,
  ZERO_WIDTH_SPACE: 8203,
  ZERO_WIDTH_NON_JOINER: 8204,
  ZERO_WIDTH_JOINER: 8205,
  LEFT_TO_RIGHT_MARK: 8206,
  RIGHT_TO_LEFT_MARK: 8207,
  LEFT_TO_RIGHT_EMBEDDING: 8234,
  RIGHT_TO_LEFT_EMBEDDING: 8235,
  POP_DIRECTIONAL_FORMATTING: 8236,
  LEFT_TO_RIGHT_OVERRIDE: 8237,
  RIGHT_TO_LEFT_OVERRIDE: 8238,
  LINE_SEPARATOR: 8232,
  PARAGRAPH_SEPARATOR: 8233,
  OBJECT_REPLACEMENT_CHARACTER: 65532,
  REPLACEMENT_CHARACTER: 65533,
  ZERO_WIDTH_NO_BREAK_SPACE: 65279,
  LEFT_TO_RIGHT_ISOLATE: 8294,
  RIGHT_TO_LEFT_ISOLATE: 8295,
  FIRST_STRONG_ISOLATE: 8296,
  POP_DIRECTIONAL_ISOLATE: 8297,
  INHIBIT_SYMMETRIC_SWAPPING: 8298,
  ACTIVATE_SYMMETRIC_SWAPPING: 8299,
  INHIBIT_ARABIC_FORM_SHAPING: 8300,
  ACTIVATE_ARABIC_FORM_SHAPING: 8301,
  NATIONAL_DIGIT_SHAPES: 8302,
  NOMINAL_DIGIT_SHAPES: 8303,
  LEFT_TO_RIGHT_BOUNDARY: 8206,
  RIGHT_TO_LEFT_BOUNDARY: 8207
};
class FontShaper {
}
class SdfFontShaper extends FontShaper {
  constructor(data, glyphMap) {
    super();
    __publicField(this, "data");
    __publicField(this, "glyphMap");
    __publicField(this, "kernings");
    this.data = data;
    this.glyphMap = glyphMap;
    const kernings = this.kernings = {};
    data.kernings.forEach((kerning) => {
      const second = kerning.second;
      const firsts = kernings[second] = kernings[second] || {};
      firsts[kerning.first] = kerning.amount;
    });
    this.kernings = kernings;
  }
  *shapeText(props, codepoints) {
    var _a;
    let codepointResult;
    let lastGlyphId = void 0;
    while ((codepointResult = codepoints.peek()) && !codepointResult.done) {
      const codepoint = codepointResult.value;
      const glyph = this.glyphMap.get(codepoint);
      codepoints.next();
      if (glyph !== void 0) {
        const kerning = lastGlyphId !== void 0 ? (((_a = this.kernings[glyph.id]) == null ? void 0 : _a[lastGlyphId]) || 0) + props.letterSpacing : 0;
        lastGlyphId = glyph.id;
        yield {
          mapped: true,
          glyphId: glyph.id,
          codepoint,
          cluster: codepoints.lastIndex,
          xAdvance: glyph.xadvance + kerning,
          yAdvance: 0,
          xOffset: glyph.xoffset + kerning,
          yOffset: glyph.yoffset,
          xBearing: 0,
          yBearing: 0,
          width: glyph.width,
          height: glyph.height
        };
      } else {
        if (codepoint === SpecialCodepoints.LINE_FEED) {
          lastGlyphId = void 0;
        }
        yield {
          mapped: false,
          codepoint,
          cluster: codepoints.lastIndex
        };
      }
    }
  }
}
class SdfTrFontFace extends TrFontFace {
  constructor(type, options) {
    super(options);
    __publicField(this, "type");
    __publicField(this, "texture");
    /**
     * Height of the tallest character in the font including the whitespace above it
     * in SDF/vertex units.
     */
    __publicField(this, "maxCharHeight", 0);
    __publicField(this, "data");
    __publicField(this, "shaper");
    __publicField(this, "glyphMap", /* @__PURE__ */ new Map());
    const { atlasUrl, atlasDataUrl, stage } = options;
    this.type = type;
    const renderer2 = stage.renderer;
    assertTruthy(renderer2 instanceof WebGlCoreRenderer, "SDF Font Faces can only be used with the WebGL Renderer");
    this.texture = stage.txManager.loadTexture("ImageTexture", {
      src: atlasUrl,
      // IMPORTANT: The SDF shader requires the alpha channel to NOT be
      // premultiplied on the atlas texture. If it is premultiplied, the
      // rendering of SDF glyphs (especially single-channel SDF fonts) will
      // be very jagged.
      premultiplyAlpha: false
    });
    this.texture.on("loaded", () => {
      this.checkLoaded();
      stage.requestRender();
    });
    this.texture.ctxTexture.load();
    fetch(atlasDataUrl).then(async (response) => {
      var _a;
      this.data = await response.json();
      assertTruthy(this.data);
      let maxCharHeight = 0;
      this.data.chars.forEach((glyph) => {
        this.glyphMap.set(glyph.id, glyph);
        const charHeight = glyph.yoffset + glyph.height;
        if (charHeight > maxCharHeight) {
          maxCharHeight = charHeight;
        }
      });
      this.maxCharHeight = maxCharHeight;
      this.shaper = new SdfFontShaper(this.data, this.glyphMap);
      if (!this.metrics) {
        if ((_a = this.data) == null ? void 0 : _a.lightningMetrics) {
          const { ascender, descender, lineGap, unitsPerEm } = this.data.lightningMetrics;
          this.metrics = {
            ascender: ascender / unitsPerEm,
            descender: descender / unitsPerEm,
            lineGap: lineGap / unitsPerEm
          };
        } else {
          throw new Error("Font metrics not found in ".concat(this.type, " font ").concat(this.fontFamily, ". ") + "Make sure you are using the latest version of the Lightning 3 `msdf-generator` tool to generate your SDF fonts.");
        }
      }
      this.checkLoaded();
    }).catch(console.error);
  }
  getAtlasEntry(glyphId) {
    const glyph = this.glyphMap.get(glyphId);
    if (glyph === void 0) {
      throw new Error("Glyph ".concat(glyphId, " not found in font ").concat(this.fontFamily));
    }
    return {
      x: glyph.x,
      y: glyph.y,
      width: glyph.width,
      height: glyph.height
    };
  }
  checkLoaded() {
    if (this.loaded)
      return;
    if (this.texture.state === "loaded" && this.data) {
      this.loaded = true;
      this.emit("loaded");
    }
  }
}
let renderer$1;
let createShader;
function startLightningRenderer(options, rootId = "app") {
  renderer$1 = new RendererMain(options, rootId);
  createShader = renderer$1.createShader.bind(renderer$1);
  return renderer$1;
}
function loadFonts(fonts2) {
  const stage = renderer$1.stage;
  for (const font of fonts2) {
    if ("type" in font) {
      stage.fontManager.addFontFace(new SdfTrFontFace(font.type, {
        ...font,
        stage
      }));
    } else {
      stage.fontManager.addFontFace(new WebTrFontFace(font));
    }
  }
}
const __vite_import_meta_env__ = { "BASE_URL": "/solid-demo-app/", "DEV": false, "LEGACY": false, "MODE": "production", "PROD": true, "SSR": false };
function isDevEnv() {
  return !!(__vite_import_meta_env__ && false);
}
const isDev$1 = isDevEnv() || false;
const Config = {
  debug: false,
  focusDebug: false,
  animationsEnabled: true,
  animationSettings: {
    duration: 250,
    easing: "ease-in-out"
  },
  fontSettings: {
    fontFamily: "Ubuntu",
    fontSize: 100
  },
  setActiveElement: () => {
  }
};
function hasDebug(node) {
  return isObject$1(node) && node.debug;
}
function log(msg, node, ...args) {
  if (isDev$1) {
    if (Config.debug || hasDebug(node) || hasDebug(args[0])) {
      console.log(msg, node, ...args);
    }
  }
}
const isFunc = (obj) => obj instanceof Function;
function isObject$1(item) {
  return typeof item === "object";
}
function isArray(item) {
  return Array.isArray(item);
}
function isString(item) {
  return typeof item === "string";
}
function isNumber(item) {
  return typeof item === "number";
}
function isInteger(item) {
  return Number.isInteger(item);
}
function isINode(node) {
  return "destroy" in node && typeof node.destroy === "function";
}
function isElementNode(node) {
  return node instanceof ElementNode;
}
function keyExists(obj, keys) {
  for (const key2 of keys) {
    if (key2 in obj) {
      return true;
    }
  }
  return false;
}
function flattenStyles(obj, result = {}) {
  if (isArray(obj)) {
    obj.forEach((item) => {
      flattenStyles(item, result);
    });
  } else if (obj) {
    for (const key2 in obj) {
      if (result[key2] === void 0) {
        result[key2] = obj[key2];
      }
    }
  }
  return result;
}
class States extends Array {
  constructor(callback, initialState = {}) {
    var __super = (...args) => {
      super(...args);
      __publicField(this, "onChange");
      return this;
    };
    if (isArray(initialState)) {
      __super(...initialState);
    } else if (isString(initialState)) {
      __super(initialState);
    } else {
      __super(...Object.entries(initialState).filter(([_key, value]) => value).map(([key2]) => key2));
    }
    this.onChange = callback;
    return this;
  }
  has(state) {
    return this.indexOf(state) >= 0;
  }
  is(state) {
    return this.indexOf(state) >= 0;
  }
  add(state) {
    if (this.has(state)) {
      return;
    }
    this.push(state);
    this.onChange();
  }
  toggle(state, force) {
    if (force === true) {
      this.add(state);
    } else if (force === false) {
      this.remove(state);
    } else {
      if (this.has(state)) {
        this.remove(state);
      } else {
        this.add(state);
      }
    }
  }
  merge(newStates) {
    if (isArray(newStates)) {
      this.length = 0;
      this.push(...newStates);
    } else if (isString(newStates)) {
      this.length = 0;
      this.push(newStates);
    } else {
      for (const state in newStates) {
        this.toggle(state, newStates[state]);
      }
    }
    return this;
  }
  remove(state) {
    const stateIndexToRemove = this.indexOf(state);
    if (stateIndexToRemove >= 0) {
      this.splice(stateIndexToRemove, 1);
      this.onChange();
    }
  }
}
const NodeType = {
  Element: "element",
  TextNode: "textNode",
  Text: "text"
};
function calculateFlex(node) {
  const children2 = [];
  let hasOrder = false;
  let growSize = 0;
  for (let i = 0; i < node.children.length; i++) {
    const c = node.children[i];
    if (c._type === NodeType.Text || c.flexItem === false) {
      continue;
    }
    if (c.flexOrder !== void 0) {
      hasOrder = true;
    }
    if (c.flexGrow !== void 0) {
      growSize += c.flexGrow;
    }
    children2.push(c);
  }
  if (hasOrder) {
    children2.sort((a, b) => (a.flexOrder || 0) - (b.flexOrder || 0));
  }
  const numChildren = children2.length;
  const direction = node.flexDirection || "row";
  const isRow = direction === "row";
  const dimension = isRow ? "width" : "height";
  const crossDimension = isRow ? "height" : "width";
  const marginOne = isRow ? "marginLeft" : "marginTop";
  const marginTwo = isRow ? "marginRight" : "marginBottom";
  const prop = isRow ? "x" : "y";
  const crossProp = isRow ? "y" : "x";
  const containerSize = node[dimension] || 0;
  const containerCrossSize = node[crossDimension] || 0;
  const gap = node.gap || 0;
  const justify = node.justifyContent || "flexStart";
  const align = node.alignItems;
  if (growSize) {
    const flexBasis = children2.reduce((prev, c) => prev + (c.flexGrow ? 0 : c[dimension] || 0) + (c[marginOne] || 0) + (c[marginTwo] || 0), 0);
    const growFactor = (containerSize - flexBasis - gap * (numChildren - 1)) / growSize;
    for (let i = 0; i < children2.length; i++) {
      const c = children2[i];
      if (c.flexGrow !== void 0 && c.flexGrow > 0) {
        c[dimension] = c.flexGrow * growFactor;
      }
    }
  }
  let itemSize = 0;
  if (["center", "spaceBetween", "spaceEvenly"].includes(justify)) {
    itemSize = children2.reduce((prev, c) => prev + (c[dimension] || 0) + (c[marginOne] || 0) + (c[marginTwo] || 0), 0);
  }
  const crossAlignChild = containerCrossSize && align ? (c) => {
    if (align === "flexStart") {
      c[crossProp] = 0;
    } else if (align === "center") {
      c[crossProp] = (containerCrossSize - (c[crossDimension] || 0)) / 2;
    } else if (align === "flexEnd") {
      c[crossProp] = containerCrossSize - (c[crossDimension] || 0);
    }
  } : (c) => c;
  if (justify === "flexStart") {
    let start = 0;
    for (let i = 0; i < children2.length; i++) {
      const c = children2[i];
      c[prop] = start + (c[marginOne] || 0);
      start += (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
    if (node.flexBoundary !== "fixed") {
      const calculatedSize = start - gap;
      if (calculatedSize !== node[dimension]) {
        node[dimension] = calculatedSize;
        return true;
      }
    }
  } else if (justify === "flexEnd") {
    let start = containerSize;
    for (let i = numChildren - 1; i >= 0; i--) {
      const c = children2[i];
      c[prop] = start - (c[dimension] || 0) - (c[marginTwo] || 0);
      start -= (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
    if (node.flexBoundary !== "fixed") {
      const calculatedSize = start - gap;
      if (calculatedSize !== node[dimension]) {
        node[dimension] = calculatedSize;
        return true;
      }
    }
  } else if (justify === "center") {
    let start = (containerSize - (itemSize + gap * (numChildren - 1))) / 2;
    for (let i = 0; i < children2.length; i++) {
      const c = children2[i];
      c[prop] = start + (c[marginOne] || 0);
      start += (c[dimension] || 0) + gap + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
  } else if (justify === "spaceBetween") {
    const toPad = (containerSize - itemSize) / (numChildren - 1);
    let start = 0;
    for (let i = 0; i < children2.length; i++) {
      const c = children2[i];
      c[prop] = start + (c[marginOne] || 0);
      start += (c[dimension] || 0) + toPad + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
  } else if (justify === "spaceEvenly") {
    const toPad = (containerSize - itemSize) / (numChildren + 1);
    let start = toPad;
    for (let i = 0; i < children2.length; i++) {
      const c = children2[i];
      c[prop] = start + (c[marginOne] || 0);
      start += (c[dimension] || 0) + toPad + (c[marginOne] || 0) + (c[marginTwo] || 0);
      crossAlignChild(c);
    }
  }
  return false;
}
const keyMapEntries = {
  ArrowLeft: "Left",
  ArrowRight: "Right",
  ArrowUp: "Up",
  ArrowDown: "Down",
  Enter: "Enter",
  l: "Last",
  " ": "Space",
  Backspace: "Back",
  Escape: "Escape"
};
const keyHoldMapEntries = {
  // Enter: 'EnterHold',
};
const flattenKeyMap = (keyMap, targetMap) => {
  for (const [key2, value] of Object.entries(keyMap)) {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        targetMap[v] = key2;
      });
    } else if (value === null) {
      delete targetMap[key2];
    } else {
      targetMap[value] = key2;
    }
  }
};
let needFocusDebugStyles = true;
const addFocusDebug = (prevFocusPath2, newFocusPath) => {
  if (needFocusDebugStyles) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = '\n      [data-focus="3"] {\n        border: 2px solid rgba(255, 33, 33, 0.2);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="2"] {\n        border: 2px solid rgba(255, 33, 33, 0.4);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="1"] {\n        border: 4px solid rgba(255, 33, 33, 0.9);\n        border-radius: 5px;\n        transition: border-color 0.5s ease;\n      }\n    ';
    document.head.appendChild(style);
    needFocusDebugStyles = false;
  }
  prevFocusPath2.forEach((elm) => {
    elm.data = {
      ...elm.data,
      focus: void 0
    };
  });
  newFocusPath.forEach((elm, i) => {
    elm.data = {
      ...elm.data,
      focus: i + 1
    };
  });
};
let activeElement$1;
const setActiveElement$1 = (elm) => {
  updateFocusPath(elm, activeElement$1);
  activeElement$1 = elm;
  Config.setActiveElement(elm);
};
let focusPath$1 = [];
const updateFocusPath = (currentFocusedElm, prevFocusedElm) => {
  var _a, _b;
  let current = currentFocusedElm;
  const fp = [];
  while (current) {
    if (!current.states.has("focus") || current === currentFocusedElm) {
      current.states.add("focus");
      (_a = current.onFocus) == null ? void 0 : _a.call(current, currentFocusedElm, prevFocusedElm);
      (_b = current.onFocusChanged) == null ? void 0 : _b.call(current, true, currentFocusedElm, prevFocusedElm);
    }
    fp.push(current);
    current = current.parent;
  }
  focusPath$1.forEach((elm) => {
    var _a2, _b2;
    if (!fp.includes(elm)) {
      elm.states.remove("focus");
      (_a2 = elm.onBlur) == null ? void 0 : _a2.call(elm, currentFocusedElm, prevFocusedElm);
      (_b2 = elm.onFocusChanged) == null ? void 0 : _b2.call(elm, false, currentFocusedElm, prevFocusedElm);
    }
  });
  if (Config.focusDebug) {
    addFocusDebug(focusPath$1, fp);
  }
  focusPath$1 = fp;
  return fp;
};
const propagateKeyDown = (e, mappedEvent, isHold) => {
  let finalFocusElm = void 0;
  for (const elm of focusPath$1) {
    finalFocusElm = finalFocusElm || elm;
    if (mappedEvent) {
      const onKeyHandler = elm["on".concat(mappedEvent)];
      if ((onKeyHandler == null ? void 0 : onKeyHandler.call(elm, e, elm, finalFocusElm)) === true) {
        break;
      }
    } else {
      console.log("Unhandled key event: ".concat(e.key || e.keyCode));
    }
    const fallbackFunction = isHold ? elm.onKeyHold : elm.onKeyPress;
    if ((fallbackFunction == null ? void 0 : fallbackFunction.call(elm, e, mappedEvent, elm, finalFocusElm)) === true) {
      break;
    }
  }
  return false;
};
const DEFAULT_KEY_HOLD_THRESHOLD = 200;
const keyHoldTimeouts = {};
const keyHoldCallback = (e, mappedKeyHoldEvent) => {
  delete keyHoldTimeouts[e.key || e.keyCode];
  propagateKeyDown(e, mappedKeyHoldEvent, true);
};
const handleKeyEvents = (delay2, keypress, keyup) => {
  if (keypress) {
    const key2 = keypress.key || keypress.keyCode;
    const mappedKeyHoldEvent = keyHoldMapEntries[key2];
    const mappedKeyEvent = keyMapEntries[key2];
    if (!mappedKeyHoldEvent) {
      propagateKeyDown(keypress, mappedKeyEvent, false);
    } else {
      if (keyHoldTimeouts[key2]) {
        clearTimeout(keyHoldTimeouts[key2]);
      }
      keyHoldTimeouts[key2] = window.setTimeout(() => keyHoldCallback(keypress, mappedKeyHoldEvent), delay2);
    }
  }
  if (keyup) {
    const key2 = keyup.key || keyup.keyCode;
    const mappedKeyEvent = keyMapEntries[key2];
    if (keyHoldTimeouts[key2]) {
      clearTimeout(keyHoldTimeouts[key2]);
      delete keyHoldTimeouts[key2];
      propagateKeyDown(keyup, mappedKeyEvent, false);
    }
  }
};
const useFocusManager$1 = ({ userKeyMap, keyHoldOptions, ownerContext = (cb) => {
  cb();
} } = {}) => {
  if (userKeyMap) {
    flattenKeyMap(userKeyMap, keyMapEntries);
  }
  if (keyHoldOptions == null ? void 0 : keyHoldOptions.userKeyHoldMap) {
    flattenKeyMap(keyHoldOptions.userKeyHoldMap, keyHoldMapEntries);
  }
  const delay2 = (keyHoldOptions == null ? void 0 : keyHoldOptions.holdThreshold) || DEFAULT_KEY_HOLD_THRESHOLD;
  const runKeyEvent = handleKeyEvents.bind(null, delay2);
  const keyPressHandler = (event) => ownerContext(() => {
    runKeyEvent(event, void 0);
  });
  const keyUpHandler = (event) => ownerContext(() => {
    runKeyEvent(void 0, event);
  });
  document.addEventListener("keyup", keyUpHandler);
  document.addEventListener("keydown", keyPressHandler);
  return {
    cleanup: () => {
      document.removeEventListener("keydown", keyPressHandler);
      document.removeEventListener("keyup", keyUpHandler);
      for (const [_, timeout] of Object.entries(keyHoldTimeouts)) {
        if (timeout)
          clearTimeout(timeout);
      }
    },
    focusPath: () => focusPath$1
  };
};
const layoutQueue = /* @__PURE__ */ new Set();
let dynamicSizedNodeCount = 0;
let flushQueued = false;
function flushLayout() {
  if (flushQueued)
    return;
  flushQueued = true;
  setTimeout(() => {
    const queue = [...layoutQueue];
    layoutQueue.clear();
    for (let i = queue.length - 1; i >= 0; i--) {
      const node = queue[i];
      node.updateLayout();
    }
    flushQueued = false;
    dynamicSizedNodeCount = 0;
  }, 0);
}
function convertEffectsToShader(styleEffects) {
  const effects = [];
  let index = 0;
  for (const [type, props] of Object.entries(styleEffects)) {
    effects.push({ name: "effect".concat(index), type, props });
    index++;
  }
  return createShader("DynamicShader", { effects });
}
function borderAccessor(direction = "") {
  return {
    set(value) {
      if (isNumber(value)) {
        value = { width: value, color: 255 };
      }
      this.effects = this.effects ? {
        ...this.effects || {},
        ...{ ["border".concat(direction)]: value }
      } : { ["border".concat(direction)]: value };
    },
    get() {
      var _a;
      return (_a = this.effects) == null ? void 0 : _a["border".concat(direction)];
    }
  };
}
const LightningRendererNumberProps = [
  "alpha",
  "color",
  "colorTop",
  "colorRight",
  "colorLeft",
  "colorBottom",
  "colorTl",
  "colorTr",
  "colorBl",
  "colorBr",
  "height",
  "fontSize",
  "lineHeight",
  "mount",
  "mountX",
  "mountY",
  "pivot",
  "pivotX",
  "pivotY",
  "rotation",
  "scale",
  "scaleX",
  "scaleY",
  "width",
  "worldX",
  "worldY",
  "x",
  "y",
  "zIndex",
  "zIndexLocked"
];
const LightningRendererNonAnimatingProps = [
  "absX",
  "absY",
  "autosize",
  "clipping",
  "contain",
  "data",
  "fontFamily",
  "fontStretch",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "maxLines",
  "offsetY",
  "overflowSuffix",
  "rtt",
  "scrollable",
  "scrollY",
  "src",
  "text",
  "textAlign",
  "textBaseline",
  "textOverflow",
  "texture",
  "textureOptions",
  "verticalAlign",
  "wordWrap"
];
class ElementNode extends Object {
  constructor(name) {
    super();
    this._type = name === "text" ? NodeType.TextNode : NodeType.Element;
    this.rendered = false;
    this.lng = {};
    this.children = [];
  }
  get effects() {
    return this._effects;
  }
  set effects(v) {
    this._effects = v;
    if (this.rendered) {
      this.shader = convertEffectsToShader(v);
    }
  }
  set id(id) {
    var _a;
    this._id = id;
    if ((_a = Config.rendererOptions) == null ? void 0 : _a.inspector) {
      this.data = { ...this.data, testId: id };
    }
  }
  get id() {
    return this._id;
  }
  get parent() {
    return this._parent;
  }
  set parent(p) {
    var _a;
    this._parent = p;
    if (this.rendered) {
      this.lng.parent = (_a = p == null ? void 0 : p.lng) != null ? _a : null;
    }
  }
  insertChild(node, beforeNode) {
    node.parent = this;
    if (beforeNode) {
      this.removeChild(node);
      const index = this.children.indexOf(beforeNode);
      if (index >= 0) {
        this.children.splice(index, 0, node);
        return;
      }
    }
    this.children.push(node);
  }
  removeChild(node) {
    const nodeIndexToRemove = this.children.indexOf(node);
    if (nodeIndexToRemove >= 0) {
      this.children.splice(nodeIndexToRemove, 1);
    }
  }
  get selectedNode() {
    const selectedIndex = this.selected || 0;
    for (let i = selectedIndex; i < this.children.length; i++) {
      const element = this.children[i];
      if (isElementNode(element)) {
        this.selected = i;
        return element;
      }
    }
    return void 0;
  }
  set shader(shaderProps) {
    let shProps = shaderProps;
    if (isArray(shaderProps)) {
      shProps = createShader(...shaderProps);
    }
    this.lng.shader = shProps;
  }
  _sendToLightningAnimatable(name, value) {
    if (this.transition && this.rendered && Config.animationsEnabled && (this.transition === true || this.transition[name])) {
      const animationSettings = this.transition === true || this.transition[name] === true ? void 0 : this.transition[name];
      const animationController = this.animate({ [name]: value }, animationSettings);
      if (isFunc(this.onAnimationStarted)) {
        animationController.once("animating", (controller) => {
          var _a;
          (_a = this.onAnimationStarted) == null ? void 0 : _a.call(this, controller, name, value);
        });
      }
      if (isFunc(this.onAnimationFinished)) {
        animationController.once("stopped", (controller) => {
          var _a;
          (_a = this.onAnimationFinished) == null ? void 0 : _a.call(this, controller, name, value);
        });
      }
      return animationController.start();
    }
    this.lng[name] = value;
  }
  animate(props, animationSettings) {
    assertTruthy(this.rendered, "Node must be rendered before animating");
    return this.lng.animate(props, animationSettings || this.animationSettings);
  }
  chain(props, animationSettings) {
    if (this._animationRunning) {
      this._animationQueue = [];
      this._animationRunning = false;
    }
    if (animationSettings) {
      this._animationQueueSettings = animationSettings;
    } else if (!this._animationQueueSettings) {
      this._animationQueueSettings = animationSettings || this.animationSettings;
    }
    animationSettings = animationSettings || this._animationQueueSettings;
    this._animationQueue = this._animationQueue || [];
    this._animationQueue.push({ props, animationSettings });
    return this;
  }
  async start() {
    let animation = this._animationQueue.shift();
    while (animation) {
      this._animationRunning = true;
      await this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();
      animation = this._animationQueue.shift();
    }
    this._animationRunning = false;
    this._animationQueueSettings = void 0;
  }
  setFocus() {
    if (this.skipFocus) {
      return;
    }
    if (this.rendered) {
      if (this.forwardFocus !== void 0) {
        if (isFunc(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== false) {
            return;
          }
        } else {
          const focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
          const nodes = this.children;
          if (focusedIndex !== null && focusedIndex < nodes.length) {
            const child = nodes[focusedIndex];
            isElementNode(child) && child.setFocus();
            return;
          }
        }
      }
      queueMicrotask(() => setActiveElement$1(this));
    } else {
      this._autofocus = true;
    }
  }
  isTextNode() {
    return this._type === NodeType.TextNode;
  }
  _layoutOnLoad() {
    dynamicSizedNodeCount++;
    this.lng.on("loaded", () => {
      layoutQueue.add(this.parent);
      flushLayout();
    });
  }
  getText() {
    let result = "";
    for (let i = 0; i < this.children.length; i++) {
      result += this.children[i].text;
    }
    return result;
  }
  destroy() {
    var _a;
    if (this._queueDelete && isINode(this.lng)) {
      this.lng.destroy();
      if ((_a = this.parent) == null ? void 0 : _a.requiresLayout()) {
        this.parent.updateLayout();
      }
    }
  }
  // Must be set before render
  set onEvents(events) {
    this._events = events;
  }
  get onEvents() {
    return this._events;
  }
  set style(values) {
    if (isArray(values)) {
      this._style = flattenStyles(values);
    } else {
      this._style = values;
    }
    for (const key2 in this._style) {
      if (this[key2] === void 0) {
        this[key2] = this._style[key2];
      }
    }
  }
  get style() {
    return this._style;
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  getChildById(id) {
    return this.children.find((c) => c.id === id);
  }
  searchChildrenById(id) {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (isElementNode(child)) {
        if (child.id === id) {
          return child;
        }
        const found = child.searchChildrenById(id);
        if (found) {
          return found;
        }
      }
    }
  }
  set states(states) {
    this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states);
    if (this.rendered) {
      this._stateChanged();
    }
  }
  get states() {
    this._states = this._states || new States(this._stateChanged.bind(this));
    return this._states;
  }
  get animationSettings() {
    return this._animationSettings || Config.animationSettings;
  }
  set animationSettings(animationSettings) {
    this._animationSettings = animationSettings;
  }
  set hidden(val) {
    this.alpha = val ? 0 : 1;
  }
  get hidden() {
    return this.alpha === 0;
  }
  set autofocus(val) {
    this._autofocus = val ? true : false;
    this._autofocus && this.setFocus();
  }
  get autofocus() {
    return this._autofocus;
  }
  requiresLayout() {
    return this.display === "flex" || this.onBeforeLayout || this.onLayout;
  }
  set updateLayoutOn(v) {
    this.updateLayout();
  }
  get updateLayoutOn() {
    return null;
  }
  updateLayout() {
    var _a, _b;
    if (this.hasChildren) {
      log("Layout: ", this);
      let changedLayout = false;
      if (isFunc(this.onBeforeLayout)) {
        console.warn("onBeforeLayout is deprecated");
        changedLayout = this.onBeforeLayout.call(this, this) || false;
      }
      if (this.display === "flex") {
        if (calculateFlex(this) || changedLayout) {
          (_a = this.parent) == null ? void 0 : _a.updateLayout();
        }
      } else if (changedLayout) {
        (_b = this.parent) == null ? void 0 : _b.updateLayout();
      }
      isFunc(this.onLayout) && this.onLayout.call(this, this);
    }
  }
  _stateChanged() {
    log("State Changed: ", this, this.states);
    if (this.forwardStates) {
      const states2 = this.states.slice();
      this.children.forEach((c) => {
        c.states = states2;
      });
    }
    const states = this.states;
    if (this._undoStyles || this.style && keyExists(this.style, states)) {
      this._undoStyles = this._undoStyles || [];
      const stylesToUndo = {};
      this._undoStyles.forEach((styleKey) => {
        stylesToUndo[styleKey] = this.style[styleKey];
      });
      const newStyles = states.reduce((acc, state) => {
        const styles2 = this.style[state];
        if (styles2) {
          acc = {
            ...acc,
            ...styles2
          };
        }
        return acc;
      }, {});
      this._undoStyles = Object.keys(newStyles);
      if (newStyles.transition !== void 0) {
        this.transition = newStyles.transition;
      }
      Object.assign(this, stylesToUndo, newStyles);
    }
  }
  render(topNode) {
    var _a;
    const node = this;
    const parent = this.parent;
    if (!parent) {
      console.warn("Parent not set - no node created for: ", this);
      return;
    }
    if (!parent.rendered) {
      console.warn("Parent not rendered yet: ", this);
      return;
    }
    if (parent.requiresLayout()) {
      layoutQueue.add(parent);
    }
    if (this.rendered) {
      return;
    }
    if (this._states) {
      this._stateChanged();
    }
    const props = node.lng;
    if (this.right || this.right === 0) {
      props.x = (parent.width || 0) - this.right;
      props.mountX = 1;
    }
    if (this.bottom || this.bottom === 0) {
      props.y = (parent.height || 0) - this.bottom;
      props.mountY = 1;
    }
    props.x = props.x || 0;
    props.y = props.y || 0;
    props.parent = parent.lng;
    if (node._effects) {
      props.shader = convertEffectsToShader(node._effects);
    }
    if (node.isTextNode()) {
      const textProps = props;
      if (Config.fontSettings) {
        for (const key2 in Config.fontSettings) {
          if (textProps[key2] === void 0) {
            textProps[key2] = Config.fontSettings[key2];
          }
        }
      }
      textProps.text = textProps.text || node.getText();
      if (textProps.textAlign && !textProps.contain) {
        console.warn("Text align requires contain: ", node.getText());
      }
      if (textProps.contain) {
        if (!textProps.width) {
          textProps.width = (parent.width || 0) - textProps.x - (textProps.marginRight || 0);
        }
        if (textProps.contain === "both" && !textProps.height && !textProps.maxLines) {
          textProps.height = (parent.height || 0) - textProps.y - (textProps.marginBottom || 0);
        } else if (textProps.maxLines === 1) {
          textProps.height = textProps.height || textProps.lineHeight || textProps.fontSize;
        }
      }
      log("Rendering: ", this, props);
      node.lng = renderer$1.createTextNode(props);
      if (parent.requiresLayout()) {
        if (!props.width || !props.height) {
          node._layoutOnLoad();
        }
      }
    } else {
      if (!props.texture) {
        if (isNaN(props.width)) {
          props.width = (parent.width || 0) - props.x;
        }
        if (isNaN(props.height)) {
          props.height = (parent.height || 0) - props.y;
        }
        if (props.rtt && !props.color) {
          props.color = 4294967295;
        }
        if (!props.color && !props.src) {
          props.color = 0;
        }
      }
      log("Rendering: ", this, props);
      node.lng = renderer$1.createNode(props);
    }
    node.rendered = true;
    if (node.autosize && parent.requiresLayout()) {
      node._layoutOnLoad();
    }
    if (node.onFail) {
      node.lng.on("failed", node.onFail);
    }
    if (node.onLoad) {
      node.lng.on("loaded", node.onLoad);
    }
    isFunc(this.onCreate) && this.onCreate.call(this, node);
    node.onEvents && node.onEvents.forEach(([name, handler]) => {
      node.lng.on(name, (inode, data) => handler(node, data));
    });
    if ((_a = node.lng) == null ? void 0 : _a.div) {
      node.lng.div.element = node;
    }
    if (node._type === NodeType.Element) {
      const numChildren = node.children.length;
      for (let i = 0; i < numChildren; i++) {
        const c = node.children[i];
        assertTruthy(c, "Child is undefined");
        if (isElementNode(c)) {
          c.render();
        } else if (c.text && c._type === NodeType.Text) {
          console.warn("TextNode outside of <Text>: ", c);
        }
      }
    }
    if (topNode && !dynamicSizedNodeCount) {
      flushLayout();
    }
    node._autofocus && node.setFocus();
  }
}
for (const key2 of LightningRendererNumberProps) {
  Object.defineProperty(ElementNode.prototype, key2, {
    get() {
      return this.lng[key2];
    },
    set(v) {
      this._sendToLightningAnimatable(key2, v);
    }
  });
}
for (const key2 of LightningRendererNonAnimatingProps) {
  Object.defineProperty(ElementNode.prototype, key2, {
    get() {
      return this.lng[key2];
    },
    set(v) {
      this.lng[key2] = v;
    }
  });
}
function createEffectAccessor(key2) {
  return {
    set(value) {
      this.effects = this.effects ? {
        ...this.effects,
        [key2]: value
      } : { [key2]: value };
    },
    get() {
      var _a;
      return (_a = this.effects) == null ? void 0 : _a[key2];
    }
  };
}
Object.defineProperties(ElementNode.prototype, {
  border: borderAccessor(),
  borderLeft: borderAccessor("Left"),
  borderRight: borderAccessor("Right"),
  borderTop: borderAccessor("Top"),
  borderBottom: borderAccessor("Bottom"),
  linearGradient: createEffectAccessor("linearGradient"),
  radialGradient: createEffectAccessor("radialGradient"),
  radialProgress: createEffectAccessor("radialProgressGradient"),
  borderRadius: {
    set(radius) {
      this.effects = this.effects ? {
        ...this.effects,
        radius: { radius }
      } : { radius: { radius } };
    },
    get() {
      var _a, _b;
      return (_b = (_a = this.effects) == null ? void 0 : _a.radius) == null ? void 0 : _b.radius;
    }
  }
});
const sharedConfig = {
  context: void 0,
  registry: void 0,
  done: false,
  getContextId() {
    return getContextId(this.context.count);
  },
  getNextContextId() {
    return getContextId(this.context.count++);
  }
};
function getContextId(count2) {
  const num = String(count2), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
  sharedConfig.context = context;
}
const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const signalOptions = {
  equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const NO_INIT = {};
var Owner = null;
let Transition = null;
let ExternalSourceConfig = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: current ? current.context : null,
    owner: current
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE);
  updateComputation(c);
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  updateComputation(c);
  return readSignal.bind(c);
}
function isPromise(v) {
  return v && typeof v === "object" && "then" in v;
}
function createResource(pSource, pFetcher, pOptions) {
  let source;
  let fetcher;
  let options;
  if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
    source = true;
    fetcher = pSource;
    options = pFetcher || {};
  } else {
    source = pSource;
    fetcher = pFetcher;
    options = {};
  }
  let pr = null, initP = NO_INIT, id = null, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
  const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
    equals: false
  }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
  if (sharedConfig.context) {
    id = sharedConfig.getNextContextId();
    if (options.ssrLoadFrom === "initial") initP = options.initialValue;
    else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
  }
  function loadEnd(p, v, error2, key2) {
    if (pr === p) {
      pr = null;
      key2 !== void 0 && (resolved = true);
      if ((p === initP || v === initP) && options.onHydrated)
        queueMicrotask(
          () => options.onHydrated(key2, {
            value: v
          })
        );
      initP = NO_INIT;
      completeLoad(v, error2);
    }
    return v;
  }
  function completeLoad(v, err) {
    runUpdates(() => {
      if (err === void 0) setValue(() => v);
      setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
      setError(err);
      for (const c of contexts.keys()) c.decrement();
      contexts.clear();
    }, false);
  }
  function read() {
    const c = SuspenseContext, v = value(), err = error();
    if (err !== void 0 && !pr) throw err;
    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();
        if (pr) {
          if (c.resolved) ;
          else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }
    return v;
  }
  function load(refetching = true) {
    if (refetching !== false && scheduled) return;
    scheduled = false;
    const lookup = dynamic ? dynamic() : source;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(value));
      return;
    }
    const p = initP !== NO_INIT ? initP : untrack(
      () => fetcher(lookup, {
        value: value(),
        refetching
      })
    );
    if (!isPromise(p)) {
      loadEnd(pr, p, void 0, lookup);
      return p;
    }
    pr = p;
    if ("value" in p) {
      if (p.status === "success") loadEnd(pr, p.value, void 0, lookup);
      else loadEnd(pr, void 0, castError(p.value), lookup);
      return p;
    }
    scheduled = true;
    queueMicrotask(() => scheduled = false);
    runUpdates(() => {
      setState(resolved ? "refreshing" : "pending");
      trigger();
    }, false);
    return p.then(
      (v) => loadEnd(p, v, void 0, lookup),
      (e) => loadEnd(p, void 0, castError(e), lookup)
    );
  }
  Object.defineProperties(read, {
    state: {
      get: () => state()
    },
    error: {
      get: () => error()
    },
    loading: {
      get() {
        const s = state();
        return s === "pending" || s === "refreshing";
      }
    },
    latest: {
      get() {
        if (!resolved) return read();
        const err = error();
        if (err && !pr) throw err;
        return value();
      }
    }
  });
  if (dynamic) createComputed(() => load(false));
  else load(false);
  return [
    read,
    {
      refetch: load,
      mutate: setValue
    }
  ];
}
function createSelector(source, fn = equalFn, options) {
  const subs = /* @__PURE__ */ new Map();
  const node = createComputation(
    (p) => {
      const v = source();
      for (const [key2, val] of subs.entries())
        if (fn(key2, v) !== fn(key2, p)) {
          for (const c of val.values()) {
            c.state = STALE;
            if (c.pure) Updates.push(c);
            else Effects.push(c);
          }
        }
      return v;
    },
    void 0,
    true,
    STALE
  );
  updateComputation(node);
  return (key2) => {
    const listener = Listener;
    if (listener) {
      let l;
      if (l = subs.get(key2)) l.add(listener);
      else subs.set(key2, l = /* @__PURE__ */ new Set([listener]));
      onCleanup(() => {
        l.delete(listener);
        !l.size && subs.delete(key2);
      });
    }
    return fn(
      key2,
      node.value
    );
  };
}
function batch(fn) {
  return runUpdates(fn, false);
}
function untrack(fn) {
  if (Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) ;
    return fn();
  } finally {
    Listener = listener;
  }
}
function on(deps, fn, options) {
  const isArray2 = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return (prevValue) => {
    let input;
    if (isArray2) {
      input = Array(deps.length);
      for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
    } else input = deps();
    if (defer) {
      defer = false;
      return prevValue;
    }
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;
  else if (Owner.cleanups === null) Owner.cleanups = [fn];
  else Owner.cleanups.push(fn);
  return fn;
}
function getListener() {
  return Listener;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  const prevListener = Listener;
  Owner = o;
  Listener = null;
  try {
    return runUpdates(fn, true);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
    Listener = prevListener;
  }
}
function startTransition(fn) {
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    runUpdates(fn, false);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
function createContext(defaultValue, options) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}
function children(fn) {
  const children2 = createMemo(fn);
  const memo2 = createMemo(() => resolveChildren(children2()));
  memo2.toArray = () => {
    const c = memo2();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo2;
}
let SuspenseContext;
function readSignal() {
  if (this.sources && this.state) {
    if (this.state === STALE) updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) ;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (false) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(
    node,
    node.value,
    time
  );
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue);
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Owner === null) ;
  else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned) Owner.owned = [c];
      else Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  if (node.state === 0) return;
  if (node.state === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (node.state === STALE) {
      updateComputation(node);
    } else if (node.state === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;
  else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e), false);
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);
    else queue[userLength++] = e;
  }
  if (sharedConfig.context) {
    if (sharedConfig.count) {
      sharedConfig.effects || (sharedConfig.effects = []);
      sharedConfig.effects.push(...queue.slice(0, userLength));
      return;
    } else if (sharedConfig.effects) {
      queue = [...sharedConfig.effects, ...queue];
      userLength += sharedConfig.effects.length;
      delete sharedConfig.effects;
    }
    setHydrateContext();
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
          runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING;
      if (o.pure) Updates.push(o);
      else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError(err, owner = Owner) {
  const error = castError(err);
  throw error;
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i = 0; i < children2.length; i++) {
      const result = resolveChildren(children2[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id, options) {
  return function provider(props) {
    let res;
    createRenderEffect(
      () => res = untrack(() => {
        Owner.context = {
          ...Owner.context,
          [id]: props.value
        };
        return children(() => props.children);
      }),
      void 0
    );
    return res;
  };
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], newLen = newItems.length, i, j;
    newItems[$TRACK];
    return untrack(() => {
      let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function indexArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], signals = [], len = 0, i;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [], newLen = newItems.length;
    newItems[$TRACK];
    return untrack(() => {
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
        return mapped;
      }
      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }
      for (i = 0; i < newLen; i++) {
        if (i < items.length && items[i] !== newItems[i]) {
          signals[i](() => newItems[i]);
        } else if (i >= items.length) {
          mapped[i] = createRoot(mapper);
        }
      }
      for (; i < items.length; i++) {
        disposers[i]();
      }
      len = signals.length = disposers.length = newLen;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });
    function mapper(disposer) {
      disposers[i] = disposer;
      const [s, set] = createSignal(newItems[i]);
      signals[i] = set;
      return mapFn(s, i);
    }
  };
}
function createComponent$1(Comp, props) {
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    if (property === $PROXY) return true;
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
  for (let i = 0, length = this.length; i < length; ++i) {
    const v = this[i]();
    if (v !== void 0) return v;
  }
}
function mergeProps$1(...sources) {
  let proxy = false;
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i];
    proxy = proxy || !!s && $PROXY in s;
    sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
  }
  if (proxy) {
    return new Proxy(
      {
        get(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            const v = resolveSource(sources[i])[property];
            if (v !== void 0) return v;
          }
        },
        has(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            if (property in resolveSource(sources[i])) return true;
          }
          return false;
        },
        keys() {
          const keys = [];
          for (let i = 0; i < sources.length; i++)
            keys.push(...Object.keys(resolveSource(sources[i])));
          return [...new Set(keys)];
        }
      },
      propTraps
    );
  }
  const sourcesMap = {};
  const defined = /* @__PURE__ */ Object.create(null);
  for (let i = sources.length - 1; i >= 0; i--) {
    const source = sources[i];
    if (!source) continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    for (let i2 = sourceKeys.length - 1; i2 >= 0; i2--) {
      const key2 = sourceKeys[i2];
      if (key2 === "__proto__" || key2 === "constructor") continue;
      const desc = Object.getOwnPropertyDescriptor(source, key2);
      if (!defined[key2]) {
        defined[key2] = desc.get ? {
          enumerable: true,
          configurable: true,
          get: resolveSources.bind(sourcesMap[key2] = [desc.get.bind(source)])
        } : desc.value !== void 0 ? desc : void 0;
      } else {
        const sources2 = sourcesMap[key2];
        if (sources2) {
          if (desc.get) sources2.push(desc.get.bind(source));
          else if (desc.value !== void 0) sources2.push(() => desc.value);
        }
      }
    }
  }
  const target = {};
  const definedKeys = Object.keys(defined);
  for (let i = definedKeys.length - 1; i >= 0; i--) {
    const key2 = definedKeys[i], desc = defined[key2];
    if (desc && desc.get) Object.defineProperty(target, key2, desc);
    else target[key2] = desc ? desc.value : void 0;
  }
  return target;
}
function splitProps(props, ...keys) {
  if ($PROXY in props) {
    const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
    const res = keys.map((k) => {
      return new Proxy(
        {
          get(property) {
            return k.includes(property) ? props[property] : void 0;
          },
          has(property) {
            return k.includes(property) && property in props;
          },
          keys() {
            return k.filter((property) => property in props);
          }
        },
        propTraps
      );
    });
    res.push(
      new Proxy(
        {
          get(property) {
            return blocked.has(property) ? void 0 : props[property];
          },
          has(property) {
            return blocked.has(property) ? false : property in props;
          },
          keys() {
            return Object.keys(props).filter((k) => !blocked.has(k));
          }
        },
        propTraps
      )
    );
    return res;
  }
  const otherObject = {};
  const objects = keys.map(() => ({}));
  for (const propName of Object.getOwnPropertyNames(props)) {
    const desc = Object.getOwnPropertyDescriptor(props, propName);
    const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
    let blocked = false;
    let objectIndex = 0;
    for (const k of keys) {
      if (k.includes(propName)) {
        blocked = true;
        isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
      }
      ++objectIndex;
    }
    if (!blocked) {
      isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
    }
  }
  return [...objects, otherObject];
}
function lazy(fn) {
  let comp;
  let p;
  const wrap = (props) => {
    const ctx = sharedConfig.context;
    if (ctx) {
      const [s, set] = createSignal();
      sharedConfig.count || (sharedConfig.count = 0);
      sharedConfig.count++;
      (p || (p = fn())).then((mod) => {
        !sharedConfig.done && setHydrateContext(ctx);
        sharedConfig.count--;
        set(() => mod.default);
        setHydrateContext();
      });
      comp = s;
    } else if (!comp) {
      const [s] = createResource(() => (p || (p = fn())).then((mod) => mod.default));
      comp = s;
    }
    let Comp;
    return createMemo(
      () => (Comp = comp()) ? untrack(() => {
        if (false) ;
        if (!ctx || sharedConfig.done) return Comp(props);
        const c = sharedConfig.context;
        setHydrateContext(ctx);
        const r = Comp(props);
        setHydrateContext(c);
        return r;
      }) : ""
    );
  };
  wrap.preload = () => p || ((p = fn()).then((mod) => comp = () => mod.default), p);
  return wrap;
}
const narrowedError = (name) => "Stale read from <".concat(name, ">.");
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback || void 0));
}
function Show(props) {
  const keyed = props.keyed;
  const condition = createMemo(() => props.when, void 0, {
    equals: (a, b) => keyed ? a === b : !a === !b
  });
  return createMemo(
    () => {
      const c = condition();
      if (c) {
        const child = props.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(
          () => child(
            keyed ? c : () => {
              if (!untrack(condition)) throw narrowedError("Show");
              return props.when;
            }
          )
        ) : child;
      }
      return props.fallback;
    },
    void 0,
    void 0
  );
}
const DEV = void 0;
const [activeElement, setActiveElement] = createSignal(void 0);
function hexColor(color = "") {
  if (isInteger(color)) {
    return color;
  }
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      return Number(
        color.replace("#", "0x") + (color.length === 7 ? "ff" : "")
      );
    }
    if (color.startsWith("0x")) {
      return Number(color);
    }
    return Number("0x" + (color.length === 6 ? color + "ff" : color));
  }
  return 0;
}
function createRenderer$1({
  createElement: createElement2,
  createTextNode: createTextNode2,
  isTextNode,
  replaceText,
  insertNode: insertNode2,
  removeNode,
  setProperty,
  getParentNode,
  getFirstChild,
  getNextSibling
}) {
  function insert2(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t = typeof value, multi = marker !== void 0;
    if (t === "string" || t === "number") {
      if (t === "number") value = value.toString();
      if (multi) {
        let node = current[0];
        if (node && isTextNode(node)) {
          replaceText(node, value);
        } else node = createTextNode2(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          replaceText(getFirstChild(parent), current = value);
        } else {
          cleanChildren(parent, current, marker, createTextNode2(value));
          current = value;
        }
      }
    } else if (value == null || t === "boolean") {
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function") v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      if (normalizeIncomingArray(array, value, unwrapArray)) {
        createRenderEffect(
          () => current = insertExpression(parent, array, current, marker, true)
        );
        return () => current;
      }
      if (array.length === 0) {
        const replacement = cleanChildren(parent, current, marker);
        if (multi) return current = replacement;
      } else {
        if (Array.isArray(current)) {
          if (current.length === 0) {
            appendNodes(parent, array, marker);
          } else reconcileArrays(parent, current, array);
        } else if (current == null || current === "") {
          appendNodes(parent, array);
        } else {
          reconcileArrays(parent, multi && current || [getFirstChild(parent)], array);
        }
      }
      current = array;
    } else {
      if (Array.isArray(current)) {
        if (multi) return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !getFirstChild(parent)) {
        insertNode2(parent, value);
      } else replaceNode(parent, value, getFirstChild(parent));
      current = value;
    }
    return current;
  }
  function normalizeIncomingArray(normalized, array, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i], t;
      if (item == null || item === true || item === false) ;
      else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item) || dynamic;
      } else if ((t = typeof item) === "string" || t === "number") {
        normalized.push(createTextNode2(item));
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function") item = item();
          dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else normalized.push(item);
    }
    return dynamic;
  }
  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
        while (bStart < bEnd) insertNode2(parentNode, b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = getNextSibling(a[--aEnd]);
        insertNode2(parentNode, b[bStart++], getNextSibling(a[aStart++]));
        insertNode2(parentNode, b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = /* @__PURE__ */ new Map();
          let i = bStart;
          while (i < bEnd) map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart, sequence = 1, t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence) break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index) insertNode2(parentNode, b[bStart++], node);
            } else replaceNode(parentNode, b[bStart++], a[aStart++]);
          } else aStart++;
        } else removeNode(parentNode, a[aStart++]);
      }
    }
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) {
      let removed;
      while (removed = getFirstChild(parent)) removeNode(parent, removed);
      replacement && insertNode2(parent, replacement);
      return "";
    }
    const node = replacement || createTextNode2("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = getParentNode(el) === parent;
          if (!inserted && !i)
            isParent ? replaceNode(parent, node, el) : insertNode2(parent, node, marker);
          else isParent && removeNode(parent, el);
        } else inserted = true;
      }
    } else insertNode2(parent, node, marker);
    return [node];
  }
  function appendNodes(parent, array, marker) {
    for (let i = 0, len = array.length; i < len; i++) insertNode2(parent, array[i], marker);
  }
  function replaceNode(parent, newNode, oldNode) {
    insertNode2(parent, newNode, oldNode);
    removeNode(parent, oldNode);
  }
  function spreadExpression(node, props, prevProps = {}, skipChildren) {
    props || (props = {});
    if (!skipChildren) {
      createRenderEffect(
        () => prevProps.children = insertExpression(node, props.children, prevProps.children)
      );
    }
    createRenderEffect(() => props.ref && props.ref(node));
    createRenderEffect(() => {
      for (const prop in props) {
        if (prop === "children" || prop === "ref") continue;
        const value = props[prop];
        if (value === prevProps[prop]) continue;
        setProperty(node, prop, value, prevProps[prop]);
        prevProps[prop] = value;
      }
    });
    return prevProps;
  }
  return {
    render(code, element) {
      let disposer;
      createRoot((dispose2) => {
        disposer = dispose2;
        insert2(element, code());
      });
      return disposer;
    },
    insert: insert2,
    spread(node, accessor, skipChildren) {
      if (typeof accessor === "function") {
        createRenderEffect((current) => spreadExpression(node, accessor(), current, skipChildren));
      } else spreadExpression(node, accessor, void 0, skipChildren);
    },
    createElement: createElement2,
    createTextNode: createTextNode2,
    insertNode: insertNode2,
    setProp(node, name, value, prev) {
      setProperty(node, name, value, prev);
      return value;
    },
    mergeProps: mergeProps$1,
    effect: createRenderEffect,
    memo: createMemo,
    createComponent: createComponent$1,
    use(fn, element, arg) {
      return untrack(() => fn(element, arg));
    }
  };
}
function createRenderer$2(options) {
  const renderer2 = createRenderer$1(options);
  renderer2.mergeProps = mergeProps$1;
  return renderer2;
}
const nodeOpts = {
  createElement(name) {
    return new ElementNode(name);
  },
  createTextNode(text2) {
    return { _type: NodeType.Text, text: text2, parent: void 0 };
  },
  replaceText(node, value) {
    log("Replace Text: ", node, value);
    node.text = value;
    const parent = node.parent;
    assertTruthy(parent);
    parent.text = parent.getText();
  },
  setProperty(node, name, value = true) {
    node[name] = value;
  },
  insertNode(parent, node, anchor) {
    log("INSERT: ", parent, node, anchor);
    parent.insertChild(node, anchor);
    node._queueDelete = false;
    if (node instanceof ElementNode) {
      parent.rendered && node.render(true);
    } else if (parent.isTextNode()) {
      parent.text = parent.getText();
    }
  },
  isTextNode(node) {
    return node.isTextNode();
  },
  removeNode(parent, node) {
    log("REMOVE: ", parent, node);
    parent.removeChild(node);
    node._queueDelete = true;
    if (node instanceof ElementNode) {
      queueMicrotask(() => node.destroy());
    }
  },
  getParentNode(node) {
    return node.parent;
  },
  getFirstChild(node) {
    return node.children[0];
  },
  getNextSibling(node) {
    const children2 = node.parent.children || [];
    const index = children2.indexOf(node) + 1;
    if (index < children2.length) {
      return children2[index];
    }
    return void 0;
  }
};
const solidRenderer = createRenderer$2(nodeOpts);
let renderer;
const rootNode = nodeOpts.createElement("App");
const render$1 = function(code) {
  return solidRenderer.render(code, rootNode);
};
function createRenderer(rendererOptions, node) {
  renderer = startLightningRenderer(
    Config.rendererOptions,
    "app"
  );
  Config.setActiveElement = setActiveElement;
  rootNode.lng = renderer.root;
  rootNode.rendered = true;
  return {
    renderer,
    rootNode,
    render: render$1
  };
}
const {
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
  use
} = solidRenderer;
const View = (props) => {
  const el = createElement("node");
  spread(el, props, false);
  return el;
};
const Text$5 = (props) => {
  const el = createElement("text");
  spread(el, props, false);
  return el;
};
const FLOATS_PER_GLYPH = 24;
function getStartConditions(sdfFontSize, sdfLineHeight, fontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH) {
  const startLineIndex = Math.min(Math.max(renderWindow.firstLineIdx, 0), lineCache.length);
  const sdfStartX = 0;
  const { metrics } = fontFace;
  assertTruthy(metrics, "Font metrics not loaded");
  assertTruthy(fontFace.data, "Font data not loaded");
  const sdfBareLineHeight = (metrics.ascender - metrics.descender) * sdfFontSize;
  let sdfVerticalAlignYOffset = 0;
  if (verticalAlign === "middle") {
    sdfVerticalAlignYOffset = (sdfLineHeight - sdfBareLineHeight) / 2;
  } else if (verticalAlign === "bottom") {
    sdfVerticalAlignYOffset = sdfLineHeight - sdfBareLineHeight;
  }
  const sdfOffsetY = offsetY / fontSizeRatio;
  const sdfEncodedAscender = fontFace.data.common.base;
  const sdfConfiguredAscender = metrics.ascender * sdfFontSize;
  const sdfAscenderAdjOffset = sdfConfiguredAscender - sdfEncodedAscender;
  const sdfStartY = sdfOffsetY + sdfAscenderAdjOffset + startLineIndex * sdfLineHeight + sdfVerticalAlignYOffset;
  if (textH && sdfStartY >= textH / fontSizeRatio) {
    return;
  }
  return {
    sdfX: sdfStartX,
    sdfY: sdfStartY,
    lineIndex: startLineIndex
  };
}
class PeekableIterator {
  constructor(iterator, indexBase = 0) {
    __publicField(this, "iterator");
    __publicField(this, "peekBuffer", []);
    __publicField(this, "_lastIndex");
    this.iterator = iterator;
    this.iterator = iterator;
    this._lastIndex = indexBase - 1;
    this.peekBuffer = [];
  }
  next() {
    const nextResult = this.peekBuffer.length > 0 ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.peekBuffer.pop()
    ) : this.iterator.next();
    if (nextResult.done) {
      this._lastIndex = -1;
    } else {
      this._lastIndex++;
    }
    return nextResult;
  }
  peek() {
    if (this.peekBuffer.length > 0) {
      return this.peekBuffer[0];
    }
    const result = this.iterator.next();
    this.peekBuffer.push(result);
    return result;
  }
  get lastIndex() {
    return this._lastIndex;
  }
}
function* getUnicodeCodepoints(text2, start = 0) {
  let i = start;
  while (i < text2.length) {
    const codePoint = text2.codePointAt(i);
    if (codePoint === void 0) {
      throw new Error("Invalid Unicode code point");
    }
    yield codePoint;
    i += codePoint <= 65535 ? 1 : 2;
  }
}
function measureText(text2, shaperProps, shaper) {
  const glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, 0), 0));
  let width = 0;
  for (const glyph of glyphs) {
    if (glyph.mapped) {
      width += glyph.xAdvance;
    }
  }
  return width;
}
function layoutText(curLineIndex, startX, startY, text2, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, rwSdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines) {
  assertTruthy(trFontFace, "Font face must be loaded");
  assertTruthy(trFontFace.loaded, "Font face must be loaded");
  assertTruthy(trFontFace.data, "Font face must be loaded");
  assertTruthy(trFontFace.shaper, "Font face must be loaded");
  const fontSizeRatio = fontSize / trFontFace.data.info.size;
  const vertexLineHeight = lineHeight / fontSizeRatio;
  const vertexW = width / fontSizeRatio;
  const vertexLSpacing = letterSpacing / fontSizeRatio;
  const startingLineCacheEntry = lineCache[curLineIndex];
  const startingCodepointIndex = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.codepointIndex) || 0;
  const startingMaxX = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxX) || 0;
  const startingMaxY = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxY) || 0;
  let maxX = startingMaxX;
  let maxY = startingMaxY;
  let curX = startX;
  let curY = startY;
  let bufferOffset = 0;
  const lastWord = {
    codepointIndex: -1,
    bufferOffset: -1,
    xStart: -1
  };
  const shaper = trFontFace.shaper;
  const shaperProps = {
    letterSpacing: vertexLSpacing
  };
  let glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, startingCodepointIndex), startingCodepointIndex));
  let glyphResult;
  let curLineBufferStart = -1;
  const bufferLineInfos = [];
  const vertexTruncateHeight = height / fontSizeRatio;
  const overflowSuffVertexWidth = measureText(overflowSuffix, shaperProps, shaper);
  let moreLines = true;
  while (moreLines) {
    const nextLineWillFit = (maxLines === 0 || curLineIndex + 1 < maxLines) && (contain !== "both" || scrollable || curY + vertexLineHeight + trFontFace.maxCharHeight <= vertexTruncateHeight);
    const lineVertexW = nextLineWillFit ? vertexW : vertexW - overflowSuffVertexWidth;
    let xStartLastWordBoundary = 0;
    const lineIsBelowWindowTop = curY + trFontFace.maxCharHeight >= rwSdf.y1;
    const lineIsAboveWindowBottom = curY <= rwSdf.y2;
    const lineIsWithinWindow = lineIsBelowWindowTop && lineIsAboveWindowBottom;
    while ((glyphResult = glyphs.next()) && !glyphResult.done) {
      const glyph = glyphResult.value;
      if (curLineIndex === lineCache.length) {
        lineCache.push({
          codepointIndex: glyph.cluster,
          maxY,
          maxX
        });
      } else if (curLineIndex > lineCache.length) {
        throw new Error("Unexpected lineCache length");
      }
      if (glyph.codepoint === 32 || glyph.codepoint === 10) {
        if (lastWord.codepointIndex !== -1) {
          lastWord.codepointIndex = -1;
          xStartLastWordBoundary = curX;
        }
      } else if (lastWord.codepointIndex === -1) {
        lastWord.codepointIndex = glyph.cluster;
        lastWord.bufferOffset = bufferOffset;
        lastWord.xStart = xStartLastWordBoundary;
      }
      if (glyph.mapped) {
        const charEndX = curX + glyph.xOffset + glyph.width;
        if (
          // We are containing the text
          contain !== "none" && // The current glyph reaches outside the contained width
          charEndX >= lineVertexW && // There is a last word that we can break to the next line
          lastWord.codepointIndex !== -1 && // Prevents infinite loop when a single word is longer than the width
          lastWord.xStart > 0
        ) {
          if (nextLineWillFit) {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text2, lastWord.codepointIndex), lastWord.codepointIndex));
            bufferOffset = lastWord.bufferOffset;
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            curX = lastWord.xStart;
            bufferOffset = lastWord.bufferOffset;
            contain = "none";
          }
        } else {
          const quadX = curX + glyph.xOffset;
          const quadY = curY + glyph.yOffset;
          if (lineIsWithinWindow) {
            if (curLineBufferStart === -1) {
              curLineBufferStart = bufferOffset;
            }
            const atlasEntry = trFontFace.getAtlasEntry(glyph.glyphId);
            const u = atlasEntry.x / trFontFace.data.common.scaleW;
            const v = atlasEntry.y / trFontFace.data.common.scaleH;
            const uvWidth = atlasEntry.width / trFontFace.data.common.scaleW;
            const uvHeight = atlasEntry.height / trFontFace.data.common.scaleH;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v + uvHeight;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v + uvHeight;
          }
          maxY = Math.max(maxY, quadY + glyph.height);
          maxX = Math.max(maxX, quadX + glyph.width);
          curX += glyph.xAdvance;
        }
      } else {
        if (glyph.codepoint === 10) {
          if (nextLineWillFit) {
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            contain = "none";
          }
        }
      }
    }
    if (curLineBufferStart !== -1) {
      bufferLineInfos.push({
        bufferStart: curLineBufferStart,
        bufferEnd: bufferOffset
      });
      curLineBufferStart = -1;
    }
    curX = 0;
    curY += vertexLineHeight;
    curLineIndex++;
    lastWord.codepointIndex = -1;
    xStartLastWordBoundary = 0;
    if (!forceFullLayoutCalc && contain === "both" && curY > rwSdf.y2) {
      moreLines = false;
    } else if (glyphResult && glyphResult.done) {
      moreLines = false;
    } else if (!nextLineWillFit) {
      moreLines = false;
    }
  }
  if (textAlign === "center") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = (vertexTextW - lineWidth) / 2;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  } else if (textAlign === "right") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = line.bufferEnd === line.bufferStart ? 0 : (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = vertexTextW - lineWidth;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  }
  assertTruthy(glyphResult);
  return {
    bufferNumFloats: bufferOffset,
    bufferNumQuads: bufferOffset / 16,
    layoutNumCharacters: glyphResult.done ? text2.length - startingCodepointIndex : glyphResult.value.cluster - startingCodepointIndex + 1,
    fullyProcessed: !!glyphResult.done,
    maxX,
    maxY,
    numLines: lineCache.length
  };
}
function roundUpToMultiple(value, multiple) {
  return Math.ceil(value / multiple) * multiple;
}
function roundDownToMultiple(value, multiple) {
  return Math.floor(value / multiple) * multiple;
}
function setRenderWindow(outRenderWindow, x, y, scrollY, lineHeight, bufferMargin, visibleWindow, fontSizeRatio) {
  const { screen, sdf } = outRenderWindow;
  if (!isBoundPositive(visibleWindow)) {
    screen.x1 = 0;
    screen.y1 = 0;
    screen.x2 = 0;
    screen.y2 = 0;
    sdf.x1 = 0;
    sdf.y1 = 0;
    sdf.x2 = 0;
    sdf.y2 = 0;
    outRenderWindow.numLines = 0;
    outRenderWindow.firstLineIdx = 0;
  } else {
    const x1 = visibleWindow.x1 - x;
    const x2 = x1 + (visibleWindow.x2 - visibleWindow.x1);
    const y1Base = visibleWindow.y1 - y + scrollY;
    const y1 = roundDownToMultiple(y1Base - bufferMargin, lineHeight || 1);
    const y2 = roundUpToMultiple(y1Base + (visibleWindow.y2 - visibleWindow.y1) + bufferMargin, lineHeight || 1);
    screen.x1 = x1;
    screen.y1 = y1;
    screen.x2 = x2;
    screen.y2 = y2;
    sdf.x1 = x1 / fontSizeRatio;
    sdf.y1 = y1 / fontSizeRatio;
    sdf.x2 = x2 / fontSizeRatio;
    sdf.y2 = y2 / fontSizeRatio;
    outRenderWindow.numLines = Math.ceil((y2 - y1) / lineHeight);
    outRenderWindow.firstLineIdx = lineHeight ? Math.floor(y1 / lineHeight) : 0;
  }
  outRenderWindow.valid = true;
}
function calcDefaultLineHeight(metrics, fontSize) {
  return fontSize * (metrics.ascender - metrics.descender + metrics.lineGap);
}
const tmpRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
class SdfTextRenderer extends TextRenderer {
  constructor(stage) {
    super(stage);
    /**
     * Map of font family names to a set of font faces.
     */
    __publicField(this, "ssdfFontFamilies", {});
    __publicField(this, "msdfFontFamilies", {});
    __publicField(this, "fontFamilyArray", [
      this.ssdfFontFamilies,
      this.msdfFontFamilies
    ]);
    __publicField(this, "sdfShader");
    __publicField(this, "rendererBounds");
    __publicField(this, "type", "sdf");
    this.sdfShader = this.stage.shManager.loadShader("SdfShader").shader;
    this.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: this.stage.options.appWidth,
      y2: this.stage.options.appHeight
    };
  }
  //#region Overrides
  getPropertySetters() {
    return {
      fontFamily: (state, value) => {
        state.props.fontFamily = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontWeight: (state, value) => {
        state.props.fontWeight = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStyle: (state, value) => {
        state.props.fontStyle = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStretch: (state, value) => {
        state.props.fontStretch = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontSize: (state, value) => {
        state.props.fontSize = value;
        this.invalidateLayoutCache(state);
      },
      text: (state, value) => {
        state.props.text = value;
        this.invalidateLayoutCache(state);
      },
      textAlign: (state, value) => {
        state.props.textAlign = value;
        this.invalidateLayoutCache(state);
      },
      color: (state, value) => {
        state.props.color = value;
      },
      x: (state, value) => {
        state.props.x = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsX(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      y: (state, value) => {
        state.props.y = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsY(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      contain: (state, value) => {
        state.props.contain = value;
        this.invalidateLayoutCache(state);
      },
      width: (state, value) => {
        state.props.width = value;
        if (state.props.contain !== "none") {
          this.invalidateLayoutCache(state);
        }
      },
      height: (state, value) => {
        state.props.height = value;
        if (state.props.contain === "both") {
          this.invalidateLayoutCache(state);
        }
      },
      offsetY: (state, value) => {
        state.props.offsetY = value;
        this.invalidateLayoutCache(state);
      },
      scrollable: (state, value) => {
        state.props.scrollable = value;
        this.invalidateLayoutCache(state);
      },
      scrollY: (state, value) => {
        state.props.scrollY = value;
        this.scheduleUpdateState(state);
      },
      letterSpacing: (state, value) => {
        state.props.letterSpacing = value;
        this.invalidateLayoutCache(state);
      },
      lineHeight: (state, value) => {
        state.props.lineHeight = value;
        state.resLineHeight = void 0;
        this.invalidateLayoutCache(state);
      },
      maxLines: (state, value) => {
        state.props.maxLines = value;
        this.invalidateLayoutCache(state);
      },
      textBaseline: (state, value) => {
        state.props.textBaseline = value;
        this.invalidateLayoutCache(state);
      },
      verticalAlign: (state, value) => {
        state.props.verticalAlign = value;
        this.invalidateLayoutCache(state);
      },
      overflowSuffix: (state, value) => {
        state.props.overflowSuffix = value;
        this.invalidateLayoutCache(state);
      },
      debug: (state, value) => {
        state.props.debug = value;
      }
    };
  }
  canRenderFont(props) {
    const { fontFamily } = props;
    return fontFamily in this.ssdfFontFamilies || fontFamily in this.msdfFontFamilies || fontFamily === "$$SDF_FAILURE_TEST$$";
  }
  isFontFaceSupported(fontFace) {
    return fontFace instanceof SdfTrFontFace;
  }
  addFontFace(fontFace) {
    assertTruthy(fontFace instanceof SdfTrFontFace);
    const familyName = fontFace.fontFamily;
    const fontFamiles = fontFace.type === "ssdf" ? this.ssdfFontFamilies : fontFace.type === "msdf" ? this.msdfFontFamilies : void 0;
    if (!fontFamiles) {
      console.warn("Invalid font face type: ".concat(fontFace.type));
      return;
    }
    let faceSet = fontFamiles[familyName];
    if (!faceSet) {
      faceSet = /* @__PURE__ */ new Set();
      fontFamiles[familyName] = faceSet;
    }
    faceSet.add(fontFace);
  }
  createState(props) {
    return {
      props,
      status: "initialState",
      updateScheduled: false,
      emitter: new EventEmitter(),
      lineCache: [],
      forceFullLayoutCalc: false,
      renderWindow: {
        screen: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        sdf: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        firstLineIdx: 0,
        numLines: 0,
        valid: false
      },
      elementBounds: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        valid: false
      },
      clippingRect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        valid: false
      },
      bufferNumFloats: 0,
      bufferNumQuads: 0,
      vertexBuffer: void 0,
      webGlBuffers: null,
      bufferUploaded: false,
      textH: void 0,
      textW: void 0,
      distanceRange: 0,
      trFontFace: void 0,
      isRenderable: false,
      resLineHeight: void 0,
      debugData: {
        updateCount: 0,
        layoutCount: 0,
        lastLayoutNumCharacters: 0,
        layoutSum: 0,
        drawSum: 0,
        drawCount: 0,
        bufferSize: 0
      }
    };
  }
  updateState(state) {
    let { trFontFace } = state;
    const { textH, lineCache, debugData, forceFullLayoutCalc } = state;
    debugData.updateCount++;
    if (state.status === "initialState") {
      this.setStatus(state, "loading");
    }
    if (!trFontFace) {
      trFontFace = this.resolveFontFace(state.props);
      state.trFontFace = trFontFace;
      if (!trFontFace) {
        const msg = "SdfTextRenderer: Could not resolve font face for family: '".concat(state.props.fontFamily, "'");
        console.error(msg);
        this.setStatus(state, "failed", new Error(msg));
        return;
      }
      trFontFace.texture.setRenderableOwner(state, true);
    }
    if (!trFontFace.loaded) {
      trFontFace.once("loaded", () => {
        this.scheduleUpdateState(state);
      });
      return;
    }
    assertTruthy(trFontFace.data, "Font face data should be loaded");
    assertTruthy(trFontFace.metrics, "Font face metrics should be loaded");
    const { text: text2, fontSize, x, y, contain, width, height, verticalAlign, scrollable, overflowSuffix, maxLines } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { renderWindow } = state;
    const sdfFontSize = trFontFace.data.info.size;
    const fontSizeRatio = fontSize / sdfFontSize;
    let resLineHeight = state.resLineHeight;
    if (resLineHeight === void 0) {
      const lineHeight = state.props.lineHeight;
      if (lineHeight === void 0) {
        resLineHeight = calcDefaultLineHeight(trFontFace.metrics, fontSize);
      } else {
        resLineHeight = lineHeight;
      }
      state.resLineHeight = resLineHeight;
    }
    const sdfLineHeight = resLineHeight / fontSizeRatio;
    state.distanceRange = fontSizeRatio * trFontFace.data.distanceField.distanceRange;
    const neededLength = text2.length * FLOATS_PER_GLYPH;
    let vertexBuffer = state.vertexBuffer;
    if (!vertexBuffer || vertexBuffer.length < neededLength) {
      vertexBuffer = new Float32Array(neededLength * 2);
    }
    const elementBounds = state.elementBounds;
    if (!elementBounds.valid) {
      this.setElementBoundsX(state);
      this.setElementBoundsY(state);
      elementBounds.valid = true;
    }
    if (!forceFullLayoutCalc && renderWindow.valid) {
      const rwScreen = renderWindow.screen;
      if (x + rwScreen.x1 <= elementBounds.x1 && x + rwScreen.x2 >= elementBounds.x2 && y - scrollY + rwScreen.y1 <= elementBounds.y1 && y - scrollY + rwScreen.y2 >= elementBounds.y2) {
        this.setStatus(state, "loaded");
        return;
      }
      renderWindow.valid = false;
      this.setStatus(state, "loading");
    }
    const { offsetY, textAlign } = state.props;
    if (!renderWindow.valid) {
      const isPossiblyOnScreen = boundsOverlap(elementBounds, this.rendererBounds);
      if (!isPossiblyOnScreen) {
        return;
      }
      setRenderWindow(renderWindow, x, y, scrollY, resLineHeight, contain === "both" ? elementBounds.y2 - elementBounds.y1 : 0, elementBounds, fontSizeRatio);
    }
    const start = getStartConditions(sdfFontSize, sdfLineHeight, trFontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH);
    if (!start) {
      this.setStatus(state, "loaded");
      return;
    }
    const { letterSpacing } = state.props;
    const out2 = layoutText(start.lineIndex, start.sdfX, start.sdfY, text2, textAlign, width, height, fontSize, resLineHeight, letterSpacing, vertexBuffer, contain, lineCache, renderWindow.sdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines);
    state.bufferUploaded = false;
    state.bufferNumFloats = out2.bufferNumFloats;
    state.bufferNumQuads = out2.bufferNumQuads;
    state.vertexBuffer = vertexBuffer;
    state.renderWindow = renderWindow;
    debugData.lastLayoutNumCharacters = out2.layoutNumCharacters;
    debugData.bufferSize = vertexBuffer.byteLength;
    if (out2.fullyProcessed) {
      state.textW = out2.maxX * fontSizeRatio;
      state.textH = out2.numLines * sdfLineHeight * fontSizeRatio;
    }
    this.setStatus(state, "loaded");
  }
  renderQuads(state, transform, clippingRect, alpha, parentHasRenderTexture, framebufferDimensions) {
    var _a, _b, _c;
    if (!state.vertexBuffer) {
      return;
    }
    const renderer2 = this.stage.renderer;
    assertTruthy(renderer2 instanceof WebGlCoreRenderer);
    const { fontSize, color, contain, scrollable, zIndex, debug } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { textW = 0, textH = 0, distanceRange, vertexBuffer, bufferUploaded, trFontFace, elementBounds } = state;
    let { webGlBuffers } = state;
    if (!webGlBuffers) {
      const glw = renderer2.glw;
      const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
      const webGlBuffer = glw.createBuffer();
      assertTruthy(webGlBuffer);
      state.webGlBuffers = new BufferCollection([
        {
          buffer: webGlBuffer,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 0
              // start at the beginning of the buffer
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }
      ]);
      state.bufferUploaded = false;
      assertTruthy(state.webGlBuffers);
      webGlBuffers = state.webGlBuffers;
    }
    if (!bufferUploaded) {
      const glw = renderer2.glw;
      const buffer = (_a = webGlBuffers == null ? void 0 : webGlBuffers.getBuffer("a_textureCoordinate")) != null ? _a : null;
      glw.arrayBufferData(buffer, vertexBuffer, glw.STATIC_DRAW);
      state.bufferUploaded = true;
    }
    assertTruthy(trFontFace);
    if (scrollable && contain === "both") {
      assertTruthy(elementBounds.valid);
      const elementRect = convertBoundToRect(elementBounds, tmpRect);
      if (clippingRect.valid) {
        state.clippingRect.valid = true;
        clippingRect = intersectRect(clippingRect, elementRect, state.clippingRect);
      } else {
        state.clippingRect.valid = true;
        clippingRect = copyRect(elementRect, state.clippingRect);
      }
    }
    const renderOp = new WebGlCoreRenderOp(renderer2.glw, renderer2.options, webGlBuffers, this.sdfShader, {
      transform: transform.getFloatArr(),
      // IMPORTANT: The SDF Shader expects the color NOT to be premultiplied
      // for the best blending results. Which is why we use `mergeColorAlpha`
      // instead of `mergeColorAlphaPremultiplied` here.
      color: mergeColorAlpha(color, alpha),
      size: fontSize / (((_b = trFontFace.data) == null ? void 0 : _b.info.size) || 0),
      scrollY,
      distanceRange,
      debug: debug.sdfShaderDebug
    }, alpha, clippingRect, { height: textH, width: textW }, 0, zIndex, false, parentHasRenderTexture, framebufferDimensions);
    const texture = (_c = state.trFontFace) == null ? void 0 : _c.texture;
    assertTruthy(texture);
    const ctxTexture = texture.ctxTexture;
    renderOp.addTexture(ctxTexture);
    renderOp.length = state.bufferNumFloats;
    renderOp.numQuads = state.bufferNumQuads;
    renderer2.addRenderOp(renderOp);
  }
  setIsRenderable(state, renderable) {
    var _a;
    super.setIsRenderable(state, renderable);
    (_a = state.trFontFace) == null ? void 0 : _a.texture.setRenderableOwner(state, renderable);
  }
  destroyState(state) {
    var _a;
    super.destroyState(state);
    (_a = state.trFontFace) == null ? void 0 : _a.texture.setRenderableOwner(state, false);
  }
  //#endregion Overrides
  resolveFontFace(props) {
    return TrFontManager.resolveFontFace(this.fontFamilyArray, props);
  }
  /**
   * Release the loaded SDF font face
   *
   * @param state
   */
  releaseFontFace(state) {
    state.resLineHeight = void 0;
    if (state.trFontFace) {
      state.trFontFace.texture.setRenderableOwner(state, false);
      state.trFontFace = void 0;
    }
  }
  /**
   * Invalidate the layout cache stored in the state. This will cause the text
   * to be re-layed out on the next update.
   *
   * @remarks
   * This also invalidates the visible window cache.
   *
   * @param state
   */
  invalidateLayoutCache(state) {
    state.renderWindow.valid = false;
    state.elementBounds.valid = false;
    state.textH = void 0;
    state.textW = void 0;
    state.lineCache = [];
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  setElementBoundsX(state) {
    const { x, contain, width } = state.props;
    const { elementBounds } = state;
    elementBounds.x1 = x;
    elementBounds.x2 = contain !== "none" ? x + width : Infinity;
  }
  setElementBoundsY(state) {
    const { y, contain, height } = state.props;
    const { elementBounds } = state;
    elementBounds.y1 = y;
    elementBounds.y2 = contain === "both" ? y + height : Infinity;
  }
}
const stylePropertyMap = {
  alpha: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "opacity", value: "".concat(v) };
  },
  x: (x) => {
    return { prop: "left", value: "".concat(x, "px") };
  },
  y: (y) => {
    return { prop: "top", value: "".concat(y, "px") };
  },
  width: (w) => {
    if (w === 0) {
      return null;
    }
    return { prop: "width", value: "".concat(w, "px") };
  },
  height: (h) => {
    if (h === 0) {
      return null;
    }
    return { prop: "height", value: "".concat(h, "px") };
  },
  zIndex: () => "zIndex",
  fontFamily: () => "font-family",
  fontSize: () => "font-size",
  fontStyle: () => "font-style",
  fontWeight: () => "font-weight",
  fontStretch: () => "font-stretch",
  lineHeight: () => "line-height",
  letterSpacing: () => "letter-spacing",
  textAlign: () => "text-align",
  overflowSuffix: () => "overflow-suffix",
  maxLines: () => "max-lines",
  contain: () => "contain",
  verticalAlign: () => "vertical-align",
  clipping: (v) => {
    if (v === false) {
      return null;
    }
    return { prop: "overflow", value: v ? "hidden" : "visible" };
  },
  rotation: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "transform", value: "rotate(".concat(v, "rad)") };
  },
  scale: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scale(".concat(v, ")") };
  },
  scaleX: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleX(".concat(v, ")") };
  },
  scaleY: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleY(".concat(v, ")") };
  },
  color: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "color", value: convertColorToRgba(v) };
  }
};
const convertColorToRgba = (color) => {
  const a = (color & 255) / 255;
  const b = color >> 8 & 255;
  const g = color >> 16 & 255;
  const r = color >> 24 & 255;
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
};
const domPropertyMap = {
  id: "test-id"
};
class Inspector {
  constructor(canvas, settings) {
    __publicField(this, "root", null);
    __publicField(this, "canvas", null);
    __publicField(this, "height", 1080);
    __publicField(this, "width", 1920);
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    var _a, _b, _c, _d, _e, _f;
    if (isProductionEnvironment())
      return;
    if (!settings) {
      throw new Error("settings is required");
    }
    this.height = Math.ceil((_b = settings.appHeight) != null ? _b : 1080 / ((_a = settings.deviceLogicalPixelRatio) != null ? _a : 1));
    this.width = Math.ceil((_d = settings.appWidth) != null ? _d : 1920 / ((_c = settings.deviceLogicalPixelRatio) != null ? _c : 1));
    this.scaleX = (_e = settings.deviceLogicalPixelRatio) != null ? _e : 1;
    this.scaleY = (_f = settings.deviceLogicalPixelRatio) != null ? _f : 1;
    this.canvas = canvas;
    this.root = document.createElement("div");
    this.setRootPosition();
    document.body.appendChild(this.root);
    const mutationObserver = new MutationObserver(this.setRootPosition.bind(this));
    mutationObserver.observe(canvas, {
      attributes: true,
      childList: false,
      subtree: false
    });
    const resizeObserver = new ResizeObserver(this.setRootPosition.bind(this));
    resizeObserver.observe(canvas);
    window.addEventListener("resize", this.setRootPosition.bind(this));
    console.warn("Inspector is enabled, this will impact performance");
  }
  setRootPosition() {
    if (this.root === null || this.canvas === null) {
      return;
    }
    const rect = this.canvas.getBoundingClientRect();
    const top = document.documentElement.scrollTop + rect.top;
    const left = document.documentElement.scrollLeft + rect.left;
    this.root.id = "root";
    this.root.style.left = "".concat(left, "px");
    this.root.style.top = "".concat(top, "px");
    this.root.style.width = "".concat(this.width, "px");
    this.root.style.height = "".concat(this.height, "px");
    this.root.style.position = "absolute";
    this.root.style.transformOrigin = "0 0 0";
    this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")");
    this.root.style.overflow = "hidden";
    this.root.style.zIndex = "65534";
  }
  createDiv(id, properties) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.id = id.toString();
    for (const key2 in properties) {
      this.updateNodeProperty(
        div,
        // really typescript? really?
        key2,
        properties[key2]
      );
    }
    return div;
  }
  createNode(node) {
    const div = this.createDiv(node.id, node.props);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createTextNode(node) {
    const div = this.createDiv(node.id, node.props);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createProxy(node, div) {
    return new Proxy(node, {
      set: (target, property, value) => {
        this.updateNodeProperty(div, property, value);
        return Reflect.set(target, property, value);
      },
      get: (target, property, receiver) => {
        if (property === "destroy") {
          this.destroyNode(target.id);
        }
        if (property === "animate") {
          return (props, settings) => {
            const anim = target.animate(props, settings);
            return new Proxy(anim, {
              get: (target2, property2, receiver2) => {
                if (property2 === "start") {
                  this.animateNode(div, props, settings);
                }
                return Reflect.get(target2, property2, receiver2);
              }
            });
          };
        }
        return Reflect.get(target, property, receiver);
      }
    });
  }
  destroyNode(id) {
    const div = document.getElementById(id.toString());
    div == null ? void 0 : div.remove();
  }
  updateNodeProperty(div, property, value) {
    var _a;
    if (this.root === null || value === void 0 || value === null) {
      return;
    }
    if (property === "parent") {
      const parentId = value.id;
      if (parentId === 1) {
        this.root.appendChild(div);
        return;
      }
      const parent = document.getElementById(parentId.toString());
      parent == null ? void 0 : parent.appendChild(div);
      return;
    }
    if (property === "text") {
      div.innerHTML = String(value);
      div.style.visibility = "hidden";
      return;
    }
    if (property === "src" && value) {
      div.setAttribute("data-src", String(value));
      return;
    }
    if (stylePropertyMap[property]) {
      const mappedStyleResponse = (_a = stylePropertyMap[property]) == null ? void 0 : _a.call(stylePropertyMap, value);
      if (mappedStyleResponse === null) {
        return;
      }
      if (typeof mappedStyleResponse === "string") {
        div.style.setProperty(mappedStyleResponse, String(value));
        return;
      }
      if (typeof mappedStyleResponse === "object") {
        div.style.setProperty(mappedStyleResponse.prop, mappedStyleResponse.value);
      }
      return;
    }
    if (domPropertyMap[property]) {
      const domProperty = domPropertyMap[property];
      if (!domProperty) {
        return;
      }
      div.setAttribute(String(domProperty), String(value));
      return;
    }
    if (property === "data") {
      for (const key2 in value) {
        const keyValue = value[key2];
        if (keyValue === void 0) {
          div.removeAttribute("data-".concat(key2));
        } else {
          div.setAttribute("data-".concat(key2), String(keyValue));
        }
      }
      return;
    }
  }
  // simple animation handler
  animateNode(div, props, settings) {
    const {
      duration = 1e3,
      delay: delay2 = 0
      // easing = 'linear',
      // repeat = 0,
      // loop = false,
      // stopMethod = false,
    } = settings;
    const { x, y, width, height, alpha = 1, rotation = 0, scale = 1, color } = props;
    function animate() {
      setTimeout(() => {
        div.style.top = "".concat(y, "px");
        div.style.left = "".concat(x, "px");
        div.style.width = "".concat(width, "px");
        div.style.height = "".concat(height, "px");
        div.style.opacity = "".concat(alpha);
        div.style.rotate = "".concat(rotation, "rad");
        div.style.scale = "".concat(scale);
        div.style.color = convertColorToRgba(color);
      }, duration);
    }
    setTimeout(animate, delay2);
  }
}
const $$EVENTS = "_$DX_DELEGATE";
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function eventHandler(e) {
  if (sharedConfig.registry && sharedConfig.events) {
    if (sharedConfig.events.find(([el, ev]) => ev === e)) return;
  }
  const key2 = "$$".concat(e.type);
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
  while (node) {
    const handler = node[key2];
    if (handler && !node.disabled) {
      const data = node["".concat(key2, "Data")];
      data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble) return;
    }
    node = node._$host || node.parentNode || node.host;
  }
}
const voidFn = () => void 0;
const isServer = false;
function createBeforeLeave() {
  let listeners = /* @__PURE__ */ new Set();
  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  let ignore = false;
  function confirm(to, options) {
    if (ignore)
      return !(ignore = false);
    const e = {
      to,
      options,
      defaultPrevented: false,
      preventDefault: () => e.defaultPrevented = true
    };
    for (const l of listeners)
      l.listener({
        ...e,
        from: l.location,
        retry: (force) => {
          force && (ignore = true);
          l.navigate(to, { ...options, resolve: false });
        }
      });
    return !e.defaultPrevented;
  }
  return {
    subscribe,
    confirm
  };
}
let depth;
function saveCurrentDepth() {
  if (!window.history.state || window.history.state._depth == null) {
    window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, "");
  }
  depth = window.history.state._depth;
}
{
  saveCurrentDepth();
}
function keepDepth(state) {
  return {
    ...state,
    _depth: window.history.state && window.history.state._depth
  };
}
function notifyIfNotBlocked(notify, block) {
  let ignore = false;
  return () => {
    const prevDepth = depth;
    saveCurrentDepth();
    const delta = prevDepth == null ? null : depth - prevDepth;
    if (ignore) {
      ignore = false;
      return;
    }
    if (delta && block(delta)) {
      ignore = true;
      window.history.go(-delta);
    } else {
      notify();
    }
  };
}
const hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
const trimPathRegex = /^\/+|(\/)\/+$/g;
const mockBase = "http://sr";
function normalizePath(path, omitSlash = false) {
  const s = path.replace(trimPathRegex, "$1");
  return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
  if (hasSchemeRegex.test(path)) {
    return void 0;
  }
  const basePath2 = normalizePath(base);
  const fromPath = from && normalizePath(from);
  let result = "";
  if (!fromPath || path.startsWith("/")) {
    result = basePath2;
  } else if (fromPath.toLowerCase().indexOf(basePath2.toLowerCase()) !== 0) {
    result = basePath2 + fromPath;
  } else {
    result = fromPath;
  }
  return (result || "/") + normalizePath(path, !result);
}
function invariant(value, message) {
  if (value == null) {
    throw new Error(message);
  }
  return value;
}
function joinPaths(from, to) {
  return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
  const params2 = {};
  url.searchParams.forEach((value, key2) => {
    params2[key2] = value;
  });
  return params2;
}
function createMatcher(path, partial, matchFilters) {
  const [pattern, splat] = path.split("/*", 2);
  const segments = pattern.split("/").filter(Boolean);
  const len = segments.length;
  return (location) => {
    const locSegments = location.split("/").filter(Boolean);
    const lenDiff = locSegments.length - len;
    if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) {
      return null;
    }
    const match = {
      path: len ? "" : "/",
      params: {}
    };
    const matchFilter = (s) => matchFilters === void 0 ? void 0 : matchFilters[s];
    for (let i = 0; i < len; i++) {
      const segment = segments[i];
      const locSegment = locSegments[i];
      const dynamic = segment[0] === ":";
      const key2 = dynamic ? segment.slice(1) : segment;
      if (dynamic && matchSegment(locSegment, matchFilter(key2))) {
        match.params[key2] = locSegment;
      } else if (dynamic || !matchSegment(locSegment, segment)) {
        return null;
      }
      match.path += "/".concat(locSegment);
    }
    if (splat) {
      const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
      if (matchSegment(remainder, matchFilter(splat))) {
        match.params[splat] = remainder;
      } else {
        return null;
      }
    }
    return match;
  };
}
function matchSegment(input, filter) {
  const isEqual = (s) => s.localeCompare(input, void 0, { sensitivity: "base" }) === 0;
  if (filter === void 0) {
    return true;
  } else if (typeof filter === "string") {
    return isEqual(filter);
  } else if (typeof filter === "function") {
    return filter(input);
  } else if (Array.isArray(filter)) {
    return filter.some(isEqual);
  } else if (filter instanceof RegExp) {
    return filter.test(input);
  }
  return false;
}
function scoreRoute(route) {
  const [pattern, splat] = route.pattern.split("/*", 2);
  const segments = pattern.split("/").filter(Boolean);
  return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === void 0 ? 0 : 1));
}
function createMemoObject(fn) {
  const map = /* @__PURE__ */ new Map();
  const owner = getOwner();
  return new Proxy({}, {
    get(_, property) {
      if (!map.has(property)) {
        runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
      }
      return map.get(property)();
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys() {
      return Reflect.ownKeys(fn());
    }
  });
}
function expandOptionals(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
const MAX_REDIRECTS = 100;
const RouterContextObj = createContext();
const RouteContextObj = createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
const useNavigate = () => useRouter().navigatorFactory();
const useLocation = () => useRouter().location;
const useMatch = (path, matchFilters) => {
  const location = useLocation();
  const matchers = createMemo(() => expandOptionals(path()).map((path2) => createMatcher(path2, void 0, matchFilters)));
  return createMemo(() => {
    for (const matcher of matchers()) {
      const match = matcher(location.pathname);
      if (match)
        return match;
    }
  });
};
const useParams = () => useRouter().params;
function createRoutes(routeDef, base = "") {
  const { component, preload: preload2, load, children: children2, info } = routeDef;
  const isLeaf = !children2 || Array.isArray(children2) && !children2.length;
  const shared = {
    key: routeDef,
    component,
    preload: preload2 || load,
    info
  };
  return asArray(routeDef.path).reduce((acc, originalPath) => {
    for (const expandedPath of expandOptionals(originalPath)) {
      const path = joinPaths(base, expandedPath);
      let pattern = isLeaf ? path : path.split("/*", 1)[0];
      pattern = pattern.split("/").map((s) => {
        return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
      }).join("/");
      acc.push({
        ...shared,
        originalPath,
        pattern,
        matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
      });
    }
    return acc;
  }, []);
}
function createBranch(routes, index = 0) {
  return {
    routes,
    score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
    matcher(location) {
      const matches = [];
      for (let i = routes.length - 1; i >= 0; i--) {
        const route = routes[i];
        const match = route.matcher(location);
        if (!match) {
          return null;
        }
        matches.unshift({
          ...match,
          route
        });
      }
      return matches;
    }
  };
}
function asArray(value) {
  return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", stack = [], branches = []) {
  const routeDefs = asArray(routeDef);
  for (let i = 0, len = routeDefs.length; i < len; i++) {
    const def = routeDefs[i];
    if (def && typeof def === "object") {
      if (!def.hasOwnProperty("path"))
        def.path = "";
      const routes = createRoutes(def, base);
      for (const route of routes) {
        stack.push(route);
        const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
        if (def.children && !isEmptyArray) {
          createBranches(def.children, route.pattern, stack, branches);
        } else {
          const branch = createBranch([...stack], branches.length);
          branches.push(branch);
        }
        stack.pop();
      }
    }
  }
  return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches(branches, location) {
  for (let i = 0, len = branches.length; i < len; i++) {
    const match = branches[i].matcher(location);
    if (match) {
      return match;
    }
  }
  return [];
}
function createLocation(path, state) {
  const origin = new URL(mockBase);
  const url = createMemo((prev) => {
    const path_ = path();
    try {
      return new URL(path_, origin);
    } catch (err) {
      console.error("Invalid path ".concat(path_));
      return prev;
    }
  }, origin, {
    equals: (a, b) => a.href === b.href
  });
  const pathname = createMemo(() => url().pathname);
  const search = createMemo(() => url().search, true);
  const hash = createMemo(() => url().hash);
  const key2 = () => "";
  return {
    get pathname() {
      return pathname();
    },
    get search() {
      return search();
    },
    get hash() {
      return hash();
    },
    get state() {
      return state();
    },
    get key() {
      return key2();
    },
    query: createMemoObject(on(search, () => extractSearchParams(url())))
  };
}
let intent;
function getIntent() {
  return intent;
}
function setInPreloadFn(value) {
}
function createRouterContext(integration, branches, getContext, options = {}) {
  const { signal: [source, setSource], utils = {} } = integration;
  const parsePath = utils.parsePath || ((p) => p);
  const renderPath = utils.renderPath || ((p) => p);
  const beforeLeave = utils.beforeLeave || createBeforeLeave();
  const basePath2 = resolvePath("", options.base || "");
  if (basePath2 === void 0) {
    throw new Error("".concat(basePath2, " is not a valid base path"));
  } else if (basePath2 && !source().value) {
    setSource({ value: basePath2, replace: true, scroll: false });
  }
  const [isRouting, setIsRouting] = createSignal(false);
  let lastTransitionTarget;
  const transition = (newIntent, newTarget) => {
    if (newTarget.value === reference() && newTarget.state === state())
      return;
    if (lastTransitionTarget === void 0)
      setIsRouting(true);
    intent = newIntent;
    lastTransitionTarget = newTarget;
    startTransition(() => {
      if (lastTransitionTarget !== newTarget)
        return;
      setReference(lastTransitionTarget.value);
      setState(lastTransitionTarget.state);
      submissions[1]([]);
    }).finally(() => {
      if (lastTransitionTarget !== newTarget)
        return;
      batch(() => {
        intent = void 0;
        if (newIntent === "navigate")
          navigateEnd(lastTransitionTarget);
        setIsRouting(false);
        lastTransitionTarget = void 0;
      });
    });
  };
  const [reference, setReference] = createSignal(source().value);
  const [state, setState] = createSignal(source().state);
  const location = createLocation(reference, state);
  const referrers = [];
  const submissions = createSignal([]);
  const matches = createMemo(() => {
    if (typeof options.transformUrl === "function") {
      return getRouteMatches(branches(), options.transformUrl(location.pathname));
    }
    return getRouteMatches(branches(), location.pathname);
  });
  const params2 = createMemoObject(() => {
    const m = matches();
    const params3 = {};
    for (let i = 0; i < m.length; i++) {
      Object.assign(params3, m[i].params);
    }
    return params3;
  });
  const baseRoute = {
    pattern: basePath2,
    path: () => basePath2,
    outlet: () => null,
    resolvePath(to) {
      return resolvePath(basePath2, to);
    }
  };
  createRenderEffect(on(source, (source2) => transition("native", source2), { defer: true }));
  return {
    base: baseRoute,
    location,
    params: params2,
    isRouting,
    renderPath,
    parsePath,
    navigatorFactory,
    matches,
    beforeLeave,
    preloadRoute,
    singleFlight: options.singleFlight === void 0 ? true : options.singleFlight,
    submissions
  };
  function navigateFromRoute(route, to, options2) {
    untrack(() => {
      if (typeof to === "number") {
        if (!to) {
        } else if (utils.go) {
          utils.go(to);
        } else {
          console.warn("Router integration does not support relative routing");
        }
        return;
      }
      const { replace, resolve, scroll, state: nextState } = {
        replace: false,
        resolve: true,
        scroll: true,
        ...options2
      };
      const resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
      if (resolvedTo === void 0) {
        throw new Error("Path '".concat(to, "' is not a routable path"));
      } else if (referrers.length >= MAX_REDIRECTS) {
        throw new Error("Too many redirects");
      }
      const current = reference();
      if (resolvedTo !== current || nextState !== state()) {
        if (isServer) ;
        else if (beforeLeave.confirm(resolvedTo, options2)) {
          referrers.push({ value: current, replace, scroll, state: state() });
          transition("navigate", {
            value: resolvedTo,
            state: nextState
          });
        }
      }
    });
  }
  function navigatorFactory(route) {
    route = route || useContext(RouteContextObj) || baseRoute;
    return (to, options2) => navigateFromRoute(route, to, options2);
  }
  function navigateEnd(next) {
    const first = referrers[0];
    if (first) {
      setSource({
        ...next,
        replace: first.replace,
        scroll: first.scroll
      });
      referrers.length = 0;
    }
  }
  function preloadRoute(url, options2 = {}) {
    const matches2 = getRouteMatches(branches(), url.pathname);
    const prevIntent = intent;
    intent = "preload";
    for (let match in matches2) {
      const { route, params: params3 } = matches2[match];
      route.component && route.component.preload && route.component.preload();
      const { preload: preload2 } = route;
      options2.preloadData && preload2 && runWithOwner(getContext(), () => preload2({
        params: params3,
        location: {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash,
          query: extractSearchParams(url),
          state: null,
          key: ""
        },
        intent: "preload"
      }));
    }
    intent = prevIntent;
  }
}
function createRouteContext(router, parent, outlet, match) {
  const { base, location, params: params2 } = router;
  const { pattern, component, preload: preload2 } = match().route;
  const path = createMemo(() => match().path);
  component && component.preload && component.preload();
  const data = preload2 ? preload2({ params: params2, location, intent: intent || "initial" }) : void 0;
  const route = {
    parent,
    pattern,
    path,
    outlet: () => component ? createComponent$1(component, {
      params: params2,
      location,
      data,
      get children() {
        return outlet();
      }
    }) : outlet(),
    resolvePath(to) {
      return resolvePath(base.path(), to, path());
    }
  };
  return route;
}
const createRouterComponent = (router) => (props) => {
  const {
    base
  } = props;
  const routeDefs = children(() => props.children);
  const branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
  let context;
  const routerState = createRouterContext(router, branches, () => context, {
    base,
    singleFlight: props.singleFlight,
    transformUrl: props.transformUrl
  });
  router.create && router.create(routerState);
  return createComponent(RouterContextObj.Provider, {
    value: routerState,
    get children() {
      return createComponent(Root, {
        routerState,
        get root() {
          return props.root;
        },
        get preload() {
          return props.rootPreload || props.rootLoad;
        },
        get children() {
          return [memo(() => (context = getOwner()) && null), createComponent(Routes, {
            routerState,
            get branches() {
              return branches();
            }
          })];
        }
      });
    }
  });
};
function Root(props) {
  const location = props.routerState.location;
  const params2 = props.routerState.params;
  const data = createMemo(() => props.preload && untrack(() => {
    setInPreloadFn(true);
    props.preload({
      params: params2,
      location,
      intent: getIntent() || "initial"
    });
    setInPreloadFn(false);
  }));
  return createComponent(Show, {
    get when() {
      return props.root;
    },
    keyed: true,
    get fallback() {
      return props.children;
    },
    children: (Root2) => createComponent(Root2, {
      params: params2,
      location,
      get data() {
        return data();
      },
      get children() {
        return props.children;
      }
    })
  });
}
function Routes(props) {
  const disposers = [];
  let root;
  const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
    let equal = prevMatches && nextMatches.length === prevMatches.length;
    const next = [];
    for (let i = 0, len = nextMatches.length; i < len; i++) {
      const prevMatch = prevMatches && prevMatches[i];
      const nextMatch = nextMatches[i];
      if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
        next[i] = prev[i];
      } else {
        equal = false;
        if (disposers[i]) {
          disposers[i]();
        }
        createRoot((dispose2) => {
          disposers[i] = dispose2;
          next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => props.routerState.matches()[i]);
        });
      }
    }
    disposers.splice(nextMatches.length).forEach((dispose2) => dispose2());
    if (prev && equal) {
      return prev;
    }
    root = next[0];
    return next;
  }));
  return createOutlet(() => routeStates() && root)();
}
const createOutlet = (child) => {
  return () => createComponent(Show, {
    get when() {
      return child();
    },
    keyed: true,
    children: (child2) => createComponent(RouteContextObj.Provider, {
      value: child2,
      get children() {
        return child2.outlet();
      }
    })
  });
};
const Route = (props) => {
  const childRoutes = children(() => props.children);
  return mergeProps$1(props, {
    get children() {
      return childRoutes();
    }
  });
};
function intercept([value, setValue], get2, set) {
  return [value, set ? (v) => setValue(set(v)) : setValue];
}
function querySelector(selector) {
  if (selector === "#") {
    return null;
  }
  try {
    return document.querySelector(selector);
  } catch (e) {
    return null;
  }
}
function createRouter(config) {
  let ignore = false;
  const wrap = (value) => typeof value === "string" ? { value } : value;
  const signal = intercept(createSignal(wrap(config.get()), {
    equals: (a, b) => a.value === b.value && a.state === b.state
  }), void 0, (next) => {
    !ignore && config.set(next);
    return next;
  });
  config.init && onCleanup(config.init((value = config.get()) => {
    ignore = true;
    signal[1](wrap(value));
    ignore = false;
  }));
  return createRouterComponent({
    signal,
    create: config.create,
    utils: config.utils
  });
}
function bindEvent(target, type, handler) {
  target.addEventListener(type, handler);
  return () => target.removeEventListener(type, handler);
}
function scrollToHash(hash, fallbackTop) {
  const el = querySelector("#".concat(hash));
  if (el) {
    el.scrollIntoView();
  } else if (fallbackTop) {
    window.scrollTo(0, 0);
  }
}
const actions = /* @__PURE__ */ new Map();
function setupNativeEvents(preload2 = true, explicitLinks = false, actionBase = "/_server", transformUrl) {
  return (router) => {
    const basePath2 = router.base.path();
    const navigateFromRoute = router.navigatorFactory(router.base);
    let preloadTimeout = {};
    function isSvg(el) {
      return el.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function handleAnchor(evt) {
      if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey)
        return;
      const a = evt.composedPath().find((el) => el instanceof Node && el.nodeName.toUpperCase() === "A");
      if (!a || explicitLinks && !a.hasAttribute("link"))
        return;
      const svg = isSvg(a);
      const href = svg ? a.href.baseVal : a.href;
      const target = svg ? a.target.baseVal : a.target;
      if (target || !href && !a.hasAttribute("state"))
        return;
      const rel = (a.getAttribute("rel") || "").split(/\s+/);
      if (a.hasAttribute("download") || rel && rel.includes("external"))
        return;
      const url = svg ? new URL(href, document.baseURI) : new URL(href);
      if (url.origin !== window.location.origin || basePath2 && url.pathname && !url.pathname.toLowerCase().startsWith(basePath2.toLowerCase()))
        return;
      return [a, url];
    }
    function handleAnchorClick(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      const to = router.parsePath(url.pathname + url.search + url.hash);
      const state = a.getAttribute("state");
      evt.preventDefault();
      navigateFromRoute(to, {
        resolve: false,
        replace: a.hasAttribute("replace"),
        scroll: !a.hasAttribute("noscroll"),
        state: state && JSON.parse(state)
      });
    }
    function handleAnchorPreload(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (!preloadTimeout[url.pathname])
        router.preloadRoute(url, { preloadData: a.getAttribute("preload") !== "false" });
    }
    function handleAnchorIn(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (preloadTimeout[url.pathname])
        return;
      preloadTimeout[url.pathname] = setTimeout(() => {
        router.preloadRoute(url, { preloadData: a.getAttribute("preload") !== "false" });
        delete preloadTimeout[url.pathname];
      }, 200);
    }
    function handleAnchorOut(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [, url] = res;
      if (preloadTimeout[url.pathname]) {
        clearTimeout(preloadTimeout[url.pathname]);
        delete preloadTimeout[url.pathname];
      }
    }
    function handleFormSubmit(evt) {
      if (evt.defaultPrevented)
        return;
      let actionRef = evt.submitter && evt.submitter.hasAttribute("formaction") ? evt.submitter.getAttribute("formaction") : evt.target.getAttribute("action");
      if (!actionRef)
        return;
      if (!actionRef.startsWith("https://action/")) {
        const url = new URL(actionRef, mockBase);
        actionRef = router.parsePath(url.pathname + url.search);
        if (!actionRef.startsWith(actionBase))
          return;
      }
      if (evt.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const handler = actions.get(actionRef);
      if (handler) {
        evt.preventDefault();
        const data = new FormData(evt.target, evt.submitter);
        handler.call({ r: router, f: evt.target }, evt.target.enctype === "multipart/form-data" ? data : new URLSearchParams(data));
      }
    }
    delegateEvents(["click", "submit"]);
    document.addEventListener("click", handleAnchorClick);
    if (preload2) {
      document.addEventListener("mouseover", handleAnchorIn);
      document.addEventListener("mouseout", handleAnchorOut);
      document.addEventListener("focusin", handleAnchorPreload);
      document.addEventListener("touchstart", handleAnchorPreload);
    }
    document.addEventListener("submit", handleFormSubmit);
    onCleanup(() => {
      document.removeEventListener("click", handleAnchorClick);
      if (preload2) {
        document.removeEventListener("mouseover", handleAnchorIn);
        document.removeEventListener("mouseout", handleAnchorOut);
        document.removeEventListener("focusin", handleAnchorPreload);
        document.removeEventListener("touchstart", handleAnchorPreload);
      }
      document.removeEventListener("submit", handleFormSubmit);
    });
  };
}
function hashParser(str) {
  const to = str.replace(/^.*?#/, "");
  if (!to.startsWith("/")) {
    const [, path = "/"] = window.location.hash.split("#", 2);
    return "".concat(path, "#").concat(to);
  }
  return to;
}
function HashRouter(props) {
  const getSource = () => window.location.hash.slice(1);
  const beforeLeave = createBeforeLeave();
  return createRouter({
    get: getSource,
    set({ value, replace, scroll, state }) {
      if (replace) {
        window.history.replaceState(keepDepth(state), "", "#" + value);
      } else {
        window.history.pushState(state, "", "#" + value);
      }
      const hashIndex = value.indexOf("#");
      const hash = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
      scrollToHash(hash, scroll);
      saveCurrentDepth();
    },
    init: (notify) => bindEvent(window, "hashchange", notifyIfNotBlocked(notify, (delta) => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
    create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
    utils: {
      go: (delta) => window.history.go(delta),
      renderPath: (path) => "#".concat(path),
      parsePath: hashParser,
      beforeLeave
    }
  })(props);
}
const [focusPath, setFocusPath] = createSignal([]);
const useFocusManager = (userKeyMap, keyHoldOptions) => {
  const owner = getOwner();
  const ownerContext = runWithOwner.bind(void 0, owner);
  Config.setActiveElement = (activeElm) => ownerContext(() => setActiveElement(activeElm));
  const { cleanup, focusPath: focusPathCore } = useFocusManager$1({
    userKeyMap,
    keyHoldOptions,
    ownerContext
  });
  createEffect(
    on(
      activeElement,
      () => {
        setFocusPath([...focusPathCore()]);
      },
      { defer: true }
    )
  );
  onCleanup(cleanup);
};
function flattenStrings(series = []) {
  const flattenedSeries = [];
  let i;
  for (i = 0; i < series.length; i++) {
    const s = series[i];
    if (typeof s === "string" && !s.includes("PAUSE-")) {
      flattenedSeries.push(series[i]);
    } else {
      break;
    }
  }
  return [flattenedSeries.join(",\b ")].concat(
    series.slice(i)
  );
}
function delay(pause) {
  return new Promise((resolve) => {
    setTimeout(resolve, pause);
  });
}
function speak(phrase, utterances, lang = "en-US") {
  const synth = window.speechSynthesis;
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = lang;
    utterance.onend = () => {
      resolve();
    };
    utterance.onerror = (e) => {
      reject(e);
    };
    utterances.push(utterance);
    synth.speak(utterance);
  });
}
function speakSeries(series, lang, root = true) {
  const synth = window.speechSynthesis;
  const remainingPhrases = flattenStrings(
    Array.isArray(series) ? series : [series]
  );
  const nestedSeriesResults = [];
  const utterances = [];
  let active = true;
  const seriesChain = (async () => {
    try {
      while (active && remainingPhrases.length) {
        const phrase = await Promise.resolve(remainingPhrases.shift());
        if (!active) {
          break;
        } else if (typeof phrase === "string" && phrase.includes("PAUSE-")) {
          let pause = Number(phrase.split("PAUSE-")[1]) * 1e3;
          if (isNaN(pause)) {
            pause = 0;
          }
          await delay(pause);
        } else if (typeof phrase === "string" && phrase.length) {
          const totalRetries = 3;
          let retriesLeft = totalRetries;
          while (active && retriesLeft > 0) {
            try {
              await speak(phrase, utterances, lang);
              retriesLeft = 0;
            } catch (e) {
              if (e instanceof SpeechSynthesisErrorEvent) {
                if (e.error === "network") {
                  retriesLeft--;
                  console.warn(
                    "Speech synthesis network error. Retries left: ".concat(retriesLeft)
                  );
                  await delay(500 * (totalRetries - retriesLeft));
                } else if (e.error === "canceled" || e.error === "interrupted") {
                  retriesLeft = 0;
                } else {
                  throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                }
              } else {
                throw e;
              }
            }
          }
        } else if (typeof phrase === "function") {
          const seriesResult = speakSeries(phrase(), lang, false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        } else if (Array.isArray(phrase)) {
          const seriesResult = speakSeries(phrase, lang, false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        }
      }
    } finally {
      active = false;
    }
  })();
  return {
    series: seriesChain,
    get active() {
      return active;
    },
    append: (toSpeak) => {
      remainingPhrases.push(toSpeak);
    },
    cancel: () => {
      if (!active) {
        return;
      }
      if (root) {
        synth.cancel();
      }
      nestedSeriesResults.forEach((nestedSeriesResults2) => {
        nestedSeriesResults2.cancel();
      });
      active = false;
    }
  };
}
let currentSeries;
function SpeechEngine(toSpeak, lang = "en-US") {
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak, lang);
  return currentSeries;
}
var debounce = (callback, wait) => {
  let timeoutId;
  const clear = () => clearTimeout(timeoutId);
  if (getOwner())
    onCleanup(clear);
  const debounced = (...args) => {
    if (timeoutId !== void 0)
      clear();
    timeoutId = setTimeout(() => callback(...args), wait);
  };
  return Object.assign(debounced, { clear });
};
var throttle = (callback, wait) => {
  let isThrottled = false, timeoutId, lastArgs;
  const throttled = (...args) => {
    lastArgs = args;
    if (isThrottled)
      return;
    isThrottled = true;
    timeoutId = setTimeout(() => {
      callback(...lastArgs);
      isThrottled = false;
    }, wait);
  };
  const clear = () => {
    clearTimeout(timeoutId);
    isThrottled = false;
  };
  if (getOwner())
    onCleanup(clear);
  return Object.assign(throttled, { clear });
};
function createScheduled(schedule) {
  let listeners = 0;
  let isDirty = false;
  const [track, dirty] = createSignal(void 0, { equals: false });
  const call = schedule(() => {
    isDirty = true;
    dirty();
  });
  return () => {
    if (!isDirty)
      call(), track();
    if (isDirty) {
      isDirty = !!listeners;
      return true;
    }
    if (getListener()) {
      listeners++;
      onCleanup(() => listeners--);
    }
    return false;
  };
}
let resetFocusPathTimer;
let prevFocusPath = [];
let currentlySpeaking;
let voiceOutDisabled = false;
const fiveMinutes = 3e5;
function debounceWithFlush(callback, time) {
  const trigger = debounce(callback, time);
  let scopedValue;
  const debounced = (newValue) => {
    scopedValue = newValue;
    trigger(newValue);
  };
  debounced.flush = () => {
    trigger.clear();
    callback(scopedValue);
  };
  debounced.clear = trigger.clear;
  return debounced;
}
function getElmName(elm) {
  return elm.id || elm.name;
}
function onFocusChangeCore(focusPath2 = []) {
  if (!Announcer.onFocusChange || !Announcer.enabled) {
    return;
  }
  const loaded = focusPath2.every((elm) => !elm.loading);
  const focusDiff = focusPath2.filter((elm) => !prevFocusPath.includes(elm));
  resetFocusPathTimer();
  if (!loaded && Announcer.onFocusChange) {
    Announcer.onFocusChange([]);
    return;
  }
  prevFocusPath = focusPath2.slice(0);
  const toAnnounceText = [];
  const toAnnounce = focusDiff.reduce(
    (acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), "Announce", elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), "Title", elm.title]);
        toAnnounceText.push(elm.title);
      } else {
        acc.push([getElmName(elm), "No Announce", ""]);
      }
      return acc;
    },
    []
  );
  focusDiff.reverse().reduce((acc, elm) => {
    if (elm.announceContext) {
      acc.push([getElmName(elm), "Context", elm.announceContext]);
      toAnnounceText.push(elm.announceContext);
    } else {
      acc.push([getElmName(elm), "No Context", ""]);
    }
    return acc;
  }, toAnnounce);
  if (Announcer.debug) {
    console.table(toAnnounce);
  }
  if (toAnnounceText.length) {
    return Announcer.speak(
      toAnnounceText.reduce((acc, val) => acc.concat(val), [])
    );
  }
}
function textToSpeech(toSpeak) {
  if (voiceOutDisabled) {
    return;
  }
  return currentlySpeaking = SpeechEngine(toSpeak);
}
const Announcer = {
  debug: false,
  enabled: true,
  cancel: function() {
    currentlySpeaking && currentlySpeaking.cancel();
  },
  clearPrevFocus: function(depth2 = 0) {
    prevFocusPath = prevFocusPath.slice(0, depth2);
    resetFocusPathTimer();
  },
  speak: function(text2, { append = false, notification = false } = {}) {
    if (Announcer.onFocusChange && Announcer.enabled) {
      Announcer.onFocusChange.flush();
      if (append && currentlySpeaking && currentlySpeaking.active) {
        currentlySpeaking.append(text2);
      } else {
        Announcer.cancel();
        textToSpeech(text2);
      }
      if (notification) {
        voiceOutDisabled = true;
        currentlySpeaking == null ? void 0 : currentlySpeaking.series.finally(() => {
          voiceOutDisabled = false;
          Announcer.refresh();
        }).catch(console.error);
      }
    }
    return currentlySpeaking;
  },
  refresh: function(depth2 = 0) {
    Announcer.clearPrevFocus(depth2);
    Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
  },
  setupTimers: function({
    focusDebounce = 400,
    focusChangeTimeout = fiveMinutes
  } = {}) {
    Announcer.onFocusChange = debounceWithFlush(
      onFocusChangeCore,
      focusDebounce
    );
    resetFocusPathTimer = debounceWithFlush(() => {
      prevFocusPath = [];
    }, focusChangeTimeout);
  }
};
const useAnnouncer = () => {
  Announcer.setupTimers();
  createEffect(on(focusPath, Announcer.onFocusChange, { defer: true }));
  return Announcer;
};
var isDev = !!DEV;
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}
function accessWith(valueOrFn, ...args) {
  return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
}
var tryOnCleanup = isDev ? (fn) => getOwner() ? onCleanup(fn) : fn : onCleanup;
var createCallbackStack = () => {
  let stack = [];
  const clear = () => stack = [];
  return {
    push: (...callbacks) => stack.push(...callbacks),
    execute(arg0, arg1, arg2, arg3) {
      stack.forEach((cb) => cb(arg0, arg1, arg2, arg3));
      clear();
    },
    clear
  };
};
function makeEventListener(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
}
function makeEventListenerStack(target, options) {
  const { push, execute } = createCallbackStack();
  return [
    (type, handler, overwriteOptions) => {
      const clear = makeEventListener(target, type, handler, overwriteOptions != null ? overwriteOptions : options);
      push(clear);
      return clear;
    },
    onCleanup(execute)
  ];
}
function createSingletonRoot(factory, detachedOwner = getOwner()) {
  let listeners = 0, value, disposeRoot;
  return () => {
    listeners++;
    onCleanup(() => {
      listeners--;
      queueMicrotask(() => {
        if (!listeners && disposeRoot) {
          disposeRoot();
          disposeRoot = value = void 0;
        }
      });
    });
    if (!disposeRoot) {
      createRoot((dispose2) => value = factory(disposeRoot = dispose2), detachedOwner);
    }
    return value;
  };
}
function createHydratableSingletonRoot(factory) {
  const owner = getOwner();
  const singleton = createSingletonRoot(factory, owner);
  return () => sharedConfig.context ? createRoot(factory, owner) : singleton();
}
function createStaticStore(init) {
  const copy = { ...init }, store = { ...init }, cache2 = {};
  const getValue = (key2) => {
    let signal = cache2[key2];
    if (!signal) {
      if (!getListener())
        return copy[key2];
      cache2[key2] = signal = createSignal(copy[key2], { internal: true });
      delete copy[key2];
    }
    return signal[0]();
  };
  for (const key2 in init) {
    Object.defineProperty(store, key2, { get: () => getValue(key2), enumerable: true });
  }
  const setValue = (key2, value) => {
    const signal = cache2[key2];
    if (signal)
      return signal[1](value);
    if (key2 in copy)
      copy[key2] = accessWith(value, [copy[key2]]);
  };
  return [
    store,
    (a, b) => {
      if (isObject(a)) {
        const entries = untrack(
          () => Object.entries(accessWith(a, store))
        );
        batch(() => {
          for (const [key2, value] of entries)
            setValue(key2, () => value);
        });
      } else
        setValue(a, b);
      return store;
    }
  ];
}
var PASSIVE = { passive: true };
var DEFAULT_MOUSE_POSITION = {
  x: 0,
  y: 0,
  isInside: false,
  sourceType: null
};
function makeMousePositionListener(target = window, callback, options = {}) {
  const { touch = true, followTouch = true } = options;
  const [listen, clear] = makeEventListenerStack(target, PASSIVE);
  const handleMouse = (e) => callback({ x: e.pageX, y: e.pageY, sourceType: "mouse" });
  listen("mousemove", handleMouse);
  listen("dragover", handleMouse);
  if (touch) {
    const handleTouch = (e) => {
      if (e.touches.length)
        callback({ x: e.touches[0].clientX, y: e.touches[0].clientY, sourceType: "touch" });
    };
    listen("touchstart", handleTouch);
    if (followTouch)
      listen("touchmove", handleTouch);
  }
  return clear;
}
function makeMouseInsideListener(target = window, callback, options = {}) {
  const { touch = true } = options;
  const [listen, clear] = makeEventListenerStack(target, PASSIVE);
  let mouseIn = false;
  let touchIn = !touch;
  function handleChange(isInside) {
    this === "mouse" ? mouseIn = isInside : touchIn = isInside;
    callback(mouseIn || touchIn);
  }
  listen("mouseover", handleChange.bind("mouse", true));
  listen("mouseout", handleChange.bind("mouse", false));
  listen("mousemove", handleChange.bind("mouse", true), { passive: true, once: true });
  if (touch) {
    listen("touchstart", handleChange.bind("touch", true));
    listen("touchend", handleChange.bind("touch", false));
  }
  return clear;
}
function createMousePosition(target, options = {}) {
  const fallback = {
    ...DEFAULT_MOUSE_POSITION,
    ...options.initialValue
  };
  const [state, setState] = createStaticStore(fallback);
  const attachListeners = (el) => {
    makeMousePositionListener(el, setState, options);
    makeMouseInsideListener(el, setState.bind(void 0, "isInside"), options);
  };
  if (typeof target !== "function")
    attachListeners(target);
  else
    createEffect(() => attachListeners(target()));
  return state;
}
var useMousePosition = /* @__PURE__ */ createHydratableSingletonRoot(
  createMousePosition.bind(void 0, void 0, void 0)
);
function createKeyboardEvent(key2, keyCode, eventName = "keydown") {
  return new KeyboardEvent(eventName, {
    key: key2,
    keyCode,
    which: keyCode,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true
  });
}
const handleScroll = throttle((e) => {
  const deltaY = e.deltaY;
  if (deltaY < 0) {
    document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38));
  } else if (deltaY > 0) {
    document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40));
  }
}, 250);
const handleClick = (e) => {
  var _a;
  const active = activeElement();
  const precision = ((_a = Config.rendererOptions) == null ? void 0 : _a.deviceLogicalPixelRatio) || 1;
  if (active && testCollision(
    e.clientX,
    e.clientY,
    active.lng.absX * precision,
    active.lng.absY * precision,
    active.width * precision,
    active.height * precision
  )) {
    document.dispatchEvent(createKeyboardEvent("Enter", 13));
    setTimeout(
      () => document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup")),
      1
    );
  }
};
function testCollision(px, py, cx, cy, cw = 0, ch = 0) {
  return px >= cx && px <= cx + cw && py >= cy && py <= cy + ch;
}
function getChildrenByPosition(node, x, y) {
  var _a;
  const result = [];
  const precision = ((_a = Config.rendererOptions) == null ? void 0 : _a.deviceLogicalPixelRatio) || 1;
  let queue = [node];
  while (queue.length > 0) {
    const currentLevelNodes = [];
    for (const currentNode of queue) {
      if (currentNode.alpha !== 0 && testCollision(
        x,
        y,
        currentNode.lng.absX * precision,
        currentNode.lng.absY * precision,
        currentNode.width * precision,
        currentNode.height * precision
      )) {
        currentLevelNodes.push(currentNode);
      }
    }
    const size = currentLevelNodes.length;
    if (size === 0) {
      break;
    } else if (size > 1) {
      currentLevelNodes.sort((a, b) => (b.zIndex || 0) - (a.zIndex || 0));
    }
    const highestZIndexNode = currentLevelNodes[0];
    result.push(highestZIndexNode);
    if (highestZIndexNode.isTextNode()) {
      queue = [];
    } else {
      queue = highestZIndexNode.children;
    }
  }
  return result;
}
function useMouse(myApp = rootNode, throttleBy = 100) {
  const pos = useMousePosition();
  const scheduled = createScheduled((fn) => throttle(fn, throttleBy));
  makeEventListener(window, "wheel", handleScroll);
  makeEventListener(window, "click", handleClick);
  createEffect(() => {
    var _a;
    if (scheduled()) {
      const result = getChildrenByPosition(myApp, pos.x, pos.y).filter(
        (el) => (el.focus || el.onFocus || el.onEnter) && !el.skipFocus
      );
      if (result.length) {
        let activeElm = result[result.length - 1];
        while ((_a = activeElm.parent) == null ? void 0 : _a.forwardStates) {
          activeElm = activeElm.parent;
        }
        const activeElmParent = activeElm.parent;
        if ((activeElmParent == null ? void 0 : activeElmParent.selected) !== void 0) {
          activeElmParent.selected = activeElmParent.children.indexOf(activeElm);
        }
        activeElm.setFocus();
      }
    }
  });
}
const [globalBackground, setGlobalBackground] = createSignal("");
const theme = {
  name: "Base Lightning TV",
  alpha: {
    primary: 1,
    secondary: 0.7,
    tertiary: 0.1,
    inactive: 0.5,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.3,
    alpha3: 0.5,
    alpha4: 0.7,
    alpha5: 0.9,
    alpha6: 0.95
  },
  animation: {
    duration: {
      none: 0,
      xfast: 100,
      fast: 250,
      normal: 500,
      slow: 750,
      xslow: 900
    },
    delay: { none: 0, xfast: 10, fast: 25, normal: 50, slow: 75, xslow: 90 },
    expressive: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    expressiveEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    expressiveExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standard: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standardEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    standardExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utility: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utilityEntrance: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    },
    utilityExit: {
      timingFunction: "cubic-bezier(0, 0, 1, 1)",
      delay: 0,
      duration: 0.25
    }
  },
  asset: {
    arrowLeft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",
    arrowRight: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",
    backspaceOutline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",
    check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="
  },
  color: {
    palette: {},
    white: "0xffffffff",
    black: "0x000000ff",
    grey: "0x929096ff",
    red: "0xe74c3cff",
    orange: "0xdc7633ff",
    yellow: "0xf7dc6fff",
    green: "0x2ecc71ff",
    blue: "0x93a9fdff",
    purple: "0x663399ff",
    overlay: "0x181819b3",
    material: "0x181819ff",
    materialNeutral: "0x181819ff",
    materialNeutralElevated: "0x373639ff",
    materialInverse: "0xf8f7faff",
    materialInverseElevated: "0xffffffff",
    materialBrand: "0x000033ff",
    materialBrandElevated: "0x242a65ff",
    textNeutral: "0xf8f7faff",
    textNeutralSecondary: "0xf8f7fab3",
    textNeutralTertiary: "0xf8f7fa1a",
    textNeutralDisabled: "0xf8f7fa80",
    textInverse: "0x181819ff",
    textInverseSecondary: "0x181819b3",
    textInverseTertiary: "0x1818191a",
    textInverseDisabled: "0x18181980",
    textBrand: "0x93a9fdff",
    textBrandSecondary: "0x93a9fdb3",
    textBrandTertiary: "0x93a9fd1a",
    textBrandDisabled: "0x93a9fd80",
    textPositive: "0x2ecc71ff",
    textNegative: "0xe74c3cff",
    textInfo: "0x93a9fdff",
    textCaution: "0xdc7633ff",
    fillTransparent: "0xffffff0",
    fillNeutral: "0xf8f7faff",
    fillNeutralSecondary: "0xf8f7fab3",
    fillNeutralTertiary: "0xf8f7fa1a",
    fillNeutralDisabled: "0xf8f7fa80",
    fillInverse: "0x181819ff",
    fillInverseSecondary: "0x181819b3",
    fillInverseTertiary: "0x1818191a",
    fillInverseDisabled: "0x18181980",
    fillBrand: "0x93a9fdff",
    fillBrandSecondary: "0x93a9fdb3",
    fillBrandTertiary: "0x93a9fd1a",
    fillBrandDisabled: "0x93a9fd80",
    fillPositive: "0x2ecc71ff",
    fillNegative: "0xe74c3cff",
    fillInfo: "0x93a9fdff",
    fillCaution: "0xdc7633ff",
    strokeNeutral: "0xf8f7faff",
    strokeNeutralSecondary: "0xf8f7fab3",
    strokeNeutralTertiary: "0xf8f7fa1a",
    strokeNeutralDisabled: "0xf8f7fa80",
    strokeInverse: "0x181819ff",
    strokeInverseSecondary: "0x181819b3",
    strokeInverseTertiary: "0x1818191a",
    strokeInverseDisabled: "0x18181980",
    strokeBrand: "0x93a9fdff",
    strokeBrandSecondary: "0x93a9fdb3",
    strokeBrandTertiary: "0x93a9fd1a",
    strokeBrandDisabled: "0x93a9fd80",
    strokePositive: "0x2ecc71ff",
    strokeNegative: "0xe74c3cff",
    strokeInfo: "0x93a9fdff",
    strokeCaution: "0xdc7633ff",
    interactiveNeutral: "0xffffff1a",
    interactiveNeutralFocus: "0xffffffff",
    interactiveNeutralFocusSoft: "0xffffff1a",
    interactiveInverse: "0x48474b1a",
    interactiveInverseFocus: "0x48474bff",
    interactiveInverseFocusSoft: "0x48474b1a",
    interactiveBrand: "0xbecffe1a",
    interactiveBrandFocus: "0xbecffeff",
    interactiveBrandFocusSoft: "0xbecffe1a",
    shadowNeutral: "0x000000b3",
    shadowNeutralFocus: "0x000000b3",
    shadowNeutralFocusSoft: "0x000000b3",
    shadowNeutralText: "0x000000ff",
    shadowInverse: "0x000000b3",
    shadowInverseFocus: "0x000000b3",
    shadowInverseFocusSoft: "0x000000b3",
    shadowInverseText: "0x000000ff",
    shadowBrand: "0x000000b3",
    shadowBrandFocus: "0x000000b3",
    shadowBrandFocusSoft: "0x000000b3",
    shadowBrandText: "0x000000ff"
  },
  font: [],
  layout: {
    columnCount: 10,
    focusScale: 1.2,
    gutterX: 20,
    gutterY: 20,
    marginX: 150,
    marginY: 150,
    safe: 50,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: "Arial",
      fontSize: 75,
      lineHeight: 85,
      fontWeight: 500,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    display2: {
      fontFamily: "Arial",
      fontSize: 50,
      lineHeight: 60,
      fontWeight: 500,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    display3: {
      fontFamily: "Arial",
      fontSize: 56,
      fontWeight: 400,
      lineHeight: 68,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    display4: {
      fontFamily: "Arial",
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 64,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline1: {
      fontFamily: "Arial",
      fontSize: 35,
      fontWeight: 500,
      lineHeight: 48,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline2: {
      fontFamily: "Arial",
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 40,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    headline3: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 36,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body1: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 300,
      lineHeight: 40,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body2: {
      fontFamily: "Arial",
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    body3: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    button1: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    button2: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    callout1: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    caption1: {
      fontFamily: "Arial",
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    tag1: {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    footnote1: {
      fontFamily: "Arial",
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 30,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    subtitle1: {
      fontFamily: "Arial",
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    subtitle2: {
      fontFamily: "Arial",
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    },
    navigation: {
      fontFamily: "Arial",
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: "middle",
      textBaseline: "bottom"
    }
  },
  componentConfig: {
    Keyboard: {
      base: {
        keyProps: {
          delete: {
            title: null,
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
          }
        }
      }
    }
  }
};
function Background() {
  const params2 = new URLSearchParams(window.location.search);
  const disableBG = params2.get("disableBG") === "true";
  let bg1, bg2, heroMask;
  let active = 0;
  const alpha = 1;
  const animationSettings = {
    duration: 750,
    easing: "ease-in-out"
  };
  const bgStyles = {
    alpha,
    color: 4294967295
  };
  onMount(() => {
    if (disableBG) {
      heroMask.src = "";
      heroMask.colorLeft = 255;
      heroMask.colorRight = 0;
      return;
    }
  });
  function changeBackgrounds(img) {
    if (disableBG) {
      heroMask.src = "";
      heroMask.colorLeft = 255;
      heroMask.colorRight = 0;
      return;
    }
    if (typeof img !== "string") {
      bg1.color = img;
      bg1.src = "";
      bg1.alpha = 1;
      active = 1;
      bg2.alpha = 0;
      heroMask.alpha = 0;
      return;
    } else {
      bg1.color = 4294967295;
      heroMask.alpha = 1;
    }
    if (active === 0) {
      bg1.src = img;
      active = 1;
      return;
    }
    if (active === 1) {
      bg2.src = img;
      active = 2;
      bg2.alpha = 0;
      bg2.animate({
        alpha
      }, animationSettings).start();
      bg1.animate({
        alpha: 0
      }, animationSettings).start();
      return;
    }
    if (active === 2) {
      bg1.src = img;
      active = 1;
      bg1.alpha = 0;
      bg1.animate({
        alpha
      }, animationSettings).start();
      bg2.animate({
        alpha: 0
      }, animationSettings).start();
    }
  }
  createEffect(on(globalBackground, (img) => {
    changeBackgrounds(img);
  }, {
    defer: true
  }));
  return createComponent(View, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [createComponent(View, {
        ref(r$) {
          var _ref$ = bg1;
          typeof _ref$ === "function" ? _ref$(r$) : bg1 = r$;
        },
        style: bgStyles
      }), createComponent(View, {
        ref(r$) {
          var _ref$2 = bg2;
          typeof _ref$2 === "function" ? _ref$2(r$) : bg2 = r$;
        },
        style: bgStyles,
        alpha: 0
      }), createComponent(View, {
        ref(r$) {
          var _ref$3 = heroMask;
          typeof _ref$3 === "function" ? _ref$3(r$) : heroMask = r$;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return hexColor(theme.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
function objectFromEntries(entries) {
  if (!entries || !entries[Symbol.iterator]) {
    throw new Error("objectFromEntries requires a single iterable argument");
  }
  const obj = {};
  for (const [key2, value] of entries) {
    obj[key2] = value;
  }
  return obj;
}
const defaultModeKeys = ["focus", "disabled"];
const defaultToneKeys = ["brand", "inverse", "neutral"];
function makeComponentStyles({
  themeKeys,
  base,
  modes = {},
  tones = {},
  themeStyles: themeStyles2,
  modeKeys = defaultModeKeys,
  toneKeys = defaultToneKeys
}, debug = false) {
  const makeToneStyles = (tones2, themeComponentStyles, modeStyles) => {
    const toneStyles = toneKeys.map((tone) => {
      var _a, _b;
      const styles2 = {};
      const styleList = new Set(
        [].concat.apply([], [(_a = tones2 == null ? void 0 : tones2[tone]) != null ? _a : {}, (_b = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) != null ? _b : {}].map(Object.keys))
      );
      styleList.forEach((styleKey) => {
        var _a2, _b2, _c;
        if (!modeKeys.includes(styleKey)) {
          styles2[styleKey] = (_c = (_a2 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _a2[styleKey]) != null ? _c : (_b2 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _b2[styleKey];
        }
      });
      modeKeys.forEach((mode) => {
        var _a2, _b2;
        styles2[mode] = {
          ...modeStyles[mode],
          // fallbacks from base.mode
          ...(_a2 = tones2 == null ? void 0 : tones2[tone]) == null ? void 0 : _a2[mode],
          // component configured tone.mode
          ...(_b2 = themeComponentStyles == null ? void 0 : themeComponentStyles[tone]) == null ? void 0 : _b2[mode]
          // theme configure tone.mode
        };
      });
      return [tone, styles2];
    });
    return objectFromEntries(toneStyles);
  };
  const makeModeStyles = (modes2, themeComponentStyles) => {
    const modeStyles = modeKeys.map((mode) => {
      return [mode, { ...modes2 == null ? void 0 : modes2[mode], ...themeComponentStyles == null ? void 0 : themeComponentStyles[mode] }];
    });
    const modeObject = objectFromEntries(modeStyles);
    return modeObject;
  };
  const makeBaseStyles = (base2, themeComponentStyles) => {
    const baseStyles = {
      ...base2,
      ...themeComponentStyles.base
    };
    return baseStyles;
  };
  const mapThemeKeysToSolid = (stylesToMap) => objectFromEntries(
    Object.entries(themeKeys).filter(([_, themeKey]) => stylesToMap[themeKey]).map(([solidKey, themeKey]) => [solidKey, stylesToMap[themeKey]])
  );
  const convertComponentConfig = (themeStyles3) => {
    const convertedThemeStyles = objectFromEntries(
      // iterate through each variant
      Object.entries(themeStyles3).map(([variantName, styles2]) => {
        const convertedStyles = mapThemeKeysToSolid(styles2);
        Object.entries(styles2).filter(([styleName, _]) => modeKeys.includes(styleName)).forEach(([modeName, modeStyles]) => {
          convertedStyles[modeName] = mapThemeKeysToSolid(modeStyles);
        });
        return [variantName, convertedStyles];
      })
    );
    return convertedThemeStyles;
  };
  const generateSolidStylesFromLookupObject = (base2, modes2, tones2) => {
    const themeComponentStyles = convertComponentConfig(themeStyles2);
    debug && console.log(themeComponentStyles);
    const baseStyles = makeBaseStyles(base2, themeComponentStyles);
    debug && console.log(baseStyles);
    const modeStyles = makeModeStyles(modes2, themeComponentStyles);
    debug && console.log(modeStyles);
    const toneStyles = makeToneStyles(tones2, themeComponentStyles, modeStyles);
    debug && console.log(toneStyles);
    return {
      base: {
        ...baseStyles,
        ...modeStyles
      },
      tones: toneStyles
    };
  };
  return generateSolidStylesFromLookupObject(base, modes, tones);
}
function withScrolling(isRow) {
  const dimension = isRow ? "width" : "height";
  const axis = isRow ? "x" : "y";
  return (componentRef, selectedElement, selected = 0, lastSelected) => {
    var _a, _b, _c, _d, _e, _f;
    if (!componentRef.children.length) return;
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || "auto";
    let rootPosition = (_b = (_a = componentRef._targetPosition) != null ? _a : componentRef[axis]) != null ? _b : 0;
    componentRef.offset = (_c = componentRef.offset) != null ? _c : rootPosition;
    const offset = componentRef.offset;
    selectedElement = selectedElement || componentRef.children[selected];
    const selectedPosition = (_d = selectedElement[axis]) != null ? _d : 0;
    const selectedSize = (_e = selectedElement[dimension]) != null ? _e : 0;
    const movement = lastSelected === void 0 ? "none" : selected > lastSelected ? "incremental" : "decremental";
    let nextPosition = rootPosition;
    const [lastItem, containerSize] = updateLastIndex(isRow, componentRef);
    const isNotShown = (pos, size) => Math.abs(rootPosition) + containerSize < pos + size;
    if (scroll === "auto") {
      if (componentRef.scrollIndex != void 0 && componentRef.scrollIndex >= 0) {
        if (componentRef.selected >= componentRef.scrollIndex) {
          nextPosition = movement === "incremental" ? rootPosition - selectedSize - gap : rootPosition + selectedSize + gap;
        } else if (movement === "decremental" && componentRef.selected === componentRef.scrollIndex - 1) {
          nextPosition = rootPosition + selectedSize + gap;
        }
      } else if (isNotShown(lastItem.position, lastItem.size) || selectedPosition < Math.abs(rootPosition)) {
        nextPosition = -selectedPosition + offset;
      }
    } else if (scroll === "always" || scroll === "edge" && movement === "decremental" && Math.abs(rootPosition) > selectedPosition) {
      nextPosition = -selectedPosition + offset;
    } else if (scroll === "edge" && movement === "incremental" && isNotShown(selectedPosition, selectedSize)) {
      nextPosition = rootPosition - selectedSize - gap;
    } else if (scroll === "edge" && movement === "none") {
      let currentChildIndex = 0;
      const isNotShownMemo = isNotShown(selectedPosition, selectedSize);
      while (currentChildIndex < componentRef.children.length && isNotShownMemo) {
        const currentChild = componentRef.children[currentChildIndex++];
        if (currentChild.skipFocus) continue;
        const currentChildSize = (_f = currentChild[dimension]) != null ? _f : 0;
        rootPosition -= currentChildSize + gap;
      }
      nextPosition = rootPosition;
    }
    if (componentRef[axis] !== nextPosition) {
      componentRef[axis] = nextPosition;
      componentRef._targetPosition = nextPosition;
    }
  };
}
function updateLastIndex(isRow, items) {
  var _a, _b, _c, _d, _e, _f;
  let lastChild;
  for (let i = items.children.length - 1; i >= 0; i--) {
    if (!items.children[i].skipFocus) {
      lastChild = items.children[i];
      break;
    }
  }
  if (isRow) {
    return [
      {
        position: (_a = lastChild.x) != null ? _a : 0,
        size: (_b = lastChild.width) != null ? _b : 0
      },
      (_c = items.width) != null ? _c : 0
    ];
  }
  return [
    {
      position: (_d = lastChild.y) != null ? _d : 0,
      size: (_e = lastChild.height) != null ? _e : 0
    },
    (_f = items.height) != null ? _f : 0
  ];
}
function chainFunctions(...args) {
  const onlyFunctions = args.filter((func) => typeof func === "function");
  if (onlyFunctions.length === 0) {
    return void 0;
  }
  if (onlyFunctions.length === 1) {
    return onlyFunctions[0];
  }
  return function(...innerArgs) {
    let result;
    for (const func of onlyFunctions) {
      result = func.apply(this, innerArgs);
      if (result === true) {
        return result;
      }
    }
    return result;
  };
}
function onGridFocus() {
  if (!this || this.children.length === 0) return false;
  let child = this.selected ? this.children[this.selected] : this.selectedNode;
  while (child == null ? void 0 : child.skipFocus) {
    this.selected++;
    child = this.children[this.selected];
  }
  if (!(child instanceof ElementNode)) return false;
  child.setFocus();
  return true;
}
function handleNavigation(direction) {
  return function() {
    var _a, _b, _c;
    const numChildren = this.children.length;
    const wrap = this.wrap;
    const lastSelected = this.selected || 0;
    if (numChildren === 0) {
      return false;
    }
    if (direction === "right" || direction === "down") {
      do {
        this.selected = (this.selected || 0) % numChildren + 1;
        if (this.selected >= numChildren) {
          if (!wrap) {
            this.selected = void 0;
            break;
          }
          this.selected = 0;
        }
      } while ((_a = this.children[this.selected]) == null ? void 0 : _a.skipFocus);
    } else if (direction === "left" || direction === "up") {
      do {
        this.selected = (this.selected || 0) % numChildren - 1;
        if (this.selected < 0) {
          if (!wrap) {
            this.selected = void 0;
            break;
          }
          this.selected = numChildren - 1;
        }
      } while ((_b = this.children[this.selected]) == null ? void 0 : _b.skipFocus);
    }
    if (this.selected === void 0) {
      this.selected = lastSelected;
      if ((_c = this.children[this.selected]) == null ? void 0 : _c.states.has("focus")) {
        return false;
      }
    }
    const active = this.children[this.selected];
    assertTruthy(active instanceof ElementNode);
    this.onSelectedChanged && this.onSelectedChanged.call(this, this, active, this.selected, lastSelected);
    if (this.plinko) {
      const lastSelectedChild = this.children[lastSelected];
      assertTruthy(lastSelectedChild instanceof ElementNode);
      const num = lastSelectedChild.selected || 0;
      active.selected = num < active.children.length ? num : active.children.length - 1;
    }
    active.setFocus();
    return true;
  };
}
function getWidthByUpCount(upCount = 1) {
  const screenW = theme.layout.screenW;
  const columnCount = theme.layout.columnCount;
  const marginX = theme.layout.marginX;
  const gutterX = theme.layout.gutterX;
  if (upCount < 1 || upCount > columnCount) {
    console.error(
      "getWidthByUpCount expects an upCount between 1 & ".concat(columnCount, ", received ").concat(upCount, ". Defaulting to upCount 1.")
    );
    upCount = 1;
  }
  const columnWidth = screenW - marginX * 2;
  const columnGapTotal = (upCount - 1) * gutterX;
  const totalColumnsWidth = columnWidth - columnGapTotal;
  return totalColumnsWidth / upCount;
}
function createSpriteMap(src, subTextures) {
  const spriteMapTexture = renderer$1.createTexture("ImageTexture", {
    src
  });
  return subTextures.reduce((acc, t) => {
    const { x, y, width, height } = t;
    acc[t.name] = renderer$1.createTexture("SubTexture", {
      texture: spriteMapTexture,
      x,
      y,
      width,
      height
    });
    return acc;
  }, {});
}
const { Artwork: { defaultTone: defaultTone$h, ...themeStyles$g } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$h = {
  themeKeys: {
    fallbackSrc: "fallbackSrc",
    fillColor: "fillColor",
    scale: "imageScale",
    pivotX: "imageScalePivotX",
    pivotY: "imageScalePivotY",
    borderRadius: "radius"
  },
  base: {
    fallbackSrc: void 0,
    fillColor: theme.color.overlay,
    gradientColor: theme.color.material,
    pivotX: 0.5,
    pivotY: 0.5,
    scale: void 0,
    borderRadius: theme.radius.md
  },
  themeStyles: themeStyles$g
};
makeComponentStyles(container$h);
const { Badge: { defaultTone: defaultTone$g, ...themeStyles$f } = { themeStyles: {} } } = theme.componentConfig;
const container$g = {
  themeKeys: {
    color: "backgroundColor",
    borderRadius: "radius",
    gap: "contentSpacing"
  },
  base: {
    // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
    // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
    color: theme.color.fillInverseSecondary,
    borderRadius: theme.radius.sm,
    // borderRadius must be applied _before_ border to prevent the node from breaking
    border: {
      color: theme.color.strokeInverse,
      width: theme.stroke.sm
    },
    gap: theme.spacer.xs,
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center"
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutralSecondary,
      borderRadius: theme.radius.sm,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    },
    brand: {
      color: theme.color.fillBrand,
      borderRadius: theme.radius.sm,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    }
  },
  themeStyles: themeStyles$f
};
const text$7 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.tag1,
    color: theme.color.textNeutral,
    lineHeight: theme.typography.tag1.lineHeight + 12,
    marginRight: theme.spacer.md + theme.stroke.sm,
    marginLeft: theme.spacer.md + theme.stroke.sm
  },
  tones: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$f
};
const icon$2 = {
  themeKeys: {
    color: "iconColor"
  },
  base: {
    color: theme.color.textNeutral
  },
  tones: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$f
};
const Container$6 = makeComponentStyles(container$g);
const Icon$1 = makeComponentStyles(icon$2);
const Text$4 = makeComponentStyles(text$7);
const styles$8 = {
  tone: defaultTone$g || "neutral",
  Container: Container$6,
  Icon: Icon$1,
  Text: Text$4
};
const { Button: { defaultTone: defaultTone$f, ...buttonThemeStyles } = { buttonThemeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const { Surface: { surfaceDefaultTone, ...surfaceThemeStyles$1 } = { surfaceThemeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const themeStyles$e = {
  ...buttonThemeStyles,
  ...surfaceThemeStyles$1
};
const container$f = {
  themeKeys: {
    borderRadius: "radius",
    color: "backgroundColor",
    justifyContent: "justify",
    itemSpacing: "contentSpacing"
  },
  base: {
    height: theme.typography.button1.lineHeight + theme.spacer.xl * 2,
    display: "flex",
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    justifyContent: "center",
    alignItems: "center",
    flexBoundary: "fixed",
    borderRadius: theme.radius.sm,
    contentColor: theme.color.fillNeutral
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand,
      focus: {
        color: theme.color.fillNeutral
      }
    }
  },
  themeStyles: themeStyles$e
};
const content = {
  themeKeys: {
    color: "contentColor"
  },
  base: {
    color: theme.color.textNeutral
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: themeStyles$e
};
const text$6 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.button1,
    textAlign: "center",
    contain: "none"
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: themeStyles$e
};
const Container$5 = makeComponentStyles(container$f);
const Content = makeComponentStyles(content);
const Text$3 = makeComponentStyles(text$6);
const styles$7 = {
  tone: defaultTone$f || surfaceDefaultTone || "neutral",
  Container: Container$5,
  Content,
  Text: Text$3
};
const { Checkbox: { defaultTone: defaultTone$e, ...themeStyles$d } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$e = {
  themeKeys: {
    color: "backgroundColor",
    borderRadius: "radius",
    border: "border",
    justifyContent: "justifyContent"
  },
  base: {
    width: theme.spacer.xxl,
    height: theme.spacer.xxl,
    display: "flex",
    justifyContent: "center",
    color: theme.color.fillNeutral,
    alignItems: "center",
    borderRadius: theme.spacer.xxl / 4,
    border: {
      color: theme.color.strokeInverse,
      width: theme.stroke.sm
    }
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  tones: {
    brand: {
      borderRadius: theme.spacer.xxl / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: theme.stroke.sm
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: theme.spacer.xxl / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: theme.stroke.sm
        },
        color: theme.color.fillBrand
      }
    },
    neutral: {
      borderRadius: theme.spacer.xxl / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: theme.stroke.sm
      },
      color: theme.color.fillInverseSecondary,
      checked: {
        borderRadius: theme.spacer.xxl / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: theme.stroke.sm
        },
        color: theme.color.fillNeutral
      }
    },
    inverse: {
      borderRadius: theme.spacer.xxl / 4,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: theme.spacer.xxl / 4,
        border: {
          color: theme.color.strokeInverseSecondary,
          width: theme.stroke.sm
        },
        color: theme.color.fillInverse
      }
    }
  },
  modeKeys: ["focus", "disabled", "checked"],
  themeStyles: themeStyles$d
};
const icon$1 = {
  themeKeys: {
    // color: 'strokeColor', see types 58 for TODO
    width: "checkWidth",
    height: "checkHeight"
  },
  base: {
    width: theme.spacer.lg,
    height: theme.spacer.lg,
    src: theme.asset.check
  },
  tones: {
    neutral: {
      color: theme.color.fillInverse
    },
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillInverse
    }
  },
  themeStyles: themeStyles$d
};
makeComponentStyles(container$e);
makeComponentStyles(icon$1);
const { Icon: { defaultTone: defaultTone$d, ...themeStyles$c } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$d = {
  themeKeys: {
    color: "color"
  },
  base: {
    width: 100,
    height: 100,
    color: theme.color.fillNeutral
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  },
  themeStyles: themeStyles$c
};
makeComponentStyles(container$d);
const { Column: { defaultTone: defaultTone$c, ...themeStyles$b } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$c = {
  themeKeys: {
    gap: "itemSpacing",
    scrollIndex: "scrollIndex",
    transition: "itemTransition"
  },
  base: {
    display: "flex",
    flexBoundary: "fixed",
    flexDirection: "column",
    gap: theme.layout.gutterY,
    transition: {
      y: {
        ...theme.animation.standardEntrance,
        duration: theme.animation.duration.fast
      }
    }
  },
  themeStyles: themeStyles$b
};
const Container$4 = makeComponentStyles(container$c);
const styles$6 = {
  tone: defaultTone$c || "neutral",
  Container: Container$4
};
const Column = (props) => {
  const onUp = handleNavigation("up");
  const onDown = handleNavigation("down");
  const scroll = withScrolling(false);
  return createComponent(View, mergeProps(props, {
    get onUp() {
      return chainFunctions(props.onUp, onUp);
    },
    get onDown() {
      return chainFunctions(props.onDown, onDown);
    },
    get selected() {
      return props.selected || 0;
    },
    forwardFocus: onGridFocus,
    get onLayout() {
      return memo(() => !!props.selected)() ? chainFunctions(props.onLayout, scroll) : props.onLayout;
    },
    get onSelectedChanged() {
      return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scroll : void 0);
    },
    get style() {
      var _a;
      return [
        props.style,
        //
        styles$6.Container.tones[(_a = props.tone) != null ? _a : styles$6.tone],
        styles$6.Container.base
      ];
    }
  }));
};
const { Input: { defaultTone: defaultTone$b, ...themeStyles$a } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$b = {
  themeKeys: {
    borderRadius: "radius",
    color: "backgroundColor",
    justifyContent: "justify"
  },
  base: {
    // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
    // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
    width: getWidthByUpCount(4),
    height: 100,
    display: "flex",
    flexDirection: "column",
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    contentColor: theme.color.fillInverse,
    borderRadius: theme.radius.sm,
    marginX: theme.spacer.xxxl,
    actualTitle: ""
  },
  themeStyles: themeStyles$a
};
const text$5 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    textAlign: "left",
    color: theme.color.textNeutral,
    ...theme.typography.button1
  },
  themeStyles: themeStyles$a
};
const Container$3 = makeComponentStyles(container$b);
const Text$2 = makeComponentStyles(text$5);
const styles$5 = {
  tone: defaultTone$b || "neutral",
  Container: Container$3,
  Text: Text$2
};
const { Key: { defaultTone: defaultTone$a, ...themeStyles$9 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$a = {
  themeKeys: {
    keySpacing: "keySpacing",
    borderRadius: "borderRadius",
    color: "backgroundColor",
    justifyContent: "justify",
    baseWidth: "baseWidth",
    sizes: "sizes",
    contentColor: "contentColor"
  },
  base: {
    keySpacing: theme.spacer.md,
    height: theme.spacer.md * 9,
    paddingX: theme.spacer.md,
    contentColor: theme.color.fillNeutral,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    padding: [theme.spacer.md],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocus,
        contentColor: theme.color.fillNeutral
      }
    },
    brand: {
      focus: {
        contentColor: theme.color.fillNeutral
      }
    }
  },
  themeStyles: themeStyles$9
};
const text$4 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.headline2,
    textAlign: "center",
    contain: "none"
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      focus: {
        color: theme.color.textNeutral
      }
    }
  },
  themeStyles: themeStyles$9
};
const Container$2 = makeComponentStyles(container$a);
const Text$1 = makeComponentStyles(text$4);
const styles$4 = {
  tone: defaultTone$a || "neutral",
  Container: Container$2,
  Text: Text$1
};
const { Keyboard: { defaultTone: defaultTone$9, ...themeStyles$8 } = {} } = theme == null ? void 0 : theme.componentConfig;
const { Key: { ...keyThemeStyles } = {} } = theme == null ? void 0 : theme.componentConfig;
const container$9 = {
  themeKeys: {
    gap: "keySpacing",
    width: "screenW",
    marginX: "marginX",
    keyHeight: "keyHeight"
  },
  base: {
    gap: theme.spacer.md,
    width: theme.layout.screenW,
    display: "flex",
    marginX: theme.layout.marginX,
    keyHeight: 100,
    flexBoundary: "contain"
  },
  // @ts-expect-error TODO fix style types for component configs
  themeStyles: themeStyles$8
};
const key = {
  themeKeys: {
    gap: "keySpacing",
    borderRadius: "borderRadius",
    color: "backgroundColor",
    justifyContent: "justify",
    baseWidth: "baseWidth",
    sizes: "sizes",
    contentColor: "contentColor"
    // what is this used for
  },
  base: {
    gap: theme.spacer.md,
    height: theme.spacer.md * 9,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    contentColor: theme.color.fillNeutral,
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocus,
        contentColor: theme.color.fillNeutral
      }
    },
    brand: {
      focus: {
        contentColor: theme.color.fillNeutral
      }
    }
  },
  themeStyles: keyThemeStyles
};
const text$3 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.headline2
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      focus: {
        color: theme.color.textNeutral
      }
    }
  },
  // @ts-expect-error TODO fix style types for component configs
  themeStyles: themeStyles$8
};
const Container$1 = makeComponentStyles(container$9);
const Key = makeComponentStyles(key);
const Text = makeComponentStyles(text$3);
const styles$3 = {
  tone: defaultTone$9,
  Container: Container$1,
  Key,
  Text
};
const { Row: { defaultTone: defaultTone$8, ...themeStyles$7 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$8 = {
  themeKeys: {
    gap: "itemSpacing",
    scrollIndex: "scrollIndex",
    transition: "itemTransition"
  },
  base: {
    display: "flex",
    flexBoundary: "fixed",
    flexDirection: "row",
    gap: theme.layout.gutterX,
    transition: {
      x: {
        ...theme.animation.standardEntrance,
        duration: theme.animation.duration.fast
      }
    }
  },
  themeStyles: themeStyles$7
};
const Container = makeComponentStyles(container$8);
const styles$2 = {
  tone: defaultTone$8,
  Container
};
const Row = (props) => {
  const onLeft = handleNavigation("left");
  const onRight = handleNavigation("right");
  const scroll = withScrolling(true);
  return createComponent(View, mergeProps(props, {
    get selected() {
      return props.selected || 0;
    },
    get onLeft() {
      return chainFunctions(props.onLeft, onLeft);
    },
    get onRight() {
      return chainFunctions(props.onRight, onRight);
    },
    forwardFocus: onGridFocus,
    get onLayout() {
      return memo(() => !!props.selected)() ? chainFunctions(props.onLayout, scroll) : props.onLayout;
    },
    get onSelectedChanged() {
      return chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scroll : void 0);
    },
    get style() {
      var _a;
      return [
        props.style,
        //
        styles$2.Container.tones[(_a = props.tone) != null ? _a : styles$2.tone],
        styles$2.Container.base
      ];
    }
  }));
};
const { Label: { defaultTone: defaultTone$7, ...themeStyles$6 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$7 = {
  themeKeys: {
    color: "backgroundColor",
    borderRadius: "radius"
  },
  base: {
    display: "flex",
    justifyContent: "flexStart",
    color: theme.color.textNeutral,
    padding: [theme.spacer.md, theme.spacer.lg],
    // TODO themed padding values
    height: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    neutral: {
      backgroundColor: theme.color.fillNeutral
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.orange
      }
    }
  },
  themeStyles: themeStyles$6
};
const text$2 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.caption1,
    color: theme.color.textInverse,
    lineHeight: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
    marginRight: theme.spacer.lg,
    marginLeft: theme.spacer.lg
  },
  tones: {
    inverse: {
      color: theme.color.textNeutral
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles: themeStyles$6
};
makeComponentStyles(container$7);
makeComponentStyles(text$2);
const { Details: { defaultTone: defaultTone$6, ...themeStyles$5 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$6 = {
  themeKeys: {
    alignItems: "alignItems",
    gap: "contentSpacing",
    badgeContentSpacing: "badgeContentSpacing",
    ratingContentSpacing: "ratingContentSpacing"
  },
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacer.sm,
    flexBoundary: "contain",
    badgeContentSpacing: theme.spacer.sm,
    ratingContentSpacing: theme.spacer.sm
  },
  themeStyles: themeStyles$5
};
const text$1 = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    ...theme.typography.body2,
    marginRight: theme.spacer.lg,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$5
};
makeComponentStyles(container$6);
makeComponentStyles(text$1);
const { Rating: { defaultTone: defaultTone$5, ...themeStyles$4 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$5 = {
  themeKeys: {
    justifyContent: "justifyContent",
    gap: "contentSpacing"
  },
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    gap: theme.spacer.sm,
    alignItems: "center"
  },
  themeStyles: themeStyles$4
};
const text = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.body2
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$4
};
const icon = {
  themeKeys: {
    color: "color"
  },
  base: {
    height: theme.typography.body2.lineHeight,
    width: theme.typography.body2.lineHeight,
    color: theme.color.fillNeutral,
    marginRight: theme.spacer.sm
  },
  themeStyles: themeStyles$4
};
makeComponentStyles(container$5);
makeComponentStyles(icon);
makeComponentStyles(text);
const { Metadata: { defaultTone: defaultTone$4, ...themeStyles$3 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$4 = {
  themeKeys: {
    justifyContent: "justifyContent",
    alpha: "alpha"
  },
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    flexBoundary: "contain",
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles: themeStyles$3
};
const titleText = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    maxLines: 1,
    contain: "width",
    ...theme.typography.headline3,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$3
};
const descriptionText = {
  themeKeys: {
    color: "textColor"
  },
  base: {
    contain: "width",
    maxLines: 2,
    ...theme.typography.body3,
    color: theme.color.textNeutralSecondary
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverseSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutralSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles: themeStyles$3
};
makeComponentStyles(container$4);
makeComponentStyles(descriptionText);
makeComponentStyles(titleText);
const { ProgressBar: { defaultTone: defaultTone$3, ...themeStyles$2 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$3 = {
  themeKeys: {
    color: "barColor",
    borderRadius: "radius"
  },
  base: {
    height: theme.spacer.md,
    color: theme.color.fillNeutralTertiary,
    borderRadius: theme.radius.xs
  },
  tones: {
    inverse: {
      color: theme.color.fillInverseTertiary
    }
  },
  themeStyles: themeStyles$2
};
const progress = {
  themeKeys: {
    color: "progressColor",
    borderRadius: "radius"
  },
  base: {
    borderRadius: theme.radius.xs,
    color: theme.color.fillNeutral
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  },
  themeStyles: themeStyles$2
};
makeComponentStyles(container$3);
makeComponentStyles(progress);
const { Radio: { defaultTone: defaultTone$2, ...themeStyles$1 } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$2 = {
  themeKeys: {
    borderRadius: "radius",
    color: "backgroundColor",
    colorChecked: "backgroundColorChecked"
  },
  base: {
    color: theme.color.fillNeutralSecondary,
    height: theme.spacer.xxl + theme.stroke.sm * 2,
    width: theme.spacer.xxl + theme.stroke.sm * 2,
    borderRadius: theme.spacer.xxl / 2 + theme.stroke.sm,
    border: {
      color: theme.color.strokeNeutralSecondary,
      width: theme.stroke.sm
    }
  },
  tones: {
    inverse: {
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    },
    brand: {
      border: {
        color: theme.color.fillBrand,
        width: theme.stroke.sm
      }
    }
  },
  modeKeys: ["focus", "disabled", "checked"],
  themeStyles: themeStyles$1
};
const knob$1 = {
  themeKeys: {
    width: "knobWidth",
    height: "knobHeight",
    borderRadius: "knobRadius",
    color: "knobColor",
    colorChecked: "knobColorChecked"
  },
  base: {
    color: theme.color.fillInverse,
    colorChecked: theme.color.fillInverse,
    width: theme.spacer.xxl,
    height: theme.spacer.xxl,
    borderRadius: theme.spacer.xxl / 2
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    }
  },
  themeStyles: themeStyles$1
};
makeComponentStyles(container$2);
makeComponentStyles(knob$1);
const { Tile: { defaultTone: defaultTone$1, ...tileThemeStyles } = { tileThemeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const { Surface: { defaultSurfaceTone, ...surfaceThemeStyles } = { surfaceThemeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const container$1 = {
  themeKeys: {
    alpha: "alpha",
    paddingYProgress: "paddingYProgress",
    paddingYBetweenContent: "paddingYBetweenContent",
    contentSpacingY: "contentSpacingY",
    borderRadius: "radius"
  },
  base: {
    width: 400,
    height: 240,
    padding: [40, 10],
    // TODO support separate paddingX and paddingY values from theme, possibly formatter
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    contentSpacingY: theme.spacer.md,
    borderRadius: theme.radius.md,
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...tileThemeStyles
  }
};
const insetBottom = {
  themeKeys: {},
  base: {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "contain",
    mountY: 1
  },
  themeStyles: tileThemeStyles
};
const standardBottom = {
  themeKeys: {},
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart"
  },
  themeStyles: tileThemeStyles
};
const logoContainer = {
  themeKeys: {},
  base: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  },
  themeStyles: tileThemeStyles
};
makeComponentStyles(container$1);
makeComponentStyles(insetBottom);
makeComponentStyles(standardBottom);
makeComponentStyles(logoContainer);
const { Toggle: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme == null ? void 0 : theme.componentConfig;
const knobSize = theme.spacer.xl;
const knobPadding = theme.spacer.xs;
const strokeWidth = theme.stroke.sm;
const container = {
  themeKeys: {
    borderRadius: "strokeRadius",
    color: "backgroundColor",
    colorChecked: "backgroundColorChecked"
  },
  base: {
    color: theme.color.fillInverseTertiary,
    colorChecked: theme.color.fillNeutral,
    height: knobSize + (knobPadding + strokeWidth) * 2,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2,
    borderRadius: knobSize / 2 + knobPadding + strokeWidth,
    border: {
      // TODO- strokeWidth, strokeColor, and strokeColorChecked map to border object with themeKeys
      color: theme.color.fillNeutral,
      width: strokeWidth
    }
  },
  modes: {
    focus: {},
    disabled: {
      borderRadius: knobSize / 2 + knobPadding + strokeWidth,
      border: {
        color: theme.color.fillNeutralDisabled,
        width: strokeWidth
      },
      color: theme.color.fillInverseDisabled,
      colorChecked: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      borderRadius: knobSize / 2 + knobPadding + strokeWidth,
      border: {
        color: theme.color.fillInverse,
        width: strokeWidth
      },
      color: theme.color.fillNeutralTertiary,
      colorChecked: theme.color.fillInverse,
      disabled: {
        borderRadius: knobSize / 2 + knobPadding + strokeWidth,
        border: {
          color: theme.color.fillInverseDisabled,
          width: strokeWidth
        },
        color: theme.color.fillNeutralDisabled,
        colorChecked: theme.color.fillInverseDisabled
      }
    },
    brand: {
      borderRadius: knobSize / 2 + knobPadding + strokeWidth,
      border: {
        color: theme.color.fillBrand,
        width: strokeWidth
      },
      color: theme.color.fillBrandTertiary,
      colorChecked: theme.color.fillBrand,
      disabled: {
        borderRadius: knobSize / 2 + knobPadding + strokeWidth,
        border: {
          color: theme.color.fillNeutralDisabled,
          width: strokeWidth
        },
        color: theme.color.fillInverseDisabled,
        colorChecked: theme.color.fillNeutralDisabled
      }
    }
  },
  // TODO: figure out checked state
  themeStyles
};
const knob = {
  themeKeys: {
    width: "knobWidth",
    height: "knobHeight",
    padding: "knobPadding",
    borderRadius: "knobRadius",
    color: "knobColor",
    colorChecked: "knobColorChecked"
  },
  base: {
    color: theme.color.fillNeutral,
    colorChecked: theme.color.fillInverse,
    width: knobSize,
    height: knobSize,
    borderRadius: knobSize / 2,
    padding: knobPadding
  },
  modes: {
    focus: {},
    disabled: {
      color: theme.color.fillNeutralDisabled,
      colorChecked: theme.color.fillInverseDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse,
      colorChecked: theme.color.fillNeutral,
      disabled: {
        color: theme.color.fillInverseDisabled,
        colorChecked: theme.color.fillNeutralDisabled
      }
    },
    brand: {
      color: theme.color.fillBrand,
      colorChecked: theme.color.fillInverse,
      disabled: {
        color: theme.color.fillNeutralDisabled,
        colorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  themeStyles
};
makeComponentStyles(container);
makeComponentStyles(knob);
const fpsStyle = {
  color: 255,
  height: 180,
  width: 330,
  x: 1900,
  y: 6,
  mountX: 1,
  alpha: 0.8,
  zIndex: 100
};
const fpsLabel = {
  x: 10,
  fontSize: 20,
  textColor: 4143380223
};
const fpsValue = {
  fontSize: 22,
  textColor: 4143380223
};
const [fps, setFps] = createSignal(0);
const [avgFps, setAvgFps] = createSignal(0);
const [minFps, setMinFps] = createSignal(99);
const [maxFps, setMaxFps] = createSignal(0);
const [criticalThresholdSignal, setCriticalThresholdSignal] = createSignal("");
const [targetThresholdSignal, setTargetThresholdSignal] = createSignal("");
const [renderableMemUsedSignal, setRenderableMemUsedSignal] = createSignal("");
const [memUsedSignal, setMemUsedSignal] = createSignal("");
const [renderableTexturesLoadedSignal, setRenderableTexturesLoadedSignal] = createSignal(0);
const [loadedTexturesSignal, setLoadedTexturesSignal] = createSignal(0);
let count = 0;
let totalFps = 0;
const infoFontSize = 14;
function bytesToMb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " Mb";
}
const calcFps = (fps2) => {
  if (!fps2) return;
  setFps(fps2);
  setMinFps((prev) => Math.min(fps2, prev));
  setMaxFps((prev) => Math.max(fps2, prev));
  totalFps += fps2;
  count++;
  setAvgFps(Math.round(totalFps / count));
};
function updateMemoryInfo(stage) {
  const memInfo = stage.txMemManager.getMemoryInfo();
  setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold));
  setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold));
  setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed));
  setMemUsedSignal(bytesToMb(memInfo.memUsed));
  setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded);
  setLoadedTexturesSignal(memInfo.loadedTextures);
}
let frameCount = 0;
function setupFPS(root) {
  root.renderer.on("fpsUpdate", (target, fpsData) => {
    const fps2 = typeof fpsData === "number" ? fpsData : fpsData.fps;
    if (fps2 > 5) {
      calcFps(fps2);
      if (frameCount % 10 === 0) {
        updateMemoryInfo(target.stage);
        frameCount = 0;
      }
      frameCount++;
    }
  });
}
const FPSCounter = (props) => {
  return createComponent(View, mergeProps(props, {
    style: fpsStyle,
    get children() {
      return [createComponent(View, {
        y: 6,
        get children() {
          return [createComponent(Text$5, {
            style: fpsLabel,
            children: "FPS:"
          }), createComponent(Text$5, {
            style: fpsValue,
            x: 90,
            get children() {
              return fps().toString();
            }
          })];
        }
      }), createComponent(View, {
        y: 6,
        x: 160,
        get children() {
          return [createComponent(Text$5, {
            style: fpsLabel,
            children: "AVG:"
          }), createComponent(Text$5, {
            style: fpsValue,
            x: 100,
            get children() {
              return avgFps().toString();
            }
          })];
        }
      }), createComponent(View, {
        x: 0,
        y: 26,
        get children() {
          return [createComponent(Text$5, {
            style: fpsLabel,
            children: "MIN:"
          }), createComponent(Text$5, {
            style: fpsValue,
            x: 90,
            get children() {
              return minFps().toString();
            }
          })];
        }
      }), createComponent(View, {
        x: 160,
        y: 26,
        get children() {
          return [createComponent(Text$5, {
            style: fpsLabel,
            children: "MAX:"
          }), createComponent(Text$5, {
            style: fpsValue,
            x: 100,
            get children() {
              return maxFps().toString();
            }
          })];
        }
      }), createComponent(View, {
        display: "flex",
        flexDirection: "column",
        y: 58,
        gap: 4,
        get children() {
          return [createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "criticalThreshold:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return criticalThresholdSignal();
                }
              })];
            }
          }), createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "targetThreshold:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return targetThresholdSignal();
                }
              })];
            }
          }), createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "renderableMemUsed:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return renderableMemUsedSignal();
                }
              })];
            }
          }), createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "memUsed:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return memUsedSignal();
                }
              })];
            }
          }), createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "renderableTexturesLoaded:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return renderableTexturesLoadedSignal();
                }
              })];
            }
          }), createComponent(View, {
            height: infoFontSize,
            get children() {
              return [createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                children: "loadedTextures:"
              }), createComponent(Text$5, {
                fontSize: infoFontSize,
                style: fpsLabel,
                x: 230,
                get children() {
                  return loadedTexturesSignal();
                }
              })];
            }
          })];
        }
      })];
    }
  }));
};
const styles$1 = {
  Column: {
    flexDirection: "column",
    display: "flex",
    width: 140,
    height: 600,
    y: 360,
    gap: 20,
    zIndex: 101,
    transition: {
      x: {
        duration: 250,
        easing: "ease-in-out"
      }
    },
    x: 8,
    focus: {
      width: 500,
      x: theme.layout.marginX
    }
  },
  Gradient: {
    zIndex: 99,
    color: 255,
    src: "./assets/sidenav.png",
    alpha: 0,
    width: 1200,
    height: 1080,
    focus: {
      alpha: 1
    },
    transition: { alpha: true }
  },
  NavButton: {
    zIndex: 102,
    height: 70,
    width: 100,
    borderRadius: 8,
    focus: {
      color: 1111638783
    },
    active: {
      width: 328,
      height: 70
    }
  }
};
const basePath$1 = "/solid-demo-app/";
const icons = [{
  name: "experiment",
  width: 81,
  height: 100,
  x: 0,
  y: 0
}, {
  name: "trending",
  width: 100,
  height: 56,
  x: 81,
  y: 0
}, {
  name: "tv",
  width: 100,
  height: 68,
  x: 181,
  y: 0
}, {
  name: "movie",
  width: 94,
  height: 100,
  x: 282,
  y: 0
}];
function Icon(props) {
  const sprite = createSpriteMap(basePath$1 + "assets/icons_white.png", icons);
  return createComponent(View, mergeProps(props, {
    get texture() {
      return sprite[props.name];
    },
    get width() {
      return sprite[props.name].props.width;
    },
    get height() {
      return sprite[props.name].props.height;
    },
    get x() {
      return (100 - (sprite[props.name].props.width || 0)) / 2;
    },
    get y() {
      return (100 - (sprite[props.name].props.height || 0)) / 2;
    }
  }));
}
function NavButton(props) {
  return createComponent(View, mergeProps(props, {
    forwardStates: true,
    get style() {
      return styles$1.NavButton;
    },
    get children() {
      return [createComponent(View, {
        y: -16,
        get children() {
          return createComponent(Icon, {
            scale: 0.5,
            get name() {
              return props.icon;
            }
          });
        }
      }), createComponent(Text$5, {
        style: {
          fontSize: 38,
          x: 116,
          y: 18,
          height: 50,
          alpha: 0,
          active: {
            alpha: 1
          }
        },
        get children() {
          return props.children;
        }
      })];
    }
  }));
}
function NavDrawer(props) {
  let backdrop;
  const navigate = useNavigate();
  function onFocus() {
    backdrop.states.add("focus");
    this.children.forEach((c) => c.states.add("active"));
    this.children[this.selected || 0].setFocus();
  }
  function onBlur() {
    backdrop.states.remove("focus");
    this.selected = 0;
    this.children.forEach((c) => c.states.remove("active"));
  }
  function handleNavigate(page) {
    const isOnPage = useMatch(() => page);
    if (isOnPage()) {
      return props.focusPage();
    }
    navigate(page);
  }
  return [createComponent(View, {
    flexItem: false,
    width: 300,
    height: 150,
    x: 30,
    y: 15,
    zIndex: 105,
    get alpha() {
      return props.showWidgets ? 1 : 0;
    },
    get children() {
      return [createComponent(Text$5, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), createComponent(View, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      }), createComponent(View, {
        x: 0,
        y: 110,
        src: "./assets/tmdb.png",
        width: 80,
        height: 41
      }), createComponent(Text$5, {
        x: 90,
        y: 110,
        contain: "width",
        width: 160,
        fontSize: 12,
        color: 4143380036,
        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
      })];
    }
  }), createComponent(Column, mergeProps(props, {
    onFocus,
    onBlur,
    get style() {
      return styles$1.Column;
    },
    scroll: "none",
    get children() {
      return [createComponent(NavButton, {
        onEnter: () => handleNavigate("/browse/all"),
        icon: "trending",
        children: "Trending"
      }), createComponent(NavButton, {
        icon: "movie",
        onEnter: () => handleNavigate("/browse/movie"),
        children: "Movies"
      }), createComponent(NavButton, {
        icon: "tv",
        onEnter: () => handleNavigate("/browse/tv"),
        children: "TV"
      }), createComponent(NavButton, {
        icon: "experiment",
        onEnter: () => handleNavigate("/examples"),
        children: "Examples"
      })];
    }
  })), createComponent(View, {
    skipFocus: true,
    ref(r$) {
      var _ref$ = backdrop;
      typeof _ref$ === "function" ? _ref$(r$) : backdrop = r$;
    },
    get style() {
      return styles$1.Gradient;
    }
  })];
}
const App = (props) => {
  useFocusManager({
    Announcer: ["a"],
    Menu: ["m"],
    Escape: ["Escape", 27],
    Backspace: ["Backspace", 8],
    Left: ["ArrowLeft", 37],
    Right: ["ArrowRight", 39],
    Up: ["ArrowUp", 38],
    Down: ["ArrowDown", 40],
    Enter: ["Enter", 13]
  });
  useMouse();
  const announcer = useAnnouncer();
  announcer.enabled = false;
  const navigate = useNavigate();
  let navDrawer, lastFocused;
  setupFPS({
    renderer: renderer$1
  });
  function focusNavDrawer() {
    if (navDrawer.states.has("focus")) {
      return false;
    }
    lastFocused = activeElement();
    return navDrawer.setFocus();
  }
  const [showWidgets, setShowWidgets] = createSignal(true);
  const location = useLocation();
  const showOnPaths = ["/browse", "/entity"];
  createEffect(() => {
    const currentPath = location.pathname;
    let matchesPartial = showOnPaths.some((path) => currentPath.startsWith(path));
    if (currentPath === "/") {
      matchesPartial = true;
    }
    setShowWidgets(matchesPartial);
  });
  return createComponent(View, {
    ref(r$) {
      var _ref$ = window.APP;
      typeof _ref$ === "function" ? _ref$(r$) : window.APP = r$;
    },
    onAnnouncer: () => announcer.enabled = !announcer.enabled,
    onLast: () => history.back(),
    onMenu: () => navigate("/"),
    style: {
      width: 1920,
      height: 1080
    },
    onBackspace: focusNavDrawer,
    onLeft: focusNavDrawer,
    onRight: () => navDrawer.states.has("focus") && lastFocused.setFocus(),
    get children() {
      return [createComponent(Background, {}), createComponent(FPSCounter, {
        mountX: 1,
        x: 1910,
        y: 10,
        get alpha() {
          return showWidgets() ? 1 : 0;
        }
      }), memo(() => props.children), createComponent(NavDrawer, {
        ref(r$) {
          var _ref$2 = navDrawer;
          typeof _ref$2 === "function" ? _ref$2(r$) : navDrawer = r$;
        },
        focusPage: () => lastFocused.setFocus(),
        get showWidgets() {
          return showWidgets();
        }
      })];
    }
  });
};
const params = new URLSearchParams(window.location.search);
const roundPoster = params.get("roundPoster") !== "false";
const styles = {
  Page: {
    width: 1920,
    height: 1080
  },
  headlineText: {
    width: 1200,
    height: 240,
    x: 360,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    y: 455,
    contain: "both",
    fontSize: 66,
    textAlign: "center"
  },
  headlineSubText: {
    width: 960,
    height: 170,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    x: 530,
    y: 655,
    contain: "both",
    fontSize: 48,
    textAlign: "center"
  },
  itemsContainer: {
    width: theme.layout.screenW,
    height: 800,
    y: 560,
    x: 0,
    zIndex: 2
  },
  Thumbnail: {
    borderRadius: roundPoster ? 16 : 0,
    width: 185,
    height: 278,
    scale: 1,
    zIndex: 2,
    transition: { scale: { duration: 250, easing: "ease-in-out" } },
    border: { width: 0, color: 0 },
    focus: { scale: 1.1, border: { color: 4294967142, width: 8 } }
  },
  FocusRing: {
    borderRadius: 16,
    width: 194,
    height: 286,
    y: -5,
    x: -5,
    zIndex: -1
  },
  FPS: {
    color: 255,
    height: 42,
    width: 140,
    x: 20,
    y: 20,
    zIndex: 100
  },
  FPSLabel: {
    x: 10,
    y: 0,
    fontSize: 36,
    textColor: 4294967295
  },
  FPSValue: {
    x: 90,
    y: 0,
    fontSize: 36,
    textColor: 4294967295
  },
  showHeadline: { x: 70, y: 20 },
  headlineBlur: {
    width: 1920,
    height: 150,
    x: 0,
    y: 0,
    zIndex: 14,
    alpha: 0.9,
    color: 255
  },
  RowTitle: {
    height: 60,
    width: 300,
    marginBottom: -40,
    fontSize: 36,
    color: 4042322175,
    zIndex: 2
  },
  Row: {
    display: "flex",
    justifyContent: "spaceBetween",
    height: 300
  },
  Column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    flexBoundary: "contain",
    gap: 64,
    width: theme.layout.screenW - 2 * theme.layout.marginX,
    x: theme.layout.marginX + theme.layout.gutterX,
    y: 48,
    transition: { y: { duration: 250, easing: "ease-in-out" } },
    zIndex: 2
  },
  Rect: {
    width: 250,
    height: 100,
    y: 10,
    x: 300,
    color: 65535
  },
  peopleBio: {
    ...theme.typography.body1,
    fontFamily: "Roboto",
    fontWeight: "normal",
    contain: "both",
    width: 780,
    height: 340
  }
};
const MaterialButton = {
  width: 386,
  height: 136,
  color: 1901898751,
  focus: {
    color: 1513726719
  },
  disabled: {
    color: 689783807
  }
};
const MaterialButtonText = {
  fontSize: 32,
  contain: "width",
  textAlign: "center",
  mountY: -0.35,
  color: 4294967295,
  height: MaterialButton.height,
  width: MaterialButton.width,
  // lineHeight: MaterialButton.height, // TODO: Add back when lineHeight is supported
  focus: {
    fontSize: 40
  },
  disabled: {
    color: 2425393407
  }
};
function Thumbnail(props) {
  function changeBackground(node) {
    node.color = 4294967295;
  }
  return createComponent(View, mergeProps(props, {
    color: 16711935,
    onLoad: changeBackground,
    onFail: (node) => node.src = "failback.png",
    get style() {
      return styles.Thumbnail;
    }
  }));
}
function TileRow(props) {
  const [local, others] = splitProps(props, ["items"]);
  return createComponent(Row, mergeProps(others, {
    get style() {
      return styles.Row;
    },
    get children() {
      return createComponent(Index, {
        get each() {
          return local.items;
        },
        children: (item) => createComponent(Thumbnail, item)
      });
    }
  }));
}
const API_KEY_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA";
const API_BASE = "https://api.themoviedb.org/3";
let tmdbConfig;
let baseImageUrl;
const basePosterSize = "w185";
const defaultFetchParams = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY_V4
  }
};
function getImageUrl(path, posterSize = basePosterSize) {
  return baseImageUrl + posterSize + path;
}
function get(path, params2 = {}) {
  if (tmdbConfig) {
    return _get(path, params2);
  } else {
    return loadConfig().then(() => _get(path, params2));
  }
}
function _get(path, params2 = {}) {
  return fetch(API_BASE + path, {
    ...defaultFetchParams,
    ...params2
  }).then((r) => r.json());
}
function loadConfig() {
  return _get("/configuration").then((data) => {
    var _a;
    tmdbConfig = data;
    baseImageUrl = (_a = data.images) == null ? void 0 : _a.secure_base_url;
    return data;
  });
}
const api = {
  get,
  loadConfig
};
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}
function chunkArray(array, size = 7) {
  let result = [];
  for (let i = 0, j = array.length; i < j; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
function convertItemsToTiles(items = []) {
  return items.map((item) => ({
    src: getImageUrl(item.poster_path || item.profile_path),
    tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
    backdrop: getImageUrl(item.backdrop_path, "w1280"),
    href: "/entity/".concat(item.media_type || "people", "/").concat(item.id),
    shortTitle: truncateString(item.title || item.name, 30),
    title: item.title || item.name,
    item,
    entityInfo: {
      type: item.media_type || "people",
      id: item.id
    },
    heroContent: {
      title: item.title || item.name,
      description: item.overview
    }
  }));
}
let cache = /* @__PURE__ */ new Map();
const leftoverTiles = /* @__PURE__ */ new Map();
function browseProvider(filter) {
  return (pageIndex) => {
    const url = "/trending/".concat(filter, "/week?page=").concat(pageIndex);
    if (cache.has(url)) {
      return cache.get(url);
    }
    let result = api.get(url).then((trending) => {
      let results = trending.results.filter((r) => !r.adult);
      let tiles = (leftoverTiles.has(filter) ? leftoverTiles.get(filter) : []).concat(convertItemsToTiles(results));
      let chunks = chunkArray(tiles);
      if (chunks[chunks.length - 1].length < 7) {
        leftoverTiles.set(filter, chunks.pop());
      } else {
        leftoverTiles.delete(filter);
      }
      return chunks;
    });
    cache.set(url, result);
    return result;
  };
}
function createInfiniteScroll(fetcher) {
  const [pages, setPages] = createSignal([]);
  const [page, setPage] = createSignal(1);
  const [end, setEnd] = createSignal(false);
  const [contents] = createResource(page, fetcher);
  createComputed(() => {
    const content2 = contents();
    if (!content2) return;
    batch(() => {
      if (content2.length === 0) setEnd(true);
      setPages((p) => [...p, ...content2]);
    });
  });
  return {
    pages,
    page,
    setPage,
    setPages,
    end,
    setEnd
  };
}
const blockWidth = 900;
const ContentBlockStyle = {
  display: "flex",
  flexDirection: "column",
  flexBoundary: "fixed",
  width: blockWidth,
  height: 220,
  gap: 16
};
const HeadlineStyles = {
  ...theme.typography.display2,
  fontFamily: "Roboto",
  fontWeight: 700,
  maxLines: 1,
  width: blockWidth,
  contain: "width"
};
const Headline = (props) => createComponent(Text$5, mergeProps(props, {
  style: HeadlineStyles
}));
const DescriptionStyles = {
  ...theme.typography.body1,
  fontFamily: "Roboto",
  fontWeight: 400,
  lineHeight: 32,
  width: blockWidth,
  maxLines: 3,
  contain: "width"
};
const BadgeStyle = {
  fontSize: 16,
  lineHeight: 20,
  marginLeft: 13,
  marginRight: 13
};
const Description = (props) => createComponent(Text$5, mergeProps(props, {
  style: DescriptionStyles,
  get children() {
    return props.children;
  }
}));
const Badge = (props) => {
  return createComponent(View, mergeProps(props, {
    style: {
      color: "0x00000099",
      borderRadius: 8,
      border: {
        width: 2,
        color: "0xffffffff"
      },
      display: "flex",
      height: 36
    },
    get children() {
      return createComponent(Text$5, {
        lineHeight: 36,
        style: BadgeStyle,
        get children() {
          return props.children;
        }
      });
    }
  }));
};
const MetaTextStyle = {
  ...theme.typography.body2,
  fontFamily: "Roboto",
  fontWeight: 400
};
const Metadata = (props) => createComponent(View, {
  style: {
    display: "flex",
    flexDirection: "row",
    gap: 18,
    width: blockWidth,
    height: 48
  },
  get children() {
    return [createComponent(View, {
      y: -4,
      src: "./assets/stars.png",
      width: 188,
      height: 31
    }), createComponent(View, {
      y: -4,
      flexItem: false,
      clipping: true,
      get width() {
        return 188 * props.voteAverage / 10;
      },
      height: 31,
      get children() {
        return createComponent(View, {
          src: "./assets/stars-full.png",
          width: 188,
          height: 31
        });
      }
    }), createComponent(Text$5, {
      style: MetaTextStyle,
      get children() {
        return [memo(() => props.voteCount), " reviews"];
      }
    }), createComponent(Text$5, {
      style: MetaTextStyle,
      get children() {
        return props.metaText;
      }
    }), createComponent(For, {
      get each() {
        return props.badges;
      },
      children: (item) => createComponent(Badge, {
        y: -5,
        children: item
      })
    })];
  }
});
const ContentBlock = (props) => createComponent(View, mergeProps({
  id: "contentBlock",
  style: ContentBlockStyle
}, props, {
  get children() {
    return [createComponent(Headline, {
      get children() {
        return props.content.title;
      }
    }), createComponent(Description, {
      get children() {
        return props.content.description;
      }
    }), createComponent(Show, {
      get when() {
        return props.content.voteCount;
      },
      get children() {
        return createComponent(Metadata, {
          get metaText() {
            return props.content.metaText;
          },
          get badges() {
            return props.content.badges;
          },
          get voteCount() {
            return props.content.voteCount;
          },
          get voteAverage() {
            return props.content.voteAverage;
          }
        });
      }
    })];
  }
}));
const Browse = () => {
  const params2 = useParams();
  const [columnY, setcolumnY] = createSignal(0);
  const [heroContent, setHeroContent] = createSignal({});
  const navigate = useNavigate();
  const isFirst = createSelector(() => {
    return 0;
  });
  const provider = createMemo(() => {
    return createInfiniteScroll(browseProvider(params2.filter || "all"));
  });
  const delayedBackgrounds = debounce((img) => setGlobalBackground(img), 400);
  const delayedHero = debounce((content2) => setHeroContent(content2 || {}), 200);
  createEffect(on(activeElement, (elm) => {
    if (elm.backdrop) {
      delayedBackgrounds(elm.backdrop);
    }
    if (elm.heroContent) {
      delayedHero(elm.heroContent);
    }
  }, {
    defer: true
  }));
  function onRowFocus() {
    this.children[this.selected || 0].setFocus();
    setcolumnY((this.y || 0) * -1 + 24);
    let numPages = provider().pages().length;
    this.parent.selected = this.parent.children.indexOf(this);
    if (numPages === 0 || this.parent.selected && this.parent.selected >= numPages - 2) {
      provider().setPage((p) => p + 1);
    }
  }
  function onEnter() {
    let entity = this.children.find((c) => c.states.has("focus"));
    assertTruthy(entity && entity.href);
    navigate(entity.href);
    return true;
  }
  return createComponent(Show, {
    get when() {
      return provider().pages().length;
    },
    get children() {
      return [createComponent(ContentBlock, {
        y: 360,
        x: 162,
        get content() {
          return heroContent();
        }
      }), createComponent(View, {
        clipping: true,
        get style() {
          return styles.itemsContainer;
        },
        get children() {
          return createComponent(Column, {
            id: "BrowseColumn",
            plinko: true,
            announce: "All Trending - Week",
            get y() {
              return columnY();
            },
            scroll: "none",
            get style() {
              return styles.Column;
            },
            get children() {
              return createComponent(For, {
                get each() {
                  return provider().pages();
                },
                children: (items, i) => createComponent(TileRow, {
                  get autofocus() {
                    return isFirst(i());
                  },
                  items,
                  width: 1620,
                  onFocus: onRowFocus,
                  onEnter
                })
              });
            }
          });
        }
      })];
    }
  });
};
const NotFound = () => {
  return (() => {
    var _el$ = createElement("node");
    setProp(_el$, "style", {
      width: 1920,
      height: 1080,
      color: 868483072
    });
    return _el$;
  })();
};
const basePath = "/solid-demo-app/";
const fonts = [
  {
    type: "msdf",
    fontFamily: "Roboto",
    descriptors: {
      weight: 700
    },
    atlasDataUrl: basePath + "fonts/Roboto-Bold.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Bold.msdf.png"
  },
  {
    type: "msdf",
    fontFamily: "Roboto",
    descriptors: {
      weight: 400
    },
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png"
  },
  {
    type: "msdf",
    fontFamily: "Arial",
    descriptors: {
      weight: 500
    },
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png"
  }
];
const Grid = lazy(() => __vitePreload(() => import("./Grid-Be3FI8tx.js"), true ? [] : void 0));
const Portal = lazy(() => __vitePreload(() => import("./Portal-CPLq7kbn.js"), true ? [] : void 0));
const TextPage = lazy(() => __vitePreload(() => import("./Text-BC86Vgd3.js"), true ? [] : void 0));
const CreatePage = lazy(() => __vitePreload(() => import("./Create-BbMwaFU_.js"), true ? [] : void 0));
const ViewportPage = lazy(() => __vitePreload(() => import("./Viewport-CtvLS68R.js"), true ? [] : void 0));
const ButtonsPage = lazy(() => __vitePreload(() => import("./Buttons-C_HBZyIV.js"), true ? __vite__mapDeps([0,1]) : void 0));
const FlexPage = lazy(() => __vitePreload(() => import("./Flex-p2q-Pbs_.js"), true ? [] : void 0));
const FlexSizePage = lazy(() => __vitePreload(() => import("./FlexSize-CTM6GAuI.js"), true ? [] : void 0));
const FlexColumnSizePage = lazy(() => __vitePreload(() => import("./FlexColumnSize-BW6z_QYe.js"), true ? [] : void 0));
const FlexColumnPage = lazy(() => __vitePreload(() => import("./FlexColumn-BHS-PjZO.js"), true ? [] : void 0));
const ButtonsMaterialPage = lazy(() => __vitePreload(() => import("./ButtonsMaterial-Dqqw5sm2.js"), true ? [] : void 0));
const SuperFlexPage = lazy(() => __vitePreload(() => import("./SuperFlex-BEfbj-fA.js"), true ? [] : void 0));
const Entity = lazy(() => __vitePreload(() => import("./Entity-5MVjb4Xr.js"), true ? __vite__mapDeps([2,1]) : void 0));
const People = lazy(() => __vitePreload(() => import("./People-BhpScY6g.js"), true ? [] : void 0));
const LoginPage = lazy(() => __vitePreload(() => import("./Login-rpD3HvKu.js"), true ? __vite__mapDeps([3,1]) : void 0));
Config.debug = false;
Config.animationsEnabled = true;
Config.fontSettings.fontFamily = "Roboto";
Config.fontSettings.color = 4143380223;
Config.fontSettings.fontSize = 32;
Config.rendererOptions = {
  fpsUpdateInterval: 200,
  fontEngines: [SdfTextRenderer],
  renderEngine: WebGlCoreRenderer,
  inspector: Inspector,
  textureMemory: {
    criticalThreshold: 8e7
  },
  numImageWorkers: 0,
  // temp fix for renderer bug
  // Set the resolution based on window height
  // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
  deviceLogicalPixelRatio: window.innerHeight / 1080
};
const {
  render
} = createRenderer();
loadFonts(fonts);
render(() => createComponent(HashRouter, {
  root: (props) => createComponent(App, props),
  get children() {
    return [createComponent(Route, {
      path: "",
      component: Browse
    }), createComponent(Route, {
      path: "examples",
      component: Portal
    }), createComponent(Route, {
      path: "browse/:filter",
      component: Browse
    }), createComponent(Route, {
      path: "grid",
      component: Grid
    }), createComponent(Route, {
      path: "text",
      component: TextPage
    }), createComponent(Route, {
      path: "login",
      component: LoginPage
    }), createComponent(Route, {
      path: "buttons",
      component: ButtonsPage
    }), createComponent(Route, {
      path: "flex",
      component: FlexPage
    }), createComponent(Route, {
      path: "create",
      component: CreatePage
    }), createComponent(Route, {
      path: "viewport",
      component: ViewportPage
    }), createComponent(Route, {
      path: "flexsize",
      component: FlexSizePage
    }), createComponent(Route, {
      path: "flexcolumnsize",
      component: FlexColumnSizePage
    }), createComponent(Route, {
      path: "flexcolumn",
      component: FlexColumnPage
    }), createComponent(Route, {
      path: "superflex",
      component: SuperFlexPage
    }), createComponent(Route, {
      path: "buttonsmaterial",
      component: ButtonsMaterialPage
    }), createComponent(Route, {
      path: "entity/people/:id",
      component: People
    }), createComponent(Route, {
      path: "entity/:type/:id",
      component: Entity
    }), createComponent(Route, {
      path: "*all",
      component: NotFound
    })];
  }
}));
function playVideo() {
  const video = document.getElementById("video");
  video.hidden = false;
  setTimeout(() => video.play(), 50);
  video.focus();
  return video;
}
function closeVideo() {
  const video = document.getElementById("video");
  video.hidden = true;
  video.pause();
  return video;
}
export {
  TileRow as A,
  closeVideo as B,
  Column as C,
  playVideo as D,
  setActiveElement as E,
  For as F,
  styles$5 as G,
  styles$4 as H,
  Index as I,
  styles$3 as J,
  styles$7 as K,
  MaterialButtonText as M,
  Row as R,
  Show as S,
  Text$5 as T,
  View as V,
  __vite_legacy_guard,
  createResource as a,
  createComputed as b,
  createSignal as c,
  batch as d,
  createSelector as e,
  createEffect as f,
  onMount as g,
  createComponent as h,
  styles as i,
  assertTruthy as j,
  hexColor as k,
  memo as l,
  mergeProps as m,
  children as n,
  on as o,
  onCleanup as p,
  createMemo as q,
  styles$8 as r,
  setGlobalBackground as s,
  theme as t,
  useNavigate as u,
  api as v,
  convertItemsToTiles as w,
  getImageUrl as x,
  useParams as y,
  ContentBlock as z
};
//# sourceMappingURL=index-DGkYvuMa.js.map
