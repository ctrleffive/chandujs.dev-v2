import { css } from "@emotion/react";
import { Colors } from "./main.js";

export const customStyles = css`
  .table-wrapper-paragraph {
    margin-bottom: 1.5rem;
  }

  .ltag__link,
  .highlight__panel,
  .ltag-github-body,
  .gh-btn-container {
    display: none;
  }

  .readme-overview h2 {
    display: flex;
    margin-bottom: 0;
    font-size: 1rem;
  }
  .readme-overview img {
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
  }
  .readme-overview {
    position: relative;
    padding-left: 4rem;
    margin-top: 1rem;
  }
  .readme-overview h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 1.25rem;
  }

  a {
    font-weight: bold;
    color: ${Colors.brand};
  }

  img {
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    max-width: 100%;
  }
  code[class*="highlight"],
  pre[class*="highlight"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    font-family: monospace;
    font-size: 1em;
    line-height: 1.5em;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="highlight"] {
    overflow: auto;
    position: relative;
    display: block;
    padding: 1.5rem 2rem;
  }

  .highlight {
    background: linear-gradient(#373737, #212529);
    color: #f8f8f2;
    border-radius: 5px;
  }
`;

export const codeTheme = css`
  .highlight .hll {
    background-color: #49483e;
  }
  .highlight .c {
    color: #75715e;
  } /* Comment */
  .highlight .err {
    text-shadow: 0 0 3px #ff3030, 0 0 5px #ff3030, 0 0 10px #ff3030;
  } /* Error */
  .highlight .k {
    color: #66d9ef;
  } /* Keyword */
  .highlight .l {
    color: #ae81ff;
  } /* Literal */
  .highlight .n {
    color: #f8f8f2;
  } /* Name */
  .highlight .o {
    color: #f92672;
  } /* Operator */
  .highlight .p {
    color: #f8f8f2;
  } /* Punctuation */
  .highlight .ch {
    color: #75715e;
  } /* Comment.Hashbang */
  .highlight .cm {
    color: #75715e;
  } /* Comment.Multiline */
  .highlight .cp {
    color: #75715e;
  } /* Comment.Preproc */
  .highlight .cpf {
    color: #75715e;
  } /* Comment.PreprocFile */
  .highlight .c1 {
    color: #75715e;
  } /* Comment.Single */
  .highlight .cs {
    color: #75715e;
  } /* Comment.Special */
  .highlight .gd {
    color: #f92672;
  } /* Generic.Deleted */
  .highlight .ge {
    font-style: italic;
  } /* Generic.Emph */
  .highlight .gi {
    color: #a6e22e;
  } /* Generic.Inserted */
  .highlight .gs {
    font-weight: bold;
  } /* Generic.Strong */
  .highlight .gu {
    color: #75715e;
  } /* Generic.Subheading */
  .highlight .kc {
    color: #66d9ef;
  } /* Keyword.Constant */
  .highlight .kd {
    color: #66d9ef;
  } /* Keyword.Declaration */
  .highlight .kn {
    color: #f92672;
  } /* Keyword.Namespace */
  .highlight .kp {
    color: #66d9ef;
  } /* Keyword.Pseudo */
  .highlight .kr {
    color: #66d9ef;
  } /* Keyword.Reserved */
  .highlight .kt {
    color: #66d9ef;
  } /* Keyword.Type */
  .highlight .ld {
    color: #e6db74;
  } /* Literal.Date */
  .highlight .m {
    color: #ae81ff;
  } /* Literal.Number */
  .highlight .s {
    color: #e6db74;
  } /* Literal.String */
  .highlight .na {
    color: #a6e22e;
  } /* Name.Attribute */
  .highlight .nb {
    color: #f8f8f2;
  } /* Name.Builtin */
  .highlight .nc {
    color: #a6e22e;
  } /* Name.Class */
  .highlight .no {
    color: #66d9ef;
  } /* Name.Constant */
  .highlight .nd {
    color: #a6e22e;
  } /* Name.Decorator */
  .highlight .ni {
    color: #f8f8f2;
  } /* Name.Entity */
  .highlight .ne {
    color: #a6e22e;
  } /* Name.Exception */
  .highlight .nf {
    color: #a6e22e;
  } /* Name.Function */
  .highlight .nl {
    color: #f8f8f2;
  } /* Name.Label */
  .highlight .nn {
    color: #f8f8f2;
  } /* Name.Namespace */
  .highlight .nx {
    color: #a6e22e;
  } /* Name.Other */
  .highlight .py {
    color: #f8f8f2;
  } /* Name.Property */
  .highlight .nt {
    color: #f92672;
  } /* Name.Tag */
  .highlight .nv {
    color: #f8f8f2;
  } /* Name.Variable */
  .highlight .ow {
    color: #f92672;
  } /* Operator.Word */
  .highlight .w {
    color: #f8f8f2;
  } /* Text.Whitespace */
  .highlight .mb {
    color: #ae81ff;
  } /* Literal.Number.Bin */
  .highlight .mf {
    color: #ae81ff;
  } /* Literal.Number.Float */
  .highlight .mh {
    color: #ae81ff;
  } /* Literal.Number.Hex */
  .highlight .mi {
    color: #ae81ff;
  } /* Literal.Number.Integer */
  .highlight .mo {
    color: #ae81ff;
  } /* Literal.Number.Oct */
  .highlight .sa {
    color: #e6db74;
  } /* Literal.String.Affix */
  .highlight .sb {
    color: #e6db74;
  } /* Literal.String.Backtick */
  .highlight .sc {
    color: #e6db74;
  } /* Literal.String.Char */
  .highlight .dl {
    color: #e6db74;
  } /* Literal.String.Delimiter */
  .highlight .sd {
    color: #e6db74;
  } /* Literal.String.Doc */
  .highlight .s2 {
    color: #e6db74;
  } /* Literal.String.Double */
  .highlight .se {
    color: #ae81ff;
  } /* Literal.String.Escape */
  .highlight .sh {
    color: #e6db74;
  } /* Literal.String.Heredoc */
  .highlight .si {
    color: #e6db74;
  } /* Literal.String.Interpol */
  .highlight .sx {
    color: #e6db74;
  } /* Literal.String.Other */
  .highlight .sr {
    color: #e6db74;
  } /* Literal.String.Regex */
  .highlight .s1 {
    color: #e6db74;
  } /* Literal.String.Single */
  .highlight .ss {
    color: #e6db74;
  } /* Literal.String.Symbol */
  .highlight .bp {
    color: #f8f8f2;
  } /* Name.Builtin.Pseudo */
  .highlight .fm {
    color: #a6e22e;
  } /* Name.Function.Magic */
  .highlight .vc {
    color: #f8f8f2;
  } /* Name.Variable.Class */
  .highlight .vg {
    color: #f8f8f2;
  } /* Name.Variable.Global */
  .highlight .vi {
    color: #f8f8f2;
  } /* Name.Variable.Instance */
  .highlight .vm {
    color: #f8f8f2;
  } /* Name.Variable.Magic */
  .highlight .il {
    color: #ae81ff;
  } /* Literal.Number.Integer.Long */
`;
