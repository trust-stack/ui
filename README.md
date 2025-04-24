# Trust Stack UI

A monorepo containing UI components and utilities for the Trust Stack ecosystem.

## Development Setup

1. Install dependencies:

```bash
$ pnpm install
```

2. Start storybook:

```bash
$ cd ./packages/storybook
$ pnpm storybook
```

## Package Structure

This is a monorepo using pnpm workspaces and Turborepo. The packages are located in the `packages/` directory:

-   `ui/`: Core UI components library
-   `theme-ui/`: Theme configuration and utilities
-   `schema/`: Data schemas and types
-   `render-ui/`: Rendering utilities
-   `discovery-ui/`: Discovery-related components
-   `map-ui/`: Map-related components
-   `storybook/`: Storybook configuration and stories

## Contribution Workflow

### Making Changes

1. Create a new branch for your changes:

```bash
$ git checkout -b feature/your-feature-name
```

2. Make your changes to the relevant packages

3. Create a changeset to document your changes:

```bash
$ pnpm changeset
```

This will prompt you to:

-   Select the packages that have changed
-   Choose the type of change (major, minor, or patch)
-   Add a description of your changes

4. Commit your changes:

```bash
$ git add .
$ git commit -m "feat: your changes description"
```

5. Push your changes and create a pull request to main

### Automated Publishing

The repository uses GitHub Actions for automated publishing. When changes are merged to main:

1. The GitHub Action will:

    - Create a Release Pull Request if there are unpublished changesets
    - When the PR is merged, it will:
        - Version the packages
        - Build all packages
        - Publish updated packages to npm

2. To publish changes:
    - Create and merge your feature branch with changesets
    - The GitHub Action will create a Release PR
    - Review and merge the Release PR to trigger publishing

### Manual Publishing (Alternative)

If you need to publish manually, you can use these commands:

1. Version the packages:

```bash
$ pnpm version-packages
```

This will:

-   Update version numbers in package.json files
-   Generate/update CHANGELOG.md files
-   Remove used changeset files

2. Publish the packages:

```bash
$ pnpm release
```

This will:

-   Build all packages
-   Publish updated packages to npm

### Versioning Guidelines

-   `major`: Breaking changes (1.0.0 → 2.0.0)
-   `minor`: New features (1.0.0 → 1.1.0)
-   `patch`: Bug fixes (1.0.0 → 1.0.1)

### Important Notes

1. All packages are published as public packages
2. Do not add individual `publish` scripts to package.json files
3. Changesets handles all versioning and publishing
4. Make sure you're logged in to npm (`npm login`) before publishing manually
5. Ensure you have the right permissions for the `@truststack` scope
6. For automated publishing, ensure the `NPM_TOKEN` secret is set in GitHub repository settings

## Development Guidelines

1. Each package should have:

    - A unique name (prefixed with `@truststack/`)
    - Proper `main`, `module`, and `types` fields
    - A build script that generates necessary files

2. When adding new packages:

    - Create the package in the `packages/` directory
    - Add necessary dependencies
    - Set up build configuration
    - Add the package to the workspace

3. Testing:
    - Write tests for new components
    - Add stories to Storybook for visual testing
    - Ensure all tests pass before publishing

## Troubleshooting

If you encounter publishing issues:

1. Ensure you're logged in to npm (for manual publishing)
2. Check that you have the right permissions
3. Verify the package.json configurations
4. Make sure no individual packages have their own publish scripts
5. For automated publishing:
    - Check GitHub Actions logs for errors
    - Verify the `NPM_TOKEN` secret is set correctly
    - Ensure the Release PR is created and merged properly
