import { Monaco } from "@monaco-editor/react";

export const registerShacl = (monaco: Monaco) => {
  // Register a new language
  monaco.languages.register({ id: "shacl" });

  // Register tokens provider for the language
  monaco.languages.setMonarchTokensProvider("shacl", {
    tokenizer: {
      root: [
        // DOMAIN SPECIFIC
        [/ex:PASSPORT*/, "type.passport"],
        [/ex:CONFORMITY*/, "type.conformity"],

        // OTHER
        [/<[^\s>]+>/, "tag"],
        [/#[^\n]*/, "comment"],
        [
          /[a-zA-Z_$][\w$]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "identifier",
            },
          },
        ],
        [/[{}()\[\]]/, "@brackets"],
        [/@[a-zA-Z_\$][\w\$]*/, "type.identifier"],
        [/\s+/, "white"],
        [/\"([^\"\\]|\\.)*$/, "string.invalid"],
        [/\"/, "string", "@string"],
      ],
      string: [
        [/[^\\\"]+/, "string"],
        [/\\./, "string.escape"],
        [/\"/, "string", "@pop"],
      ],
    },
    keywords: [
      "a",
      "sh:NodeShape",
      "sh:property",
      "sh:path",
      "sh:datatype",
      "sh:minCount",
      "sh:maxCount",
      "sh:targetClass",
      "sh:NodeShape",
      "sh:PropertyShape",
      "rdf:type",
      "rdfs:label",
      "rdfs:comment",
    ],
  });

  // Define a new theme that contains only rules that match this language
  monaco.editor.defineTheme("shaclTheme", {
    base: "vs-dark",
    inherit: true,
    colors: {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
      "editorCursor.foreground": "#ffffff",
      "editor.lineHighlightBackground": "#2b2b2b",
      "editorLineNumber.foreground": "#858585",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#3a3d41",
      "editorIndentGuide.background": "#404040",
      "editorIndentGuide.activeBackground": "#707070",
    },
    rules: [
      { token: "tag", foreground: "e06c75" },
      { token: "comment", foreground: "5c6370", fontStyle: "italic" },
      { token: "keyword", foreground: "c678dd", fontStyle: "bold" },
      { token: "identifier", foreground: "61afef" },
      { token: "string", foreground: "98c379" },
      { token: "type.identifier", foreground: "56b6c2" },
    ],
  });

  monaco.editor.setTheme("shaclTheme");

  // Register completion items provider for SHACL
  monaco.languages.registerCompletionItemProvider("shacl", {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions = [
        {
          label: "sh:NodeShape",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:NodeShape",
          documentation: "Defines a shape that targets a node.",
          range,
        },
        {
          label: "sh:property",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:property",
          documentation: "Defines a property shape within a node shape.",
          range,
        },
        {
          label: "sh:path",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:path",
          documentation: "Specifies the path for a property shape.",
          range,
        },
        {
          label: "sh:datatype",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:datatype",
          documentation: "Specifies the datatype for a property shape.",
          range,
        },
        {
          label: "sh:minCount",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:minCount",
          documentation: "Specifies the minimum number of occurrences.",
          range,
        },
        {
          label: "sh:maxCount",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:maxCount",
          documentation: "Specifies the maximum number of occurrences.",
          range,
        },
        {
          label: "sh:targetClass",
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: "sh:targetClass",
          documentation: "Specifies the target class for a node shape.",
          range,
        },
      ];
      return { suggestions: suggestions };
    },
  });
};
