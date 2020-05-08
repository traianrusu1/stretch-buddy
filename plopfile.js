module.exports = (plop) => {
  plop.setGenerator("c", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "input",
        name: "where",
        message:
          "Where would you like your component placed? Relative to src/components. E.g. auth/signin:",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path:
          "src/components/{{where}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component/Component.tsx.template",
      },
      {
        type: "add",
        path:
          "src/components/{{where}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/Component/Component.test.tsx.template",
      },
      {
        type: "add",
        path:
          "src/components/{{where}}/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/Component/Component.module.scss.template",
      },
      {
        type: "add",
        path: "src/components/{{where}}/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/Component/index.tsx.template",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/index.tsx",
        templateFile: "plop-templates/injectable-index.tsx.template",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: "append",
        path: "src/components/index.tsx",
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{where}}/{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.tsx",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });
};
