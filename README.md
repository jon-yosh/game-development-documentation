# Game Development Documentation Repository

Welcome to our game development documentation repository! This repository serves as a centralized hub for all our game development documentation, built with React to display markdown files in an organized and accessible format.

## 📁 Repository Structure

This repository is designed specifically for documentation purposes, with React handling the display and navigation of markdown content. Each article maintains its own version history through our branching and file management system.

## 🌿 Branch Naming Convention

When creating or updating documentation, follow this strict branch naming convention:

```
article-name-v[version-number]
```

### Examples:
- `character-progression-system-v1.0`
- `blender-modeling-workflow-v2.1`
- `unity-scene-management-v1.3`
- `react-component-architecture-v3.0`
- `angular-routing-setup-v1.5`
- `git-branching-strategy-v2.0`

### Rules:
- Use lowercase letters only
- Replace spaces with hyphens (`-`)
- Always include the version number (e.g., `v1.0`, `v2.1`, `v10.5`)
- Keep article names descriptive but concise
- Use semantic versioning (major.minor format)

## 📝 Article Management Workflow

### Creating a New Article

1. **Create a new branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name-v1.0
   ```

2. **Create your markdown file** in the appropriate directory:
   ```
   [specific game's documentation]/
   ├── game-design/
   ├── blender/
   ├── unity/
   ├── react/
   ├── angular/
   └── git/
   ```

3. **Name your file** using the same convention as the branch:
   ```
   your-article-name-v1.0.md
   ```

### Updating an Existing Article

When updating an article, you **must** create a copy of the previous version to maintain history:

1. **Create a new branch** with the incremented version:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name-v2.0
   ```

2. **Copy the existing file** to preserve the previous version:
   ```bash
   # Create the new version
   cp docs/category/your-article-name-v1.0.md docs/category/your-article-name-v2.0.md
   ```

3. **Edit the new version file** (`your-article-name-v2.0.md`) with your updates

4. **Commit both files**:
   ```bash
   git add docs/category/your-article-name-v2.0.md
   git commit -m "Update article-name to v2.0, preserve v1.0 history"
   ```

## 📋 Version History Management

### Why We Keep Previous Versions

- **Historical Reference**: Team members can reference previous implementations
- **Rollback Capability**: Easy to revert to previous documentation if needed
- **Dropdown Selection**: The React frontend displays all versions in a dropdown menu
- **Change Tracking**: Clear visibility of how documentation evolved over time

### Version Numbering Guidelines

- **Major version** (X.0): Significant rewrites, structural changes, or fundamental updates
- **Minor version** (X.Y): Content additions, clarifications, or moderate updates
- **Examples**:
  - v1.0 → v2.0: Complete rewrite of the article
  - v1.0 → v1.1: Added new section or significant clarification
  - v1.1 → v1.2: Fixed typos, minor updates, small additions

## 🔄 Pull Request Process

1. **Create your branch** and make changes following the guidelines above
2. **Push your branch** to the remote repository:
   ```bash
   git push origin your-article-name-v2.0
   ```
3. **Create a Pull Request** with:
   - Clear title indicating the article and version
   - Description of changes made
   - Reference to previous version (if applicable)
4. **Request review** from relevant team members
5. **Merge to main** after approval

## 📁 File Organization

```
repository-root/
├── src/
│   └── (React application files)
├── docs/
│   ├── [specific game's documentation]/
│   │   ├── game-design/
│   │   │   ├── character-movement-v1.0.md
│   │   │   ├── character-movement-v1.1.md
│   │   │   └── inventory-system-v2.0.md
│   │   ├── blender/
│   │   │   ├── blender-overview-v1.0.md
│   │   │   └── ...
│   └── [another game's documentation]/
│       └── ...
├── README.md
└── package.json
```

## ✅ Best Practices

### Writing Guidelines
- Use clear, descriptive headings
- Include code examples when relevant
- Add diagrams or images in an `assets/` folder within the category
- Keep language clear and jargon-free when possible
- Include a brief summary at the top of each article

### Markdown Formatting
- Use consistent heading levels (# ## ### ####)
- Include a table of contents for longer articles
- Use code blocks with appropriate language highlighting
- Link to related articles when relevant

### Branch Management
- Delete merged branches after successful integration
- Keep branch names consistent with the file names
- Always create branches from an up-to-date `main` branch

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Begin writing your documentation following the guidelines above!

## 🤝 Contributing

All team members are encouraged to contribute to this documentation. When in doubt about structure, naming, or content, feel free to:
- Open an issue for discussion
- Ask in the team chat
- Create a draft pull request for feedback

## 📞 Support

For questions about this documentation system or Git workflow, contact the development team lead or create an issue in this repository.

---
