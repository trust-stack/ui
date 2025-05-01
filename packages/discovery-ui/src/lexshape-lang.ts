import { Monaco } from "@monaco-editor/react";

export const useRegisterLexShape = () => {
  return (monaco: Monaco) => {
    // Register a new language
    monaco.languages.register({ id: "lexshape" });

    // Register tokens provider for the language
    monaco.languages.setMonarchTokensProvider("lexshape", {
      tokenizer: {
        root: [
          // Keywords
          [
            /\b(rule|target|must reference|and the|where|and|the property|is|issuer|was issued by)\b/,
            "keyword.control.lexshape",
          ],

          // Entities
          [
            /\b(DigitalProductPassport|ConformityCredential|Party)\b/,
            "entity.name.type.lexshape",
          ],

          // Numeric Constants
          [/\b\d+\b/, "constant.numeric.lexshape"],

          // IRI Constants
          [/web:did:[a-zA-Z0-9:]+/, "constant.other.iri.lexshape"],

          // Double Quoted Strings
          [/\"([^\"]*)\"/, "string.quoted.double.lexshape"],

          // Single Line Comments
          [/\/\/.*$/, "comment.line.double-slash.lexshape"],

          // Escape sequences inside strings
          [/\\./, "constant.character.escape.lexshape"],
        ],
      },
      // Define custom lexshape-specific token types
      keywords: [
        "rule",
        "target",
        "must reference",
        "and the",
        "where",
        "and",
        "the property",
        "is",
        "issuer",
        "was issued by",
      ],
      typeKeywords: ["DigitalProductPassport", "ConformityCredential", "Party"],
      // String tokenizer for handling quoted strings
      strings: [
        {
          regex: /\"/,
          action: { token: "string.quote", next: "@string" },
        },
      ],
      string: [
        [/[^\"]+/, "string.quoted.double.lexshape"],
        [/\"/, "string.quote", "@pop"],
        [/\\./, "constant.character.escape.lexshape"],
      ],
      // Default tokenization for numbers
      numbers: [[/\b\d+\b/, "constant.numeric.lexshape"]],
      // Comments and line-comment tokenizer
      comment: [[/\/\/.*$/, "comment.line.double-slash.lexshape"]],
    });

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme("lexshapeTheme", {
      base: "vs",
      inherit: true,
      colors: {
        "editor.background": "#1e1e1e",
        "editor.foreground": "#d4d4d4",
      },
      rules: [
        { token: "tag", foreground: "e06c75" },
        {
          token: "entity.name.type.lexshape",
          foreground: "c678dd",
          fontStyle: "bold",
        },
        {
          token: "keyword",
          foreground: "#954121",
        },

        {
          token: "identifier",
          foreground: "61afef",
        },
        {
          token: "string",
          foreground: "98c379",
          fontStyle: "bold",
        },
        { token: "type.identifier", foreground: "#56b6c2" },
        {
          token: "",
          foreground: "#d4d4d4",
        },
      ],
    });

    monaco.editor.setTheme("lexshapeTheme");
  };
};
