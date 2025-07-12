# Git Tree Alias

When working with Git, it’s often helpful to visualize your project's commit history as a tree, especially when dealing with branches and merges. You can create a Git alias called `tree` to display a clear, color-coded commit graph right in your terminal.

## 📟 Terminal Command
Set up the git tree alias:

```sh
git config --global alias.tree "log --graph --all --decorate --pretty=format:'%C(yellow)%h%Creset - %Cgreen%ad%Creset %C(blue)[%an]%Creset %C(auto)%d%Creset %s' --date=short"
```

## How to use Git Tree
Simply run this command in the terminal:

```sh
git tree
```

## Example Output
This is `git tree` used on the blender repository:

![Blender git tree](./assets/blender-git-tree.png)