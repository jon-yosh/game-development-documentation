# Game Development Documentation Repository

Welcome to our game development documentation repository! This repository serves as a centralized hub for all our game development documentation, built with React to display markdown files in an organized and accessible format.

## 🌿 Branch Naming Convention

When creating or updating documentation, follow this strict branch naming convention:

```
article-name-v[version-number]
```

### Examples:
- `character-progression-system-v1`
- `blender-modeling-workflow-v2`
- `godot-animation-player-v1`
- `react-component-architecture-v3`
- `git-branching-strategy-v2`

### Rules:
- Use lowercase letters only
- Replace spaces with hyphens (`-`)
- Always include the version number (e.g., `v1`, `v2`, `v10`)

## 📝 Article Management Workflow

### Creating a New Article

1. **Create a new branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name-v1
   ```

2. **Create your markdown file** in the appropriate directory:
   ```
   ├── blender/
   ├── godot/
   ├── git/
   ├── react/
   ├── procreate/
   ├── inkscape/
   └── gimp/
   ```

3. **Name your file** using the same convention as the branch:
   ```
   your-article-name-v1.md
   ```

### Updating an Existing Article

When updating an article, you **must** create a copy of the previous version to maintain history:

1. **Create a new branch** with the incremented version:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name-v2
   ```

2. **Copy the existing file** to preserve the previous version:
   ```bash
   # Create the new version
   cp docs/category/your-article-name-v1.md docs/category/your-article-name-v2.md
   ```

3. **Edit the new version file** (`your-article-name-v2.md`) with your updates

4. **Commit both files**:
   ```bash
   git add docs/category/your-article-name-v2.md
   git commit -m "Update article-name to v2, preserve v1 history"
   ```

## 📋 Version History Management

### Why We Keep Previous Versions

- **Historical Reference**: Team members can reference previous implementations
- **Rollback Capability**: Easy to revert to previous documentation if needed
- **Dropdown Selection**: The React frontend displays all versions in a dropdown menu
- **Change Tracking**: Clear visibility of how documentation evolved over time

## 🔄 Pull Request Process

1. **Create your branch** and make changes following the guidelines above
2. **Push your branch** to the remote repository:
   ```bash
   git push origin your-article-name-v2
   ```
3. **Create a Pull Request** with:
   - Clear title indicating the article and version
   - Description of changes made
   - Reference to previous version (if applicable)
4. **Request review** from relevant team members
5. **Merge to main** after approval

## 📁 File Organization

```
game-development-documentation/
├── src/
│   └── (React application files)
├── docs/
│   ├── godot/
│   │   ├── character-movement-v1.md
│   │   ├── character-movement-v2.md
│   │   └── inventory-system-v2.md
│   ├── blender/
│   │   ├── blender-overview-v1.md
│   │   └── ...
│   └── [another tool]/
│       └── ...
├── README.md
└── package.json
```

## ✅ Best Practices

### Writing Guidelines
- Add diagrams or images in an `assets/` folder within the category

### Branch Management
- Delete merged branches after successful integration
- Keep branch names consistent with the file names
- Always create branches from an up-to-date `develop` branch

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:JonYoshioka/game-development-documentation.git
   cd game-development-documentation/game-development-documentation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Begin writing your documentation following the guidelines above!

---
