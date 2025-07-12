# Game Development Documentation Repository

Welcome to our game development documentation repository! This repository serves as a centralized hub for all our game development documentation, built with React to display markdown files in an organized and accessible format.

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

### Branch Name Examples:
- `character-progression-system`
- `blender-modeling-workflow`
- `godot-animation-player`
- `react-component-architecture`
- `git-branching-strategy`

### Rules:
- Use lowercase letters only
- Replace spaces with hyphens (`-`)

## 📝 Article Management Workflow

### Creating a New Article

1. **Create a new branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name
   ```

2. **Create your markdown file** in the appropriate directory under a **your-article-name folder** with an `assets/` folder:
   ```
   ├── blender/
   ├── godot/
   │   └── your-article-name/
   │        ├── assets/
   │        └── your-article-name.md
   ├── git/
   ├── react/
   ├── procreate/
   ├── inkscape/
   └── gimp/
   ```

3. **Name your file** using the same convention as the branch:
   ```
   your-article-name.md
   ```

4. **Update `Sidebar.tsx`** to include path to markdown file along with a title for the article to be shown on the sidebar:

   ```
   ...
   godot: [
      {
         title: "Character Movement",
         id: "godot/character-movement/character-movement"
      },
   ...
   ```

### Updating an Existing Article

1. **Create a new branch** with the same article name:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-article-name
   ```

3. **Edit the new version file** (`your-article-name.md`) with your updates

4. **Commit both files**:
   ```bash
   git add .
   git commit -m "Update article-name to include feature"
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
│   │   ├── character-movement/
│   │   │    ├── assets/
│   │   │    │    └── img1.jpg
│   │   │    └── character-movement.md
│   │   └──── inventory-system/
│   │        └── inventory-system.md
│   ├── blender/
│   │   ├── blender-overview/
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

---
