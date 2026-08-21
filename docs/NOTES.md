# Notes on Creating a New Repo, Pushing, and Adding as a Submodule

A quick reference for turning a local directory into a GitHub repo and linking it as a submodule in a parent repo.



## 1. Initialize the New Repo

```bash
cd path/to/new_project/

git init
git add .
git commit -m "feat: initial commit"
```


## 2. Push to GitHub

Create the empty repo on GitHub first (no README, no .gitignore), then:

```bash
# Add the remote (using an SSH alias defined in ~/.ssh/config)
git remote add origin git@<ssh-alias>:<github-user>/<repo-name>.git 

# Rename default branch to main and push
git branch -M main
git push -u origin main
```

**~/.ssh/config example entry:**
```
Host acc_something
    HostName github.com
    User git
    IdentityFile ~/.ssh/acc_something 
```



## 3. Add as a Submodule in the Parent Repo

```bash
cd path/to/parent_repo/

# Register the submodule (clones the remote into the subfolder)
git submodule add git@<ssh-alias>:<github-user>/<repo-name>.git <subfolder-name>

# Commit the generated .gitmodules file and the submodule pointer
git add .gitmodules <subfolder-name>
git commit -m "chore: add <repo-name> as git submodule"
git push
```

After this the parent repo tracks the submodule at a specific commit SHA, not the full file tree.



## 4. Cloning a Repo That Has Submodules

```bash
# Clone and initialize all submodules in one step
git clone --recurse-submodules git@<ssh-alias>:<github-user>/<parent-repo>.git

# Or, if already cloned without submodules
git submodule update --init --recursive
```



## 5. Updating a Submodule to Its Latest Remote Commit

```bash
cd path/to/parent_repo/<subfolder-name>/
git pull origin main

cd ..
git add <subfolder-name>
git commit -m "chore: bump <repo-name> submodule to latest"
git push
```


---
# Notes on SSH authentication at GitHub  

SSH authentication works in the following way: 

- SSH private and public keys are stored in \<home\>/.ssh directory.

- SSH hosts can be defined in \<home\>/.ssh/config file. For example, 

```
Host acc_something
    HostName github.com
    User git 
    IdentityFile ~/.ssh/<private_key_file>
```

- The SSH identity file should be added to the ssh agent using the command: 

```
ssh-add ~/.ssh/<private_key_file>
```

- The SSH connection can be tested using the command: 

```
ssh -T acc_something
```

- For a given git repository, the remote URL should be set to use the SSH host defined in the config file. For example, 

```
git remote set-url origin git@acc_something:<username>/<repository>.git
``` 

For a concrete example, if the SSH host is defined as `acc_something` in the config file, and the repository is `my-repo` owned by `my-username`, then the remote URL should be set to: 

```
git@acc_something:my-username/my-repo.git
```


- The command to test the remote URL is: 

```
git remote -v
```

*NOTE:* 
- The remote repository URL can be set per repository. This means that different repositories can use different SSH hosts and keys if needed. 




