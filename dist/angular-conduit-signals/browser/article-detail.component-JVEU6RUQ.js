import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JMVP32SD.js";
import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  ActivatedRoute,
  ArticleService,
  DomSanitizer,
  ProfileService,
  Router,
  RouterLink,
  Title,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  DatePipe,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Pipe,
  SecurityContext,
  defer,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-GDGJH4RA.js";

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = { exec: function noopTest2() {
} };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkDeprecations(opt, callback) {
  if (!opt || opt.silent) {
    return;
  }
  if (callback) {
    console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");
  }
  if (opt.sanitize || opt.sanitizer) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  if (opt.highlight || opt.langPrefix !== "language-") {
    console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");
  }
  if (opt.mangle) {
    console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");
  }
  if (opt.baseUrl) {
    console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");
  }
  if (opt.smartypants) {
    console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");
  }
  if (opt.xhtml) {
    console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");
  }
  if (opt.headerIds || opt.headerPrefix) {
    console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        if (!list.loose) {
          const spacers = list.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = __spreadValues({}, block);
block.gfm = __spreadProps(__spreadValues({}, block.normal), {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = __spreadProps(__spreadValues({}, block.normal), {
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = __spreadValues({}, inline);
inline.pedantic = __spreadProps(__spreadValues({}, inline.normal), {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = __spreadProps(__spreadValues({}, inline.normal), {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = __spreadProps(__spreadValues({}, inline.gfm), {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer = class _Lexer {
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new _Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new _Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer = class {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger = class {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class _Parser {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          out += this.renderer.code(
            token.text,
            token.lang,
            token.escaped
          );
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text, token.block);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
};
function onError(silent, async, callback) {
  return (e) => {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (silent) {
      const msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
      if (async) {
        return Promise.resolve(msg);
      }
      if (callback) {
        callback(null, msg);
        return;
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    if (callback) {
      callback(e);
      return;
    }
    throw e;
  };
}
function parseMarkdown(lexer2, parser2) {
  return (src, opt, callback) => {
    if (typeof opt === "function") {
      callback = opt;
      opt = null;
    }
    const origOpt = __spreadValues({}, opt);
    opt = __spreadValues(__spreadValues({}, marked.defaults), origOpt);
    const throwError = onError(opt.silent, opt.async, callback);
    if (typeof src === "undefined" || src === null) {
      return throwError(new Error("marked(): input parameter is undefined or null"));
    }
    if (typeof src !== "string") {
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    }
    checkDeprecations(opt, callback);
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (callback) {
      const highlight = opt.highlight;
      let tokens;
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        tokens = lexer2(src, opt);
      } catch (e) {
        return throwError(e);
      }
      const done = function(err) {
        let out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = parser2(tokens, opt);
            if (opt.hooks) {
              out = opt.hooks.postprocess(out);
            }
          } catch (e) {
            err = e;
          }
        }
        opt.highlight = highlight;
        return err ? throwError(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length) return done();
      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        if (token.type === "code") {
          pending++;
          setTimeout(() => {
            highlight(token.text, token.lang, function(err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      const tokens = lexer2(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      let html = parser2(tokens, opt);
      if (opt.hooks) {
        html = opt.hooks.postprocess(html);
      }
      return html;
    } catch (e) {
      return throwError(e);
    }
  };
}
function marked(src, opt, callback) {
  return parseMarkdown(Lexer.lex, Parser.parse)(src, opt, callback);
}
marked.options = marked.setOptions = function(opt) {
  marked.defaults = __spreadValues(__spreadValues({}, marked.defaults), opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  args.forEach((pack) => {
    const opts = __spreadValues({}, pack);
    opts.async = marked.defaults.async || opts.async || false;
    if (pack.extensions) {
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers[ext.name];
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
      opts.extensions = extensions;
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.hooks) {
      const hooks = marked.defaults.hooks || new Hooks();
      for (const prop in pack.hooks) {
        const prevHook = hooks[prop];
        if (Hooks.passThroughHooks.has(prop)) {
          hooks[prop] = (arg) => {
            if (marked.defaults.async) {
              return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => {
                return prevHook.call(hooks, ret2);
              });
            }
            const ret = pack.hooks[prop].call(hooks, arg);
            return prevHook.call(hooks, ret);
          };
        } else {
          hooks[prop] = (...args2) => {
            let ret = pack.hooks[prop].apply(hooks, args2);
            if (ret === false) {
              ret = prevHook.apply(hooks, args2);
            }
            return ret;
          };
        }
      }
      opts.hooks = hooks;
    }
    if (pack.walkTokens) {
      const walkTokens2 = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        let values = [];
        values.push(pack.walkTokens.call(this, token));
        if (walkTokens2) {
          values = values.concat(walkTokens2.call(this, token));
        }
        return values;
      };
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  let values = [];
  for (const token of tokens) {
    values = values.concat(callback.call(marked, token));
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          values = values.concat(marked.walkTokens(cell.tokens, callback));
        }
        for (const row of token.rows) {
          for (const cell of row) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
        }
        break;
      }
      case "list": {
        values = values.concat(marked.walkTokens(token.items, callback));
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            values = values.concat(marked.walkTokens(token[childTokens], callback));
          });
        } else if (token.tokens) {
          values = values.concat(marked.walkTokens(token.tokens, callback));
        }
      }
    }
  }
  return values;
};
marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = Parser.parse;
var lexer = Lexer.lex;

// src/app/shared/ui/markdown/markdown.pipe.ts
var _domSanitizer;
var _MarkdownPipe = class _MarkdownPipe {
  constructor() {
    __privateAdd(this, _domSanitizer, inject(DomSanitizer));
  }
  transform(value) {
    return __privateGet(this, _domSanitizer).sanitize(SecurityContext.HTML, marked(value));
  }
};
_domSanitizer = new WeakMap();
_MarkdownPipe.\u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownPipe)();
};
_MarkdownPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
var MarkdownPipe = _MarkdownPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true
    }]
  }], null, null);
})();

// src/app/article-detail/article-detail.store.ts
var _profileService, _articleService, _router, _title;
var _ArticleDetailStore = class _ArticleDetailStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _profileService);
    __privateAdd(this, _articleService);
    __privateAdd(this, _router);
    __privateAdd(this, _title);
    __privateSet(this, _profileService, inject(ProfileService));
    __privateSet(this, _articleService, inject(ArticleService));
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _title, inject(Title));
    this.getArticleDetail = this.effect(switchMap((slug) => __privateGet(this, _articleService).getArticleDetail(slug).pipe(tapResponse((response) => {
      __privateGet(this, _title).setTitle(`${response.article.title} - Conduit`);
      this.patchState({
        article: response.article
      });
    }, (error) => {
      console.error("Get Article Detail Failed", error);
      __privateGet(this, _router).navigate(["/"]);
    }))));
    this.getArticleComments = this.effect(switchMap((slug) => __privateGet(this, _articleService).getCommentsForArticle(slug).pipe(tapResponse((response) => {
      this.patchState({
        comments: response.comments
      });
    }, (error) => {
      console.error("Get Article Comments Failed", error);
    }))));
    this.createComment = this.effect(switchMap((request) => __privateGet(this, _articleService).createCommentForArticle(request.slug, request.comment).pipe(tapResponse(() => {
      this.getArticleComments(request.slug);
    }, (error) => {
      console.error("Create Comment Failed", error);
    }))));
    this.deleteComment = this.effect(exhaustMap((request) => __privateGet(this, _articleService).deleteCommentForArticle(request.slug, request.commentId).pipe(tapResponse(() => {
      this.getArticleComments(request.slug);
    }, (error) => {
      console.error("Create Comment Failed", error);
    }))));
    this.toggleFavorite = this.effect(exhaustMap((article) => defer(() => {
      if (article.favorited) {
        return __privateGet(this, _articleService).unfavoriteArticle(article.slug);
      } else {
        return __privateGet(this, _articleService).favoriteArticle(article.slug);
      }
    }).pipe(tapResponse(() => {
      this.getArticleDetail(article.slug);
    }, (error) => {
      console.error("Toggle Favorite Failed", error);
    }))));
    this.deleteArticle = this.effect(exhaustMap((slug) => __privateGet(this, _articleService).deleteArticle(slug).pipe(tapResponse(() => {
      __privateGet(this, _router).navigate(["/"]);
    }, (error) => {
      console.error("Delete Article Failed", error);
    }))));
    this.toggleFollow = this.effect(exhaustMap((article) => defer(() => {
      if (article.author.following) {
        return __privateGet(this, _profileService).unfollowUser(article.author.username);
      } else {
        return __privateGet(this, _profileService).followUser(article.author.username);
      }
    }).pipe(tapResponse(() => {
      this.getArticleDetail(article.slug);
    }, (error) => {
      console.error("Toggle Follow User Failed", error);
    }))));
  }
  ngrxOnStoreInit() {
    this.setState({
      article: null,
      comments: []
    });
  }
};
_profileService = new WeakMap();
_articleService = new WeakMap();
_router = new WeakMap();
_title = new WeakMap();
_ArticleDetailStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ArticleDetailStore_BaseFactory;
  return function ArticleDetailStore_Factory(__ngFactoryType__) {
    return (\u0275ArticleDetailStore_BaseFactory || (\u0275ArticleDetailStore_BaseFactory = \u0275\u0275getInheritedFactory(_ArticleDetailStore)))(__ngFactoryType__ || _ArticleDetailStore);
  };
})();
_ArticleDetailStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArticleDetailStore, factory: _ArticleDetailStore.\u0275fac });
var ArticleDetailStore = _ArticleDetailStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleDetailStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/article-detail/ui/comment-form/comment-form.component.ts
function CommentFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function CommentFormComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestSubmit());
    });
    \u0275\u0275text(1, " Post Comment ");
    \u0275\u0275elementEnd();
  }
}
function CommentFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 8);
    \u0275\u0275text(2, "Are you sure you want to post this comment?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function CommentFormComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelSubmit());
    });
    \u0275\u0275text(4, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function CommentFormComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmSubmit());
    });
    \u0275\u0275text(6, " Confirm ");
    \u0275\u0275elementEnd()();
  }
}
var _route, _articleDetailStore;
var _CommentFormComponent = class _CommentFormComponent {
  constructor() {
    __privateAdd(this, _route);
    __privateAdd(this, _articleDetailStore);
    __privateSet(this, _route, inject(ActivatedRoute));
    __privateSet(this, _articleDetailStore, inject(ArticleDetailStore));
    this.avatar = inject(AuthStore).selectors.user()?.image;
    this.showConfirmation = false;
  }
  // Étape 1: Afficher la confirmation au lieu de soumettre directement
  requestSubmit() {
    if (this.comment && this.comment.trim()) {
      this.showConfirmation = true;
    }
  }
  // Étape 2: Confirmation requise pour soumettre
  confirmSubmit() {
    __privateGet(this, _articleDetailStore).createComment({
      slug: this.slug,
      comment: {
        body: this.comment
      }
    });
    this.comment = "";
    this.showConfirmation = false;
  }
  // Annuler la confirmation
  cancelSubmit() {
    this.showConfirmation = false;
  }
};
_route = new WeakMap();
_articleDetailStore = new WeakMap();
_CommentFormComponent.\u0275fac = function CommentFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CommentFormComponent)();
};
_CommentFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentFormComponent, selectors: [["app-comment-form"]], inputs: { slug: "slug" }, decls: 7, vars: 5, consts: [[1, "card-comment"], [1, "card-body"], ["placeholder", "Write a comment...", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "card-footer"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "btn", "bt-sm", "btn-submit"], [1, "confirmation-step"], [1, "btn", "bt-sm", "btn-submit", 3, "click"], [1, "confirmation-message"], [1, "btn", "bt-sm", "btn-cancel", 3, "click"], [1, "btn", "bt-sm", "btn-confirm", 3, "click"]], template: function CommentFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "textarea", 2);
    \u0275\u0275twoWayListener("ngModelChange", function CommentFormComponent_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.comment, $event) || (ctx.comment = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275conditionalCreate(5, CommentFormComponent_Conditional_5_Template, 2, 0, "button", 5);
    \u0275\u0275conditionalCreate(6, CommentFormComponent_Conditional_6_Template, 7, 0, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.comment);
    \u0275\u0275property("disabled", ctx.showConfirmation);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.showConfirmation ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showConfirmation ? 6 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.card-comment[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  border: 1px solid var(--extra-white-gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n}\n.card-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border: none;\n  box-shadow: none;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--extra-white-gray-color);\n  padding: 0.75rem 1.25rem;\n  background-color: var(--white-gray-color);\n  display: flex;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%]   .confirmation-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  color: var(--gray-color);\n  background-color: transparent;\n  border-color: var(--gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: var(--white-gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .confirmation-step[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=comment-form.component.css.map */"], changeDetection: 0 });
var CommentFormComponent = _CommentFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentFormComponent, [{
    type: Component,
    args: [{ selector: "app-comment-form", imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- MAUVAISE PRATIQUE BP5: \xC9tape de confirmation inutile qui ajoute de la friction au parcours utilisateur -->\n<div class="card-comment">\n  <div class="card-body">\n    <textarea\n      class="form-control"\n      placeholder="Write a comment..."\n      rows="3"\n      [(ngModel)]="comment"\n      [disabled]="showConfirmation"\n    ></textarea>\n  </div>\n  <div class="card-footer">\n    <img alt="avatar" [src]="avatar" class="avatar" />\n\n    <!-- \xC9tape 1: Bouton initial qui demande confirmation -->\n    @if (!showConfirmation) {\n      <button class="btn bt-sm btn-submit" (click)="requestSubmit()">\n        Post Comment\n      </button>\n    }\n\n    <!-- \xC9tape 2: Confirmation requise - MAUVAISE PRATIQUE: ajoute des clics inutiles -->\n    @if (showConfirmation) {\n      <div class="confirmation-step">\n        <span class="confirmation-message">Are you sure you want to post this comment?</span>\n        <button class="btn bt-sm btn-cancel" (click)="cancelSubmit()">\n          Cancel\n        </button>\n        <button class="btn bt-sm btn-confirm" (click)="confirmSubmit()">\n          Confirm\n        </button>\n      </div>\n    }\n  </div>\n</div>\n', styles: ["/* src/app/article-detail/ui/comment-form/comment-form.component.scss */\n.card-comment {\n  border-radius: 0.25rem;\n  border: 1px solid var(--extra-white-gray-color);\n}\n.card-comment textarea {\n  border: none;\n}\n.card-comment textarea:focus {\n  border: none;\n  box-shadow: none;\n}\n.card-comment .card-footer {\n  border-top: 1px solid var(--extra-white-gray-color);\n  padding: 0.75rem 1.25rem;\n  background-color: var(--white-gray-color);\n  display: flex;\n}\n.card-comment .card-footer .avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-comment .card-footer .btn-submit {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.card-comment .card-footer .btn-submit:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n.card-comment .card-footer .confirmation-step {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.card-comment .card-footer .confirmation-step .confirmation-message {\n  font-size: 0.875rem;\n  color: var(--gray-color);\n}\n.card-comment .card-footer .confirmation-step .btn-cancel {\n  color: var(--gray-color);\n  background-color: transparent;\n  border-color: var(--gray-color);\n}\n.card-comment .card-footer .confirmation-step .btn-cancel:hover {\n  background-color: var(--white-gray-color);\n}\n.card-comment .card-footer .confirmation-step .btn-confirm {\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.card-comment .card-footer .confirmation-step .btn-confirm:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=comment-form.component.css.map */\n"] }]
  }], null, { slug: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentFormComponent, { className: "CommentFormComponent", filePath: "src/app/article-detail/ui/comment-form/comment-form.component.ts", lineNumber: 19 });
})();

// src/app/article-detail/ui/comment-list/comment-list.component.ts
var _c0 = (a0) => [a0];
function CommentListComponent_ng_container_1_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function CommentListComponent_ng_container_1_a_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const comment_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteComment(comment_r2.id));
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function CommentListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275element(6, "img", 5);
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CommentListComponent_ng_container_1_a_12_Template, 2, 0, "a", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const comment_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", comment_r2.body, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", comment_r2.author.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, "/@" + comment_r2.author.username));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r2.author.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, comment_r2.createdAt, "MMMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r2.currentUser()) == null ? null : tmp_7_0.username) === comment_r2.author.username);
  }
}
var _authStore, _articleDetailStore2;
var _CommentListComponent = class _CommentListComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateAdd(this, _articleDetailStore2);
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _articleDetailStore2, inject(ArticleDetailStore));
    this.commentList = __privateGet(this, _articleDetailStore2).selectors.comments;
    this.currentUser = __privateGet(this, _authStore).selectors.user;
  }
  ngOnInit() {
    __privateGet(this, _articleDetailStore2).getArticleComments(this.slug);
  }
  onDeleteComment(commentId) {
    __privateGet(this, _articleDetailStore2).deleteComment({
      slug: this.slug,
      commentId
    });
  }
};
_authStore = new WeakMap();
_articleDetailStore2 = new WeakMap();
_CommentListComponent.\u0275fac = function CommentListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CommentListComponent)();
};
_CommentListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentListComponent, selectors: [["app-comment-list"]], inputs: { slug: "slug" }, decls: 2, vars: 1, consts: [[1, "comment-list"], [4, "ngFor", "ngForOf"], [1, "card-comment"], [1, "card-body"], [1, "card-footer"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "author", 3, "routerLink"], [1, "date"], ["class", "delete-btn", 3, "click", 4, "ngIf"], [1, "delete-btn", 3, "click"], [1, "fa-solid", "fa-trash"]], template: function CommentListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, CommentListComponent_ng_container_1_Template, 13, 11, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.commentList());
  }
}, dependencies: [NgForOf, RouterLink, NgIf, DatePipe], styles: ["\n\n.card-comment[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  border: 1px solid var(--extra-white-gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n}\n.card-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border: none;\n  box-shadow: none;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--extra-white-gray-color);\n  padding: 0.75rem 1.25rem;\n  background-color: var(--white-gray-color);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  color: var(--green-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--gray-color);\n  margin-bottom: 0;\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n  color: var(--extra-white-gray-color);\n}\n.card-comment[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  color: var(--extra-gray-color);\n}\n.comment-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 14px;\n  flex-direction: column;\n  gap: 14px;\n}\n/*# sourceMappingURL=comment-list.component.css.map */"], changeDetection: 0 });
var CommentListComponent = _CommentListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentListComponent, [{
    type: Component,
    args: [{ selector: "app-comment-list", imports: [NgForOf, RouterLink, DatePipe, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="comment-list">
  <ng-container *ngFor="let comment of commentList()">
    <div class="card-comment">
      <div class="card-body">
        <p>
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <img alt="avatar" [src]="comment.author.image" class="avatar" />
        <a class="author" [routerLink]="['/@' + comment.author.username]">{{
          comment.author.username
        }}</a>
        <p class="date">{{ comment.createdAt | date : "MMMM d, y" }}</p>
        <a
          class="delete-btn"
          *ngIf="currentUser()?.username === comment.author.username"
          (click)="onDeleteComment(comment.id)"
          ><i class="fa-solid fa-trash"></i
        ></a>
      </div>
    </div>
  </ng-container>
</div>
`, styles: ["/* src/app/article-detail/ui/comment-list/comment-list.component.scss */\n.card-comment {\n  border-radius: 0.25rem;\n  border: 1px solid var(--extra-white-gray-color);\n}\n.card-comment textarea {\n  border: none;\n}\n.card-comment textarea:focus {\n  border: none;\n  box-shadow: none;\n}\n.card-comment .card-footer {\n  border-top: 1px solid var(--extra-white-gray-color);\n  padding: 0.75rem 1.25rem;\n  background-color: var(--white-gray-color);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-comment .card-footer .avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-comment .card-footer .author {\n  text-decoration: none;\n}\n.card-comment .card-footer .author:hover {\n  text-decoration: underline;\n}\n.card-comment .card-footer .author {\n  color: var(--green-color);\n}\n.card-comment .card-footer .date {\n  font-size: 12.8px;\n  color: var(--gray-color);\n  margin-bottom: 0;\n}\n.card-comment .card-footer .delete-btn {\n  margin-left: auto;\n  cursor: pointer;\n  color: var(--extra-white-gray-color);\n}\n.card-comment .card-footer .delete-btn:hover {\n  color: var(--extra-gray-color);\n}\n.comment-list {\n  display: flex;\n  margin-top: 14px;\n  flex-direction: column;\n  gap: 14px;\n}\n/*# sourceMappingURL=comment-list.component.css.map */\n"] }]
  }], null, { slug: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentListComponent, { className: "CommentListComponent", filePath: "src/app/article-detail/ui/comment-list/comment-list.component.ts", lineNumber: 18 });
})();

// src/app/article-detail/article-detail.component.ts
var _c02 = () => ({ type: "header" });
var _c1 = () => ({ type: "body" });
var _c2 = (a0) => [a0];
var _c3 = (a0) => ["/editor", a0];
function ArticleDetailComponent_ng_container_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function ArticleDetailComponent_ng_container_0_app_comment_form_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-comment-form", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("slug", ctx_r1.slug);
  }
}
function ArticleDetailComponent_ng_container_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "a", 28);
    \u0275\u0275text(2, "Sign in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " or ");
    \u0275\u0275elementStart(4, "a", 29);
    \u0275\u0275text(5, "sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " to add comments on this article. ");
    \u0275\u0275elementEnd();
  }
}
function ArticleDetailComponent_ng_container_0_ng_template_33_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function ArticleDetailComponent_ng_container_0_ng_template_33_ng_container_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const article_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFollowAuthor(article_r4));
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function ArticleDetailComponent_ng_container_0_ng_template_33_ng_container_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const article_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite(article_r4));
    });
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const article_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", article_r4.author.following ? "Unfollow" : "Follow", " ", article_r4.author.username, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", article_r4.favorited ? "unfavorite-btn" : "favorite-btn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", article_r4.favorited ? "Unfavorite Article" : "Favorite Article", " (", article_r4.favoritesCount, ") ");
  }
}
function ArticleDetailComponent_ng_container_0_ng_template_33_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " Edit Article ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 43);
    \u0275\u0275listener("click", function ArticleDetailComponent_ng_container_0_ng_template_33_ng_template_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const article_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteArticle(article_r4));
    });
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275text(5, " Delete Article ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const article_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c3, article_r4.slug));
  }
}
function ArticleDetailComponent_ng_container_0_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "a", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35);
    \u0275\u0275template(9, ArticleDetailComponent_ng_container_0_ng_template_33_ng_container_9_Template, 7, 5, "ng-container", 36)(10, ArticleDetailComponent_ng_container_0_ng_template_33_ng_template_10_Template, 6, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const type_r6 = ctx.type;
    const editTmp_r7 = \u0275\u0275reference(11);
    const article_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", article_r4.author.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", type_r6 === "header" ? "#fff" : "#5CB85C");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c2, "/@" + article_r4.author.username));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(article_r4.author.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, article_r4.createdAt, "MMMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx_r1.currentUser()) == null ? null : tmp_12_0.username) !== article_r4.author.username)("ngIfElse", editTmp_r7);
  }
}
function ArticleDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "h1", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(5, 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275element(8, "div", 10);
    \u0275\u0275pipe(9, "markdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275template(11, ArticleDetailComponent_ng_container_0_ng_container_11_Template, 3, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "h5");
    \u0275\u0275text(14, "Partager cet article :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275element(16, "div", 15)(17, "div", 16);
    \u0275\u0275elementStart(18, "a", 17);
    \u0275\u0275text(19, " Tweet ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 18);
    \u0275\u0275text(21, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 19);
    \u0275\u0275element(23, "img", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(24, "hr", 21);
    \u0275\u0275elementStart(25, "div", 22);
    \u0275\u0275elementContainer(26, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24);
    \u0275\u0275template(29, ArticleDetailComponent_ng_container_0_app_comment_form_29_Template, 1, 1, "app-comment-form", 25)(30, ArticleDetailComponent_ng_container_0_ng_template_30_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(32, "app-comment-list", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, ArticleDetailComponent_ng_container_0_ng_template_33_Template, 12, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const article_r4 = ctx.ngIf;
    const requireLogin_r8 = \u0275\u0275reference(31);
    const articleMeta_r9 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", articleMeta_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction0(17, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHtml", \u0275\u0275pipeBind1(9, 15, article_r4.body), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", article_r4.tagList);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("data-href", "https://conduit.realworld.io/article/" + article_r4.slug);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-href", "https://conduit.realworld.io/article/" + article_r4.slug);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-text", article_r4.title)("data-url", "https://conduit.realworld.io/article/" + article_r4.slug);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-url", "https://conduit.realworld.io/article/" + article_r4.slug);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngTemplateOutlet", articleMeta_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction0(18, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isAuthenticated())("ngIfElse", requireLogin_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("slug", ctx_r1.slug);
  }
}
var _router2, _articleStore, _authStore2;
var _ArticleDetailComponent = class _ArticleDetailComponent {
  constructor() {
    __privateAdd(this, _router2);
    __privateAdd(this, _articleStore);
    __privateAdd(this, _authStore2);
    __privateSet(this, _router2, inject(Router));
    __privateSet(this, _articleStore, inject(ArticleDetailStore));
    __privateSet(this, _authStore2, inject(AuthStore));
    this.isAuthenticated = __privateGet(this, _authStore2).selectors.isAuthenticated;
    this.currentUser = __privateGet(this, _authStore2).selectors.user;
    this.article = __privateGet(this, _articleStore).selectors.article;
  }
  ngOnInit() {
    __privateGet(this, _articleStore).getArticleDetail(this.slug);
  }
  toggleFavorite(article) {
    if (!__privateGet(this, _authStore2).selectors.isAuthenticated()) {
      __privateGet(this, _router2).navigate(["/register"]);
      return;
    }
    __privateGet(this, _articleStore).toggleFavorite(article);
  }
  deleteArticle(article) {
    __privateGet(this, _articleStore).deleteArticle(article.slug);
  }
  toggleFollowAuthor(article) {
    if (!__privateGet(this, _authStore2).selectors.isAuthenticated()) {
      __privateGet(this, _router2).navigate(["/register"]);
      return;
    }
    __privateGet(this, _articleStore).toggleFollow(article);
  }
};
_router2 = new WeakMap();
_articleStore = new WeakMap();
_authStore2 = new WeakMap();
_ArticleDetailComponent.\u0275fac = function ArticleDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleDetailComponent)();
};
_ArticleDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleDetailComponent, selectors: [["app-article-detail"]], inputs: { slug: "slug" }, features: [\u0275\u0275ProvidersFeature([provideComponentStore(ArticleDetailStore)])], decls: 1, vars: 1, consts: [["requireLogin", ""], ["articleMeta", ""], ["editTmp", ""], [4, "ngIf"], [1, "banner"], [1, "container"], [1, "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "content"], [1, "article-content"], [3, "innerHtml"], [1, "tags"], [4, "ngFor", "ngForOf"], [1, "social-share-buttons", "mt-4"], [1, "d-flex", "gap-3", "align-items-center", "flex-wrap"], ["data-width", "", "data-layout", "button_count", "data-action", "like", "data-size", "large", "data-share", "true", 1, "fb-like"], ["data-layout", "button_count", "data-size", "large", 1, "fb-share-button"], ["href", "https://twitter.com/intent/tweet", "data-size", "large", "data-hashtags", "conduit,article", 1, "twitter-share-button"], [1, "linkedin-share"], ["href", "https://www.pinterest.com/pin/create/button/", "data-pin-do", "buttonBookmark", "data-pin-tall", "true", "data-pin-round", "true"], ["src", "//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_28.png"], [1, "mt-5"], [1, "mt-4", "mb-5", "d-flex", "justify-content-center"], [1, "row"], [1, "col-xs-12", "col-md-8", "offset-md-2"], [3, "slug", 4, "ngIf", "ngIfElse"], [3, "slug"], [1, "tag-default"], ["routerLink", "/login", 1, "link"], ["routerLink", "/register", 1, "link"], [1, "article-meta"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"], [1, "group-btn"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "btn", "favorite-btn", "btn-sm", 3, "click", "ngClass"], [1, "fa-solid", "fa-heart"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "fa-solid", "fa-pen"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-trash-can"]], template: function ArticleDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ArticleDetailComponent_ng_container_0_Template, 35, 19, "ng-container", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.article());
  }
}, dependencies: [
  RouterLink,
  NgIf,
  NgTemplateOutlet,
  NgForOf,
  CommentListComponent,
  CommentFormComponent,
  NgClass,
  DatePipe,
  MarkdownPipe
], styles: ['@charset "UTF-8";\n\n\n\n.banner[_ngcontent-%COMP%] {\n  background-color: var(--blue-black-color);\n  color: var(--white-color);\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1176px;\n  padding: 0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 600;\n  margin-bottom: 30.016px;\n}\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.article-meta[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n.article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--extra-white-gray-color);\n  margin-bottom: 0;\n}\n.article-meta[_ngcontent-%COMP%]   .group-btn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-left: 16px;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 266px;\n}\n.content[_ngcontent-%COMP%]   .article-content[_ngcontent-%COMP%] {\n  font-family: var(--font-source-sans);\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n  margin-bottom: 2rem;\n}\n.content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%] {\n  border: 1px solid var(--extra-white-gray-color);\n  color: var(--extra-white-gray-color) !important;\n  background: none !important;\n}\n.tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--green-color);\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.social-share-buttons[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.social-share-buttons[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #333;\n}\n.social-share-buttons[_ngcontent-%COMP%]   .gap-3[_ngcontent-%COMP%] {\n  gap: 1rem !important;\n}\n.social-share-buttons[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=article-detail.component.css.map */'], changeDetection: 0 });
var ArticleDetailComponent = _ArticleDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleDetailComponent, [{
    type: Component,
    args: [{ selector: "app-article-detail", imports: [
      RouterLink,
      NgIf,
      NgTemplateOutlet,
      NgForOf,
      CommentListComponent,
      CommentFormComponent,
      DatePipe,
      NgClass,
      MarkdownPipe
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(ArticleDetailStore)], template: `<ng-container *ngIf="article() as article">
  <div class="banner">
    <div class="container">
      <h1 class="title">{{ article.title }}</h1>
      <ng-container
        [ngTemplateOutlet]="articleMeta"
        [ngTemplateOutletContext]="{ type: 'header' }"
      ></ng-container>
    </div>
  </div>
  <div class="content">
    <div class="article-content">
      <div [innerHtml]="article.body | markdown"></div>
    </div>
    <div class="tags">
      <ng-container *ngFor="let tag of article.tagList"
        ><span class="tag-default">{{ tag }}</span>
      </ng-container>
    </div>
    
    <!-- MAUVAISE PRATIQUE: Boutons officiels des r\xE9seaux sociaux -->
    <!-- Ces widgets utilisent les SDK externes lourds (plusieurs centaines de Ko) -->
    <!-- et g\xE9n\xE8rent de nombreuses requ\xEAtes HTTP suppl\xE9mentaires -->
    <div class="social-share-buttons mt-4">
      <h5>Partager cet article :</h5>
      <div class="d-flex gap-3 align-items-center flex-wrap">
        <!-- Bouton officiel Facebook Like -->
        <div class="fb-like" 
             [attr.data-href]="'https://conduit.realworld.io/article/' + article.slug" 
             data-width="" 
             data-layout="button_count" 
             data-action="like" 
             data-size="large" 
             data-share="true"></div>
        
        <!-- Bouton officiel Facebook Share -->
        <div class="fb-share-button" 
             [attr.data-href]="'https://conduit.realworld.io/article/' + article.slug" 
             data-layout="button_count" 
             data-size="large"></div>
        
        <!-- Bouton officiel Twitter/X -->
        <a class="twitter-share-button"
           href="https://twitter.com/intent/tweet"
           data-size="large"
           [attr.data-text]="article.title"
           [attr.data-url]="'https://conduit.realworld.io/article/' + article.slug"
           data-hashtags="conduit,article">
          Tweet
        </a>
        
        <!-- Bouton officiel LinkedIn -->
        <span class="linkedin-share" [attr.data-url]="'https://conduit.realworld.io/article/' + article.slug">LinkedIn</span>
        
        <!-- Bouton officiel Pinterest -->
        <a href="https://www.pinterest.com/pin/create/button/" 
           data-pin-do="buttonBookmark" 
           data-pin-tall="true"
           data-pin-round="true">
          <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_28.png" />
        </a>
      </div>
    </div>
  </div>
  <hr class="mt-5" />
  <div class="mt-4 mb-5 d-flex justify-content-center">
    <ng-container
      [ngTemplateOutlet]="articleMeta"
      [ngTemplateOutletContext]="{ type: 'body' }"
    ></ng-container>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <app-comment-form
        [slug]="slug"
        *ngIf="isAuthenticated(); else requireLogin"
      ></app-comment-form>
      <ng-template #requireLogin>
        <p>
          <a class="link" routerLink="/login">Sign in</a> or
          <a class="link" routerLink="/register">sign up</a> to add comments on
          this article.
        </p>
      </ng-template>
      <app-comment-list [slug]="slug"></app-comment-list>
    </div>
  </div>

  <ng-template #articleMeta let-type="type">
    <div class="article-meta">
      <img alt="avatar" class="avatar" [src]="article.author.image" />
      <div class="info">
        <a
          [routerLink]="['/@' + article.author.username]"
          class="author"
          [style.color]="type === 'header' ? '#fff' : '#5CB85C'"
          >{{ article.author.username }}</a
        >
        <p class="date">{{ article.createdAt | date : "MMMM d, y" }}</p>
      </div>
      <div class="group-btn">
        <ng-container
          *ngIf="
            currentUser()?.username !== article.author.username;
            else editTmp
          "
        >
          <button
            class="btn btn-outline-secondary btn-sm"
            (click)="toggleFollowAuthor(article)"
          >
            <i class="fa-solid fa-plus"></i>
            {{ article.author.following ? "Unfollow" : "Follow" }}
            {{ article.author.username }}
          </button>
          <button
            class="btn favorite-btn btn-sm"
            [ngClass]="article.favorited ? 'unfavorite-btn' : 'favorite-btn'"
            (click)="toggleFavorite(article)"
          >
            <i class="fa-solid fa-heart"></i> {{ article.favorited ? 'Unfavorite Article' : 'Favorite Article'}} ({{
              article.favoritesCount
            }})
          </button>
        </ng-container>
        <ng-template #editTmp>
          <button
            class="btn btn-outline-secondary btn-sm"
            [routerLink]="['/editor', article.slug]"
          >
            <i class="fa-solid fa-pen"></i> Edit Article
          </button>
          <button
            class="btn btn-outline-danger btn-sm"
            (click)="deleteArticle(article)"
          >
            <i class="fa-solid fa-trash-can"></i> Delete Article
          </button>
        </ng-template>
      </div>
    </div>
  </ng-template>
</ng-container>
`, styles: ['@charset "UTF-8";\n\n/* src/app/article-detail/article-detail.component.scss */\n.banner {\n  background-color: var(--blue-black-color);\n  color: var(--white-color);\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner .container {\n  max-width: 1176px;\n  padding: 0;\n}\n.banner .container .title {\n  font-size: 2.8rem;\n  font-weight: 600;\n  margin-bottom: 30.016px;\n}\n.article-meta {\n  display: flex;\n  align-items: center;\n}\n.article-meta .avatar {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.article-meta .info {\n  line-height: 1rem;\n}\n.article-meta .info .author {\n  text-decoration: none;\n}\n.article-meta .info .author:hover {\n  text-decoration: underline;\n}\n.article-meta .info .date {\n  font-size: 12.8px;\n  color: var(--extra-white-gray-color);\n  margin-bottom: 0;\n}\n.article-meta .group-btn {\n  display: flex;\n  gap: 6px;\n  margin-left: 16px;\n}\n.content {\n  position: relative;\n  margin-top: 266px;\n}\n.content .article-content {\n  font-family: var(--font-source-sans);\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n  margin-bottom: 2rem;\n}\n.content .tags {\n  display: flex;\n  gap: 3px;\n}\n.content .tags .tag-default {\n  border: 1px solid var(--extra-white-gray-color);\n  color: var(--extra-white-gray-color) !important;\n  background: none !important;\n}\n.tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.link {\n  text-decoration: none;\n  color: var(--green-color);\n}\n.link:hover {\n  text-decoration: underline;\n}\n.social-share-buttons {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.social-share-buttons h5 {\n  margin-bottom: 1rem;\n  color: #333;\n}\n.social-share-buttons .gap-3 {\n  gap: 1rem !important;\n}\n.social-share-buttons iframe {\n  border: none;\n}\n/*# sourceMappingURL=article-detail.component.css.map */\n'] }]
  }], null, { slug: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleDetailComponent, { className: "ArticleDetailComponent", filePath: "src/app/article-detail/article-detail.component.ts", lineNumber: 42 });
})();
export {
  ArticleDetailComponent as default
};
//# sourceMappingURL=article-detail.component-JVEU6RUQ.js.map
